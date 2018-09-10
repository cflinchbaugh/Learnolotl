import React from 'react';

import InputField from '../formElements/InputField';

function BuildFileName (props) {
    return (
        <div>
            <h1>Build</h1>
            <p>
                Create new Memorinity cards here!
            </p>
            <br/>
            <p>
                You want to learn more than just the few sample cards that came with the app?  No problem!
                It's easy to make your own Memorinity cards and share them with others.
            </p>
            <br/>
            <p>
                First, what do you want this set of cards to be called?  We'll use it as a filename, so please, just letters and underscores.
            </p>

            <InputField {...props.fileIdData} />
        </div>
    );
}

export default BuildFileName;