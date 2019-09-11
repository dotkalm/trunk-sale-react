import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
//import cryptoRandmString from 'crypto-random-string'

class AddItem extends Component {
    state = {
        image: {},
        location: '',
        description: '',
        link: '',
        bin: 1,
        bins: this.props.bins
    }
    handleChange = (e) => {
        if(e.target.name !== 'image'){
        this.setState({[e.target.name]: e.target.value});
        } else {
        this.setState({image: e.target.files[0]});
      }
    }
    
    uploadImage = async (e) => {
        const cryptoRandomString = require('crypto-random-string')
        const filename = `${cryptoRandomString({length: 10, characters: '1234567890'})}`
        const { image } = this.state
        const fileExtension = image.name.replace(/^\w+(-?)(\w?)+/,'')
        console.log(`${filename}${fileExtension}`)
        e.preventDefault()
        this.props.firebase.storage.ref('trunk/').child(`${filename}${fileExtension}`).put(image)
            .then(file => file.ref.getDownloadURL())
            .then(url => {
                this.sqlUpload(url)
        })
        
    }
    sqlUpload = async (url) => {
        //e.preventDefault();
        this.setState({link: url})
        console.log(this.state.link, 'state inside of sqlUpload function')
        const data = new FormData();
        data.append('file', this.state.image);
        data.append('description', this.state.description);
        data.append('image', this.state.link);
        data.append('price', 12.12);
        data.append('bin', this.state.bin)
        const registerCall = this.props.addItemSql(data);
        registerCall.then((data) => {
            if(data.status.message === 'success'){
                
             } else {
                 console.log(data, 'error message')
             }
         })
    }
   
    render(){
         //map out drop down to select bin
         const theBins = this.props.bins.filter(
             bin => {
                return bin.userId.id === this.props.id
             }).map((e,i,array)=>{
             console.log(e, 'e in add item bin map')
             return(
                     <option key={e.size} value={e.id}>
                        {e.size}
                    </option>
                )
        })
    console.log(this.state, '<---- this.state')
        return(
            <div>
                <form onSubmit={this.uploadImage}>
                    Bin Details: <br/>
                    <select name='bin' onChange={this.handleChange}> 
                        {theBins}
                    </select>
                    <input placeholder='description' type='text'
                        name='description' 
                        onChange={this.handleChange}/>
                    
                    <input name='image' type='file' 
                        onChange={this.handleChange}/>
                    <button type='submit'>gotcha</button>
                </form>
            </div>
        )
    }

}
export default withFirebase(AddItem)
