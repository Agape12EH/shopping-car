let apiUrl = 'https://fakestoreapi.com/products?limit=9';

async function main() {
  const products = await fetchData(apiUrl);
  const parentProducts = document.querySelector('#products');

  if (products.length === 0) {
    parentProducts.innerHTML = '<h1>No products</h1>';
  }

  let productsdivs = "";

  products.forEach(product => {
    let divProduct = templateProduct(product);
    productsdivs += divProduct;
  });
  parentProducts.innerHTML += productsdivs;
}

async function fetchData(apiUrl) {
  try {
    const data = await (await fetch(apiUrl)).json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function templateProduct(product) {
  return `
    <div class="product">
      <img class="product__img" src="${product.image}" alt="imagen producto">
      <div class="product__content">
        <h4 class="product__name">${product.title}</h4>
        <span class="product__price">$ ${product.price}</span>
        <div class="product__buttons">
          <a class="product__btn product__btn--detail" href="#">Detalles</a>
          <a class="product__btn product__btn--add" href="#">Agregar</a>
        </div>
      </div>
    </div>
  `;
}

main();