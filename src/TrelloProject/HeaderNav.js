import React from 'react'
import styled from 'styled-components'
import logo from "./img/star.jpg"

const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={logo} />
                <Navigation>
                    <Nav>Log In</Nav>
                    <Button>Sign Up</Button>
                </Navigation>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const Button = styled.button`
border: 0;
outline: none;
background-color: blue;
padding: 12px 11px;
color: #fff;
font-weight: bold;
border-radius: 5px;


:hover{
    cursor: pointer;
    background-color: #0051CC;     
}
`;

const Nav = styled.div`
margin-right: 15px;
color: #4CA7ED;
font-weight: bold;
transition: all 350ms;

:hover{
    text-decoration: underline;
    color: #006DDB;
    cursor: pointer;
}
`;

const Navigation = styled.div`
display: flex;
align-items: center;
margin: 0 20px;
`;

const Logo = styled.img`
width: 200px;
height: 60px;
object-fit: contain;
margin-left: 0 20px;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Container = styled.div`
width: 100%;
height: 80px;
background-color: #eeebff; 
position: fixed;
`;

