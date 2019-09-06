import React, { Component } from 'react'

class Postbin extends Component {
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
    handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', this.state.image);
        data.append('description', this.state.description);
        data.append('location', this.state.location);
        data.append('price', 12.12);
        const registerCall = this.props.addBin(data);
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
                <form onSubmit={this.handleSubmit}>
                    Bin Details: <br/>
                    <input placeholder='location' type='text' name='location'
                        onChange={this.handleChange}/>
                    <input placeholder='description' type='text'
                        name='description' 
                        onChange={this.handleChange}/>
                    <input name='image' type='file' 
                        onChange={this.handleChange}/>
                    <button type='submit'>POST</button>
                </form>
            </div>
        )
    }

}
export default Postbin
