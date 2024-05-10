const products1 = [
  {
    title: "Gray T-Shirt",
    price: "$14.99",
    img: "./GrayTShirt.png",
  },
  {
    title: "Black Jeans",
    price: "$34.99",
    img: "./BlackJeans.png",
  },
  {
    title: "Green Jacket",
    price: "$59.95",
    img: "./GreenJacket.png",
  },
  {
    title: "White Sneakers",
    price: "$49.95",
    img: "./WhiteSneakers.png",
  },
];

const products2 = [
  {
    title: "Blue Sweatshirt",
    price: "$29.95 - $179.95",
    img: "./WhiteSneakers.png",
    colors: ["blue", "black"],
  },
  {
    title: "Red Hoodie",
    price: "$24.95 - $149.95",
    img: "./GreenJacket.png",
    colors: ["red", "green"],
  },
  {
    title: "Yellow Pullover",
    price: "$19.95 - $129.95",
    img: "./BlackJeans.png",
    colors: ["yellow", "orange"],
  },
  {
    title: "Purple Jacket",
    price: "$39.95 - $199.95",
    img: "./GrayTShirt.png",
    colors: ["purple", "pink"],
  },
];

products1.forEach((products) => {
  const container = document.querySelector(".container1");
  let div = document.createElement("div");

  div.classList.add("firstDiv");
  container.appendChild(div);

  let poto = document.createElement("img");
  poto.src = products.img;
  poto.classList.add("poto1");
  div.appendChild(poto);

  let p = document.createElement("p");
  p.textContent = products.title;
  div.appendChild(p);
  p.classList.add("paragraf");

  let p1 = document.createElement("p");
  p1.textContent = products.price;
  p1.classList.add("paragraf1");
  div.appendChild(p1);
});

products2.forEach((products) => {
  const container1 = document.querySelector(".container2");
  let div1 = document.createElement("div");

  div1.classList.add("firstDiv");
  container1.appendChild(div1);

  let poto1 = document.createElement("img");
  poto1.src = products.img;
  poto1.classList.add("poto1");
  div1.appendChild(poto1);

  let p3 = document.createElement("p");
  p3.textContent = products.title;
  div1.appendChild(p3);
  p3.classList.add("paragraf");

  let p4 = document.createElement("p");
  p4.textContent = products.price;
  p4.classList.add("paragraf1");
  div1.appendChild(p4);
});
