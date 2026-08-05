const API_LINK = import.meta.env.VITE_API_URL;

export async function getStores(offset = 0) {
  const response = await fetch(API_LINK + `stores?q=&offset=${offset}`);

  if (!response.ok) {
    throw new Error(`http error? ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function getStoresDetail(param: string) {
  const response = await fetch(API_LINK + `stores/${param}`);

  if (!response.ok) {
    throw new Error(`http error? ${response.status}`);
  }
  const data = await response.json();
  return data;
}
