import React, { Component } from 'react';

import { connect } from 'react-redux';
import { buildCard, updateBuildFileId, updateBuildCardFormat } from '../../../actions/buildActions';

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

    }

    nextCard(formState) {
        return this.props.buildCard(formState);
    }
   
    saveFormat(format) {
        this.props.updateBuildCardFormat(format);
    }
    
    render() {
        let cardFormatBuilderData = {
                saveFormat: this.saveFormat,
                ...this.props
            },
            cardBuildData = {
                submitForm: this.nextCard,
                cardFormat: this.props.cardFormat,
                exportFile: this.exportFile,
                ...this.props
            },
            renderedBuilder = this.props.cardFormat === undefined ? 
                <CardFormatBuilder {...cardFormatBuilderData}/> : 
                (<span>
                    <CardBuilder {...cardBuildData}/>
                    
                </span>),
            fileIdData = {
                label: 'Filename',
                onChange: this.handelFileIdChange,
                value: this.props.fileId
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

        this.props.updateBuildFileId(id);
    }

    exportFile() {
        let exportData = this._buildExportData(),
            dataStr = JSON.stringify(exportData),
            dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        let exportFileDefaultName = this.props.fileId + '.json';
    
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    _buildExportData() {
        let builtResultsData = this._processBuildData(),
            exportData = {
                id: this.props.fileId,
                results: builtResultsData,
                format: this.props.cardFormat
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
                    'id': this.props.cardFormat[i],
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
    revealOptionData: state.build.revealOptionData,
    fileId: state.build.fileId,
    cardFormat: state.build.cardFormat
});

export default connect(mapStateToProps, { buildCard, updateBuildFileId, updateBuildCardFormat })(BuildContainer);