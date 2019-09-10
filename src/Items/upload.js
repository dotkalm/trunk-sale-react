import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
//import * as ROUTES from '../constants/routes'

const UploadImage = (props) => {
    return(
    <div> 
        <UploadImageForm fuerta={props} /> 
    </div>
    )
} 
class UploadImageFormBase extends Component {
    state = {
        image: {}
    }

    onSubmit = event => {
        event.preventDefault()
        const { image } = this.state
        this.props.firebase.put(image)
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input name='image' type='file'
            onChange={this.handleChange}/>
                <button type='submit'>Upload</button>
            </form>
        )
    }
}

const UploadImageForm = withRouter(
    withFirebase(UploadImageFormBase))

export default UploadImage
