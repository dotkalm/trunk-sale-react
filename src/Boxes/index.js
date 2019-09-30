import React from 'react' 
import BoxSvg from './box'
import { Container, Headline } from './style'
import SignIn from '../SignIn'
import ItemsInBoxes from './Items'

const Boxes = (props) => {

    return(
        <Container>
           <Headline>Things In My Car That I Want To Sell</Headline>
            <SignIn signIn={props.signIn}/>
            <BoxSvg/>
            <ItemsInBoxes/>
            Look inside box 
        </Container>
    )

}

export default Boxes
