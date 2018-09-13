import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { updateFileName } from '../../actions/buildActions';
import { updateFormElementData } from '../../actions/buildActions';

import FormElementFactory from './FormElementFactory';
import Button from 'buttons/Button';


const StyleWrapper = styled.div`
`

class CardBuilder extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileIdChange = this.handleFileIdChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this._handleExportData = this._handleExportData.bind(this);

    }

    render() {
        let formElementFactoryData = {
                handleInputChange: this.handleInputChange,
                formElementData: this.props.formElementData,
                formElements: this._buildFormElements()
            },
            nextCardButtonData = {
                label: 'Next Card',
                type: 'submit'
            },
            exportButtonData = {
                label: 'Export File',
                type: 'next',
                onClickFunction: this._handleExportData
            }

        return (
            <StyleWrapper>
                <p>Now, fill in as many cards as you like!  When you're all finished, click Download and you'll have a brand new set of Memorinity cards to use in the Learn section!</p>
                <form onSubmit={this.handleSubmitForm}>
                    <FormElementFactory {...formElementFactoryData} {...this.props}/>
                    <Button {...nextCardButtonData}/>
                    <Button {...exportButtonData}/>
                </form>
            </StyleWrapper>

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

export default connect(mapStateToProps, { updateFileName, updateFormElementData })(CardBuilder);