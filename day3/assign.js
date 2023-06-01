<<<<<<< HEAD
data=[
    {
       image :"biriyani.jpg",
       title: "chicken Biriyani",
       price: 150,
       description: "Biryani is a mixed rice dish originating in South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat, or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
    },
    {
        image :"burger.jpg",
        title: "Burger",
        price:85,
        description:"Hamburger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll. ",
     },
     {
        image :"1.jpg",
        title :"Paneer Butter Masala",
        price:125,
        description: " Paneer butter masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter",
 
     },
     {
        image :"chowmein.jpg",
        title: "Egg Chicken Noodles",
        price:80,
        description: "Chow mein is a Chinese dish made from stir-fried noodles with vegetables and sometimes meat or tofu",
 
     },
     {
        image :"friedrice.jpg",
        title: "Egg Chicken Fried Rice",
        price:100,
        description: "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.",
 
     }, {
        image :"kebab.jpg",
        title: "Chicken Kebab",
        price:150,
        description: "Kebab kabob (North American), or kabab is a type of cooked meat dish that originates from ... Kabab Bakhtiari is a combination of Jujeh kabab (chicken kabab) and Kabab ...",
 
     }
]
const menu=document.getElementById("showmenu");
data.map((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const price = document.createElement("p");
    price.innerText = el.price;
    const description = document.createElement("p");
    description.innerText="";
    const textarea=document.createElement("p");
    const button1 = document.createElement("button");
    button1.innerText = "About food";
    const button2 = document.createElement("button");
    button2.innerText = "Close";
    button1.addEventListener("click", () => {
        textarea.innerText=el.description;
        textarea.append(description);
    });
    button2.addEventListener("click", () => {
        textarea.innerText="";
        textarea.append(description);
    });
    div.append(image, movieTitle, price,description, button1,button2,textarea);
    menu.append(div);


=======
data=[
    {
       image :"biriyani.jpg",
       title: "chicken Biriyani",
       price: 150,
       description: "Biryani is a mixed rice dish originating in South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat, or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
    },
    {
        image :"burger.jpg",
        title: "Burger",
        price:85,
        description:"Hamburger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll. ",
     },
     {
        image :"1.jpg",
        title :"Paneer Butter Masala",
        price:125,
        description: " Paneer butter masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter",
 
     },
     {
        image :"chowmein.jpg",
        title: "Egg Chicken Noodles",
        price:80,
        description: "Chow mein is a Chinese dish made from stir-fried noodles with vegetables and sometimes meat or tofu",
 
     },
     {
        image :"friedrice.jpg",
        title: "Egg Chicken Fried Rice",
        price:100,
        description: "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.",
 
     }, {
        image :"kebab.jpg",
        title: "Chicken Kebab",
        price:150,
        description: "Kebab kabob (North American), or kabab is a type of cooked meat dish that originates from ... Kabab Bakhtiari is a combination of Jujeh kabab (chicken kabab) and Kabab ...",
 
     }
]
const menu=document.getElementById("showmenu");
data.map((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const price = document.createElement("p");
    price.innerText = el.price;
    const description = document.createElement("p");
    description.innerText="";
    const textarea=document.createElement("p");
    const button1 = document.createElement("button");
    button1.innerText = "About food";
    const button2 = document.createElement("button");
    button2.innerText = "Close";
    button1.addEventListener("click", () => {
        textarea.innerText=el.description;
        textarea.append(description);
    });
    button2.addEventListener("click", () => {
        textarea.innerText="";
        textarea.append(description);
    });
    div.append(image, movieTitle, price,description, button1,button2,textarea);
    menu.append(div);


>>>>>>> 92dfda2ace13f010248cfb76b51584915c5389b5
});