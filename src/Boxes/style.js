import styled from 'styled-components'
export const Headline = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap');   
    font-family: 'Kaushan Script', cursive;
    @media screen and (max-width: 1400px) {
        font-size: 3rem
    }
    @media screen and (max-width: 700px) {
        font-size: 2rem
    }
    @media screen and (max-width: 400px) {
        font-size: 1ree
    }

    `
export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-image: linear-gradient(to bottom right, dodgerblue, pink, yellow);
`
export const MapItems = styled.div`
    @media screen and (max-width: 1400px) {
        transform: translate(37rem, -29rem);
    }
    @media screen and (max-width: 900px) {
        transform: translate(26rem, -23rem);
    }
    @media screen and (max-width: 750px) {
        transform: translate(19rem, -17rem);
    }
    @media screen and (max-width: 600px) {
        transform: translate(14rem, -14rem);
        font-size: 0.75rem;
    }
    @media screen and (max-width: 400px) {
        transform: translate(8rem,-11rem);
        font-size: 0.65rem;
    }
    background-color: ${props => props.color ? props.color :"blue"};
    margin-top: .2rem
`

export const ItemsInBoxDiv = styled.div`
    display: grid | inline-grid 
`

export const BoxStyle = styled.div`
    width: 50%;
    height: 100%
    margin: 0 auto;

        svg{
            animation-name: box;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            @media screen and (max-width: 600px) {
            }
            
        }
        @keyframes box {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(.95);
            }
            100% {
                transform: scale(1);
            }

        }

`
