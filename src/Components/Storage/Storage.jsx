import React,{useState} from 'react'
import './Storage.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import StorageButton from '../StorageButton/StorageButton';

const Storage = () => {

const [activeIndex,setActiveIndex] = useState(1)

  return (
    <div className='storage'>

      <SectionTitle main={"Storage. "} sub={"How much space do you need?"}/>

      <StorageButton space={"128"} isActive={activeIndex === 1} click={()=>setActiveIndex(1)}/>
      <StorageButton space={"256"} isActive={activeIndex === 2} click={()=>setActiveIndex(2)}/>
      <StorageButton space={"512"} isActive={activeIndex === 3} click={()=>setActiveIndex(3)}/>
      
    </div>
  )
}

export default Storage
