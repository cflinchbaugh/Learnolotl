import React from 'react';

import Uploader from 'organisms/Uploader';
import Select from 'formElements/Select';

function Learn (props) {
    return (
        <div>
            <Uploader {...props.uploaderData} />

            {props.fileListingData.fileListing}

            <Select {...props.modeSelectData} />
            
            
        </div>
    );
}


export default Learn;