import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {


  @Input() control: FormControl;
  @Input() customClass: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
