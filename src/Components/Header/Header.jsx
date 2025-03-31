import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo'/>
        {
          (menuOpened === false && mobile === true)? (
            <div
            style={{
              backgroundColor:'var(--appColor)',
              padding:'0.5rem',
              borderRadius:'5px'
            }}
            onClick={()=>setMenuOpened(true)}
            ><img src={Bars} style={{width:'1.5rem',height:'1.5rem'}}/></div>
          ): 
          <ul className='header-menu' >
            <li>
              <Link
                  onClick={()=>setMenuOpened(false)}
                  to='hero'
                  spy={true}
                  smooth={true}
                  >Home</Link>
            </li>
            <li>
              <Link
                  onClick={()=>setMenuOpened(false)}
                  to='Programs'
                  spy={true}
                  smooth={true}
                  offset={0}
                  >Programs</Link>
            </li>
            <li>
              <Link
                  onClick={()=>setMenuOpened(false)}
                  to='reasons'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  >Why Us</Link>
            </li>
            <li>
                <Link
                onClick={()=>setMenuOpened(false)}
                to='plans'
                spy={true}
                smooth={true}
                offset={-50}
                >Plans</Link>
            </li>
            <li>
              <Link
              onClick={()=>setMenuOpened(false)}
              to='testimonials'
              spy={true}
              smooth={true}
              offset={-50}
              >Testimonials</Link>
            </li>
          </ul>
        }
    </div>
  )
}

export default Header
