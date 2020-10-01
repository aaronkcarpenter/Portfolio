import React from 'react'
import '../styling/navigation.css'

const Navigation = () => {
  return (
    <div className='page-container'>
      <div className='nav-container'>
        <ul className='main-navigation'>
          <li className='nav-item nav1'>
            <a href='/about' className='navigation-link nav' >About</a>
          </li>
          <li className='nav-item nav2'>
            <a href='/projects' className='navigation-link nav' >Projects</a>
          </li>
          <li className='nav-item nav3'>
            <a href='/resume' className='navigation-link nav' >Resumé</a>
          </li>
          <li className='nav-item nav4'>
            <a href='/contact' className='navigation-link nav' >Contact</a>
          </li>
        </ul>
      </div>

      <div className='about-container'>
        <div className='about-paragraph'>
          <div className='about-image'>
            <img className='image-one' alt='profile' src='https://lh4.googleusercontent.com/-EAfd6OpPwr0/AAAAAAAAAAI/AAAAAAAAAHM/7ovmmG9d5eg/photo.jpg' />
          </div>
          <p className='about-me-content__1'>Hi, I'm Aaron and I am a software engineer!</p>
          <p className='about-me-content__2'>I'm a leader and independent thinker that enjoys a challenge and an everlasting yearning to learn new things. What interests 
            me most about software development is having the ability to create life-altering solutions to problems, and finally turning them 
            into product, all with code. There are many industries and businesses that could thrive if only they were well versed in technology, 
            which in 2020, is becoming a required core-competency for non-technical industries to survive. My top strengths are being a 
            self-starter, having an entrepreneurial mindset, and earning the trust of my team. </p>
        </div>
        <div className='projects-area'>
          <p className='projects-header'>PROJECTS</p>
        </div>
          <div className='resume-area'>
            <p>Resumé Section</p>
          </div>
          <div className='contact-area'>
            <p>Contact Section</p>
          </div>
        </div>
      
      </div>
  )
}

export default Navigation
