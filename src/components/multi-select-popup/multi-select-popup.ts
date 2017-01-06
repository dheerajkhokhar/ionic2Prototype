import { Component,Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector:'multi-select',
    templateUrl:'multi-select-popup.html'
})

export class MultiSelectPopupComponent implements OnInit{
    @Input('select-title') title;
    @Input('select-options') optionMultiSelect;
    @Input('select-obj') selectedObj;
    private selectedValue = [];
    @Output() multiSelect = new EventEmitter(); 

    ngOnInit(){
      for(let i=0;i<this.optionMultiSelect.length;i++){
        if(this.optionMultiSelect[i].checked == true){
          this.selectedValue.push(this.optionMultiSelect[i]);         
        }
      }
    }

    onClick(){
      let obj = {value:{},objectName:this.selectedObj}
      obj.value = this.selectedValue;
      console.log(obj);
      this.multiSelect.emit({ obj });     
    }

}