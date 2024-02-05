import React, {useState,useEffect} from 'react' //2-ci addim
import "./Section.css"
import Card from './Card'
// import blogs from '../blog.json'
import axios from 'axios' //1-ci addim
const Section = () => {

  const [meqaleler,setMeqaleler]=useState(null) //[]-null eyni seydir

  useEffect(()=>{
    const unvan="./src/blog.json"


   axios.get(unvan)
   .then(melumat => setMeqaleler(melumat.data)) 
   .catch(err => console.log('Severde xeta var'+err))

  },[])


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
              <Card meqaleBasligiProps = "The truth about ReactJS" meqaleMetniProps="Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened....." meqaleShekliProps="https://res.cloudinary.com/dtuiajnrc/image/upload/v1706886110/Rectangle_228_a7evsn.png"/>
     </div>

     <div className="col-12 col-md-6">
     <Card meqaleBasligiProps = "How to solve an unsolvable conflict" meqaleMetniProps="Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened....." meqaleShekliProps="https://res.cloudinary.com/dtuiajnrc/image/upload/v1706886108/Rectangle_228_1_f6rso7.png"/>

     </div>
    </div>

    <div className="section-three row">
{  meqaleler &&meqaleler.map(birMeqale=>(
              <div className="col-12 col-md-6 col-lg-4">
               <Card meqaleBasligiProps={birMeqale.meqaleBasligi} meqaleMetniProps={birMeqale.meqaleMetni} meqaleShekliProps={birMeqale.meqaleShekli}/>
              </div>
))
}
    </div>
    </div>
  )
}

export default Section