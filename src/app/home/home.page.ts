import { Component } from '@angular/core';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
import { BackgroundModeService } from '../background-mode.service';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService,private backgrounMode: BackgroundModeService, public backgroundMode: BackgroundMode ) {}

  startBackgroundMode() {
    // this.backgroundMode.enable();
    this.backgroundMode.moveToForeground();
    this.backgroundMode.excludeFromTaskList();
    this.backgroundMode.on('desactivate').subscribe(() => {
      this.backgroundMode.moveToForeground();
      this.backgrounMode.logInBackbroundMode();
    });

    this.backgroundMode.on('activate').subscribe(() => {
      this.backgroundMode.moveToBackground();
      this.backgrounMode.logInBackbroundMode();
    });
    this.backgrounMode.logInBackbroundMode();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
