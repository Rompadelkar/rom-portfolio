import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    console.log('=== NEW CONTACT INQUIRY RECEIVED ===', {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject: subject || 'No Subject',
      messageLength: message.length,
    });

    return NextResponse.json(
      { success: true, message: 'Message received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing contact submission.' },
      { status: 500 }
    );
  }
}
