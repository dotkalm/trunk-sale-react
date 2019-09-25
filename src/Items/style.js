import styled from 'styled-components'

export const ItemPadding = styled.div`
    padding: 1rem;
    background-color: ${props => props.color ? props.color :"blue"}
`

export const ItemMap = styled.div`
    height: 4rem;
    padding: 1rem; 
    display: flex;
    background-color: ${props => props.color ? props.color :"blue"};
    img{
        height: 98%
        margin: 0 auto;
    }

`
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
