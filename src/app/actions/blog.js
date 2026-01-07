"use server";

const url = "https://blog.polishedprocleaners.net";

export async function getBlogs() {
  const res = await fetch(`${url}/_functions/getBlogs`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  return data?.posts?.slice(0, 3) || [];
}
