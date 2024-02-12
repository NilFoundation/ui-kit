export const isExternalLink = (link: string) =>
  /^https?:\/\//.test(link) || ["mailto:", "tel:", "sms:", "geo:", "data:"].some((prefix) => link.startsWith(prefix));
