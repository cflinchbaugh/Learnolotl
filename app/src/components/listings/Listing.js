import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
    padding: 10px 20px;

    .listing-item {
        margin-bottom: 15px;
    }
`;

export class Listing extends Component {    
    _processIdListing(uploadedIds) {
        return uploadedIds.map(function(uploadedId, idx) {
            let listingItem = (
                <div key={idx}
                    className="listing-item">
                    { uploadedId }
                </div>
            );
            
            return listingItem;
        }, this);
    }
    
    render() {
        let idListing = this._processIdListing(this.props.uploadedIds);

        return (
            <StyleWrapper>
                {idListing}
            </StyleWrapper>
        )
    }

}

const mapStateToProps = state => ({
    uploadedIds: state.cards.uploadedIds
});

export default connect(mapStateToProps, { })(Listing);