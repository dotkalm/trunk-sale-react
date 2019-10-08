import React, { useState, useEffect } from 'react'
import { GridDiv, GridColors } from './style'

const getColor = (props) => {
    const colorsRaw = props.split(/\n/)
    const theColors = colorsRaw.map((e,i) => {
        const coordinates = e.match(/\d+, \d+/)
        let x = null;
        let y = null;
        if(coordinates !== null){
            const xY = coordinates[0].split(', ')
            console.log(xY)
            x = +xY[0]
            y = +xY[1]
        }
        return(
        <GridColors
            key={i} 
            column={x} 
            row={y}
            >
            {coordinates !== null ? `${x} .... ${y}` : ''}
        </GridColors>
        
        )
    })
        return(
        <GridDiv>
            {theColors}
        </GridDiv>
    
    )
}

export default getColor
