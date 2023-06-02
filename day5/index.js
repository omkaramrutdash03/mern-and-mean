const show = document.getElementById("show");

fetch("http://localhost:8000/mydata", {
    method: "GET" ,
})
   .then((res) => res.json())
   .then((data) => getData(data));

function getData(data) {
      data.map((el) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = el.image;
        const item = document.createElement("h1");
        item.innerText=el.item;
        const updatebutton = document.createElement("button");
        updatebutton.innerText ="update";
        updatebutton.addEventListener("click",() => {
            const updateTitle = prompt("");
            const newObj ={
                item: updateTitle,
                description: el.description,
                image: el.image,
            };
            fetch(`http://localhost:8000/mydata/${el.id}`,{
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newObj),
            })
            .then((res) => {
                alert("Update Title Successfully");
                })
                .catch((err) =>{
                    alert("Error occured while updating" + err);
                });
        });
        const deletebutton =document.createElement("button");
        deletebutton.innerText ="Delete";
        deletebutton.addEventListener("click", () =>{
            fetch(`http://localhost:8000/mydata/${el.id}`, {
                method: "DELETE",
            })
             .then((res) => {
                alert("Deleted the item");
            })
            .catch((err) => {
                alert("Error occured while deleting");
            });
        });
        div.append(img,item,updatebutton,deletebutton);
        show.append(div);
        });
}