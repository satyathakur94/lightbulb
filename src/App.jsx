import { use, useContext, useState } from 'react'
import {LightBulbContext, Lightcontext} from './context/context';
import './App.css'

function App() {
  return <div>
    <LightBulbContext>
      <Light/>
    </LightBulbContext>
  </div>
}

function Light(){
  return <div>
    <LightImage/>
    <LightSwitch/>
  </div>
}

function LightImage(){
  const {LightOn} = useContext(Lightcontext);
    return <div>
      {LightOn ? <img src='https://www.w3schools.com/html/pic_bulbon.gif'/> : <img src='https://www.w3schools.com/html/pic_bulboff.gif'/>}
    </div>
}

function LightSwitch(){
  const {SetLightOn} = useContext(Lightcontext);
  function SwitchButton(){
    SetLightOn(c => !c);
  }
  return <button onClick={SwitchButton}>Switch</button>
}

export default App
