import styled from 'styled-components'

export const GridDiv = styled.div`
    display: grid;
`

export const GridColors = styled.div`
    background-color: ${props => props.color ? props.color :"blue"};
    grid-column: ${props => props.column ? props.column :10};
    grid-row: ${props => props.row ? props.row :10};
    height: 40px;
    width: 40px;
}
`

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
