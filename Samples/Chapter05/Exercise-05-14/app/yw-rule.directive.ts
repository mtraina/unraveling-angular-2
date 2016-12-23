import {Directive, Host} from '@angular/core'
import {TemplateRef, ViewContainerRef} from '@angular/core';
import {RuleView} from './rule-view';

@Directive({
  selector: '[ywRule]',
  inputs: ['ywRule']
})
export class RuleDirective {
  private ruleValue: any;
  private dayViews: RuleView[] = [];
  private nightViews: RuleView[] = [];
  private visibleViews: RuleView[] = [];

  set ywRule(value: string) {
    if (value != 'night') {
      value = 'day';
    }
    if (this.ruleValue == value) return;
    this.ruleValue = value;

    this.refreshViews()
  }

  refreshViews() {
    this.removeVisibleViews();
    this.visibleViews = this.ruleValue == 'day'
      ? this.dayViews : this.nightViews;
    this.displayVisibleViews();
  }

  removeVisibleViews() {
    var visibleViews = this.visibleViews;
    for (var i = 0; i < visibleViews.length; i++) {
      visibleViews[i].destroy();
    }
  }

  displayVisibleViews() {
    var visibleViews = this.visibleViews;
    for (var i = 0; i < visibleViews.length; i++) {
      visibleViews[i].create();
    }
  }

  registerView(isDay: boolean, ruleView: RuleView) {
    if (isDay) {
      this.dayViews.push(ruleView);
    } else {
      this.nightViews.push(ruleView);
    }
    this.refreshViews();
  }
}