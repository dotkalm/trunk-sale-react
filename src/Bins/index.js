import React, { Component } from 'react'
import Addbin from './Addbin'
import Binlist from './Binlist'
import Items from '../Items'

class Bins extends Component {
    state = {
        bins: [],
    }
    async componentDidMount(){
        const allBins = await this.getBins();
        console.log(allBins, 'all bins')
             this.setState({
               bins:[...allBins]
          })
        this.props.binCall(this.state.bins, '<--- bins/index')
    }

    getBins = async () => {
        try {
            const responseGetBins = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/api/v1/bins/`, {   
                credentials: 'include',
                method: 'GET'
            })
            if(responseGetBins.status !== 200){
                throw Error('404 from server');
            }
            const binResponse = await responseGetBins.json()
            console.log(binResponse)
            return binResponse.data
        } catch(err){
            console.log(err, '<- get bin error')
            return err
        }
    }
    
    addBin = async (data) => {
        try {
            const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/bins/`, {
                 method: 'POST',
                 credentials: 'include',
                 body: data,
                 headers: {
                    'enctype': 'multipart/form-data'
                 }
            })
            const parsedResponse = await registerResponse.json();
            this.setState({
                bins: [...this.state.bins, parsedResponse.data]  
            })
            this.props.binCall(this.state.bins)
            return parsedResponse;
        }   catch(err){
            return err
        }
    }
    
    render(){
        return(
            <div>
               Add Bins 
                <Addbin addBin={this.addBin} 
                    uid={this.props.uid}
                    bins={this.state.bins}
                    userId={this.props.userId}/>
            </div>
        )
    }

}
export default Bins
