import { Component } from '@angular/core';
import { GetFilmsService } from '../app/services/get-films.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviee';
  constructor(private _gfs:GetFilmsService){

  }

}
