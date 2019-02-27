// const articleHeader= document.querySelector(".article__header");

// articleHeader.textContent="Welcome to the Meag Blog!";

const articleHeader = document.querySelectorAll(".article__header");

for (let i=0; i<articleHeader.length; i++){
    articleHeader[i].classList.add("important");
}

console.log(articleHeader); 
