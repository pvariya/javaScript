let productArray = []

const uimaker = () => {
    document.getElementById("box").innerHTML = ""
    productArray.map((ele, i) => {
        let img = document.createElement('img');
        img.src = ele.img
        img.setAttribute("class", "img")

        let price = document.createElement('h3');
        price.innerHTML = ele.price
        price.setAttribute("class", "price")

        let productName = document.createElement('h3');
        productName.innerHTML = ele.productName
        productName.setAttribute("class", "price")

        let delet = document.createElement('button');
        delet.innerHTML = "DELETE";
        delet.addEventListener("click", deletProduct = (i) => {
            productArray.splice(i, 1);
            uimaker()
        })

        let buy = document.createElement('button');
        buy.innerHTML = "BUY";
        buy.addEventListener("click", () => {
            alert("Thank you for buying")
        })

        let divImg = document.createElement('div')
        divImg.append(img, productName, price, delet, buy)
        divImg.setAttribute("class", "BoxDiv")

        document.getElementById("box").append(divImg)
    })
}
 
const product = (e) => {
    e.preventDefault();
    let data = {
        img: document.getElementById("image").value,
        price: document.getElementById("price").value,
        productName: document.getElementById("product-name").value

    }

    productArray.push(data)
    console.log(productArray);
    uimaker()
    console.log(data);
}



document.getElementById("form").addEventListener("submit", product)

