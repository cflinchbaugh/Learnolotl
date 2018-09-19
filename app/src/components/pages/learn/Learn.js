import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Uploader from 'learn/Uploader';
import Select from 'formElements/Select';
import NavigationArrow from 'buttons/NavigationArrow';

const StyleWrapper = styled.div`
    text-align: center

    .card-selection {
        display: inline-block;
        margin-bottom: 20px;
        border-radius: 5px;
        text-align: center;
        padding: 50px;
    }

    .navigation-button {
        float: right;
    }
`

function Learn (props) {
    return (
        <StyleWrapper>
            <div className="card-selection mdCard">
                <div className="uploaded-files">
                    {props.fileListingData.fileListing}
                </div>
                <br/>
                <Select {...props.modeSelectData} />
            
                <Link to={{
                        pathname: '/learn/flashcards',
                        state: {
                            mode: props.linkData.mode
                        }    
                    }}>
                    <NavigationArrow type="next"/>
                </Link>
            </div>

            <div className="uploader-wrapper">
                <Uploader {...props.uploaderData} />
            </div>

        </StyleWrapper>
    );
}


export default Learn;