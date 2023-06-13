import './App.css';
import Card from './components/card';
import Navbar from './components/navbar';

function App() {
  const arr = [
      {
        image:"https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
        name:"Pushpa2:The Rule",
        rating:4,
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2NWyEEkYfglI7rR1VGO8zoCVDBmGPIvYhetPV2KRVURzNiV1",
      name:"Liger",
      rating:4.5,
    },
    {
      image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmLGFioPoSz1_5L12h2KJeKFrQbU_uXvj0mIoDF1e4WPqJWeMz",
      name:"Dasara",
      rating:4.5,
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH",
      name:"RRR",
      rating:4,
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVfQoPsGGCRHcBMIrKH1dnBsRqWRc90IctA&usqp=CAU",
    name:"Bahubali 2",
    rating:4.5,
  },
  {
    image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f5a21f64af7359f7aaa7c29dee8a12a97630e707cdbf71e0ae6b063322fb8575._RI_TTW_.jpg",
    name:"K.G.F Chapter2",
    rating:4.5,
  }
  ]

  return (
    <div className="App">
     <Navbar/>
     <p className='now'>Now Showing.....</p>
     {/* <Card
       username="omkar"
       image="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
     /> */}
     <div className='a'>
       {
        arr.map((el)=>{
          return(<Card username={el.name} image={el.image} rating={el.rating}/>);
        })
       }
     </div>
     
    </div>
  );
  }
export default App;
