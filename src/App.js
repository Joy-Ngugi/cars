
import './App.css';
import Props from './components/Props';
import BMW from './photos/bmw.jpeg'
import Mercedes from './photos/mercedes.jfif';
import highlander from './photos/highlander.jpeg';
import Harrier from './photos/harrier.jpg';

function App() {
  const cars = [
    {
      name:"Toyota",
      brand:"BMW",
      color:"Grey",
      year:"2020",
      image: {src:BMW}
    },
    {
      name:"Toyota",
      brand:"Mercedes",
      color:"Black",
      year:"2005",
      image: {src:Mercedes}
    },
    {
      name:"Toyota",
      brand:"highlander",
      color:"Black",
      year:"2010",
      image: {src:highlander}
    },
    {
      name:"Toyota",
      brand:"harrier",
      color:"White",
      year:"2020",
      image: {src:Harrier}
    }
  ]
  return (
    <div className="App">
      <div className="grid grid-cols-3 gap-4 bg-orange-300">
      {cars.map((car, index)=>(
      <Props key={index} data ={car}/>
     ))}
     </div>
    </div>
  );
}

export default App;
