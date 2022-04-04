function urlBuilder(ficha: string) {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:3000${ficha}`;
  }
  const currentHost = window.location.hostname;
  return `https://${currentHost}${ficha}`;
}

export default function openLink(ficha: string) {
  const url = urlBuilder(ficha);
  return window.open(url, "_self");
}
