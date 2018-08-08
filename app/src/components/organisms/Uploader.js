import React, { Component } from 'react';

class Uploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultData: true
        }
    }

    handleFileUpload(e) {
        let files = e.target.files,
            i = 0;

        for ( ; i < files.length; i++) { //for multiple files          
            ( (file) => {
                let reader = new FileReader();

                reader.onload = (e) => {
                    // Async code, as files complete loading we handle them individually,
                        // do not try to aggregate, just handle the new file
                        // by parsing it, grabbing the results, and sending the data up

                    let fileDataArr = JSON.parse(e.target.result).results;

                    this.props.handleFileUpload(fileDataArr);
                }
                             
                reader.readAsText(file, "UTF-8");
            })(files[i]);
        }
    }

    render() {
        return (
            <div>
                <h1>Uploader</h1>

                <input 
                    type="file" 
                    name="file" 
                    onChange={(e)=>this.handleFileUpload(e)} 
                    multiple="multiple"/>
            </div>
        );
    }
}

export default Uploader;