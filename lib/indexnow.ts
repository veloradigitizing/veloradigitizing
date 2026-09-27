export const INDEXNOW_KEY = "b6555280ca4340e2b6be80b0b61d8243";
export const SITE_HOST = "www.veloradigitizing.com";
export const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

/**
 * Submits one or multiple URLs to the IndexNow API.
 * IndexNow automatically shares submitted URLs with Bing, Yandex, Seznam, and other participating search engines.
 */
export async function submitToIndexNow(urls: string | string[]) {
  const urlList = Array.isArray(urls) ? urls : [urls];
  
  if (urlList.length === 0) {
    return { success: false, message: "No URLs provided" };
  }

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    // 200 OK or 202 Accepted means successful submission
    if (res.status === 200 || res.status === 202) {
      return { success: true, count: urlList.length, status: res.status };
    }

    const text = await res.text();
    return { success: false, status: res.status, error: text };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}
