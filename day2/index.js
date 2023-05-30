const button=document.getElementById("clickable");
const button1=document.getElementById("clickable1");
const button2=document.getElementById("clickable2");
const table=document.querySelector("table");
button.addEventListener("click",()=>{
   const div=document.getElementById("show1");
   const image=document.createElement("img");
   image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwmV1wzfT6qx_OSwWQEvuMZCBdX_50-jq8g&usqp=CAU"
   div.append(image)
})
button1.addEventListener("click",()=>{
   const tr=document.createElement("tr");
   const td1=document.createElement("td");
   td1.innerText="1";
   const td2=document.createElement("td");
   td2.innerText="omkar";
   const td3=document.createElement("td");
   td3.innerText="male";
   const td4=document.createElement("td");
   td4.innerText="ECE";
   table.append(td1,td2,td3,td4);
   table.append(tr);

})
button2.addEventListener("click",()=>{
    window.location.reload();
})
const button3= document.getElementById("clickable3");
const button4= document.getElementById("clickable4");
const textarea= document.getElementById("content");
button3.addEventListener("click",() =>{
    textarea.innerText="Hello Everyone, welcome!!!";
});
button.addEventListener("click",() =>{
    textarea.innerText="";
});