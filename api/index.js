const api = async () => {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        mapper(data);
      };
      
      const mapper = (data) => {
        data.map((ele) => {
          let productDiv = document.createElement("div");
          productDiv.className = "product";
          
          let title = document.createElement("p");
          title.className = "title";
          title.innerHTML = ele.title;
          
          let img = document.createElement("img");
          img.src = ele.image;
          
          let price = document.createElement("p");
          price.className = "price";
          price.innerHTML = `$${ele.price}`;
          
          let buyButton = document.createElement("a");
          buyButton.className = "buy-button";
          buyButton.innerHTML = "BUY NOW";
          
          productDiv.append(title, img, price, buyButton);
          
          document.getElementById("containerBox").append(productDiv);
        });
      };
      
      api();
      
