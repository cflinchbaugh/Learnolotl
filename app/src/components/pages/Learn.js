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
    }

    handleFileUpload(uploadedCardData) {
        let updatedCardData = uploadedCardData;

        // Determine if file was already added to avoid duplicates
        if (this.props.uploadedIds.indexOf(updatedCardData.fileId) === -1) {
            //Pushes new value into array immutably, necessary for the changes to trigger a render
            let updatedUploadedIds = [...this.props.uploadedIds, updatedCardData.fileId];  

            this.props.updateFileIds(updatedUploadedIds);
            this.props.createCard(updatedCardData.fileDataArr);
        } else {
            console.warn('File skipped because it was previosly added');
        }

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
                options: [{
                    id: 'english',
                    value: 'English'
                }]
            }

        return (
            <div>
                <Uploader {...uploaderData} />

                {fileListing}

                <Select {...modeSelectData} />
                
                <Link to={{pathname: '/learn/flashcards'}}>
                    Flashcards
                </Link>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    items: state.cards.items,
    uploadedIds: state.cards.uploadedIds,
    sampleData: state.cards.sampleData

});

export default connect(mapStateToProps, { createCard, updateFileIds })(Learn);