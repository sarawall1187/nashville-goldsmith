import React from 'react'
import Hero from './Hero'


import CarouselPage from './Carousel';

const Home = (props) => {

    return(
        <> 
         <Hero title={props.title} subTitle={props.subTitle}/>
        
         <CarouselPage/>   
        </>
    )
}

export default Home