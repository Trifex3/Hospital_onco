import { EventEmitter, ElementRef, NgZone, Renderer2, OnInit, OnDestroy } from '@angular/core';
export declare class KeydownEnterDirective implements OnInit, OnDestroy {
    private host;
    private ngZone;
    private renderer;
    keydown: EventEmitter<any>;
    private keydownListener;
    constructor(host: ElementRef<HTMLElement>, ngZone: NgZone, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
