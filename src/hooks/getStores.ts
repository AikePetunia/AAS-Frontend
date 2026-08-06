const API_LINK = import.meta.env.VITE_API_URL;

// no hay buscador de tiendas, probablemente no haya.
export async function getStores() {
  const response = await fetch(API_LINK + `stores?q=`);

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
