import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../constants/routes'

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
        const { } = this.state
        event.preventDefault()
        this.props.firebase.put(file)
    }
    render(){
        return(
        <div>
            HELLO u
        </div>
        )
    }
}

const UploadImageForm = withRouter(withFirebase(UploadImageFormBase))

export default UploadImage
