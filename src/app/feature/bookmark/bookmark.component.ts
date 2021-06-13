import { Component, OnInit } from '@angular/core';
import {IResult} from '../../models/model';
import {CONSTANTS} from '../../constants';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  public bookmarksResults: IResult[];
  constructor() { }

  ngOnInit() {
    this.bookmarksResults = JSON.parse(localStorage.getItem(CONSTANTS.BOOKMARKS))  as IResult[];

  }

}
