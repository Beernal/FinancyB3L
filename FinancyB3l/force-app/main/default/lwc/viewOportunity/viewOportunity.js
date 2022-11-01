import { LightningElement, wire, api } from 'lwc';
import viewOportunities from '@salesforce/apex/OpportunityController.getOportunity';
import { getRecord } from 'lightning/uiRecordApi';
import StageName from '@salesforce/schema/Opportunity.StageName';

const columns = [
    { label: 'Label', fieldName: 'oppUrl', type: 'url', typeAttributes: {label: {fieldName: 'Name' }, target: '_self'} },
    
    { label: 'Stage', fieldName: 'StageName'}
];
    

export default class ViewOportunity extends LightningElement {
    
    @api recordId;
    oportunityData;

    get oppData(){
        return this.oportunityData && this.oportunityData.length > 0 ;
    }

    columns = columns;
    
    @wire(viewOportunities,{accountId: '$recordId'})
    wiredOportunities({error,data}){
        if(error){
            console.log(JSON.stringify(error));
            
        }else if(data){
            let dataList = JSON.parse(JSON.stringify(data));
            dataList.forEach(element => {
                element.oppUrl = '/' + element.Id;
            });
            this.oportunityData = dataList;
            console.log(JSON.stringify(this.oportunityData));
            console.log(JSON.stringify(columns));
        };
        
    };
};