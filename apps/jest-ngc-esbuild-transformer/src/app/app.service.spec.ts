import {AppService} from "./app.service";
import {take} from "rxjs";

describe('AppService', () => {
  it('isEnabled returns false as the default', () => {
    const appService = new AppService();
    expect(appService.isEnabled()).toBeFalsy();
  });

  it('observeIsEnabled returns false as the default', (done) => {
    const appService = new AppService();
    appService.observeIsEnabled()
      .pipe(take(1))
      .subscribe(value => {
        expect(value).toBeFalsy();
        done();
      });
  });

  it('set changes the value returned from the isEnabled', () => {
    const appService = new AppService();
    appService.setIsEnabled(true);
    expect(appService.isEnabled()).toBeTruthy();
  });

  it('set changes the value returned from the observeIsEnabled', (done) => {
    const appService = new AppService();

    appService.observeIsEnabled()
      .pipe(take(1))
      .subscribe(value => {
        expect(value).toBeFalsy();
        done();
      });

    appService.setIsEnabled(true);
  });
})
