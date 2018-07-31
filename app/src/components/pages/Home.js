import React, { Component } from 'react';

class Home extends Component {

    handleFileUpload(e) {
        let files = e.target.files,
            reader = new FileReader();

        reader.readAsText(files[0]);

        reader.onload = (e)=> {
            console.log(e.target.result);
        }

        
    }
    render() {
        return (
            <div>
                <h1>Home</h1>

                <input 
                    type="file" 
                    name="file" 
                    onChange={(e)=>this.handleFileUpload(e)} />
            </div>
        );
    }
}

export default Home;