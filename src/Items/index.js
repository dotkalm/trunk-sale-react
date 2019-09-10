import React, { Component } from 'react'
import AddItem from './AddItem'
import Bins from '../Bins'
import SignIn from '../SignIn'
import UploadImage from './Upload'

class Items extends Component {
    state = {
        items: [],
    }
    async componentDidMount(){
        const allItems = await this.getItems();

        this.setState({
          items: [...allItems]
        })
    }

    getItems = async () => {
        try {
            const responseGetItems = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/api/v1/items/`, { 
                credentials: 'include',
                method: 'GET'
            })
            if(responseGetItems.status !== 200){
                throw Error('404 from server');
            }
            const itemResponse = await 
                responseGetItems.json()
            return itemResponse.data
        } catch(err){
            console.log(err, '<- get item error')
            return err
        }
    }
    
    addItemSql = async (data) => {
        try {
            const registerResponse = await 
                 fetch(`${process.env.REACT_APP_BACKEND_URL
                     }/api/v1/items/`, {
                 method: 'POST',
                 credentials: 'include',
                 body: data,
                 headers: {
                    'enctype': 'multipart/form-data'
                 }
            })
            const parsedResponse = await 
                registerResponse.json();
            this.setState({
                items: [...this.state.items, 
                    parsedResponse.data]  
            })

            return parsedResponse;
        }   catch(err){
            return err
        }
    }
    
    render(){
        return(
            <div>
                Add Items
                <SignIn signIn={this.props.signIn}/>
                <AddItem uid={this.props.uid} 
                    addItem={this.addItem}/>
                <Bins uid={this.props.uid} 
                        username={this.props.username}
                        userId={this.props.userId}
                />
                <UploadImage/>
            </div>
        )
    }

}
export default Items
