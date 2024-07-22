const productAPI ={
    get : async()=>{
        let req =await fetch("http://localhost:3000/product")
        let res =await req.json()
        return res
    },
    post : async(productData)=>{
        let req = fetch(`http://localhost:3000/product`,{
            method:"POST",
            headers:{"content-type": "application/json"},
            body:JSON.stringify(productData)
        })
    },
    patch :async(id,productData)=>{
        let req = fetch(`http://localhost:3000/product?${id}`,{
            method:"PATCH",
            headers:{"content-type": "application/json"},
            body:JSON.stringify(productData)
        })
    },
    delete:async(id)=>{
        let req = fetch(`http://localhost:3000/product?${id}`,{
            method:"DELETE"
        })
    }
}

export default productAPI