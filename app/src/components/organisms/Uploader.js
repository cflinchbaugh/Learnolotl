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
            reader = new FileReader();

        // TODO: Verify files[0] exists, 
        // I'm seeing errors if the user cancels the file explorer

        reader.readAsText(files[0]);

        reader.onload = (e)=> {
            let fileData = e.target.result,
                updatedCardData = this._buildMergedCardData(fileData);

            this.props.handleFileUpload(updatedCardData);
        }
    }

    _buildMergedCardData(fileData) {
        let mergedCardData = this.state.defaultData ? [] : this.props.cardData,
            parsedData;
        
        try {
            parsedData = JSON.parse(fileData);
            
            parsedData.results.map( (dataEntry, idx) => {
                mergedCardData.push(dataEntry);
            });
        } catch (error) {
            console.error("Invalid uploaded file, file content was not parsable JSON.  Full error: " + error);
        }

        this.setState((state) => {
            defaultData: false
        });

        return mergedCardData;
    }

    render() {
        return (
            <div>
                <h1>Uploader</h1>

                <input 
                    type="file" 
                    name="file" 
                    onChange={(e)=>this.handleFileUpload(e)} />
            </div>
        );
    }
}

export default Uploader;