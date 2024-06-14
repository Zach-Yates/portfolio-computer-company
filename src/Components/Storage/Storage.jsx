import React,{useState} from 'react'
import './Storage.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import StorageButton from '../StorageButton/StorageButton';

const Storage = ({capacity,setCapacity}) => {

// const [activeIndex,setActiveIndex] = useState(1);

  return (
    <div className='storage'>

      <SectionTitle main={"Storage. "} sub={"How much space do you need?"}/>

      <StorageButton space={"128"} isActive={capacity === 1} click={()=>setCapacity(1)}/>
      <StorageButton space={"256"} isActive={capacity === 2} click={()=>setCapacity(2)}/>
      <StorageButton space={"512"} isActive={capacity === 3} click={()=>setCapacity(3)}/>
      
    </div>
  )
}

export default Storage
