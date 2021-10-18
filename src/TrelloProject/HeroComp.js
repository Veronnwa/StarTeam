import React from 'react'
import styled from 'styled-components'
import img from "./img/hero.png"

const HeroComp = () => {
    return (
        <Container>
            <Wrapper>
            <Content>
                <Title>Trello helps teams move work forward.</Title>
                <Desc>
                Collaborate, manage projects, and reach new productivity peaks. 
                From high rises to the home office, 
                the way your team works is unique—accomplish it all with Trello.
                </Desc>
                <InputHolder>
                <Input placeholder="Email" />
                <Button>Sign up-it's free</Button>
                </InputHolder>
            </Content>
            <ImageHolder>
                <Image src={img} />
            </ImageHolder>
            </Wrapper>
        </Container>
    )
}

export default HeroComp


const Content = styled.div`
width: 600px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 100px;

`;
const Title = styled.div`
font-size: 35px;
font-weight: bold;
margin-bottom: 15px;
`;
const Desc = styled.div`
font-size: 18px;
font-weight: 600;
margin-bottom: 48px;
`;
const InputHolder = styled.div`
display: flex;
align-items: center;
`;
const Input = styled.input`
width: 320px;
height: 35px;
border: 1px solid gray;
border-radius: 6px;
padding: 5px;

::placeholder {
    padding-left: 10px;
    font-size: 18px;
}

`;
const Button = styled.button`
width: 250px;
height: 40px;
margin: 0 15px;
border: 0;
outline: none;
background-color: #0056d9;
color: white;
padding: 10px; 
border-radius: 6px;
font-size: 18px;
font-weight: 300;
text-align: center;

:hover{
    cursor: pointer;
    background-color: #0051CC;
}
`;
const ImageHolder  = styled.div`
width: 500px;
height: 600px;
`;
const Image = styled.img`
width: 460px;
height: 595px;
object-fit: cover;

`;
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 150px;
`;
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 90vh;
background-color: #eeebff;
`;
