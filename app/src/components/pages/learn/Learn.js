import React from 'react';
import styled from 'styled-components';

import Uploader from 'learn/Uploader';
import Select from 'formElements/Select';

const StyleWrapper = styled.div`
    .card-selection {
        margin-bottom: 20px;
    }
`

function Learn (props) {
    return (
        <StyleWrapper>
            <div className="card-selection">
                <div className="uploaded-files">
                    {props.fileListingData.fileListing}
                </div>

                <Select {...props.modeSelectData} />
            </div>

            <Uploader {...props.uploaderData} />
        </StyleWrapper>
    );
}


export default Learn;