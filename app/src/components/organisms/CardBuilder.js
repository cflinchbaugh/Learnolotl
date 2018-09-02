import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FormElementFactory from './FormElementFactory';
import Button from 'atoms/buttons/Button';

const StyleWrapper = styled.div`
`

class CardBuilder extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileIdChange = this.handleFileIdChange.bind(this);

        this.state = {
            formElementData: {},
            fileName: ''
        }
    }

    render() {
        let formElementFactoryData = {
                handleInputChange: this.handleInputChange,
                formElementData: this.state.formElementData,
                formElements: this._buildFormElements()
            },
            nextCardButtonData = {
                label: 'Next Card',
                type: 'submit'
            }

        return (
            <StyleWrapper>
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <FormElementFactory {...formElementFactoryData} {...this.props}/>
                    <Button {...nextCardButtonData}/>
                </form>
            </StyleWrapper>

        )
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

        this.setState( (prevState, props) => {
            return {
                fileName: updatedFileId
            };
        })
    }

    handleSubmitForm(e) {
        e.preventDefault();
        this.props.submitForm(this.state);
        this._resetState();
    }

    _resetState() {
        this.setState({
            formElementData: {}
        });
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

export default connect(mapStateToProps, { })(CardBuilder);