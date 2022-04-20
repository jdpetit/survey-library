import { Component, Input } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { SurveyModel } from "survey-core";
import { ImplementorBase } from "./implementor-base";

@Component({
  selector: "survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.scss"]
})
export class SurveyComponent {
  @Input() model: any;
  constructor() {
  }
  ngOnChanges(changes: any): void {
    new ImplementorBase(changes.model.currentValue);
  }
}