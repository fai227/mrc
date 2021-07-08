import { NEXT_PUBLIC_CF_SPACE_ID, NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN } from "./constants";
import { createClient } from "contentful";

const client = createClient({
  space: NEXT_PUBLIC_CF_SPACE_ID,
  accessToken: NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN,
});

export async function getLatestTopics() {
  const res = await client.getEntries({
    content_type: "topics",
    order: "-fields.date",
  });
  return res.items;
}
