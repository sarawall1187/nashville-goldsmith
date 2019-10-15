import React from 'react'
import Card from 'react-bootstrap/Card';

const About = () => {



    return(
         <Card bg="dark" style={{ width: '75%', margin: '0 auto'}}>
          <Card.Img variant="top" src="mattAboutPic.jpg" fluid/>
            <Card.Body>
                <Card.Text style={{color: 'white'}}>
                Matt Walker is a Nashville Native who is proud to have been a part of the growth of our beautiful city.
                He started his career as a jewelery polisher and continued on to complete 3 intense apprenticeships. 
                He is now a Master Jeweler and Goldsmith who specializes in antique jewelery repair and designing custom pieces.
                He has a wife and a son, and plans to teach his son the family business when he gets older.  
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default About