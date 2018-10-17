import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { buildCard, 
        updateBuildFileId, 
        updateBuildCardFormat } from '../../../actions/buildActions';

import BuildLandingView from 'build/BuildLandingView';
import CardFileNameBuilder from 'build/CardFileNameBuilder';
import CardFormatBuilderContainer from 'build/CardFormatBuilderContainer';
import CardBuilderContainer from 'build/CardBuilderContainer';

const StyleWrapper = styled.div`
    
`

export class BuildContainer extends Component {
    constructor(props) {
        super(props);
        
        this.nextCard = this.nextCard.bind(this);
        this.saveFormat = this.saveFormat.bind(this);
        this.exportFile = this.exportFile.bind(this);
        this._processBuildData = this._processBuildData.bind(this);
        this.handleBuildLandingViewNext = this.handleBuildLandingViewNext.bind(this);
        this.handelFileIdChange = this.handelFileIdChange.bind(this);
        this.handleBuildFileNameNext = this.handleBuildFileNameNext.bind(this);
        this.handleCardFormatNext = this.handleCardFormatNext.bind(this);

        this.state = {
            show: 'landing'
        }
    }

    nextCard(formState) {
        return this.props.buildCard(formState);
    }
   
    saveFormat(format) {
        this.props.updateBuildCardFormat(format);
    }

    handleBuildLandingViewNext() {
        this.setState({
            show: 'CardFileNameBuilder'
        });
    }

    handleBuildFileNameNext() {
        if (this.props.fileId.length) {
            this.setState({
                show: 'CardFormatBuilder'
            })
        }
    }

    handleCardFormatNext() {
        this.setState({
            show: 'CardBuilder'
        })
    }
    
    render() {
        let buildLandingViewData = {
                handleBuildLandingViewNext: this.handleBuildLandingViewNext
            },
            cardFileNameBuilderData = {
                fileIdData: {
                    label: 'Filename',
                    onChange: this.handelFileIdChange,
                    value: this.props.fileId,
                    required: true
                },
                handleBuildFileNameNext: this.handleBuildFileNameNext
            },
            cardFormatBuilderData = {
                saveFormat: this.saveFormat,
                handleCardFormatNext: this.handleCardFormatNext,
                ...this.props
            },
            cardBuilderData = {
                submitForm: this.nextCard,
                cardFormat: this.props.cardFormat,
                exportFile: this.exportFile,
                ...this.props
            }

        if (this.state.show === 'landing') {
            return (
                <StyleWrapper className='build-container-wrapper col-xs-12 clearfix mdCard'>
                    <BuildLandingView {...buildLandingViewData}/>
                </StyleWrapper>
            )
        } else if (this.state.show === 'CardFileNameBuilder') {
            return (
                <StyleWrapper className='build-container-wrapper col-xs-12 clearfix mdCard'>
                    <CardFileNameBuilder {...cardFileNameBuilderData}/>
                </StyleWrapper>
            )
        } else if (this.state.show === 'CardFormatBuilder') {
            return (
                <StyleWrapper className='build-container-wrapper col-xs-12 clearfix mdCard'>
                    <CardFormatBuilderContainer {...cardFormatBuilderData}/>
                </StyleWrapper>
            );
        } else {
            return (
                <StyleWrapper className='build-container-wrapper col-xs-12 clearfix mdCard'>
                    <CardBuilderContainer {...cardBuilderData}/>
                </StyleWrapper>
            );

        }

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

        this.setState({
            show: 'CardFileNameBuilder'
        })
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