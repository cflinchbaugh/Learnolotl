import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Uploader from 'learn/Uploader';
import Select from 'formElements/Select';
import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`
    margin: 50px auto;

    .navigation-button {
        float: right;
    }

    .uploaded-files-wrapper,
    .uploader-wrapper,
    .mode-select-wrapper {
        margin-bottom: 20px;
    }

    .card-selection {
        text-align: center;
    }
    .link-wrapper {
        margin-left: auto;
        margin-right: 0;
    }
`

function Learn (props) {
    const renderUploader = props.sampleData ? '' : <Uploader {...props.uploaderData} />;
    const renderLink = (!props.sampleData && props.uploadedIds.length) || (props.sampleData) ? 
        (
            <Link to={{
                    pathname: 'Learnolotl/learn/flashcards',
                    state: {
                        mode: props.linkData.mode
                    }    
                }}>
                <NavigationArrow type="next"/>
            </Link>
        ) : '';
    const renderModeSelector = props.sampleData || props.uploadedIds.length ?
        (
            <div className="mode-select-wrapper">
                <Select {...props.modeSelectData} /> 
            </div>
        ) : '';
    const renderUploadedFiles = props.uploadedIds.length ?
        (
            <div className="uploaded-files-wrapper">
                {props.fileListingData.fileListing}
            </div>
        ) : '';

    return (
        <StyleWrapper className="learn-wrapper">
            <div className="card-selection">
                <div className="uploader-wrapper">
                    {renderUploader}
                </div>

                {renderUploadedFiles}
                
                {renderModeSelector}
            
            </div>

            <div className="link-wrapper clearfix">
                {renderLink}
            </div>

        </StyleWrapper>
    );
}


export default Learn;