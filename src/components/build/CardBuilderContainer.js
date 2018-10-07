import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { updateFileName } from '../../actions/buildActions';
import { updateFormElementData } from '../../actions/buildActions';

import CardBuilder from './CardBuilder';


const StyleWrapper = styled.div`
`

export class CardBuilderContainer extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileIdChange = this.handleFileIdChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this._handleExportData = this._handleExportData.bind(this);

    }

    render() {
        let cardBuilderData = {
            formElementFactoryData: {
                handleInputChange: this.handleInputChange,
                formElementData: this.props.formElementData,
                formElements: this._buildFormElements(),
                ...this.props
            },
            nextCardButtonData: {
                label: 'Next Card',
                type: 'submit'
            },
            exportButtonData: {
                label: 'Download',
                type: 'next',
                onClickFunction: this._handleExportData
            },
            handleSubmitForm: this.handleSubmitForm
        }

        return (
            <CardBuilder {...cardBuilderData} />
        )
    }

    _handleExportData(e) {
        this.props.submitForm(this.props)
            .then( () => {
                this.props.exportFile();
            })
    }

    _buildFormElements() {
        let cardFormat = this.props.cardFormat,
            formElements = [];

        for (var propt in cardFormat) {
            formElements.push({
                type: 'input',
                data: {
                    id: 'revealOptionId',
                    label: cardFormat[propt],
                    placeholder: '',
                    value: ''
                }
            })
        }

        return formElements;
    }

    handleFileIdChange(e) {
        let updatedFileId = e.currentTarget.value;

        this.props.updateFileName(updatedFileId)
    }

    handleSubmitForm(e) {
        e.preventDefault();
        this.props.submitForm(this.props);
        
        //Clear formElementData
        this.props.updateFormElementData({});
    }


    handleInputChange(formElementData) {
        let mergedData = {...this.props.formElementData, ...formElementData}

        this.props.updateFormElementData(mergedData);
    }

}

const mapStateToProps = state => ({
    buildResults: state.build.results,
    formElementData: state.build.formElementData,
    fileName: state.build.fileName
});

export default connect(mapStateToProps, { updateFileName, updateFormElementData })(CardBuilderContainer);