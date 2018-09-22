import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateFormatFormElementData, updateFormatFormElements } from '../../actions/buildActions';
import CardFormatBuilder from './CardFormatBuilder';

class CardFormatBuilderContainer extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveFormat = this.saveFormat.bind(this);
        this.addInputField = this.addInputField.bind(this);
    }

    addInputField(e) {
        e.preventDefault();

        let newId = {
                type: 'input',
                data: {
                    id: 'revealOptionId',
                    placeholder: '',
                    label: 'Button Label',
                    value: ''
                }
            },
            updatedFormElements = [...this.props.formatFormElements, newId];

        
        this.props.updateFormatFormElements(updatedFormElements);
    }

    render() {
        let cardFormatBuilderData = {
                dynamicFormElementFactoryData: {
                    handleInputChange: this.handleInputChange,
                    formElementData: this.props.formatFormElementData,
                    addInputField: this.addInputField,
                    formElements: this.props.formatFormElements
                },
                saveFormatButtonData: {
                    type: 'next',
                    onClickFunction: this.saveFormat
                }
            }

        return (
            <CardFormatBuilder {...cardFormatBuilderData}/>
        )
    }

    saveFormat() {
        this.props.saveFormat(this.props.formatFormElementData);
        this.props.handleCardFormatNext();
    }

    handleInputChange(formatFormElementData) {
        let mergedData = {...this.props.formatFormElementData, ...formatFormElementData}

        this.props.updateFormatFormElementData(mergedData);
    }
}

const mapStateToProps = state => ({
    buildResults: state.build.results,
    formatFormElements: state.build.formatFormElements,
    formatFormElementData: state.build.formatFormElementData
});

export default connect(mapStateToProps, { updateFormatFormElementData, updateFormatFormElements })(CardFormatBuilderContainer);