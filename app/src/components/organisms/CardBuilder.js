import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DynamicFormElementFactory from './DynamicFormElementFactory';

const StyleWrapper = styled.div`
`

class CardBuilder extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            formElementData: {}
        }
    }

    render() {
        console.log(this.state);
        return (
            <StyleWrapper>
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <DynamicFormElementFactory 
                        handleInputChange={this.handleInputChange}
                        formElementData={this.state.formElementData}
                        {...this.props}/>
                    <div>TODO: Next Card</div>
                </form>
            </StyleWrapper>

        )
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

// const mapStateToProps = state => ({
// });

// export default connect(mapStateToProps, { })(DynamicFormElementFactory);
export default CardBuilder;