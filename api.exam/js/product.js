let product = localStorage.getItem('productId');
const apiData = async (product) => {
   
    let response = await fetch(`https://dummyjson.com/products/${product}`);
     let products = await response.json();
   
    console.log(response); 
}
// console.log(product);   
apiData()
const mapper = (products) => {
   console.log(products);
    document.getElementById("uiMaker").innerHTML = "";

   
        let productDiv = document.createElement("div");
        productDiv.className = "product";

        let title = document.createElement("p");
        title.className = "title";
        title.innerHTML = product.title;

        let img = document.createElement("img");
        img.src = product.thumbnail;
        img.className = "img";

        let price = document.createElement("p");
        price.className = "price";
        price.innerHTML = `$${product.price}`;

        let buyButton = document.createElement("a");
        buyButton.className = "buy-button";
       
        buyButton.innerHTML = "BUY NOW";

        productDiv.append(title, img, price, buyButton);

        document.getElementById("uiMaker").appendChild(productDiv);
    
};


mapper(product)
