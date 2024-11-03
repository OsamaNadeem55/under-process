import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";


 const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
        <div className='text-xl font-medium '><b>OSAMA NADEEM.</b></div>

        <br />

       <ul className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'><a href='#home'><b>Home</b> </a></li>
        <li className='menuLink'><a href='#project'><b>Project</b></a></li>
        <li className='menuLink'><a href='#skills'><b>Skills</b></a></li>
        <li className='menuLink'><a href='#contact'><b>Contact</b></a></li>
        <li className='menuLink'><a href='#about'><b>About</b></a></li>
        
       </ul>
       <AiOutlineMenu />
       
        </div>
     
    </div>
  )
}
export default Navbar