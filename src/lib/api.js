import { NEXT_PUBLIC_CF_SPACE_ID, NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN } from "./constants";
import { createClient } from "contentful";

const client = createClient({
  space: NEXT_PUBLIC_CF_SPACE_ID,
  accessToken: NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN,
});

export async function getAllTopics() {
  const res = await client.getEntries({
    content_type: "topics",
    order: "-fields.year",
  });
  return res.items;
}

export async function getTopic(year) {
  const res = await client.getEntries({
    content_type: "topics",
    "fields.year": year,
  });
  return res.items[0];
}

export async function getLatestTopic() {
  const res = await client.getEntries({
    content_type: "topics",
    order: "-fields.year",
  });
  return res.items[0];
}

export async function getAllPublications() {
  const res = await client.getEntries({
    content_type: "publications",
    order: "-fields.year",
  });
  return res.items;
}

export async function getPublication(year) {
  const res = await client.getEntries({
    content_type: "publications",
    "fields.year": year,
  });
  return res.items[0];
}

export async function getLatestPublication() {
  const res = await client.getEntries({
    content_type: "publications",
    order: "-fields.year",
  });
  return res.items[0];
}

export async function getLatestPublicationYear() {
  const res = await client.getEntries({
    content_type: "publications",
    order: "-fields.year",
  });
  return res.items[0].fields.year;
}

export async function getEnAllPublications() {
  const res = await client.getEntries({
    content_type: "publicationsEn",
    order: "-fields.year",
  });
  return res.items;
}

export async function getEnPublication(year) {
  const res = await client.getEntries({
    content_type: "publicationsEn",
    "fields.year": year,
  });
  return res.items[0];
}

export async function getEnLatestPublication() {
  const res = await client.getEntries({
    content_type: "publicationsEn",
    order: "-fields.year",
  });
  return res.items[0];
}

export async function getEnLatestPublicationYear() {
  const res = await client.getEntries({
    content_type: "publicationsEn",
    order: "-fields.year",
  });
  return res.items[0].fields.year;
}

export async function getPage(slug) {
  const res = await client.getEntries({
    content_type: "pages",
    "fields.slug": slug,
  });
  return res.items[0];
}
