import { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'
import sendGrid from '@sendgrid/mail'

const handler: Handler = async () => {
  const supabase = createClient('' + process.env.SUPABASE_URL, '' + process.env.SUPABASE_SERVICE_ROLE)

  const { body, error } = await supabase
    .from('reminders')
    .select(`id, text, configuration(email_notification)`)
    .eq('sent', false)
    .lte('reminder_date', new Date().toISOString())

  if (error) {
    return {
      statusCode: 400,
      body: error.message
    }
  }
  const validReminders = body.filter((reminder) => reminder?.configuration?.email_notification)
  if (validReminders.length > 0) {
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

    try {
      await sendGrid.send({
        from: process.env.SENDGRID_TEMPLATE_FROM,
        templateId: process.env.SENDGRID_TEMPLATE_ID,
        personalizations: validReminders.map((reminder) => ({
          to: { email: reminder.configuration.email_notification },
          dynamicTemplateData: {
            text: reminder.text
          }
        }))
      })
    } catch (e: unknown) {
        if (typeof e === "string") {
            return {
              statusCode: 500,
              body: e
            }
        } else if (e instanceof Error) {
          return {
            statusCode: 500,
            body: e.message
          }
        }
    }
      
    }

    // Sending...
    await supabase
      .from('reminders')
      .update({ sent: true })
      .in(
        'id',
        validReminders.map((row) => row.id)
      )
  }

  return {
    statusCode: 200,
    body: JSON.stringify(validReminders)
  }
}

export { handler }
