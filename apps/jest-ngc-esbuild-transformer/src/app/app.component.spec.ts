// TEST BED POC
// import 'zone.js/dist/zone';
// import 'zone.js/dist/zone-testing';
// import {TestBed} from "@angular/core/testing";
// import {CommonModule} from "@angular/common";

// Needed by Injector
import '@angular/compiler';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import {Injector} from "@angular/core";

class TruthyAppService extends AppService {
  override isEnabled(): boolean {
    return true;
  }
}

class FalsyAppService extends AppService {
  override isEnabled(): boolean {
    return false;
  }
}

describe('AppComponent', () => {

  it('Test A', () => {
    const appComponent = new AppComponent(new TruthyAppService());
    expect(appComponent.isEnabled()).toBeTruthy();
  });

  it('Test B', () => {
    const appComponent = new AppComponent(new FalsyAppService());
    expect(appComponent.isEnabled()).toBeFalsy();
  })

  // Not working :<
  // it('TestBed test', async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [AppComponent, NxWelcomeComponent],
  //     providers: [AppService],
  //     imports: [CommonModule]
  //   }).compileComponents();
  //
  //   const appComponent = TestBed.createComponent(AppComponent).componentInstance;
  //   expect(appComponent.isEnabled()).toBeFalsy();
  // })

  it('Injector helper - instead of TestBed', async () => {
    const injector = Injector.create({
      providers: [
        // Have to provide deps directly into the provider because we are not transforming the constructor
        { provide: AppComponent, useClass: AppComponent, deps: [AppService] },
        { provide: AppService, useClass: AppService }
      ]
    });

    const service = injector.get(AppService);
    expect(service.isEnabled()).toBeFalsy();

    const component = injector.get(AppComponent);
    expect(component.isEnabled()).toBeFalsy();
  })

});
