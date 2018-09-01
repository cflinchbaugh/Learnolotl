import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DynamicFormElementFactory from './DynamicFormElementFactory';
import Button from 'atoms/buttons/Button';

const StyleWrapper = styled.div`
`

class CardBuilder extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.exportFile = this.exportFile.bind(this);
        this._processBuildData = this._processBuildData.bind(this);

        this.state = {
            formElementData: {}
        }
    }

    render() {
        let dynamicFormElementFactoryData = {
                handleInputChange: this.handleInputChange,
                formElementData: this.state.formElementData
            },
            exportButtonData = {
                label: 'Export File',
                onClickFunction: this.exportFile
            }

        return (
            <StyleWrapper>
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <DynamicFormElementFactory {...dynamicFormElementFactoryData} {...this.props}/>
                    <Button {...exportButtonData}/>
                </form>
            </StyleWrapper>

        )
    }

    exportFile(e) {
        e.preventDefault();
        
        let resultsData = this._processBuildData();
        
        console.log(resultsData);
    }

    _processBuildData() {
        let buildData = [];

        this.props.buildResults.map( (item) => {
            let keys = Object.keys(item.formElementData),
                max = (keys.length / 2) - 1,
                i = 0;

            for ( ; i < max; i += 2) {
                let optionId = item.formElementData[i],
                    optionValue = item.formElementData[i + 1];

                    buildData.push({
                    id: optionId,
                    value: optionValue
                });
            }

        });

        return buildData;
    }

    handleSubmitForm(e) {
        e.preventDefault();
        this.props.submitForm(this.state);
        this._resetState();
    }

    _resetState() {
        this.setState({
            formElementData: {}
        });
    }

    handleInputChange(formElementData) {
        let mergedData = {...this.state.formElementData, ...formElementData}

        this.setState( (prevState, props) => {
            return {
                formElementData: mergedData
            };
        });
    }

}

const mapStateToProps = state => ({
    buildResults: state.build.results
});

export default connect(mapStateToProps, { })(CardBuilder);