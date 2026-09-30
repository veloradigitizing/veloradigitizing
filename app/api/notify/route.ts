import { NextResponse } from "next/server";
import { sendNtfyAlert, sendContactLeadAlert, NTFY_TOPIC } from "@/lib/ntfy";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.type === "contact_lead") {
      const success = await sendContactLeadAlert({
        name: body.name || "Anonymous",
        email: body.email || "No email",
        service: body.service,
        subject: body.subject,
        message: body.message,
      });
      return NextResponse.json({ success, topic: NTFY_TOPIC });
    }

    const success = await sendNtfyAlert({
      title: body.title,
      message: body.message || "New notification from Velora Digitizing website",
      priority: body.priority,
      tags: body.tags,
      click: body.click,
    });

    return NextResponse.json({ success, topic: NTFY_TOPIC });
  } catch (error) {
    console.error("API /api/notify error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
