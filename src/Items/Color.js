import React, { useState, useEffect } from 'react'
import { GridDiv, GridColors } from './style'
import { ThemeContext } from 'styled-components';

const getColor = (props) => {
    let alphaChannel = 1
    // add a css class that will change the opacity 
    const colorsRaw = props.color.split(/\n/)
    colorsRaw.pop()
    const clickEvent = (e) => {
        e.preventDefault()
        alphaChannel = 0
        props.areaWasClicked(e.target)
    }
    const theColors = colorsRaw.map((e,i,array) => {
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
            
        }
        const ixyrgb = `${i}${x}${y}${r}${g}${b}` 
        let styles = {}
        props.wasClicked[ixyrgb] ? 
            styles = {
                display: 'none'
            }
            : 
            styles={}                    
        return(
                        
        <GridColors
            id={ixyrgb}
            key={i} 
            column={x} 
            row={y}
            color={`rgb(${r},${g},${b},.95)`}
            style={styles}
            onMouseEnter={(e) => {
                props.areaWasClicked(e.target.id)
            }}>
           
            {coordinates !== null ? ` ` : ''}
        </GridColors>
        
        )
    })
        return(
        <GridDiv>
            {props.thumb !== undefined ? <img src ={props.thumb} alt={props.description}/> : null}

                        {theColors}
    
        </GridDiv>
    
    )
}

export default getColor
