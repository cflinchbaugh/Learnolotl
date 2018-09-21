import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InputField from 'formElements/InputField';

const StyleWrapper = styled.div`
`

class FormElementFactory extends Component {
    constructor(props) {
        super(props);

        this.handleFormElementChange = this.handleFormElementChange.bind(this);
    }

    render() {
        let builtFormElements = this._buildFormElements();
        
        return (
            <StyleWrapper>
                {builtFormElements}
            </StyleWrapper>

        )
    }

    handleFormElementChange(e) {
        let formElement = e.currentTarget,
            formElementData = {
                [formElement.id]: formElement.value
            }

        this.props.handleInputChange(formElementData);
    }

    

    _buildFormElements() {
        return this.props.formElements.map((element, idx) => {
            if (element.type === 'input') {
                let id = idx,
                    processedValue = this._processValue(id),
                    inputFieldData = {
                        key: idx,
                        id: id,
                        onChange: this.handleFormElementChange,
                        autoComplete: 'off',
                        value: processedValue
                    }

                //inputFieldData must come after ...element.data to override the passed in id with the id+idx
                return <InputField {...element.data} {...inputFieldData}/>
            }
        });
    }

    _processValue(id) {
        let processedValue = this.props.formElementData !== null ? this.props.formElementData[id] : '';

        if (typeof(processedValue) === 'undefined') {
            processedValue = '';
        }

        return processedValue;
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { })(FormElementFactory);