import React from 'react'
/* - Styles ________________________________ */
import './about.css';
/* - Components ____________________________ */
import CardItem from '../cardItem/CardItem';
/*__________________________________________ */

const About = () => {
  return (
   <div className="container card_container">
    <CardItem />
    <CardItem />
    <CardItem />
    <CardItem />
    <CardItem />
    <CardItem />
   </div>
  )
}

export default About