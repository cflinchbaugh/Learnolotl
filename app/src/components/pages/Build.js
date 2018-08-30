import React, { Component } from 'react';
// import InputField from 'atoms/formElements/InputField';
import DynamicFormElementFactory from 'organisms/DynamicFormElementFactory';

class Build extends Component {
    constructor(props) {
        super(props);

        this.addInputField = this.addInputField.bind(this);
        this.submitForm = this.submitForm.bind(this);

        this.state = {
            formElements: [
                {
                    type: 'input',
                    data: {
                        id: 'first',
                        placeholder: 'First',
                        value: 'value'
                    }
                }, {
                    type: 'input',
                    data: {
                        id: 'second',
                        placeholder: 'Second',
                        value: ''
                    }
                }
            ]
        }
    }
    
    addInputField() {
        let newInput = {
                type: 'input',
                data: {
                    id: 'asdf',
                    placeholder: 'placeholder',
                    value: ''
                }
            },
            updatedFormElements = [...this.state.formElements, newInput];

        this.setState( (prevState, props) => {
            return {
                formElements: updatedFormElements
            };
        })
    }

    submitForm(formState) {
        console.log(formState);
    }
    
    render() {
        return (
            <div>
                <h1>Build</h1>

                <DynamicFormElementFactory 
                    addInputField={this.addInputField}
                    submitForm={this.submitForm}
                    {...this.state}/>
            </div>
        );
    }
}

export default Build;