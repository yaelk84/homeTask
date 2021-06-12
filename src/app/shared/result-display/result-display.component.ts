import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IResult} from '../../models/model';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.scss']
})
export class ResultDisplayComponent implements OnInit {


  @Input() results: IResult[];
  @Input() hideBookmark = false;
  @Output() bookMarkCallback: EventEmitter<IResult> = new EventEmitter<IResult>()
  constructor() { }

  ngOnInit() {
  }

  bookmarkResult(item: IResult) {
    this.bookMarkCallback.emit((item));


  }
}
