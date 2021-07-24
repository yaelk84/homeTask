import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() control: FormControl;
  @Input() customClass: string;
  elementId: any;
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    
  }
}
