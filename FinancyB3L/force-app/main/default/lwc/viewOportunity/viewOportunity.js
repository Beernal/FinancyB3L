import { LightningElement, wire, api } from 'lwc';
import viewOportunities from '@salesforce/apex/OpportunityController.getOportunity';
import { getRecord } from 'lightning/uiRecordApi';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Stage', fieldName: 'StageName'}
];
    

export default class ViewOportunity extends LightningElement {
    
    @api recordId;

    @wire(viewOportunities,{accountId: '$recordId'})
    wiredOportunities({error,data}){
        if(error){
            console.log(JSON.stringify(error));
            
        }else if(data){
            
            columns = columns;
            console.log(JSON.stringify(data));

            
        };
        
    };
};