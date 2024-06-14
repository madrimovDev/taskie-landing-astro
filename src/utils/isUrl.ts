export default function isWithHttpHref(str: string) {
  const regex = /^(http:\/\/|https:\/\/)/i;
  return regex.test(str);
}