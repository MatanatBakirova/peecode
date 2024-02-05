import React from 'react'
import "./Section.css"
import Card from './Card'
import blogs from '../blog.json'

const Section = () => {
  return (
    <div className='mt-5'>
        <nav className='tab-links d-flex justify-content-center gap-5 pb-5'>
            <a href="#" className='nav-link'>All</a>
            <a href="#" className='nav-link'>Case studies</a>
            <a href="#" className='nav-link'>Guides</a>
            <a href="#" className='nav-link'>Articles</a>
            <a href="#" className='nav-link'>Partner materials</a>
        </nav>
        <div className="section-two row">
            <div className="col-12 col-md-6">
              <Card/>
     </div>

     <div className="col-12 col-md-6">
     <Card/>

     </div>
    </div>

    <div className="section-three row">
{
  blogs.map((birBlog)=>(
    <div className="col-12 col-md-6 col-lg-4">
    <Card meqaleBasligiProps={birBlog.meqaleBasligi}/>
  </div>

  ))

}
    </div>
    </div>
  )
}

export default Section