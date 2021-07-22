import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }
  @Input() items: DropdownItem[] = [];
  @Input() control: FormControl;
  @Input() customClass: string;
  readOnly: any;
  showValidationErrorText: void;
  label: any;
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

  itemClick($event: MouseEvent, item: DropdownItem) {
    
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
