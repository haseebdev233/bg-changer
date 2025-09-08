import { useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState('#D2A8FF');

  return (

    <div className='container  h-screen flex flex-wrap justify-center items-center' style={{backgroundColor:color}}>
      <div className='box bg-black w-300 h-25  rounded-full shadow-lg flex flex-wrap gap-3 justify-center fixed bottom-12 items-center '>
        <button className='p-3 rounded-4xl text-2xl ' onClick={()=>{setColor('white')}} style={{backgroundColor:"white"}}>white</button>
        <button className='p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('red')}} style={{backgroundColor:"red"}}>red</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('yellow')}} style={{backgroundColor:"yellow"}}>yellow</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('green')}} style={{backgroundColor:"green"}}>green</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('gray')}} style={{backgroundColor:"gray"}}>gray</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('blue')}} style={{backgroundColor:"blue"}}>blue</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('pink')}} style={{backgroundColor:"pink"}}>pink</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('brown')}} style={{backgroundColor:"brown"}}>brown</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('orange')}} style={{backgroundColor:"orange"}}>orange</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('#D2A8FF')}} style={{backgroundColor:"#D2A8FF"}}>#D2A8FF</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('#00BCD4')}} style={{backgroundColor:"#00BCD4"}}>#00BCD4</button>
        <button className=' p-3 rounded-4xl text-2xl text-white' onClick={()=>{setColor('olive')}} style={{backgroundColor:"olive"}}>olive</button>
      </div>
    </div>
  )
}

export default App
