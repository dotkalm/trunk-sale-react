import { withFirebase } from '../Firebase'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { 
    ItemMap,
    Container,
    ItemPadding
} from './style'
import getColor from '../Items/Color'

const ItemList = (props) => {

    const [item, setItem] = useState(0)
    const [thumb, setThumb] = useState({})
    const deleteItem = (e) => {
        e.preventDefault()
        props.deleteItem(item)
    }
        for(let i=0;i<props.props.items.length;i++){
             const tool = props.props.items[i]
             const fileURL = `trunk/${tool.fileName1}_200x200${tool.fileName2}`
             if(thumb[tool.fileName1] === undefined){
                 let thumbURL = props.firebase.storage.ref(fileURL).getDownloadURL()
                     .then(promises => {
                     setThumb(thumb => {
                         return {...thumb,[tool.fileName1]:promises}
                     })
                      })
             }
        }
        const theItems = props.props.items.map((e,i,array)=>{
            const color = e.color
            
        return(
            <ItemPadding
                key ={`ItemPadding_${i}`}
                >
            <ItemMap 
                key={`ItemMap_${i}`}
                >
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
            {thumb[e.fileName1] ? <img src = {thumb[e.fileName1]} 
                   alt={e.description}/> : <img src = {e.image} 
                   alt={e.description}/> 
            
            } 
            </ItemMap>
            </ItemPadding>
        )
    })
    const urlObj = async () => {
        let thumbURLs = await theItems 
    } 
 console.log(thumb, 'state')
    return(
        <Container>
            GET AWAY FROM MY STUFF<br/>
            {theItems}
        </Container>
    )
}

export default withFirebase(ItemList)
