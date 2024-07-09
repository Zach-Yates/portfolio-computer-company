import React,{useRef} from 'react'
import './Help.css'

const Help = ({info,helping,setHelping}) => {

    const panel = useRef(null);

    const ClosePanel = (e) =>{
        if(e.target === panel.current){
            setHelping(false);
        }
    }

    var size = Object.keys(info).length;

    if(size > 0){
      return (
        <div className={`help ${helping? '':'hide'}`} onClick={ClosePanel} ref={panel}>
    
          <div className='background'>
    
            <span className='title'>Which model is right for you?</span>
    
            <div className='compare'>
    
                <div className='item'>
                    <img className='compare-pro-img' src={info.images[0]}/>
                    <span className='compare-text'>{info.captions[0]}</span>
                </div>
    
                <div className='item'>
                    <img className='compare-max-img' src={info.images[1]}/>
                    <span className='compare-text'>{info.captions[1]}</span>
                </div>
    
            </div>
            
            <div className="bottom">
    
                <span className='desc'>{info.desc}</span>
    
                <span className='subtitle'>Here are the key differences:</span>
    
                <span className='base'>{info.statements[0]}</span>
    
                <span className='max'>{info.statements[1]}</span>
    
            </div>
    
    
          </div>
        </div>
      )
    }else{
      return null;
    }
}

export default Help
