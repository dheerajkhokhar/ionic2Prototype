import { Component,Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'multi-select',
    templateUrl:'multiSelectPopup.html'
})

export class MultiSelectPopup{
    @Input('select-title') title;
    @Input('select-options') optionMultiSelect;
    @Input('select-obj') selectedObj;
    private selectedValue;
    @Output() multiSelect = new EventEmitter(); 

    onClick(){
      let obj = {value:{},objectName:this.selectedObj}
      obj.value = this.selectedValue;
      console.log(obj);
      this.multiSelect.emit({ obj });     
    }

}