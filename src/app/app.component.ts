import { Component, OnInit } from '@angular/core';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
import { Platform } from '@ionic/angular';
import { BackgroundModeService } from './background-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  platfromIsMobile;
  constructor(
    public platform: Platform,
    private backgrounMode: BackgroundModeService,
    public backgroundMode: BackgroundMode
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((e) => {
      this.backgroundMode.enable();
      this.backgroundMode.disableBatteryOptimizations();
      this.backgroundMode.moveToForeground();
      this.backgroundMode.excludeFromTaskList();
      this.backgrounMode.logInBackbroundMode();
    });
    return;
  }
}
