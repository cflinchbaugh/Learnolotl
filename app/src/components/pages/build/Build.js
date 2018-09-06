import React from 'react';

import InputField from '../../formElements/InputField';

function Build (props) {
    return (
        <div>
            <h1>Build</h1>
            <InputField {...props.fileIdData} />
        </div>
    );
}

export default Build;