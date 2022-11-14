import { LightningElement,api,track } from 'lwc';



export default class ModalCars extends LightningElement {

    @api car;
    
    setModalVisibleFalse(){
        this.dispatchEvent(
            new CustomEvent("cancel")
        );
    }
    
 }