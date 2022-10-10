import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/card/card';
import Sidebar from './components/sidebar/sidebar';

function App() {



  const [data,setData] = useState([]);


  useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{
      setData(data)
    });



  },[]);



  const [count,setCount] = useState(0);

  let [added,setAdded] = useState([]);


const adding = (e)=>{

  setCount(count+1);
  var finalAdded = [...added, e];
  setAdded(finalAdded);



}





  return (
    <div className="App">

      

      <div className="container py-5">
        <div className="row align-items-cemter">
          {
            data.map(e=> <Card data={e} adding={adding} />)
          }
        </div>
      </div>

      <Sidebar count={count} added={added} />





    </div>
  );
}

export default App;
