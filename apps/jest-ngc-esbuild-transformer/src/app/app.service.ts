import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  isEnabled(): boolean {
    return true;
  }

}
