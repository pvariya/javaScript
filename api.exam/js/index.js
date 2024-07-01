const apiData = async () => {
   
        let response = await fetch(`https://dummyjson.com/products`);
        let products = await response.json();
        mapper(products.products); 
    
   
}

const mapper = (products) => {
   
    document.getElementById("content").innerHTML = "";

    products.forEach((product) => {
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

        document.getElementById("content").appendChild(productDiv);
    });
};

const handleSort = (orderBy) => {
   
    apiData().then(() => {
        let products = document.getElementById("content").childNodes;

        
        let productsArray = Array.from(products);

        if (orderBy === "LTH") {
            productsArray.sort((a, b) => {
                let priceA = parseFloat(a.querySelector(".price").innerHTML.slice(1)); 
                let priceB = parseFloat(b.querySelector(".price").innerHTML.slice(1));
            });
        } else if (orderBy === "HTL") {
            productsArray.sort((a, b) => {
                let priceA = parseFloat(a.querySelector(".price").innerHTML.slice(1)); 
                let priceB = parseFloat(b.querySelector(".price").innerHTML.slice(1));
                return priceB - priceA;
            });
        }

       
        document.getElementById("content").innerHTML = "";

       
        productsArray.forEach((product) => {
            document.getElementById("content").appendChild(product);
        });
    });
};


document.getElementById("LTH").addEventListener("click", () => handleSort("LTH"));
document.getElementById("HTL").addEventListener("click", () => handleSort("HTL"));


apiData();
