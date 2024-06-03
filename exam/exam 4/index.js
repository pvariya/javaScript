let bankArray = []

document.getElementById("formTag").addEventListener("submit", (e) => {
    e.preventDefault();

    class Bank {
        constructor() {
            this.address = document.getElementById("address").value;
            this.number = document.getElementById("number").value;
            this.userName = document.getElementById("userName").value;
            this.deposit = document.getElementById("deposit").value;
        }

        show() {
            return this.userName, this.number, this.address;
        }
    }

    let account = new Bank()
    bankArray.push(account)
    console.log(bankArray);
   


    document.getElementById("tbody").innerHTML=""
    bankArray.map((ele,i)=>{
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = ele.userName

        let td2 = document.createElement("td")
        td2.innerHTML = ele.number

        let td3 = document.createElement("td")
        td3.innerHTML = ele.address

        let Dbtn = document.createElement("button")
        // Dbtn.innerHTML = ele.deposit
        Dbtn.innerHTML="purv"
        addEventListener("click",()=>{
            Dbtn.innerHTML = ele.deposit
        })

        let td4 = document.createElement("td")
        td4.append(Dbtn)
        
        tr.append(td1,td2,td3,td4)
        document.getElementById("tbody").append(tr)

        
    })
});