import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  constructor() { }
  @Input() options: IRadio[] = [];
  @Input() control: FormControl;
  @Input() customClass: string;
  @Input() withImageRadio = false;
  ngOnInit() {
  }

  onChange() {

  }
}
export interface IRadio {
  id: any;
  desc: string;
}
