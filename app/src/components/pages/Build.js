import React, { Component } from 'react';
// import InputField from 'atoms/formElements/InputField';
import DynamicFormElementFactory from 'organisms/DynamicFormElementFactory';

class Build extends Component {
    
    render() {
        let DynamicFormElementFactoryData = {
            id: {
                id: 'id',
                type: 'inputField',
                "type": "text"
            },
            result: {
                metaData: {
                    'id': 'metaData',
                    type: 'input',
                    "type": "text"
                },
                revealOptionData: {
                    id: 'revealOptionData',
                    type: 'input',
                    "type": "text"
                }
            }
        }

        return (
            <div>
                <h1>Build</h1>

                <DynamicFormElementFactory />
            </div>
        );
    }
}

export default Build;