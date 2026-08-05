const API_LINK = import.meta.env.VITE_API_URL;
export async function getProducts(
  param: string,
  filter: string[],
  offset: number,
) {
  const filterString = filter.length > 0 ? `&${filter.join("&")}` : "";
  const offsetProducts = offset != 0 ? `&offset=${offset}` : "";
  const response = await fetch(
    API_LINK + `products?q=${param}${filterString}${offsetProducts}`,
  );

  if (!response.ok) {
    throw new Error(`http error? ${response.status}`);
  }
  const data = await response.json();
  return data;
}
