import React, { Component } from 'react'
import Addbin from './Addbin'

class Bins extends Component {
    state = {
        bins: [],
    }
    async componentDidMount(){
        const allBins = await this.getBins();

        this.setState({
          bins: [...allBins]
        })
    }

    getBins = async () => {
        try {
            const responseGetBins = await fetch('http://localhost:8000/api/v1/', {   
                credentials: 'include',
                method: 'GET'
            })
            if(responseGetBins.status !== 200){
                throw Error('404 from server');
            }
            const binResponse = await responseGetBins.json()
            return binResponse.data
        } catch(err){
            console.log(err, '<- get bin error')
            return err
        }
    }
    
    addBin = async (data) => {
        try {
            const registerResponse = await fetch('http://localhost:8000/api/v1/', {
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

            return parsedResponse;
        }   catch(err){
            return err
        }
    }
    
    render(){
        console.log(this.state.bins)
        return(
            <div>
                HI EVERYONE
                <Addbin addBin={this.addBin}/>
            </div>
        )
    }

}
export default Bins
