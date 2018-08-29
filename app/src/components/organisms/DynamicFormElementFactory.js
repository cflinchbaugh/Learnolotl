import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from 'atoms/buttons/Button';
import FormElementFactory from './FormElementFactory';

const StyleWrapper = styled.div`
`

class DynamicFormElementFactory extends Component {
    constructor(props) {
        super(props);

        this.addInputField = this.addInputField.bind(this);
    }
    
    addInputField() {
        
    }

    render() {
        let buttonData = {
                label: 'Add Input',
                onClickFunction: this.props.addInputField
            }

        return (
            <StyleWrapper>
                <FormElementFactory {...this.props}/>
                <Button {...buttonData}/>
            </StyleWrapper>

        )
    }

}

// const mapStateToProps = state => ({
// });

// export default connect(mapStateToProps, { })(DynamicFormElementFactory);
export default DynamicFormElementFactory;