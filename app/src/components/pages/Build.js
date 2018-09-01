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
            ]

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

   

    
    
    render() {
        let cardBuildData = {
                addInputField: this.addInputField,
                submitForm: this.nextCard,
                ...this.state
            }

        return (
            <div>
                <h1>Build</h1>
                

                <CardBuilder {...cardBuildData}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { buildCard })(Build);