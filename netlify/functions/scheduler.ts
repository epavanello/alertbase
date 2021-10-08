import { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'
const handler: Handler = async () => {
  const supabase = createClient('' + process.env.SUPABASE_URL, '' + process.env.SUPABASE_SERVICE_ROLE)

  const { body, error } = await supabase
    .from('reminders')
    .select()
    .eq('sent', false)
    .lte('reminder_date', new Date().toISOString())

  if (error) {
    return {
      statusCode: 400,
      body: error.message
    }
  }
  if (body.length > 0) {
    // Sending...
    await supabase
      .from('reminders')
      .update({ sent: true })
      .in(
        'id',
        body.map((row) => row.id)
      )
  }

  return {
    statusCode: 200,
    body: JSON.stringify(body)
  }
}

export { handler }
