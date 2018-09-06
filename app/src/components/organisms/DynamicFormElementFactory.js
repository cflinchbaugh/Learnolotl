import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from 'buttons/Button';
import FormElementFactory from './FormElementFactory';

const StyleWrapper = styled.div`
`

class DynamicFormElementFactory extends Component {

    render() {
        let addInputButtonData = {
                label: 'Add Input',
                onClickFunction: this.props.addInputField
            }

        return (
            <StyleWrapper>
                <FormElementFactory {...this.props}/>
                <Button {...addInputButtonData}/>
            </StyleWrapper>

        )
    }

}

// const mapStateToProps = state => ({
// });

// export default connect(mapStateToProps, { })(DynamicFormElementFactory);
export default DynamicFormElementFactory;