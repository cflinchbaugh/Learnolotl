import React from 'react';
import styled from 'styled-components';

import Learn from './Learn';
import LearnDataSelect from './LearnDataSelect';


const StyleWrapper = styled.div`
    .demo-wrapper,
    .uploader-wrapper {
        display: inline-block;
        width: 49%;
        text-align: center;
    }
    .demo-wrapper {
        margin-left: 0;
        margin-right: auto;
        border-right: solid 1px;
    }
    .uploader-wrapper {
        margin-left: auto;
        margin-right: 0
    }
`

function LearnLandingView (props) {
    return (
        <StyleWrapper className="learn-container-wrapper mdCard">
            <div className="demo-wrapper">
                <LearnDataSelect {...props.learnDataSelectData} />
            </div>
            <div className="uploader-wrapper">
                <Learn {...props.learnData}/>
            </div>
        </StyleWrapper>
    );
}


export default LearnLandingView;