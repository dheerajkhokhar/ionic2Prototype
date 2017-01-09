import { Component, Input, EventEmitter, Output ,OnInit } from '@angular/core';

@Component({
    selector:'single-select',
    templateUrl:'single-select-popup.html'
})

export class SingleSelectPopupComponent implements OnInit {
    @Input('select-title') title;
    @Input('select-options') optionSingleSelect;
    @Input('select-obj') selectedObj;
    @Input('select-model') selectedValue? = {}; 
    @Output() singleSelect = new EventEmitter(); 

    ngOnInit(){
      for(let i=0;i<this.optionSingleSelect.length;i++){
        if(this.optionSingleSelect[i].text == this.selectedValue["text"]){
          {
            this.selectedValue = this.optionSingleSelect[i];
            this.optionSingleSelect[i].checked = true;
            break;    
          }
        }
      }

      if(Object.keys(this.selectedValue).length > 0){
        this.onClick();
      }
    }

    onClick(){
      let obj = {value:{},objectName:this.selectedObj}
      obj.value = this.selectedValue;
      console.log(obj);
      this.singleSelect.emit({ obj });     
    }

}