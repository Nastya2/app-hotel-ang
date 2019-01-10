import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltipAs'
})
export class TooltipDirective implements OnInit {

  // @HostBinding('class.tooltip-container')
  // public tooltipContainer: boolean = true;

  @Input()
  public set tooltip(text: string) {
    if (!text) {
      return;
    }
    this._tooltipContext.textContent = text;
  }

  private _tooltipContext: HTMLSpanElement = this._render.createElement('span');

  public constructor(
    private _render: Renderer2,
    private _elementRef: ElementRef
  ) {
  }

  @HostListener('document:keyup.escape', [])
  public tooltipHide(): void {
    this.hide();
  }

  public ngOnInit(): void {
    this._render.addClass(this._tooltipContext, 'tooltiptext');
    this._render.appendChild(this._elementRef.nativeElement, this._tooltipContext);
  }

  public show(): void {
    this._render.addClass(this._tooltipContext, 'open');
  }

  public hide(): void {
    this._render.removeClass(this._tooltipContext, 'open');
  }

}
