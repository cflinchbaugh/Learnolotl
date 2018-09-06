import React, { Component } from 'react';

import { connect } from 'react-redux';
import { buildCard } from '../../../actions/buildActions';

import Build from './Build';
import CardFormatBuilder from 'organisms/CardFormatBuilder';
import CardBuilder from 'organisms/CardBuilder';
import Button from 'buttons/Button';

class BuildContainer extends Component {
    constructor(props) {
        super(props);
        
        this.nextCard = this.nextCard.bind(this);
        this.saveFormat = this.saveFormat.bind(this);
        this.exportFile = this.exportFile.bind(this);
        this._processBuildData = this._processBuildData.bind(this);
        this.handelFileIdChange = this.handelFileIdChange.bind(this);

        this.state = {
            cardFormat: undefined,
            fileId: ''
        }
    }

    nextCard(formState) {
        this.props.buildCard(formState);
    }
   
    saveFormat(format) {
        this.setState( (prevState, props) => {
            return {
                cardFormat: format
            }
        });
    }
    
    render() {
        let cardFormatBuilderData = {
                saveFormat: this.saveFormat,
                ...this.state
            },
            cardBuildData = {
                submitForm: this.nextCard,
                cardFormat: this.state.cardFormat,
                ...this.state
            },
            exportButtonData = {
                label: 'Export File',
                onClickFunction: this.exportFile
            },
            renderedBuilder = this.state.cardFormat === undefined ? 
                <CardFormatBuilder {...cardFormatBuilderData}/> : 
                (<span>
                    <CardBuilder {...cardBuildData}/>
                    <Button {...exportButtonData}/>
                </span>),
            fileIdData = {
                label: 'Filename',
                onChange: this.handelFileIdChange,
                value: this.state.fileId
            },
            buildData = {
                fileIdData: {...fileIdData},
            }

            

        return (
            <div>
                <Build {...buildData}/>
                {renderedBuilder}
            </div>
        );
    }

    handelFileIdChange(e) {
        let id = e.currentTarget.value;

        this.setState( (prevState, props) => {
            return {
                fileId: id
            }
        });
    }

    exportFile(e) {
        e.preventDefault();

        let exportData = this._buildExportData(),
            dataStr = JSON.stringify(exportData),
            dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        let exportFileDefaultName = this.state.fileId + '.json';
    
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    _buildExportData() {
        let builtResultsData = this._processBuildData(),
            exportData = {
                id: this.state.fileId,
                results: builtResultsData,
                format: this.state.cardFormat
            }
        
        return exportData;
    }

    _processBuildData() {
        let buildData = [],
            keys =  typeof(this.props.revealOptionData[0]) !== 'undefined' ? this.props.revealOptionData[0].formElementData : [],
            keysLen = Object.keys(keys).length;

        for (var y = 0; y < this.props.revealOptionData.length; y++) {
            let revealOptionDataArray = [];
                
            for (var i = 0; i < keysLen; i++) {
                revealOptionDataArray.push({
                    'id': this.state.cardFormat[i],
                    'value': this.props.revealOptionData[y].formElementData[i],
                    'type': 'text'
                });
            }

            buildData.push({
                revealOptionData: revealOptionDataArray
            });
        }

        return buildData;
    }
}

const mapStateToProps = state => ({
    revealOptionData: state.build.revealOptionData
});

export default connect(mapStateToProps, { buildCard })(BuildContainer);