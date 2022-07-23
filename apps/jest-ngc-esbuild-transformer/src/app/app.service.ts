import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private state: boolean = false;
  private state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  setIsEnabled(isEnabled: boolean): void {
    this.state$.next(isEnabled);
    this.state = isEnabled;
  }

  isEnabled(): boolean {
    return this.state;
  }

  observeIsEnabled(): Observable<boolean> {
    return this.state$.asObservable();
  }

}
