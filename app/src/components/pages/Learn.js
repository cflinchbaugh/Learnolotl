import React, { Component } from 'react';
import Uploader from 'organisms/Uploader';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createCard } from '../../actions/cardActions';
import PropTypes from 'prop-types';
import Listing from 'molecules/Listing';

class Learn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'none',
            defaultData: true,
            uploadedIds: []
        }

        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(uploadedCardData) {
        let updatedCardData = uploadedCardData;

        // Determine if file was already added to avoid duplicates
        if (this.state.uploadedIds.indexOf(updatedCardData.fileId) === -1) {
            let updatedUploadedIds = this.state.uploadedIds;
                updatedUploadedIds.push(updatedCardData.fileId);

            this.setState({
                uploadedIds: updatedUploadedIds
            });
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
            handleFileUpload: this.handleFileUpload,
            cardData: this.state.cardData
        }

        return (
            <div>
                <Uploader {...uploaderData} />

                <Listing {...this.state} />
                
                <Link to={{
                    pathname: '/learn/flashcards',
                    state: {...this.state}
                    
                    }}>Flashcards</Link>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    items: state.cards.items
});

export default connect(mapStateToProps, { createCard })(Learn);