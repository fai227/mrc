import { NEXT_PUBLIC_CF_SPACE_ID, NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN } from "./constants";
import { createClient } from "contentful";

const client = createClient({
  space: NEXT_PUBLIC_CF_SPACE_ID,
  accessToken: NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN,
});

export async function getAllActivities() {
  const res = await client.getEntries({
    content_type: "activities",
    order: "-fields.year",
  });
  return res.items;
}

export async function getActivity(year) {
  const res = await client.getEntries({
    content_type: "activities",
    "fields.year": year,
  });
  return res.items[0];
}

export async function getLatestActivity() {
  const res = await client.getEntries({
    content_type: "activities",
    order: "-fields.year",
  });
  return res.items[0];
}

export async function getAllActivitiesOthers(year) {
  const res = await client.getEntries({
    content_type: "activitiesOthers",
    "fields.year": year,
    order: "-fields.date",
  });
  return res.items;
}

export async function getActivitiesOthers(id) {
  const res = await client.getEntries({
    content_type: "activitiesOthers",
    "sys.id": id,
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
