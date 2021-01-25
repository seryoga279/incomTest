import {Component, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-unsubscribe',
  template: ``,
  styles: []
})
export class UnsubscribeComponent implements OnDestroy {

  protected unsubscribe: Subject<void> = new Subject();

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
