import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const Gallery = () => {

    return(
       <>
        <CardGroup>
            <Card bg="dark" text="white">
                    <Card.Img variant="top" src="goldCasting.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Raw Casting of Gold Rings
                    </Card.Text>
                    </Card.Body>
                </Card> 

                <Card bg="dark" text="white">
                    <Card.Img variant="top" src="annasRing.jpg" />
                    <Card.Body>
                    <Card.Text>
                        If you can think it, draw it, or dream it- we can make it!
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="dark" text="white">
                    <Card.Img variant="top" src="sapphireRing.JPG" />
                    <Card.Body>
                    <Card.Text>
                        Something blue? Why not!
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="dark" text="white">
                    <Card.Img variant="top" src="cushionRing.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Wow her with a classic design.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="dark" text="white">
                    <Card.Img variant="top" src="waxHalo.JPG" />
                    <Card.Body>
                    <Card.Text>
                       From a 3D print...
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="dark" text="white">
                    <Card.Img variant="top" src="IMG_0658.JPG" />
                    <Card.Body>
                    <Card.Text>
                        ...to her dream ring all in house!
                    </Card.Text>
                    </Card.Body>
                </Card>

                {/* <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>  */}
        </CardGroup>
       </>
    )
}

export default Gallery;