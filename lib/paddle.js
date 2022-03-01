export const getProducts = async () => {
  const response = await fetch(`${process.env.API_URL}/product/get_products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vendor_id: process.env.VENDOR_ID,
      vendor_auth_code: process.env.VENDOR_AUTH_CODE,
    }),
  });
  const data = await response.json();
  if (data && data.success) return data.response?.products;
  else return [];
};

export const getProductById = async (productId) => {
  const products = await getProducts();
  return products.find((product) => product.id === parseInt(productId));
};
