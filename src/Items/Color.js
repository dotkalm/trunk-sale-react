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
            x = +xY[0] +1
            y = +xY[1] +1
        }
        let r = null;
        let g = null;
        let b = null;
        const rgbColors = e.replace(/.+\t/,'').replace(/\(|\)/g,'')
        if(rgbColors !== ''){
            const rgb = rgbColors.split(', ') 
            r = +rgb[0];
            g = +rgb[1];
            b = +rgb[2];
            console.log(r,g,b)
        }
        console.log(r,g,b)
        
        return(
        <GridColors
            key={i} 
            column={x} 
            row={y}
            color={`rgb(${r},${g},${b})`}
            >
            {coordinates !== null ? ` ` : ''}
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
