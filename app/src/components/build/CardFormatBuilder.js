import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateFormatFormElementData, updateFormatFormElements } from '../../actions/buildActions';

import DynamicFormElementFactory from 'formElements/DynamicFormElementFactory';
import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`
    width: 100%;

    .navigation-button {
        float: right;
    }
`

class CardFormatBuilder extends Component {
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
        let dynamicFormElementFactoryData = {
                handleInputChange: this.handleInputChange,
                formElementData: this.props.formatFormElementData,
                addInputField: this.addInputField,
                formElements: this.props.formatFormElements
            },
            saveFormatButtonData = {
                type: 'next',
                onClickFunction: this.saveFormat
            }

        return (
            <StyleWrapper className='card-format-builder-wrapper clearfix'>
                    <h2>Card Format</h2>
                    <p>
                        Here we configure the format each of the cards will have.
                        <br/>
                        <br/>
                        The button labels you build here will be the options clicked to show the hidden answers.  Every card in this set will have the same format, so be sure to include all the options, even if some cards might not have them (like "Hint" or "Misc.").
                    </p>
                        
                    <DynamicFormElementFactory {...dynamicFormElementFactoryData}/>
                    <NavigationArrow {...saveFormatButtonData}/>
            </StyleWrapper>

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

export default connect(mapStateToProps, { updateFormatFormElementData, updateFormatFormElements })(CardFormatBuilder);