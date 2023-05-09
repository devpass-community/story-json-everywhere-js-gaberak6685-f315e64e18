async function getProduct(productId) {
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;

  const response = await fetch(apiUrl);
  const productData = await response.json();

  return productData;
}

module.exports = getProduct;
