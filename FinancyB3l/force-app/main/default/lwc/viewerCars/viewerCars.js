import { LightningElement, wire, api, track } from 'lwc';
import getCars from '@salesforce/apex/getCars.getCars';


export default class ViewerCars extends LightningElement {

    viewCars;
    modalVisible = false;
    selectedCar;


    setModalVisibleFalse(){
        this.modalVisible = false;
    }

    
    @wire(getCars)
       
    wiredCars({ error, data }) {
        if (error) {
            console.log(JSON.stringify(error));

        } else if (data) {
            this.viewCars = data;
        };

    };

    viewDetails(event) {
        this.modalVisible = true;
        this.selectedCar = this.viewCars.find(Cars => Cars.Id == event.target.dataset.id);
        
        console.log(JSON.stringify(this.selectedCar));

    }


    

}