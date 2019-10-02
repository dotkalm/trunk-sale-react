import { withFirebase } from '../Firebase'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { 
    ItemMap,
    Container,
    ItemPadding
} from './style'

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
        const r = e.average_red
        const g = e.average_green
        const b = e.average_blue
       // let img = ''
        //const fileURL = `trunk/${e.fileName1}_200x200${e.fileName2}`
        // const path = async => {
        //     try{
        //         if(thumb[i] === undefined ){
        //             props.firebase.storage.ref(fileURL).getDownloadURL()
        //                 .then(promises => {
        //                     setThumb({...thumb,[e.description]: promises}) 
        //                  console.log(thumb[i])
        //             })
        //         }  
        //        // else if (!thumb[i].match(/^https.*/)){
        //          // props.firebase.storage.ref(fileURL).getDownloadURL()
        //            //     .then(promise => {
        //              //    console.log(promise)
        //          //  })
        //        // }
        //         // props.firebase.storage.ref(fileURL).getDownloadURL()
        //          //   .then(promise => {
        //            //     console.log(promise)
        //            // })
        //     } catch(err){
        //         console.log(err)
        //     }
        // }
        // path()
        return(
            <ItemPadding
                key ={`ItemPadding_${i}`}
                color ={`rgb(${r},${g},${b})`}>
            <ItemMap 
                key={`ItemMap_${i}`}
                color={`rgb(${255-r},${255-g},${255-b})`}>
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

export default withFirebase(ItemList)
