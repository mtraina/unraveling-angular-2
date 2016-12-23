import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: 'header'
})
export class HeaderDirective implements OnInit {
  text: string;
  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.text = this.element.nativeElement.textContent;
  }
}