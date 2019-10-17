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
        font-size: 1rem
    }

    `
export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-image: linear-gradient(to bottom right, dodgerblue, pink, yellow);
`
export const MapItems = styled.div`
    background-color: ${props => props.color ? props.color :"green"};
    // grid-column: ${props => props.pos ? props.pos :8};
    grid-auto-columns: auto;
    margin: 1rem;
    padding: .5rem;
    position: relative
`

export const ItemsInBoxDiv = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3,1fr);
    
    @media screen and (max-width: 1400px) {
        transform: translateY(-55rem);
    }
    @media screen and (max-width: 1200px) {
        transform: translateY(-45rem);
    }
    @media screen and (max-width: 1000px) {
        transform: translateY(-35rem);
    }
    @media screen and (max-width: 800px) {
        transform: translateY(-30rem);
    }
    @media screen and (max-width: 700px) {
        transform: translateY(-25rem);
    }
    @media screen and (max-width: 600px) {
        transform: translateY(-15rem);
    }
    @media screen and (max-width: 500px) {
        transform: translateY(-18rem);
    }
    @media screen and (max-width: 400px) {
        transform: translateY(-10rem);
    }
    @media screen and (max-width: 300px) {
        transform: translateY(-10rem);
    }
`

export const BoxStyle = styled.div`
    width: 70%;
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
