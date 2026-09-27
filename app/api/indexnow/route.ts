import { NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const urls = body.urls || body.url;

    if (!urls) {
      return NextResponse.json(
        { error: "Please provide 'urls' array or 'url' string in the JSON body." },
        { status: 400 }
      );
    }

    const result = await submitToIndexNow(urls);
    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid request" },
      { status: 400 }
    );
  }
}
