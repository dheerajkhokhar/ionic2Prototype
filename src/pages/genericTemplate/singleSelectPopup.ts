import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'single-select',
    templateUrl:'singleSelectPopup.html'
})

export class SingleSelectPopup{
    @Input('select-title') title;
    @Input('select-options') optionSingleSelect;
    @Input('select-obj') selectedObj;
    private selectedValue;

    @Output() singleSelect = new EventEmitter(); 

    onClick(){
      let obj = {value:{},objectName:this.selectedObj}
      obj.value = this.selectedValue;
      console.log(obj);
      this.singleSelect.emit({ obj });     
    }

}