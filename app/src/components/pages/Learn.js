import React, { Component } from 'react';
import Uploader from 'organisms/Uploader';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createCard } from '../../actions/cardActions';
import { updateFileIds } from '../../actions/cardActions';
import PropTypes from 'prop-types';
import Listing from 'molecules/Listing';
import Select from 'atoms/formElements/Select';

class Learn extends Component {
    constructor(props) {
        super(props);

        this.handleFileUpload = this.handleFileUpload.bind(this);
        this._handleModeChange = this._handleModeChange.bind(this);

        this.state = {
            modeOptions: [{
                id: 'english',
                value: 'English'
            }, {
                id: 'romaji',
                value: 'Romaji'
            }, {
                id: 'hiragana',
                value: 'Hiragana'
            }],
            mode: 'english'
        }
    }

    handleFileUpload(uploadedCardData) {
        let updatedCardData = uploadedCardData;

        // Determine if file was already added to avoid duplicates
        if (this.props.uploadedIds.indexOf(updatedCardData.fileId) === -1) {
            //Pushes new value into array immutably, necessary for the changes to trigger a render
            let updatedUploadedIds = [...this.props.uploadedIds, updatedCardData.fileId];  

            this.props.updateFileIds(updatedUploadedIds);
            this.props.createCard(updatedCardData.fileDataArr);

            this._updateMode(updatedCardData.format)
            
        } else {
            console.warn('File skipped because it was previosly added');
        }

    }

    _updateMode(formatData) {
        let updatedModeOptions = [];
        
        for (var property in formatData) {
            updatedModeOptions.push({
                id: formatData[property],
                value: formatData[property]
            });
        }
        
        this.setState({
            modeOptions: updatedModeOptions,
            mode: updatedModeOptions[0].id
        });
    }

    _mergeCardData(updatedCardData) {
        let mergedData = this.state.cardData,
            i = 0;

        for ( ; i < updatedCardData.length; i++) {
            mergedData.push(updatedCardData[i]);
        }

        return mergedData;
    }

    render() {
        let uploaderData = {
                handleFileUpload: this.handleFileUpload
            },
            fileListing = this.props.sampleData ? <div>Sample Data</div> : <Listing {...this.state} />,
            modeSelectData = {
                label: 'Mode',
                id: 'mode',
                options: this.state.modeOptions,
                handleChange: this._handleModeChange
            }

        return (
            <div>
                <Uploader {...uploaderData} />

                {fileListing}

                <Select {...modeSelectData} />
                
                <Link to={{
                    pathname: '/learn/flashcards',
                    state: {
                        mode: this.state.mode
                    }    
                }}>
                    Flashcards
                </Link>
            </div>
        );
    }

    _handleModeChange(e) {
        let updatedMode = e.currentTarget.value;
console.log(updatedMode);
        this.setState({
            mode: updatedMode
        });
    }

   
}


const mapStateToProps = state => ({
    items: state.cards.items,
    uploadedIds: state.cards.uploadedIds,
    sampleData: state.cards.sampleData

});

export default connect(mapStateToProps, { createCard, updateFileIds })(Learn);