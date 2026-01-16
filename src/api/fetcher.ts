const inFlightRequests = new Map<string, Promise<unknown>>();

export async function fetchGetApi<T = unknown>(url: string): Promise<T> {
  const cachedRequest = inFlightRequests.get(url);
  if (cachedRequest) {
    return cachedRequest as Promise<T>;
  }

  const request = fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(res.status.toString());
    }

    return res.json();
  });

  inFlightRequests.set(url, request);

  try {
    return (await request) as T;
  } finally {
    inFlightRequests.delete(url);
  }
}
