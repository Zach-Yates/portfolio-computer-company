import React from 'react'
import './SlideItems.css'

import nt1 from '../../assets/15-pro/b-nt-1.webp'
import nt2 from '../../assets/15-pro/b-nt-2.webp'
import nt3 from '../../assets/15-pro/b-nt-3.webp'
import nt4 from '../../assets/15-pro/b-nt-4.webp'

import bt1 from '../../assets/15-pro/b-bt-1.webp'
import bt2 from '../../assets/15-pro/b-bt-2.webp'
import bt3 from '../../assets/15-pro/b-bt-3.webp'
import bt4 from '../../assets/15-pro/b-bt-4.webp'

import wt1 from '../../assets/15-pro/b-wt-1.webp'
import wt2 from '../../assets/15-pro/b-wt-2.webp'
import wt3 from '../../assets/15-pro/b-wt-3.webp'
import wt4 from '../../assets/15-pro/b-wt-4.webp'

import blt1 from '../../assets/15-pro/b-blt-1.webp'
import blt2 from '../../assets/15-pro/b-blt-2.webp'
import blt3 from '../../assets/15-pro/b-blt-3.webp'
import blt4 from '../../assets/15-pro/b-blt-4.webp'

import mnt1 from '../../assets/15-pro/m-nt-1.webp'
import mnt2 from '../../assets/15-pro/m-nt-2.webp'
import mnt3 from '../../assets/15-pro/m-nt-3.webp'
import mnt4 from '../../assets/15-pro/m-nt-4.webp'

import mbt1 from '../../assets/15-pro/m-bt-1.webp'
import mbt2 from '../../assets/15-pro/m-bt-2.webp'
import mbt3 from '../../assets/15-pro/m-bt-3.webp'
import mbt4 from '../../assets/15-pro/m-bt-4.webp'

import mwt1 from '../../assets/15-pro/m-wt-1.webp'
import mwt2 from '../../assets/15-pro/m-wt-2.webp'
import mwt3 from '../../assets/15-pro/m-wt-3.webp'
import mwt4 from '../../assets/15-pro/m-wt-4.webp'

import mblt1 from '../../assets/15-pro/m-blt-1.webp'
import mblt2 from '../../assets/15-pro/m-blt-2.webp'
import mblt3 from '../../assets/15-pro/m-blt-3.webp'
import mblt4 from '../../assets/15-pro/m-blt-4.webp'

const images = [
    {
       image1: nt1,
       image2: nt2,
       image3: nt3,
       image4: nt4},
    {
       image1: bt1,
       image2: bt2,
       image3: bt3,
       image4: bt4},
    {
       image1: wt1,
        image2: wt2,
        image3: wt3,
        image4: wt4},
    {
        image1: blt1,
        image2: blt2,
        image3: blt3,
        image4: blt4},
    {
        image1: mnt1,
        image2: mnt2,
        image3: mnt3,
        image4: mnt4},
    {
        image1: mbt1,
        image2: mbt2,
        image3: mbt3,
        image4: mbt4},
    {
        image1: mwt1,
        image2: mwt2,
        image3: mwt3,
        image4: mwt4},
    {
        image1: mblt1,
        image2: mblt2,
        image3: mblt3,
        image4: mblt4}
  ]

const SlideItems = ({finish,modelIndex}) => {

    let pics = [];

    // console.log(images.length);

    if(modelIndex == 0){
        if (finish == "Natural Titanium"){
            pics = images[0];
        }
        else if(finish == "Blue Titanium"){
            pics = images[1];
        }
        else if(finish == "White Titanium"){
            pics = images[2];
        }
        else if(finish == "Black Titanium"){
            pics = images[3];
        }
    }
    else if(modelIndex ==1){
        if (finish == "Natural Titanium"){
            pics = images[4];
        }
        else if(finish == "Blue Titanium"){
            pics = images[5];
        }
        else if(finish == "White Titanium"){
            pics = images[6];
        }
        else if(finish == "Black Titanium"){
            pics = images[7];
        }
    }


  return (
    <div className='slider'>
        {Object.values(pics).map((image,i)=>
          <div className="slide-item" key={i}>
            <img src={image} ></img>
          </div>)}
    </div>
  )
}

export default SlideItems
