import React from 'react'
import { 
    ItemMap,
    Container
} from './style'

const ItemList = (props) => {
    props.props.items.sort((a,b) => ((
        a.average_red + a.average_green + a.average_blue
    )>(
        b.average_red + b.average_green + b.average_blue
    )) ? 1 : -1)
    const theItems = props.props.items.map((e,i,array)=>{
        const r = e.average_red
        const g = e.average_green
        const b = e.average_blue
        return(
            <ItemMap 
                 key={e.image.replace(/^.+token=/,'')}
                color={`rgb(${r},${g},${b})`}
            >
            <p>
                {e.description}
            <br/>
               located in {e.bin.size}
            <br/>
                added by {e.bin.userId.username}
            </p>
            <img src = {e.image} alt={e.description} 
            />
            </ItemMap>
        )
    })
    console.log(props.props.items, '<-- items in itemslist')
    
    return(
        <Container>
            GET AWAY FROM MY STUFF<br/>
            {theItems}
        </Container>
    )
}

export default ItemList
