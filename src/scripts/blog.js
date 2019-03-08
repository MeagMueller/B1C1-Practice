const articleHeaderChange= document.querySelector(".article__header");

articleHeaderChange.textContent="Welcome to the Meag Blog!";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const articleHeaderClass = document.querySelectorAll(".article__header");

for (let i=0; i<articleHeaderClass.length; i++){
    articleHeaderClass[i].classList.add("important");
}

console.log(articleHeaderClass, articleHeaderChange); 

// Obtain a reference the element with a class of dashed and remove it.
const dashed= document.querySelector(".dashed");
dashed.classList.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const goldenrod= document.querySelector(".article__footer");
goldenrod.classList.add("goldenrod");

