import React from 'react';
import styled from 'styled-components';

import Learn from './Learn';
import LearnDataSelect from './LearnDataSelect';


const StyleWrapper = styled.div`
    .demo-wrapper,
    .uploader-wrapper {
        display: inline-block;
        text-align: center;
    }
    .demo-wrapper {
        margin-bottom: 20px;
        margin-left: 0;
        margin-right: auto;
    }
    .uploader-wrapper {
        margin-left: auto;
        margin-right: 0;
    }


    .logo-wrapper {
        text-align: center;
        
        img {
            height: 50px;
            border: solid 2px;
            border-radius: 9px;
            padding: 2px;
            background: purple;
        }
    }

    @media (min-width: 1200px) {
        .demo-wrapper {
            margin-bottom: 0;
            border-bottom: none;
        }
    }
`

function LearnLandingView (props) {
    let logo = require('media/images/Learnolotl.png');
    
    return (
        <StyleWrapper className="learn-container-wrapper mdCard col-xs-12">
            <div className="logo-wrapper col-xs-12">
                <img src={logo} />
                <h1>Learnolotl</h1>
            </div>

            <div className="demo-wrapper
                col-xs-12
                col-lg-6
            ">
                <LearnDataSelect {...props.learnDataSelectData} />
            </div>

            <div className="uploader-wrapper
                col-xs-12
                col-lg-6
            ">
                <Learn {...props.learnData}/>
            </div>
        </StyleWrapper>
    );
}


export default LearnLandingView;