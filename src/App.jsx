import { useState } from 'react'

const [selectedColor, setSelectedColor] = useState("")

const Color = (props) => {
  return <div className={props.color}></div>
}


const Color = ({color}) => {
  return <div className={color}></div>
}

const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}

const App = () => {
  return (
    
    <div id="container">
     <div id="navbar">
  <div>Currently selected: </div>
  <div className={selectedColor}>{selectedColor}</div>
</div>

<div id="colors-list">
  <Color color="red" setSelectedColor={setSelectedColor}/>
  <Color color="blue" setSelectedColor={setSelectedColor}/>
  <Color color="green" setSelectedColor={setSelectedColor}/>
</div>
  );
};

export default App;
