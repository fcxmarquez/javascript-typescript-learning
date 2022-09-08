import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

const fetchData = (urlApi) => {
  return fetch(urlApi);
};

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products[0]);
  })
  .then(() => {
    console.log("hey");
  })
  .catch((error) => console.log(error));
// You can chain as many then as you want, but you can only have one catch

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title)
    return fetchData(`${API}/categories/${product?.category?.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

export {};
