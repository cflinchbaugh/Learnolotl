import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from 'atoms/buttons/Button';
import FormElementFactory from './FormElementFactory';

const StyleWrapper = styled.div`
`

class DynamicFormElementFactory extends Component {
    addInputField() {
        console.log('Add input field');
    }

    render() {
        let buttonData = {
            onClickFunction: this.addInputField
        }

        return (
            <StyleWrapper>
                <FormElementFactory/>
                <Button {...buttonData}/>
            </StyleWrapper>

        )
    }

}

// const mapStateToProps = state => ({
// });

// export default connect(mapStateToProps, { })(DynamicFormElementFactory);
export default DynamicFormElementFactory;