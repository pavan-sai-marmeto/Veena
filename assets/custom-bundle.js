document.querySelector("#custom-add-to-cart").addEventListener("click", () => {
  let productItems = [];
  document
    .querySelectorAll(".custom-bundle__checkbox-input")
    .forEach((item) => {
      if (item.checked) {
        productItems.push({
          id: item.dataset.productId,
          quantity: 1,
        });
      }
    });
  const customAddToCartEl = document.querySelector("#custom-add-to-cart");
  if (customAddToCartEl) {
    productItems.push({
      id: customAddToCartEl.dataset.variantId,
      quantity: customAddToCartEl.dataset.quantity,
    });
  }

  const cart =
    document.querySelector("cart-notification") ||
    document.querySelector("cart-drawer");

  let formData = {
    items: productItems,
    sections: cart.getSectionsToRender().map((section) => section.id),
  };

  fetch(window.Shopify.routes.root + "cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((res) => {
      cart.renderContents(res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
