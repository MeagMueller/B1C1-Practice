const articleHeaderChange= document.querySelector(".article__header");

articleHeaderChange.textContent="Welcome to the Meag Blog!";

const articleHeaderClass = document.querySelectorAll(".article__header");

for (let i=0; i<articleHeaderClass.length; i++){
    articleHeaderClass[i].classList.add("important");
}

console.log(articleHeaderClass, articleHeaderChange); 
