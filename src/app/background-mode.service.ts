import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BackgroundModeService{
  constructor() {
  }

  logInBackbroundMode() {
    timer(15000, 2000).subscribe(() => {
      console.log(new Date().toLocaleString(), 'logged in background mode');
    });
  }
}
