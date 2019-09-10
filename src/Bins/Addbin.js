import React, { Component } from 'react'

class Postbin extends Component {
    state = {
        size: '',
        uid: '',
        userId: '',
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
        data.append('size', this.state.size);
        data.append('userId', this.props.userId)
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
                    <input placeholder='size' type='text'
                        name='size' 
                        onChange={this.handleChange}/>
                    <button type='submit'>Add Bin</button>
                </form>
            </div>
        )
    }

}
export default Postbin
