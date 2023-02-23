import React from 'react'
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'
import '../estilos/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="form_container">

          <a className='footer_icons' href='https://github.com/Corubel'> <AiOutlineGithub className='icon_footer'/></a>
          <a className='footer_icons' href='https://www.linkedin.com/in/corel-benitez-d-argenio-5b6b691b9/'><AiOutlineLinkedin className='icon_footer'/></a>
          <a href='/contact'>  <AiOutlineMail className='icon_footer'/></a>       

        </div>
        <p >&copy; 2023 Corubel</p>
       
  
 
    </div>
  )
}

export default Footer