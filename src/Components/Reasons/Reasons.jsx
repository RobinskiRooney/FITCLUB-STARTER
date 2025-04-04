import React from 'react'
import './Reasons.css'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
import image_1 from '../../assets/image1.png'
import image_2 from '../../assets/image2.png'
import image_3 from '../../assets/image3.png'
import image_4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'

function Reasons() {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left-r">
            <img src={image_1} alt="" />
            <img src={image_2} alt="" />
            <img src={image_3} alt="" />
            <img src={image_4} alt="" />
        </div>
        <div className="right-r">
            <span className='text'>some reasons</span>
            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <span>OVER 140+ EXPERT COACHES</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
                <span style={{
                    color:'var(--gray)',
                    fontWeight:'normal',
                    fontSize:'20px'
                }}>OUR PARTNERS</span>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons
