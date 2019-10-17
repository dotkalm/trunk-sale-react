import styled from 'styled-components'

export const GridDiv = styled.div`
    display: grid;
    box-shadow: 13px 14px 20px 0px rgba(0,0,0,1);
    img{
        width: 10rem;
        height: 7rem;
        position: absolute;
            @media screen and (max-width: 1400px) {
                width: 10rem;
                height: 7rem;
            }
            @media screen and (max-width: 600px) {
                width: 6rem;
                height: 4rem;
            }
            @media screen and (max-width: 400px) {
                width: 4rem;
                height: 2.8rem;
            }
        }
    @media screen and (max-width: 1400px) {
        width: 10rem;
        height: 7rem;
    }
    @media screen and (max-width: 600px) {
        width: 6rem;
        height: 4rem;
    }
    @media screen and (max-width: 400px) {
        width: 4rem;
        height: 2.8rem;
    }
    
`

export const GridColors = styled.div`
    background-color: ${props => props.color ? props.color :"blue"};
    grid-column: ${props => props.column ? props.column :10};
    grid-row: ${props => props.row ? props.row :0};
    height: 100%;
    width: 100%;
    position: relative;
}
`

export const ItemPadding = styled.div`
    padding: 1rem;
    background-color: ${props => props.color ? props.color :"red"}
`

export const ItemMap = styled.div`
    height: 4rem;
    padding: 1rem; 
    display: flex;
    background-color: ${props => props.color ? props.color :"purple"};
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
