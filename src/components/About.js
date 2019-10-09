import React from 'react'
import Card from 'react-bootstrap/Card';

const About = () => {



    return(
         <Card style={{ width: '75%', margin: '0 auto'}}>
            <Card.Img variant="top" src="mattPic.jpg" bg="black" fluid/>
            <Card.Body>
            <Card.Text>
               Matt is a Nashville Native Been a Jeweler 18 years etc etc.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default About