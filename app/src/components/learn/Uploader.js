import React, { Component } from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    display: inline-block;
    overflow: hidden;
    background: red;
    width: 50px;

    input {
        opacity: 0;
    }
`

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

                    let parsedData = this._validateJSON(e.target.result),
                        processedUploadData;
                        
                    if (parsedData) {
                        processedUploadData = {
                            fileId: parsedData.id,
                            fileDataArr: parsedData.results,
                            format: parsedData.format
                        };
                        
                        this.props.handleFileUpload(processedUploadData);
                    }   
                }
                             
                reader.readAsText(file, "UTF-8");
            })(files[i]);
        }
    }

    _validateJSON(data) {
        try {
            let parsedData = JSON.parse(data);
            
            return parsedData;
        } catch(e) {
            
            alert('Invalid file upload!  File must be valid .json.  File ignored.');
            
            return null;
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="file" 
                    name="file" 
                    label="Uploader"
                    onChange={(e)=>this.handleFileUpload(e)} 
                    multiple="multiple"/>
            </div>
        );
    }
}

export default Uploader;