import React, { useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import Card, { MemoCard } from "./card";
import SearchContext from "../searchContex";


function HomePage(){
    const {search}=useContext(SearchContext);
    console.log(search);
    const [arr,setArr]=useState([]);
    const [wholearr,setWholeArr]=useState([]);
    const [searchStr,setSearchStr]=useState("");

    const pageArr=[];
    let i=0;
    while (i< Math.ceil(wholearr.length/10)){
        pageArr.push(i+1);
        i++;
    }

    // Today's Code

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //   const idvar = setInterval(() => {
    //     console.log("Hi");
    //     setCount((prev) => prev +1);
    //   },2000)
    //   if (count === 5){
    //     clearInterval(idvar);
    //   }
    //   return () => clearInterval(idvar);
    // },[count]);
/////////////////////////////////////////////
    
    
    const [page,setPage]=useState(1);

    const getData= async()=>{
        await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"GET",
        })
        .then((res)=> res.json())
        .then((data)=>{
            setWholeArr(data);
            const end=page*10;
            const start=page-1;
            const newData=data.slice(start*10,end);
            setArr(newData);
        });
    };
    const handlePage=(el) =>{
        setPage(el);
      };
    useEffect(()=>{
        getData();
    },[page]);

    


     return (
        <div >
            <Navbar/>
        {/* {arr.length > 0 ?(
          <div
          style={{display:"grid",
          gridTemplateColumns:"repeat(5,1fr)",
          marginTop:"5%",
          border:"5px solid black",
          background:"bisque",
        }}
          >
            {arr.map((el)=>{
              return <Card
              postid={el.postId}
              Id={el.id}
              title={el.name}
              email={el.email}
              body={el.body}
              />;
            })}
          </div>
        ) : (
          <h1>No Data Found</h1>
        )} */}
        <MemoCard image = "data:image/jpeg;base64,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"
          title = "Mountain" desc = "Beautiful" />
        {pageArr.map((el)=>{
          return <button onClick={() =>handlePage(el)}>{el}</button>;
        })}
        </div>
      );
}
export default HomePage