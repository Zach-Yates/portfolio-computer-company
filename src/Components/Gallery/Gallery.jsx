import React,{useState,useEffect} from 'react'
import './Gallery.css'
import nt1 from '../../assets/b-nt-1.webp'
import nt2 from '../../assets/b-nt-2.webp'
import nt3 from '../../assets/b-nt-3.webp'
import nt4 from '../../assets/b-nt-4.webp'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Indicator from '../Indicator/Indicator'

const Gallery = () => {

  const [sliderIndex,setSliderIndex] = useState(0);

  useEffect(()=>{
      document.documentElement.style.setProperty('--slider-index',sliderIndex);
  },[sliderIndex])


  const slideForward = ()=>{
      if(sliderIndex != 3){
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
              return cur = 3;
          });
      }
  };

  return (
    <div className='gallery'>

      <div className="slide-buttons">
        <button className='next' onClick={slideForward}><IoIosArrowForward size={"40px"} fill='grey'/></button>
        <button className='back' onClick={slideBackward}><IoIosArrowBack size={"40px"} fill='grey'/></button>
      </div>


      <div className="slider">
        <div className="slide-item">
          <img src={nt1} ></img>
        </div>

        <div className="slide-item">
          <img src={nt2} ></img>
        </div>

        <div className="slide-item">
          <img src={nt3} ></img>
        </div>

        <div className="slide-item">
          <img src={nt4} ></img>
        </div>
      </div>

      <div className="indicators">
        <Indicator currentIndex={sliderIndex} myIndex={0}/>
        <Indicator currentIndex={sliderIndex} myIndex={1}/>
        <Indicator currentIndex={sliderIndex} myIndex={2}/>
        <Indicator currentIndex={sliderIndex} myIndex={3}/>
      </div>

    </div>
  )
}

export default Gallery
