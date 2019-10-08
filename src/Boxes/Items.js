import Firebase from '../Firebase'
import React, { useState, useEffect }  from 'react' 
import { MapItems, 
ItemsInBoxDiv} from './style' 
import GetColor from '../Items/Color'

const ItemsInBoxes = (props) => {

    const [page, setPage] = useState(1);
    const [itemsInBoxes, setItemsInBoxes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
      })
      .catch(error => console.log(error));
  }, [page]);
    const newArray = [...itemsInBoxes]
   

    return(
    <ItemsInBoxDiv>
        {newArray.map((e,i) => {
            const r = e.average_red
            const g = e.average_green
            const b = e.average_blue
            return (
                <MapItems key={i} 
                    color={`rgb(${255-r},${g},${255-b},.4)`}
                    colorHover={`rgb(${255-r},${g},${255-b})`}
                    // pos={i}
                >
                
                    <br/>
                    <GetColor color={e.color}/>
                </MapItems>)
        })}    
    </ItemsInBoxDiv>
    )
}

export default ItemsInBoxes 
