import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IERROR, IRadio} from '../../../models/model';
import {UtilsService} from '../../../services/utils.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  constructor(private utils: UtilsService) { }
  @Input() options: IRadio[] = [];
  @Input() control: FormControl;
  @Input() customClass: string;
  @Input() withImageRadio = false;
  @Input() errors: IERROR;


  ngOnInit() {
  }

  onChange() {

  }

  getError() {
    return this.utils.getErrorMsg(this.control, this.errors);
  }
}


export class RadioItem {
  constructor(
    public id: any,
    public desc: string

  ) {
  }
}
