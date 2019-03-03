import React from 'react';
import styled from 'styled-components';

import Nabvar from './Navbar/Navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
library.add(faHome)
library.add(faIgloo)
library.add(faKeyboard)
library.add(faAddressCard)

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    height: 40%;
`;

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
`;

const Paragraph = styled.p`
    color: black;
    font-size: 1rem;
`;

const Link = styled.a`
    color: #00a8e8;
`;

const App = () => (
    <Container>
        <Wrapper>
            <Title>
                <span role="img" aria-label="Bolt">
                    ⚡
                </span>{' '}
                React Bolt
            </Title>
            <Paragraph>The most simple and robust React boilerplate.</Paragraph>
            <Nabvar name="asd"></Nabvar>  
            <Paragraph>
                Read the article{' '}
                <Link href="soon" target="_blank">
                    here.
                </Link>
              
            </Paragraph>
        </Wrapper>
    </Container>
);

export default App;
