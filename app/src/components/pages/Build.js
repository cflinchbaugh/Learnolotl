import React, { Component } from 'react';
// import InputField from 'atoms/formElements/InputField';
import DynamicFormElementFactory from 'organisms/DynamicFormElementFactory';

class Build extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addInputField = this.addInputField.bind(this);

        this.state = {
            formElements: [
                {
                    type: 'input',
                    data: {
                        placeholder: 'First',
                        value: 'value',
                        onChange: this.handleInputChange
                    }
                }, {
                    type: 'input',
                    data: {
                        placeholder: 'Second',
                        value: '',
                        onChange: this.handleInputChange
                    }
                }
            ]
        }
    }
    
    addInputField() {
        let newInput = {
                type: 'input',
                data: {
                    placeholder: 'placeholder',
                    value: '',
                    onChange: this.handleInputChange
                }
            },
            updatedFormElements = [...this.state.formElements, newInput];

        this.setState( (prevState, props) => {
            return {
                formElements: updatedFormElements
            };
        })
    }

    handleInputChange(e) {
        console.log(e.currentTarget.value);
    }
    
    render() {
        return (
            <div>
                <h1>Build</h1>

                <DynamicFormElementFactory 
                    addInputField={this.addInputField}
                    {...this.state}/>
            </div>
        );
    }
}

export default Build;