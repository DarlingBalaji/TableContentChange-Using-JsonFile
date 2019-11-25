import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'json';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];

  ngOnInit () {
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }


  BTC(){
      this.httpService.get('./assets/arrbirds.json').subscribe(
        data => {
          this.arrBirds = data as string [];
          console.log(this.arrBirds);
          // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
          (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }
}
