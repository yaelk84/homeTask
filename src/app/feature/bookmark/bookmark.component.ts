import { Component, OnInit } from '@angular/core';
import {IResult} from "../../models/model";
import {CONSTANTS} from "../../constants";
import {json} from "@angular-devkit/core";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  public bookmarkssResults:IResult[];
  constructor() { }

  ngOnInit() {
    this.bookmarkssResults = JSON.parse(localStorage.getItem(CONSTANTS.BOOKMARKS))  as IResult[];
    console.log("book", this.bookmarkssResults )
  }

}
