import React, { Component } from 'react';
import CardBuilder from 'organisms/CardBuilder';
import InputField from '../atoms/formElements/InputField';
import { connect } from 'react-redux';
import { buildCard } from '../../actions/buildActions';

class Build extends Component {
    constructor(props) {
        super(props);

        this.addInputField = this.addInputField.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.handleFileIdChange = this.handleFileIdChange.bind(this);

        this.state = {
            formElements: [
                {
                    type: 'input',
                    data: {
                        id: 'revealOptionId',
                        label: 'ID',
                        placeholder: 'Button Label',
                        value: ''
                    }
                }, {
                    type: 'input',
                    data: {
                        id: 'revealOptionValue',
                        label: 'Value',
                        placeholder: 'Text revealed when button is clicked',
                        value: ''
                    }
                }
            ],
            fileName: ''

        }
    }
    
    addInputField(e) {
        e.preventDefault();

        let newId = {
                type: 'input',
                data: {
                    id: 'revealOptionId',
                    placeholder: 'ID',
                    label: 'Button Label',
                    value: ''
                }
            },
            newValue = {
                type: 'input',
                data: {
                    id: 'revealOptionValue',
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

    nextCard(formState) {
        this.props.buildCard(formState);
    }

   

    handleFileIdChange(e) {
        let updatedFileId = e.currentTarget.value;

        this.setState( (prevState, props) => {
            return {
                fileName: updatedFileId
            };
        })

    }
    
    render() {
        let idInputFieldData = {
                label: 'File Name',
                onChange: this.handleFileIdChange,
                value: this.state.fileName
            },
            cardBuildData = {
                addInputField: this.addInputField,
                submitForm: this.nextCard,
                ...this.state
            }

        return (
            <div>
                <h1>Build</h1>
                <InputField {...idInputFieldData}/>

                <CardBuilder {...cardBuildData}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { buildCard })(Build);