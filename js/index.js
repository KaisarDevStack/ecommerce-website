fetch("https://fakestoreapi.com/products").then((res) =>
  res.json().then((data) => showAllProducts(data)),
);
const showAllProducts = (products) => {
  const productsContainer = document.getElementById("products-container");
  //   productsContainer.innerHTML = " ";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
    <div class="card bg-base-100 w-72 max-h-full shadow-sm">
          <figure>
            <img src=${product.image} class="h-64 w-52" alt="Shoes"/>
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <button class="btn btn-xs rounded-full px-6 bg-[#e0e7ff] text-[#4f39f6]">
                ${product.category}
              </button>
              <div class="flex justify-center items-center gap-1">
                <div class="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-1"
                    class="mask mask-star"
                    aria-label="1 star"
                  />
                </div>
                <p>${product.rating.rate}(${product.rating.count})</p>
              </div>
            </div>
            <h2 class="card-title">${product.title.substring(0, 40)}...</h2>
            <div class="flex justify-between items-center pt-2">
              <button class="btn btn-primary rounded-md">
                <i class="fa-regular fa-eye"></i><span>Details</span>
              </button>
              <button class="btn btn-primary rounded-md">
                <i class="fa-solid fa-cart-arrow-down"></i><span>Add</span>
              </button>
            </div>
          </div>
        </div>
    `;
    productsContainer.append(productCard);
  });
};
showAllProducts();
