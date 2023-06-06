import './App.css';
import Card from './components/card';
import Navbar from './components/navbar';

function App() {
  const arr = [
      {
        email:"omkardash@gmail.com",
        image:"https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Omkar",
        id:4
    },
    {
      email:"omkar@gmail.com",
      image:"https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Amrut",
      id:2
    },
    {
      email:"dash@gmail.com",
      image:"https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Dash",
      id:3
    },
  ]

  return (
    <div className="App">
     <Navbar/>
     {/* <Card
       username="omkar"
       image="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
     /> */}
     <div className='a'>
       {
        arr.map((el)=>{
          return(<Card username={el.name} image={el.image} id={el.id}/>);
        })
       }
     </div>
    </div>
  );
  }
export default App;
