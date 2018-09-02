import React, { Component } from 'react';
import CardFormatBuilder from 'organisms/CardFormatBuilder';
import CardBuilder from 'organisms/CardBuilder';
import InputField from '../atoms/formElements/InputField';
import { connect } from 'react-redux';
import { buildCard } from '../../actions/buildActions';

class Build extends Component {
    constructor(props) {
        super(props);

        
        this.nextCard = this.nextCard.bind(this);
        this.saveFormat = this.saveFormat.bind(this);
        

        this.state = {
            cardFormat: undefined

        }
    }
    
    

    nextCard(formState) {
        this.props.buildCard(formState);
    }

   
    saveFormat(format) {
        console.log(format);
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
            renderedBuilder = this.state.cardFormat === undefined ? 
                <CardFormatBuilder {...cardFormatBuilderData}/> : <CardBuilder {...cardBuildData}/>

        return (
            <div>
                <h1>Build</h1>
                
                {renderedBuilder}
                
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { buildCard })(Build);