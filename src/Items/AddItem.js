import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
//import cryptoRandmString from 'crypto-random-string'


const binArray = []
class AddItem extends Component {
    state = {
        image: {},
        location: '',
        description: '',
        link: '',
        bin: 0,
        bins: this.props.bins,
        fileName: []
        
    }
    handleChange = (e) => {
        console.log(this.state)
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
        this.setState({fileName:[filename, fileExtension]})
        e.preventDefault()
        this.props.firebase.storage.ref('trunk/')
            .child(`${filename}${fileExtension}`)
            .put(image)
            .then(file => file.ref.getDownloadURL())
            .then(url => {
                this.sqlUpload(url)
               // this.getThumb(`${filename}_200x200${fileExtension}`)
            })
    }

    getThumb = async (file) => {
        console.log(file)
        console.log(this.state)
        const thumb = this.props.firebase.storage.ref('trunk/').child(file).getDownloadURL();
        console.log(thumb, 'thumb url');
    }
    sqlUpload = async (url) => {
        console.log(this.state);
        this.setState({link: url});
        const data = new FormData();
        data.append('file', this.state.image);
        data.append('description', this.state.description);
        data.append('image', this.state.link);
        data.append('price', 12.12);
        data.append('thumb','placeholder')
        data.append('fileName1', this.state.fileName[0])
        data.append('fileName2', this.state.fileName[1])
        if(this.state.bin === 0){
            data.append('bin', binArray[binArray.length -1])
            console.log(binArray)
        } else {
            data.append('bin', this.state.bin)
        }        
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
                  if (i === 0){
                    console.log(e)
                    binArray.push(e.id)
                  }
             return(
                     <option key={e.size} value={e.id} >
                        {e.size}
                    </option>
                )
        })
        return(
            <div>
                <form onSubmit={this.uploadImage} >
                    Items: <br/>
                    <select name='bin' onChange={e => 
                        this.setState({bin:+e.target.value})}> 
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
