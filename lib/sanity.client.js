import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "f6psr2vl",
  dataset: "production",
  apiVersion: "2024-04-08",
  useCdn: false, // Set to true for production to cache responses
});
