import React, { Component } from 'react'
import Firebase, { FirebaseContext } from '../Firebase'

class AddItem extends Component {
    state = {
        image: {},
        location: '',
        description: ''
    }
    handleChange = (e) => {
        if(e.target.name !== 'image'){
        this.setState({[e.target.name]: e.target.value});
        } else {
        this.setState({image: e.target.files[0]});
      }
    }
    uploadImage = async (e) => {
        e.preventDefault()
   //     const storage = app.storage();
//        const storageRef = storage.ref();
//        const itemRef = storageRef.child('item.jpg')
//        const file = this.state.image
        console.log(this.props)
       // ref.put(file).then(function(snapshot){
         //   console.log('uploaded a file!');
       // })

    }
    handleSubmit = async () => {
        //e.preventDefault();
        const data = new FormData();
        data.append('file', this.state.image);
        data.append('description', this.state.description);
        data.append('location', this.state.location);
        data.append('price', 12.12);
        data.append('bin', 1)
        const registerCall = this.props.addItemSql(data);
        registerCall.then((data) => {
            if(data.status.message === 'success'){
            } else {
                console.log(data, 'error message')
            }
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.uploadImage}>
                    Bin Details: <br/>
                    <input placeholder='location' type='text' name='location'
                        onChange={this.handleChange}/>
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
export default AddItem
