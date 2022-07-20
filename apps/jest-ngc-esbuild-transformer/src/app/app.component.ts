import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'jest-ngc-esbuild-transformer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jest-ngc-esbuild-transformer';

  constructor(private readonly appService: AppService) {
  }

  isEnabled(): boolean {
    return this.appService.isEnabled();
  }
}
