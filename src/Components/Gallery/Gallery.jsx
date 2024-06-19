import React,{useState,useEffect} from 'react'
import './Gallery.css'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Indicator from '../Indicator/Indicator'

import SlideItems from '../SlideItems/SlideItems';


const Gallery = ({finish,activeIndex, finishes,images}) => {

  const [sliderIndex,setSliderIndex] = useState(0);

  useEffect(()=>{
      document.documentElement.style.setProperty('--slider-index',sliderIndex);
  },[sliderIndex])

  const indicators = [];

  let picIndex = 0;

    finishes.forEach(color => {
        if(finish.name == color.name){
        picIndex = color.imageIndexes[activeIndex];
    }});

    let pics = images[picIndex];
    let imageArray = Object.values(images[picIndex]);


    for(let i = 0; i< imageArray.length ; i++){
        indicators.push(<Indicator currentIndex={sliderIndex} myIndex={i} key={i}/>)
    }


  const slideForward = ()=>{
      if(sliderIndex != imageArray.length -1){
          setSliderIndex(cur =>{
              return cur + 1;
          });
      }else{
          setSliderIndex(cur =>{
              return cur =0;
          });
      }
  };

  const slideBackward = ()=>{
      if(sliderIndex != 0){
          setSliderIndex(cur =>{
              return cur - 1;
          });
      }else{
          setSliderIndex(cur =>{
              return cur = imageArray.length - 1;
          });
      }
  };



  return (
    <div className='gallery'>

      <div className="slide-buttons">
        <button className='next' onClick={slideForward}><IoIosArrowForward size={"40px"} fill='grey'/></button>
        <button className='back' onClick={slideBackward}><IoIosArrowBack size={"40px"} fill='grey'/></button>
      </div>

      <SlideItems pics={pics}/>

      <div className="indicators">
        {indicators}
      </div>

    </div>
  )
}

export default Gallery
