import React, { useState } from 'react'
import { 
    ItemMap,
    Container,
    ItemPadding
} from './style'

const ItemList = (props) => {
    const [item, setItem] = useState(0)

    const deleteItem = (e) => {
        e.preventDefault()
        props.deleteItem(item)
    }
    console.log(props)
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
            <ItemPadding
                key ={`ItemPadding_${i}`}
                color ={`rgb(${r},${g},${b})`} >
            <ItemMap 
                key={`ItemMap_${i}`}
                color={`rgb(${255-r},${255-g},${255-b})`} >
                {e.description}
            <br/>
               located in {e.bin.size}
            <br/>
            {(props.userId === e.bin.userId.id) ? 
            <form onSubmit={deleteItem}>
                <button type='submit'
                onClick={() => setItem(e.id)}>
                    delete
                </button>
            </form>
            : null}
                
                added by {e.bin.userId.username}
        
            </ItemMap>
            </ItemPadding>
        )
    })
    
    return(
        <Container>
            GET AWAY FROM MY STUFF<br/>
            {theItems}
        </Container>
    )
}

export default ItemList
