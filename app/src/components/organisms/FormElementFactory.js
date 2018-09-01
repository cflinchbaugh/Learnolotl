import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from 'atoms/buttons/Button';
import InputField from 'atoms/formElements/InputField';

const StyleWrapper = styled.div`
`

class FormElementFactory extends Component {
    constructor(props) {
        super(props);

        this.handleFormElementChange = this.handleFormElementChange.bind(this);
    }

    render() {
        let builtFormElements = this._buildFormElements(),
            submitButtonData = {
                label: 'Next Card',
                type: 'submit'
            }
        
        return (
            <StyleWrapper>
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    {builtFormElements}
                    <Button {...submitButtonData}/>
                </form>
            </StyleWrapper>

        )
    }

    handleFormElementChange(e) {
        let formElement = e.currentTarget;
// TODO: Update the store
        this.setState( (prevState, props) => {
            return {
                [formElement.id]: formElement.value
            };
        })
    }

    handleSubmitForm(e) {
        e.preventDefault();
        this.props.submitForm(this.state);
    }

    _buildFormElements() {
        return this.props.formElements.map((element, idx) => {
            if (element.type === 'input') {
                let id = element.data.id + idx,
                    processedValue = this._processValue(id),
                    inputFieldData = {
                        key: idx,
                        id: id,
                        onChange: this.handleFormElementChange,
                        value: processedValue
                    }

                    //inputFieldData must come after ...element.data to override the passed in id with the id+idx
                return <InputField {...element.data} {...inputFieldData}/>
            }
        });
    }

    _processValue(id) {
        let processedValue = this.state !== null ? this.state[id] : '';

        if (typeof(processedValue) === 'undefined') {
            processedValue = '';
        }

        return processedValue;
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { })(FormElementFactory);