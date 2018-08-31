import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DynamicFormElementFactory from './DynamicFormElementFactory';

const StyleWrapper = styled.div`
`

class CardBuilder extends Component {

    render() {
        return (
            <StyleWrapper>
                {/* Form wraps element factory? */}
                <DynamicFormElementFactory {...this.props}/>
                <div>TODO: Next Card</div>
            </StyleWrapper>

        )
    }

}

// const mapStateToProps = state => ({
// });

// export default connect(mapStateToProps, { })(DynamicFormElementFactory);
export default CardBuilder;