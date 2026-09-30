/**
 * Ntfy notification utility for Velora Digitizing.
 * Topic is hardcoded to 'velora-alerts'.
 */

export const NTFY_TOPIC = "velora-alerts";
export const NTFY_SERVER_URL = `https://ntfy.sh/${NTFY_TOPIC}`;

export type NtfyPriority = 1 | 2 | 3 | 4 | 5 | "min" | "low" | "default" | "high" | "urgent";

export interface NtfyMessageOptions {
  title?: string;
  message: string;
  priority?: NtfyPriority;
  tags?: string[];
  click?: string;
  actions?: Array<{
    action: "view" | "http" | "broadcast";
    label: string;
    url?: string;
  }>;
}

/**
 * Sends a push notification to https://ntfy.sh/velora-alerts
 */
export async function sendNtfyAlert(options: NtfyMessageOptions): Promise<boolean> {
  try {
    const payload = {
      topic: NTFY_TOPIC,
      title: options.title || "Velora Digitizing Alert",
      message: options.message,
      priority: options.priority || 4,
      tags: options.tags || ["bell", "email"],
      ...(options.click ? { click: options.click } : {}),
      ...(options.actions ? { actions: options.actions } : {}),
    };

    const response = await fetch("https://ntfy.sh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch (error) {
    console.error("Failed to send ntfy notification to velora-alerts:", error);
    return false;
  }
}

/**
 * Specific helper for new customer quote / contact inquiries
 */
export async function sendContactLeadAlert(data: {
  name: string;
  email: string;
  service?: string;
  subject?: string;
  message?: string;
}): Promise<boolean> {
  const title = `🚨 New Quote Request: ${data.name}`;
  const details = [
    `👤 Name: ${data.name}`,
    `📧 Email: ${data.email}`,
    data.service ? `🏷️ Service: ${data.service}` : null,
    data.subject ? `📌 Subject: ${data.subject}` : null,
    data.message ? `💬 Message: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return sendNtfyAlert({
    title,
    message: details,
    priority: 5, // Urgent priority for incoming business leads
    tags: ["tada", "briefcase", "moneybag", "email"],
    click: `mailto:${data.email}`,
  });
}
