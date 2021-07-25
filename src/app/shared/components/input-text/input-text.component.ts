import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UtilsService} from "../../../services/utils.service";
import {IERROR} from "../../../models/model";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {


  @Input() control: FormControl;
  @Input() customClass: string;
  @Input() label: string;
  @Input() errors: IERROR;
  constructor(private utils: UtilsService) { }

  ngOnInit() {
  }

  getError() {
    return this.utils.getErrorMsg(this.control, this.errors);
  }
}
