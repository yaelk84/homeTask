import {Component, OnInit} from '@angular/core';
import {AppInitService} from './services/api.init';
import {finalize} from 'rxjs/operators';
import * as svg from 'save-svg-as-png';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {


  appFinishedLoaded = false;

  constructor(private appInitService: AppInitService) {
  }
  downloadPng() {
    setTimeout(()=>{
      debugger
      svg.saveSvgAsPng(document.getElementById('idOfMySvgGraphic'), 'diagram.png',{scale: 2});
    },0)

  }
  ngOnInit(): void {
//   this.downloadPng()
    this.appInitService.Init().pipe(finalize(() => this.appFinishedLoaded = true)).subscribe();
    var c = {
      name:"ss",
      log:function () {
        console.log(this)
        var setname = function(){
        //  this.aa='aa'
          console.log(this)
        }
        setname();
      }
    }
    c.log()
    console.log("fft",this)
  }
}
