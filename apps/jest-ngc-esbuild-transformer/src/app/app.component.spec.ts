import { AppComponent } from './app.component';
import {AppService} from "./app.service";

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

  it('Falsy test', () => {
    const appComponent = new AppComponent(new FalsyAppService());
    expect(appComponent.isEnabled()).toBeTruthy();
  })

});
