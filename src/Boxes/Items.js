import { withFirebase } from '../Firebase'
import React, { useState, useContext, useEffect }  from 'react' 
import { MapItems, 
ItemsInBoxDiv} from './style' 
import GetColor from '../Items/Color'
import { ThemeContext } from 'styled-components';

const ItemsInBoxes = (props) => {
    const themeContext = useContext(ThemeContext);
    console.log('Current theme: ', themeContext)
    const [page, setPage] = useState(1);
    const [itemsInBoxes, setItemsInBoxes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [wasClicked, setWasClicked] = useState({})
    const [thumb, setThumb] = useState({})

    useEffect(() => {
        fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/items/`,
              {
                credentials: 'include',
                method: "GET",
              }
        )
      .then(res => res.json())
      .then(response => {
        setItemsInBoxes(response.data);
        setIsLoading(false);
        console.log(response.data)
      })
      .catch(error => console.log(error));
  }, [page]);
    
    const newArray = [...itemsInBoxes]
    const areaWasClicked = (theDiv) => {
        setWasClicked({...wasClicked, [theDiv]: true})
        console.log(theDiv)
    }

    return(
    <ItemsInBoxDiv>
        {newArray.map((e,i) => {
            const fileURL = `trunk/${e.fileName1}_200x200${e.fileName2}`
             if(thumb[e.fileName1] === undefined){
                 let thumbURL = props.firebase.storage.ref(fileURL).getDownloadURL()
                     .then(promises => {
                     setThumb(thumb => {
                         return {...thumb,[e.fileName1]:promises}
                     })
                      })
             }
            console.log(e.avgR,e.avgG,e.avgB)
            return (
                <MapItems key={i} 
                    color={`rgb(${e.avgR},${e.avgG},${e.avgB})`}>
                    {e.description} 
                    <br/>
                    <GetColor color={e.color}
                        description={e.description}
                        thumb={thumb[e.fileName1]}
                        areaWasClicked={areaWasClicked}
                        wasClicked={wasClicked}/>

                
                </MapItems>)
        })}    
    </ItemsInBoxDiv>
    )
}

export default withFirebase(ItemsInBoxes) 
