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
                label: 'Submit',
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
        console.log(formElement.value);

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
                let id = element.data.id + idx;

                return <InputField 
                    {...element.data}
                    onChange={this.handleFormElementChange}
                    key={idx} 
                    id={id}             //Set id after ...element.data so we can 
                                        //add a the idx to the passed in prop and render it
                    />
            }
        });
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { })(FormElementFactory);