// http://localhost:3000/stores?q=ho&offset=20.
const API_LINK = "http://localhost:3000/";

export async function getProducts(param: string, filter: string[]) {
  const filterString = filter.length > 0 ? `&${filter.join("&")}` : "";
  console.log("filters", filterString);
  console.log("final url");
  console.log(API_LINK + `products?q=${param}${filterString}`);
  const response = await fetch(API_LINK + `products?q=${param}${filterString}`);

  if (!response.ok) {
    throw new Error(`http error? ${response.status}`);
  }
  const data = await response.json();
  return data;
}
