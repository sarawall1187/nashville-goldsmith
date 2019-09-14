import React from 'react'
import Hero from './Hero'


import Carousel from './Carousel';

const Home = (props) => {



    return(
        <> 
        <Hero title={props.title} subTitle={props.subTitle}/>
        
     <Carousel/>   
        </>
    )
}

export default Home