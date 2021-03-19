import { Component, Input } from "@angular/core";

import { FormControl } from "@angular/forms";

import moment from "moment";
import momentTz from "moment-timezone";

@Component({
  selector: "hello",
  // template: `<h1>Hello {{name}}!</h1>`,
  templateUrl: "./hello.component.html",
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  localDate: any;
  utcDate: any;
  defaultZoneDateISO: any;
  defaultZoneDateUTC: any;

  timezones = momentTz.tz.names();

  zoneControl = new FormControl();

  ngOnInit(): void {
    const now = moment();
    this.localDate = now.toDate();
    this.utcDate = now.utc();
    // this.defaultZoneDateISO = now.toDate();
    const customZone = "America/New_York";
    this.zoneControl.setValue(customZone);
    this.defaultZoneDateISO = momentTz.tz(customZone).format();
    this.defaultZoneDateUTC = momentTz.tz(customZone);
  }

  changeTimeZone(timezone: string): void {
    this.defaultZoneDateISO = momentTz.tz(timezone).format();
    this.defaultZoneDateUTC = momentTz.tz(timezone);
  }
}
