import React from 'react'
import styled  from 'styled-components';
import img from "./img/app.png";
import img2 from "./img/gog.png";
import img3 from "./img/Alg.svg";

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
        <Text1>Trello also works great on your smaller screen.
         </Text1>
         <ImageHolder>
        <Image1 src={img}/>
        <Image2 src={img2}/>
        </ImageHolder>
        </Sub>
        <Button2>
        Englis(US)
        <Span>˅</Span>
        </Button2>
        <Row>
        <R1>Templates</R1>
        <R2>Pricing</R2>
        <R3>Apps</R3>
        <R4>Jobs</R4>
        <R5>Blog</R5>
        <R6>Developers</R6>
        <R7>About</R7>
        <R8>Help</R8>
        <R9>Legal</R9>
        <Rx>Cookie Settings</Rx>
        <Re>Privacy</Re>
        </Row>
        <ImageHolder3>
        <Image3 src={img3}/>
        </ImageHolder3>
        <Fin>© Copyright 2021. All rights reserved.</Fin>
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

const Sub = styled.div`
display: flex;
justify-content: center;
align-items: center;
//padding-top: 70px;
padding-left: 250px;
`;
const Text1 = styled.div`
font-size: 20px;
margin-right: -35px;
`;

const ImageHolder = styled.div`
padding-left: 20px;
padding: 55px;
cursor: pointer;


`;
const Image1 = styled.img`
width: 170px;
height: 60px;
border-radius: 3px;
padding-right: 10px;
`;
const Image2 = styled.img`
width: 160px;
height: 50px;
padding-bottom: 5px;
padding-top: 5px;
border-radius: 3px;
`;

const Button2 = styled.button`
width: 130px;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
line-spacing: 1px;
font-size: 15px;
appearance: none;
background-color: rgba(255,255,255,0.5);
border: 2px solid #EDEFF0;
color: #959DA1;
padding: .5em;
margin-left: 450px;
`;
const Span = styled.div`
font-size: 20px;
padding-left: 35px;
`;

const Row = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: Charlie Text, sans-serif;
line-height: 1.5;
padding-right: 120px;
padding-top: 23px;
background-color: ;
color: #8993A4;
text-decoration: underline;
cursor: pointer;

`;
const R1 = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}

`;
const R2 = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}

`;
const R3 = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}

`;
const R4 = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}

`;
const R5= styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}

`;
const R6 = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}

`;
const R7 = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}
`;
const R8 = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}
`;
const R9 = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}
`;
const Rx = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}
`;
const Re = styled.div`
font-size: 16px;
font-weight: 500;
padding-right: 25px;

:hover{
    color: black;
}
`;

const Fin = styled.div`
font-size: 18px;
font-weight: 400;
padding-left: 350px;

`;
const Image3 = styled.img`
width: 150px;
height: 50px;
object-fit: contain;
padding-right: -180px;
font-family: charlie text;
`;

const ImageHolder3 = styled.div`
padding-left: 420px;
padding-top: 5px;
padding-bottom: 8px;
`;