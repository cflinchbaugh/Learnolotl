import React from 'react';

import InputField from 'formElements/InputField';
import NavigationArrow from 'buttons/NavigationArrow';

function BuildFileName (props) {
    let navigationArrowData = {
        type: 'next',
        onClickFunction: props.handleBuildFileNameNext
    }
    return (
        <div className='mdCard'>
            <InputField {...props.fileIdData} />
            <NavigationArrow {...navigationArrowData} />
        </div>
    );
}

export default BuildFileName;