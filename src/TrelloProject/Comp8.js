import React from 'react'
import styled  from 'styled-components';

const Comp8 = () => {
    return (
        <Container>
        <Wrapper>
        <Card >
        <Image />
        <Text>Sign up and get 
            started with Trello 
            today. A world of productive
             teamwork awaits!</Text>
              <InputHolder>
                <Input placeholder="Email" />
                <Button>Sign up</Button>
                </InputHolder>
        </Card>
        <Sub>
        <Text1></Text1>
        <Image1 />
        <Image2 />
        </Sub>
        </Wrapper>
        </Container>
    )
}
export default Comp8;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
`;
const Wrapper = styled.div`
dispaly: flex;
justify-content: center;
align-items: center;
padding-left: 150px;
`;
const Card = styled.div`
width: 90%;
height: 70%;
min-height: 50vh;
background-image: url(https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/sign-up/95ae6a1535b6504e3572dc7393a2d482/background.svg),
linear-gradient(0deg, #4c9aff,#4669CD, #403294 100%);
color: white;
border-radius: 5px;
`;
const Image = styled.img`

`;
const Text = styled.div`
Font-size: 25px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
padding-top: 70px;
padding-left: 40px;
line-spacing: 1;
font-family: inherit;
`;
const InputHolder = styled.div`
display: flex;
align-items: center;
padding-left: 200px;
padding-top: 50px;


`;
const Input = styled.input`
width: 380px;
height: 45px;
border: 1px solid gray;
border-radius: 6px;
padding-left: 5px;
font-family: inherit;
outline: none;
border: 1px solid powderblue;


::placeholder {
    padding-left: 3px;
    font-size: 18px;
}

`;
const Button = styled.button`
width: 180px;
height: 50px;
border-radius: 5px;
font-size: 20px;
font-weight: 400;
background-color: #4C96FB;
margin-left: 10px;
font-family: inherit;
outline: none;
border: 0;
color: white;
border-color: #0098B3;
line-height: 1.5;


:hover{
    cursor: pointer;
    background-color: #0098B3;

}
`;

const Sub = styled.div``;
const Text1 = styled.div``;
const Image1 = styled.img``;
const Image2 = styled.img``;