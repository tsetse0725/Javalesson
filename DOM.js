const h1 = document.getElementsByTagName("h1")[0];
h1.innerText = "Сайн уу Pinecone";


console.log("SELECTED-ELEMENT", h1);

const h2 =  document.getElementById("garchig");

h2.textContent = "Welcome"

console.log("SE:", h2);

const h3 = document.getElementsByClassName("subTitle");

console.log("SE:", h3);

const el1 = document.querySelectorAll(".subTitle");

console.log(el1);

const textContents = ["Pinecone", "Google", "Facebook"];

for(let i = 0; i < el1.length; i++){
el1[i].innerText = textContents[i];
}

const box = document.getElementById("box1");

const p = document.createElement("p");
p.innerText = "lorem";
p.style.color = "red";

const p2 = "<p>lorem text -2</p>";

box.appendChild(p)
box.innerHTML = p2;

const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", () => {
    console.log("clicked")
   h1.classList.add("title")
   h1.classList.add("border")
});

const randomToo = Math.random() * 10;  
console.log(randomToo)

//03/12

