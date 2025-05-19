import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function sendEmail(data) {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
