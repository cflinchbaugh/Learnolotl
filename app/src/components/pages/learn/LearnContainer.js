import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createCard } from '../../../actions/cardActions';
import { replaceCards } from '../../../actions/cardActions';
import { updateFileIds } from '../../../actions/cardActions';
import { replaceFileIds } from '../../../actions/cardActions';
import { updateMode } from '../../../actions/cardActions';
import { updateModeOptions } from '../../../actions/cardActions';
import { updateFormat } from '../../../actions/cardActions';
import NavigationArrow from 'buttons/NavigationArrow';

import Listing from 'listings/Listing';
import Learn from './Learn';

class LearnContainer extends Component {
    constructor(props) {
        super(props);

        this.handleFileUpload = this.handleFileUpload.bind(this);
        this._handleModeChange = this._handleModeChange.bind(this);
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
                
                this.props.updateFormat(uploadedCardData.format);
                this.props.updateModeOptions(updatedModeOptions);
                this.props.updateMode(updatedModeOptions[0].id);
                this.props.updateFileIds(updatedUploadedIds);
                this.props.createCard(updatedCardData.fileDataArr);

            } else {
                if (window.confirm("Replace uploaded cards with new format?")) {
                    updatedUploadedIds = [updatedCardData.fileId];

                    this.props.updateFormat(uploadedCardData.format);
                    this.props.updateMode(updatedModeOptions[0].id);
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
        let stringifiedCurrentFormat = JSON.stringify(this.props.format),
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
       
        this.props.updateModeOptions(updatedModeOptions);
        this.props.updateMode(updatedModeOptions[0].id);
    }

    render() {
        let fileListing = this.props.sampleData ? 
                (
                    <div>
                        Learn Japanese (Sample Data)
                    </div>
                ) :
                <Listing />,
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
                    options: this.props.modeOptions,
                    handleChange: this._handleModeChange,
                    selected: this.props.mode
                },
                linkData: {
                    to: {
                        pathname: '/learn/flashcards',
                        state: {
                            mode: this.props.mode
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
                        mode: this.props.mode
                    }    
                }}>
                    <NavigationArrow type="next"/>
                </Link>
            </div>
        );
    }

    _handleModeChange(e) {
        let updatedMode = e.currentTarget.value;

        this.props.updateMode(updatedMode);
    }

   
}


const mapStateToProps = state => ({
    items: state.cards.items,
    uploadedIds: state.cards.uploadedIds,
    sampleData: state.cards.sampleData,
    mode: state.cards.mode,
    modeOptions: state.cards.modeOptions,
    format: state.cards.format

});

export default connect(mapStateToProps, { createCard, replaceCards, updateFileIds, replaceFileIds, updateMode, updateModeOptions, updateFormat })(LearnContainer);