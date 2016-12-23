import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'add-site-view',
  templateUrl: 'app/add-site.template.html',
  styles: [`
    h3 { 
      font-weight: bold;
      color: maroon;
    }
  `]
})
export class AddSiteComponent {
  @Input() siteId: number;
  @Output() onAdded = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter();
  siteName: string;

  added() {
    if (this.siteName) {
      this.onAdded.emit(this.siteName);
    }
  }

  cancel() {
    this.onCancel.emit(null);
  }
}