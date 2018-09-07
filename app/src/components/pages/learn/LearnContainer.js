import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createCard } from '../../../actions/cardActions';
import { replaceCards } from '../../../actions/cardActions';
import { updateFileIds } from '../../../actions/cardActions';
import { replaceFileIds } from '../../../actions/cardActions';

import Listing from 'listings/Listing';
import Learn from './Learn';

class LearnContainer extends Component {
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
            mode: 'english',
            "format": {
                "0": "English",
                "1": "Romaji",
                "2": "Hiragana"
            }
        }
    }

    handleFileUpload(uploadedCardData) {
        let updatedCardData = uploadedCardData;

        // Determine if file was already added to avoid duplicates
        if (this.props.uploadedIds.indexOf(updatedCardData.fileId) === -1) {
            
            //Pushes new value into array immutably, necessary for the changes to trigger a render
            let updatedUploadedIds,
                updatedModeOptions = this._processMode(updatedCardData.format),
                formatValid = this._validateFormat(uploadedCardData);

            if (formatValid || this.props.sampleData) {
                updatedUploadedIds = [...this.props.uploadedIds, updatedCardData.fileId];
                
                this.setState({
                    modeOptions: updatedModeOptions,
                    mode: updatedModeOptions[0].id,
                    format: uploadedCardData.format
                });

                this.props.updateFileIds(updatedUploadedIds);
                this.props.createCard(updatedCardData.fileDataArr);

            } else {
                if (window.confirm("Replace uploaded cards with new format?")) {
                    updatedUploadedIds = [updatedCardData.fileId];

                    this.setState({
                        modeOptions: updatedModeOptions,
                        mode: updatedModeOptions[0].id,
                        format: uploadedCardData.format
                    });

                    this.props.replaceFileIds(updatedUploadedIds);
                    this.props.replaceCards(updatedCardData.fileDataArr);
                } else {
                    console.warn('File not uploaded');
                }
            }

        } else {
            console.warn('File skipped because it was previosly added');
        }
    }

    _validateFormat(uploadedCardData) {
        let stringifiedCurrentFormat = JSON.stringify(this.state.format),
            stringifiedUploadedFormat = JSON.stringify(uploadedCardData.format);

        return stringifiedCurrentFormat === stringifiedUploadedFormat;
    }

    _processMode(formatData) {
        let updatedModeOptions = [];
        
        for (var property in formatData) {
            updatedModeOptions.push({
                id: formatData[property],
                value: formatData[property]
            });
        }

        return updatedModeOptions;
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
        let fileListing = this.props.sampleData ? 
                <div>Sample Data</div> :
                <Listing {...this.state} />,
            learnData = {
                uploaderData: {
                    handleFileUpload: this.handleFileUpload
                },
                fileListingData: {
                    fileListing
                },
                modeSelectData: {
                    label: 'Mode',
                    id: 'mode',
                    options: this.state.modeOptions,
                    handleChange: this._handleModeChange
                },
                linkData: {
                    to: {
                        pathname: '/learn/flashcards',
                        state: {
                            mode: this.state.mode
                        }
                    }
                }
            }

        return (
            <div>
                <Learn {...learnData}/>
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

export default connect(mapStateToProps, { createCard, replaceCards, updateFileIds, replaceFileIds })(LearnContainer);