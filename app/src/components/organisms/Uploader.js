import React, { Component } from 'react';

class Uploader extends Component {
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

                    let parsedData = JSON.parse(e.target.result),
                        processedUploadData = {
                            fileId: parsedData.id,
                            fileDataArr: parsedData.results
                        };

                    this.props.handleFileUpload(processedUploadData);
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