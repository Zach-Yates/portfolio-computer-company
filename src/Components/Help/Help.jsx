import React,{useRef} from 'react'
import './Help.css'
import base_pic from '../../assets/compare-base.jpeg'
import max_pic from '../../assets/compare-max.jpeg'

const Help = ({helping,setHelping}) => {

    const panel = useRef(null);
    const ClosePanel = (e) =>{
        if(e.target === panel.current){
            setHelping(false);
        }
    }

  return (
    <div className={`help ${helping? '':'hide'}`} onClick={ClosePanel} ref={panel}>

      <div className='background'>

        <span className='title'>Which model is right for you?</span>

        <div className='compare'>

            <div className='item'>
                <img className='compare-pro-img' src={base_pic}/>
                <span className='compare-text'>iPhone 15 Pro</span>
            </div>

            <div className='item'>
                <img className='compare-max-img' src={max_pic}/>
                <span className='compare-text'>iPhone 15 Pro Max</span>
            </div>

        </div>
        
        <div className="bottom">

            <span className='desc'>iPhone 15 Pro and iPhone 15 Pro Max share the same powerful innovations, 
            like the all-new, strong and light titanium design. Super-high-resolution photos with the 48MP Main camera. 
            A17 Pro, a game-changing chip with groundbreaking performance. 
            A customizable Action button. And a USB-C connector with support for USB 3 speeds.</span>

            <span className='subtitle'>Here are the key differences:</span>

            <span className='base'>iPhone 15 Pro has a 6.1-inch display Footnote and a 3x 
            Telephoto camera and gets up to 23 hours video playback. Footnote</span>

            <span className='max'>iPhone 15 Pro Max has a 6.7-inch display Footnote
            and a 5x Telephoto camera and gets up to 29 hours video playback. Footnote</span>

        </div>


      </div>
    </div>
  )
}

export default Help
