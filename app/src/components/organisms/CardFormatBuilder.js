import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DynamicFormElementFactory from './DynamicFormElementFactory';
import Button from 'buttons/Button';

const StyleWrapper = styled.div`
`

class CardFormatBuilder extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveFormat = this.saveFormat.bind(this);
        this.addInputField = this.addInputField.bind(this);

        this.state = {
            formElementData: {},
            formElements: [
                {
                    type: 'input',
                    data: {
                        id: 'revealOptionId',
                        label: 'Button Label',
                        placeholder: '',
                        value: ''
                    }
                }
            ]
        }
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
            updatedFormElements = [...this.state.formElements, newId];

        this.setState( (prevState, props) => {
            return {
                formElements: updatedFormElements
            };
        })
    }

    render() {
        let dynamicFormElementFactoryData = {
                handleInputChange: this.handleInputChange,
                formElementData: this.state.formElementData,
                addInputField: this.addInputField,
                formElements: this.state.formElements
                
            },
            saveFormatButtonData = {
                label: 'Save Format',
                onClickFunction: this.saveFormat
            }

        return (
            <StyleWrapper>
                    <DynamicFormElementFactory {...dynamicFormElementFactoryData}/>
                    <Button {...saveFormatButtonData}/>
            </StyleWrapper>

        )
    }

    saveFormat() {
        this.props.saveFormat(this.state.formElementData);
    }

    handleInputChange(formElementData) {
        let mergedData = {...this.state.formElementData, ...formElementData}

        this.setState( (prevState, props) => {
            return {
                formElementData: mergedData
            };
        });
    }

    

}

const mapStateToProps = state => ({
    buildResults: state.build.results
});

export default connect(mapStateToProps, { })(CardFormatBuilder);