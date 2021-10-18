import React from 'react'
import styled from "styled-components";
import img from "../Assests/card-back.svg";


const Comp4 = () => {
    return (
     <Container>
         <Wrapper>
             <Content>
                 <Text>DIVE INTO THE DETAILS</Text>
                 <Title>Cards contain everything you need</Title>
                 <Desc>Trello cards are your portal to more organized work—where every 
                     single part of your task can be managed, tracked, and shared with teammates. 
                     Open any card to uncover an ecosystem of checklists, due dates, attachments, 
                     conversations, and more.</Desc>
                 <Sub>
                 <Span>+</Span>
                 <P>Learn more</P>
                 </Sub>
             </Content>
             <ImageHolder>
                 <Image src={img} />
             </ImageHolder>
         </Wrapper>
     </Container>
    )
}

export default Comp4;

const Container = styled.div`
width: 100%;
height: 50%;
min-height: 50vh;
background-color: #FFFFFF;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-around;
padding-top: 100px;
align-items: center;
`;
const Content = styled.div`
width: 500px;
height: 500px;
font-family:"charlie display";
padding-left: 50px;
margin-left: 50px;

`;
const Text = styled.div`
font-size: 15px;
font-weight: 600;
margin-bottom: 10px;
`;
const Title = styled.div`
font-size: 33px;
font-weight: 700;
`;
const Desc = styled.div`
font-size: 20px;
font-weight: 400;
line-height: 1.5;
margin-bottom: 15px;
color: grey;
`;

const Sub = styled.div`
//font-size: 25px;
//font-weight: bold;
display: flex;
align-text: center;

`;
const Span = styled.div`
font-size: 18px;
`;

const P = styled.div`
font-size: 25px;
font-weight: bold;
margin-left: 3px;

:hover{
    text-decoration: underline;
    cursor: pointer;
}
`;

const ImageHolder = styled.div`
width: 500px;
height: 500px;
padding-top: -300px;

`;
const Image = styled.img`
width: 440px;
height: 500px;
object-fit- cover;
margin-top: -90px;
margin-right: 70px
`;