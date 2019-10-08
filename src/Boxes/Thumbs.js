import React, { useState, useEffect } from 'react'

const GetThumb = (props) => {
    console.log(props, 'thumb url');
    const [data, setData] = useState('ok');
    useEffect(() => {
        fetch(
       `${process.env.REACT_APP_BACKEND_URL}/api/v1/items/`,
              {
                credentials: 'include',
                method: "GET",
              }
        )
 
    })
    
    return 'hi'

}

export default GetThumb
