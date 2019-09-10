import React from 'react';

const Binlist = (props) => {
    const theBins = props.bins.map((e,i) => {
        console.log(e)
        return(
            <div key={i}>
           Bin #{e.id} <br/>size: {e.size}
            </div>
        )
    })
    return(
        <div>
            {theBins}
        </div>
    );

}

export default Binlist
