import React from 'react';
import './App.css';
import {Nav,Navbar,Container,Carousel,Card,Button} from "react-bootstrap"
function App() {
  return (
    <div className="App">
      
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyGym</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1 className='titre'>Welcome to MyGym</h1>
      <Carousel className='car'>
      <Carousel.Item>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>get bigger or go home</h3>
          <p>we always here for you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>summer body</h3>
          <p>this is where summer body is made</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1557564437-0995702f88fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        

        <Carousel.Caption>
          <h3>Welcome to MyGym</h3>
          <p>
           It's your second home here
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='mot'>
    <img
          className="imag8"
          src="https://www.california-gym.com/wp-content/uploads/2019/09/imc2.png"
          alt="Third slide"
        />
        <div className='ppp'> <h2>UN OBJECTIF A ATTEINDRE?</h2> 
<p className='para'> Quel que soit votre parcours, votre objectif d’entraînement ou votre niveau de pratique, vous trouverez des activités qui vous aideront à atteindre votre but.</p>

</div>
</div>
<div className='carddd'>
<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.california-gym.com/wp-content/uploads/2020/07/perdre-du-poids-VF1.jpg" />
        <Card.Body>
        <Card.Title>Perdre du poids</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.california-gym.com/wp-content/uploads/2020/03/se-de%C2%A6%C3%BCfouler-2-min.png" />
        <Card.Body>
        <Card.Title>Défouler</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.california-gym.com/wp-content/uploads/2020/03/se-muscler-2-min.png" />
        <Card.Body>
        <Card.Title>Se muscler</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default App;
