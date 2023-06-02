const button=document.getElementById("mybutton");
const takenemail=document.getElementById("email");
const takenpassword=document.getElementById("password");
function submitData(){
     if(takenemail.value !== "" && takenpassword.value !==""){
        const obj={
            id:Date.now(),
            email: takenemail.value,
            password:takenpassword.value,
        };
        fetch("http://localhost:8000/mydata", {
            method:"POST",
            headers: {
                "content-Type":"application/json",
            },
            body: JSON.stringify(obj),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            alert("Created Account");
            window.location.replace='http://127.0.0.1:5500/day4/valid.html';
        })
        .catch((err)=> console.log(err));
     }
     else{
        alert("fill in the form");
     }
}
