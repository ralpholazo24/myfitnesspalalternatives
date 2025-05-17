import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    console.log('Received email:', email)

    if (!email || typeof email !== 'string') {
      console.log('Invalid email format received')
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Email failed regex validation')
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    console.log('Checking for existing subscriber...')
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing subscriber:', checkError)
      throw checkError
    }

    if (existingSubscriber) {
      console.log('Email already exists:', email)
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      )
    }

    // Insert new subscriber
    console.log('Attempting to insert new subscriber:', email)
    const { data: newSubscriber, error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()

    if (insertError) {
      console.error('Error inserting subscriber:', insertError)
      throw insertError
    }

    console.log('Successfully inserted subscriber:', newSubscriber)
    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
} 