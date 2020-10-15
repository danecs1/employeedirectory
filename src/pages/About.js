import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';


function About() {
    return (
        <div>
            <Hero backgroundImage='https://source.unsplash.com/collection/190727/1600x900'>
                <h1>Employee Directory</h1>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Column size='md-12'>
                        <h1>Welcome To My Employee Directory</h1>
                        {/* </Column>
                </Row>
                <Row>
                    <Column size='md-12'>
                        <p>
                            This react app displays random users
                        </p>
                        <br></br>
                        <p>This project is built with</p>
                        <ul>
                            <li>React</li>
                            <li>Axios</li>
                        </ul> */}
                    </Column>
                </Row>
            </Container>
        </div>
    )
}


export default About;