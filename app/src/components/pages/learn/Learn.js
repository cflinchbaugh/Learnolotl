import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Uploader from 'learn/Uploader';
import Select from 'formElements/Select';
import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`
    text-align: center

    .navigation-button {
        float: right;
    }

    .uploaded-files-wrapper,
    .uploader-wrapper,
    .mode-select-wrapper {
        margin-bottom: 20px;
    }
    .link-wrapper {
        display: grid;
    }
`

function Learn (props) {
    return (
        <StyleWrapper className="learn-wrapper mdCard">
            <div className="card-selection">
                <div className="uploaded-files-wrapper">
                    {props.fileListingData.fileListing}
                </div>

                <div className="uploader-wrapper">
                    <Uploader {...props.uploaderData} />
                </div>

                <div className="mode-select-wrapper">
                    <Select {...props.modeSelectData} />
                </div>
            
            </div>

            <div className="link-wrapper">
            <Link to={{
                    pathname: '/learn/flashcards',
                    state: {
                        mode: props.linkData.mode
                    }    
                }}>
                <NavigationArrow type="next"/>
            </Link>
            </div>

        </StyleWrapper>
    );
}


export default Learn;