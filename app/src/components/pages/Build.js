import React, { Component } from 'react';
import CardFormatBuilder from 'organisms/CardFormatBuilder';
import CardBuilder from 'organisms/CardBuilder';
import InputField from '../atoms/formElements/InputField';
import { connect } from 'react-redux';
import { buildCard } from '../../actions/buildActions';
import Button from 'atoms/buttons/Button';

class Build extends Component {
    constructor(props) {
        super(props);

        
        this.nextCard = this.nextCard.bind(this);
        this.saveFormat = this.saveFormat.bind(this);
        this.exportFile = this.exportFile.bind(this);
        this._processBuildData = this._processBuildData.bind(this);

        this.state = {
            cardFormat: undefined,
            revealOptionData: []
        }
    }

    nextCard(formState) {
        this.setState( (prevState, props) => {
            return {
                revealOptionData: [...this.state.revealOptionData, formState]
            }
        });
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
                <span>
                    <CardBuilder {...cardBuildData}/>
                    <Button {...exportButtonData}/>
                </span>

        return (
            <div>
                <h1>Build</h1>
                
                {renderedBuilder}
                
            </div>
        );
    }

    exportFile(e) {
        e.preventDefault();

        let exportData = this._buildExportData(),
            dataStr = JSON.stringify(exportData),
            dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        let exportFileDefaultName = 'data.json';
    
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    _buildExportData() {
        let builtResultsData = this._processBuildData(),
            exportData = {
                id: this.state.fileName,
                results: builtResultsData
            }
        
        return exportData;
    }

    _processBuildData() {
        let buildData = [],
            keysLen = Object.keys(this.state.revealOptionData[0].formElementData).length;

        for (var y = 0; y < this.state.revealOptionData.length; y++) {
            let revealOptionDataArray = [];
                
            for (var i = 0; i < keysLen; i++) {
                revealOptionDataArray.push({
                    'id': this.state.cardFormat[i],
                    'value': this.state.revealOptionData[y].formElementData[i]
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

});

export default connect(mapStateToProps, { buildCard })(Build);