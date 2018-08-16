import React, { Component } from 'react';
import Uploader from 'organisms/Uploader';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createCard } from '../../actions/cardActions';


class Learn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'none',
            defaultData: true
        }

        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(updatedCardData) {
        this.props.createCard(updatedCardData);
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
                
                <Link to={{
                    pathname: '/learn/flashcards',
                    state: {...this.state}
                    
                    }}>Flashcards</Link>
            </div>
        );
    }
}

export default connect(null, { createCard })(Learn);