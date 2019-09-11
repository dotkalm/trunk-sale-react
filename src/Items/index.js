import React, { Component } from 'react'
import AddItem from './AddItem'
import Bins from '../Bins'
import SignIn from '../SignIn'
// import UploadImage from './Upload'
import ItemList from './ItemList'

class Items extends Component {

    state = {
        items: [],
        bins: []
    }

    async componentDidMount(){
        const allItems = await this.getItems();

        this.setState({
          items: [...allItems]
        })
    }

    binCall = async (binList) => {
        this.setState({
            bins: [...binList]
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
            <div key='1'>
             Things In My Car That I Want To Sell 
            welcome {this.props.username}
                <SignIn signIn={this.props.signIn}/>
                <AddItem id={this.props.userId}
                    bins={this.state.bins}
                    addItemSql={this.addItemSql}/>
                <Bins uid={this.props.uid} 
                        username={this.props.username}
                        binCall={this.binCall}
                        userId={this.props.userId}
                />
                <ItemList props={this.state}/>
            </div>
        )
    }

}
export default Items
