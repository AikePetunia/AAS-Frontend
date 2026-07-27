// http://localhost:3000/stores?q=ho&offset=20.
const API_LINK = "http://localhost:3000/";

export async function getProducts(param: string) {
  const response = await fetch(API_LINK + `products?q=${param}`);

  if (!response.ok) {
    throw new Error(`http error? ${response.status}`);
  }
  const data = await response.json();
  return data;
}
