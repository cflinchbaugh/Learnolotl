import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InputField from 'atoms/formElements/InputField';

const StyleWrapper = styled.div`
`

class FormElementFactory extends Component {
    render() {
        let builtFormElements = this._buildFormElements();
        
        return (
            <StyleWrapper>
                {builtFormElements}
            </StyleWrapper>

        )
    }

    _buildFormElements() {
        return this.props.formElements.map((element, idx) => {
            if (element.type === 'input') {
                return <InputField key={idx} {...element.data}/>
            }
        });
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { })(FormElementFactory);