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
   // console.log(props)
    props.props.items.sort((a,b) => ((
        a.average_red + a.average_green + a.average_blue
    )>(
        b.average_red + b.average_green + b.average_blue
    )) ? 1 : -1)
    const theItems = props.props.items.map((e,i,array)=>{
        const color = e.color
        const bgColor = getColor(color) 
        const fileURL = `trunk/${e.fileName1}_200x200${e.fileName2}`
        const path = async () => {
                 if(e.thumb === 'placeholder' ){
                     let thumbURL = props.firebase.storage.ref(fileURL).getDownloadURL()
                         .then(promises => {
                         console.log(promises,typeof(promises))
                             return promises
                         })
                     let myThumbURL = await thumbURL
                     console.log(myThumbURL, 'thumburl')
                 }
               }
        path()
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
               <img src = {e.image} 
                   alt={e.description}/>  
            </ItemMap>
            {bgColor}
            </ItemPadding>
        )
    })
    const urlObj = async () => {
        let thumbURLs = await theItems 
    } 
    return(
        <Container>
            GET AWAY FROM MY STUFF<br/>
            {theItems}
        </Container>
    )
}

export default withFirebase(ItemList)
