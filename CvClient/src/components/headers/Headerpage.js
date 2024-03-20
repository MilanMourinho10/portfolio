import React from 'react'
import useApiCall from '../../Hooks/useApiCall';
import './header.css';


export const Headerpage = () => {

  const { data: intro } = useApiCall("/introduction");

  return ( 
   <section id='introHeader'>
{intro &&     
<div className='introContent'>
<h1 className='intoHeader'>{intro.attributes.Introheader}</h1>
<p className='introText'> {intro.attributes.Introtext}</p>
<button className='introBtn'>Hire Me</button>
</div>
}
   </section>
  )
}


