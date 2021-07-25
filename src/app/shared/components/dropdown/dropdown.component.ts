import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {UtilsService} from "../../../services/utils.service";
import {IERROR} from "../../../models/model";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor(private utils: UtilsService) { }
  @Input() items: DropdownItem[] = [];
  @Input() control: FormControl;
  @Input() customClass: string;
  @Input() label: string;
  @Input() errors: IERROR;

  readOnly: any;
  showValidationErrorText: void;

  selectedValue: any;
  fullWith: any;

  ngOnInit() {
  }

  isInvalid() {
    
  }

  isDisabled() {
    
  }

  onFocus() {
    
  }

  onBlur() {
    
  }

  getErrorMsg() {
    
  }
selectVal(){
    this.selectedValue = this.control.value;
}
  itemClick($event: MouseEvent, item: DropdownItem) {
    this.control.setValue(item.key);
    this.selectVal();
  }

  getError() {
    debugger
    return this.utils.getErrorMsg(this.control, this.errors);
  }
}
export class DropdownItem {
  constructor(
    public key: any,
    public value: string,
    public subDropDownItems?: DropdownItem[],
    public disabled: boolean = false,
  ) {
  }
}
