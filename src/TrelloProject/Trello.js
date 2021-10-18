import React from 'react'
import HeaderNav from "./HeaderNav"
import HeroComp from './HeroComp'
import Comp4 from "./Comp4";
import styled from 'styled-components'
//import Comp8 from "./Comp8";

const Trello = () => {
    return (
        <Container>
            <Wrapper>   
                <HeaderNav /> 
                <HeroComp />
                <Comp4 />
                 {/*<Comp8 />*/ }
            </Wrapper>
        </Container>
    )
}

export default Trello

const Wrapper = styled.div``;

const Container = styled.div``;