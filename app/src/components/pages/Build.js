import React, { Component } from 'react';
import CardBuilder from 'organisms/CardBuilder';

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
                        id: 'revealOption',
                        label: 'ID',
                        placeholder: 'Button Label',
                        value: ''
                    }
                }, {
                    type: 'input',
                    data: {
                        id: 'revealOption',
                        label: 'Value',
                        placeholder: 'Text revealed when button is clicked',
                        value: ''
                    }
                }
            ]
        }
    }
    
    addInputField() {
        let newId = {
                type: 'input',
                data: {
                    id: 'revealOption',
                    placeholder: 'ID',
                    label: 'Button Label',
                    value: ''
                }
            },
            newValue = {
                type: 'input',
                data: {
                    id: 'revealOption',
                    label: 'Value',
                    placeholder: 'Text revealed when button is clicked',
                    value: ''
                }
            },
            updatedFormElements = [...this.state.formElements, newId, newValue];

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

                <CardBuilder 
                    addInputField={this.addInputField}
                    submitForm={this.submitForm}
                    {...this.state}/>
            </div>
        );
    }
}

export default Build;