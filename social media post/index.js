let countLike = localStorage.getItem("count") || 0;
count = parseInt(countLike, 10); 
document.querySelector("#countLike").innerHTML = countLike;

const like = () => {
    countLike ++;
    localStorage.setItem("count", countLike);
    document.querySelector("#countLike").innerHTML = countLike; 
};



let countComent = localStorage.getItem("count2") || 0;
countComent = parseInt(countComent, 10); 
document.querySelector("#countComent").innerHTML = countComent;

const coment = () => {
    countComent ++;
    localStorage.setItem("count2", countComent);
    prompt("enter coment")
    document.querySelector("#countComent").innerHTML = countComent; 
};


let countShare = localStorage.getItem("count3") || 0;
countShare = parseInt(countShare, 10); 
document.querySelector("#countShare").innerHTML = countShare;

const share = () => {
    countShare ++;
    localStorage.setItem("count3", countShare);
    document.querySelector("#countShare").innerHTML = countShare; 
};





let countSave = sessionStorage.getItem("count4") || 0;
countSave = parseInt(countSave, 10); 
document.querySelector("#countSave").innerHTML = countSave;

const save = () => {
    countSave ++;
    sessionStorage.setItem("count4", countSave);
    document.querySelector("#countSave").innerHTML = countSave; 
};




document.querySelector(".like-btn").addEventListener("click",like)
document.querySelector(".comment-btn").addEventListener("click",coment)
document.querySelector(".share-btn").addEventListener("click",share)
document.querySelector(".save-btn").addEventListener("click",save)