import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Renderer2, Input, HostBinding, NgModule, forwardRef, Directive, HostListener, ViewChild, Injectable, EventEmitter, Inject, PLATFORM_ID, ChangeDetectorRef, ContentChildren, Output, isDevMode, Injector, TemplateRef, RendererFactory2, NgZone, ComponentFactoryResolver, ApplicationRef, ViewContainerRef, Attribute, NO_ERRORS_SCHEMA, ContentChild, ɵɵdefineInjectable } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule, NG_VALIDATORS } from '@angular/forms';
import { takeUntil, take, throttleTime, map, pairwise, distinctUntilChanged, share, filter, skip } from 'rxjs/operators';
import { Subject, timer, merge, fromEvent, of, animationFrameScheduler, Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ConfigurableFocusTrapFactory, A11yModule } from '@angular/cdk/a11y';
import { RouterLinkWithHref } from '@angular/router';
import { __decorate, __metadata } from 'tslib';

class MDBBadgeComponent {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            const customClassArr = this.color.split(' ');
            customClassArr.forEach((el) => {
                this._renderer.addClass(this._el.nativeElement, el);
            });
        }
    }
}
MDBBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-badge',
                template: "<span class=\"{{class}} {{classInside}}\">\n  <ng-content></ng-content>\n</span>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".badge{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;color:#fff!important}.badge-pill{border-radius:10rem;padding-right:.6rem;padding-left:.6rem}.badge-primary{background-color:#4285f4!important;color:#fff!important}.badge-danger{background-color:#ff3547!important;color:#fff!important}.badge-warning{background-color:#fb3!important;color:#fff!important}.badge-success{background-color:#00c851!important;color:#fff!important}.badge-info{background-color:#33b5e5!important;color:#fff!important}.badge-default{background-color:#2bbbad!important;color:#fff!important}.badge-secondary{background-color:#a6c!important;color:#fff!important}.badge-dark{background-color:#212121!important;color:#fff!important}.badge-light{background-color:#e0e0e0!important;color:#000!important}"]
            },] }
];
MDBBadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MDBBadgeComponent.propDecorators = {
    default: [{ type: Input }, { type: HostBinding, args: ['class.badge-default',] }],
    primary: [{ type: Input }, { type: HostBinding, args: ['class.badge-primary',] }],
    secondary: [{ type: Input }, { type: HostBinding, args: ['class.badge-secondary',] }],
    success: [{ type: Input }, { type: HostBinding, args: ['class.badge-success',] }],
    info: [{ type: Input }, { type: HostBinding, args: ['class.badge-info',] }],
    warning: [{ type: Input }, { type: HostBinding, args: ['class.badge-warning',] }],
    danger: [{ type: Input }, { type: HostBinding, args: ['class.badge-danger',] }],
    pill: [{ type: Input }, { type: HostBinding, args: ['class.badge-pill',] }],
    classInside: [{ type: Input }],
    color: [{ type: Input }],
    class: [{ type: Input }]
};

class BadgeModule {
}
BadgeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MDBBadgeComponent],
                exports: [MDBBadgeComponent]
            },] }
];

class MdbBreadcrumbComponent {
}
MdbBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-breadcrumb',
                template: "<ol class=\"breadcrumb list-inline list-unstyled {{customClass}} text-{{textTransform}}\">\n  <ng-content></ng-content>\n</ol>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbBreadcrumbComponent.propDecorators = {
    customClass: [{ type: Input }],
    textTransform: [{ type: Input }]
};

class MdbBreadcrumbItemComponent {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, 'breadcrumb-item');
    }
}
MdbBreadcrumbItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-breadcrumb-item',
                template: "<li class=\"list-inline-item breadcrumb-item font-weight-{{fontWeight}}\">\n  <ng-content></ng-content>\n</li>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".breadcrumb-item{cursor:pointer}.breadcrumb-item.active{color:#6c757d!important}.breadcrumb-item.active>.breadcrumb-item{cursor:default}.light-font .breadcrumb-item:before{color:#fff}.light-font .breadcrumb-item.active{color:#cfd8dc!important}.light-font .breadcrumb-item.active>.breadcrumb-item{cursor:default}.dark-font .breadcrumb-item:before{color:#000}.dark-font .breadcrumb-item.active{color:#455a64!important}.dark-font .breadcrumb-item.active>.breadcrumb-item{cursor:default}"]
            },] }
];
MdbBreadcrumbItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbBreadcrumbItemComponent.propDecorators = {
    fontWeight: [{ type: Input }]
};

class BreadcrumbModule {
}
BreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [MdbBreadcrumbComponent, MdbBreadcrumbItemComponent],
                exports: [MdbBreadcrumbComponent, MdbBreadcrumbItemComponent]
            },] }
];

// tslint:disable-next-line:component-class-suffix
class MdbBtnDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.color = '';
        this.rounded = false;
        this.gradient = '';
        this.outline = false;
        this.flat = false;
        this.size = '';
        this.block = false;
        this.floating = false;
    }
    ngOnInit() {
        this.colorClass = 'btn-' + this.color;
        this.gradientClass = this.gradient + '-gradient';
        this.outlineClass = 'btn-outline-' + this.color;
        this.flatClass = 'btn-flat';
        this.roundedClass = 'btn-rounded';
        this.sizeClass = 'btn-' + this.size;
        this.blockClass = 'btn-block';
        this.floatingClass = 'btn-floating';
        this.renderer.addClass(this.el.nativeElement, 'btn');
        this.initClasses();
    }
    ngOnChanges(changes) {
        if (changes.color) {
            this.renderer.removeClass(this.el.nativeElement, this.colorClass);
            if (this.color && this.color !== '') {
                this.colorClass = 'btn-' + this.color;
                this.renderer.addClass(this.el.nativeElement, this.colorClass);
            }
            if (this.outline) {
                const currentOutlineClass = this.outlineClass;
                this.outlineClass = 'btn-outline-' + this.color;
                this.renderer.removeClass(this.el.nativeElement, currentOutlineClass);
                this.renderer.addClass(this.el.nativeElement, this.outlineClass);
            }
        }
        if (changes.gradient) {
            this.renderer.removeClass(this.el.nativeElement, this.gradientClass);
            if (this.gradient !== '') {
                this.gradientClass = this.gradient + '-gradient';
                this.renderer.addClass(this.el.nativeElement, this.gradientClass);
            }
        }
        if (changes.outline) {
            if (!this.outline) {
                this.renderer.removeClass(this.el.nativeElement, this.outlineClass);
            }
            if (this.outline) {
                this.renderer.removeClass(this.el.nativeElement, this.colorClass);
                this.renderer.addClass(this.el.nativeElement, this.outlineClass);
            }
            this.outlineClass = 'btn-outline-' + this.color;
        }
        if (changes.flat) {
            this.renderer.removeClass(this.el.nativeElement, this.flatClass);
            if (this.flat) {
                if (this.color) {
                    this.renderer.removeClass(this.el.nativeElement, this.colorClass);
                }
                if (this.gradient) {
                    this.renderer.removeClass(this.el.nativeElement, this.gradientClass);
                }
                if (this.outline) {
                    this.renderer.removeClass(this.el.nativeElement, this.outlineClass);
                }
                if (this.rounded) {
                    this.renderer.removeClass(this.el.nativeElement, this.roundedClass);
                }
                this.renderer.addClass(this.el.nativeElement, this.flatClass);
            }
        }
        if (changes.rounded) {
            this.renderer.removeClass(this.el.nativeElement, this.roundedClass);
            if (this.rounded) {
                this.roundedClass = 'btn-rounded';
                this.renderer.addClass(this.el.nativeElement, this.roundedClass);
            }
        }
        if (changes.size) {
            this.renderer.removeClass(this.el.nativeElement, this.sizeClass);
            if (this.size !== '') {
                this.sizeClass = 'btn-' + this.size;
                this.renderer.addClass(this.el.nativeElement, this.sizeClass);
            }
        }
        if (changes.block) {
            this.renderer.removeClass(this.el.nativeElement, this.blockClass);
            if (this.block) {
                this.blockClass = 'btn-block';
                this.renderer.addClass(this.el.nativeElement, this.blockClass);
            }
        }
        if (changes.floating) {
            if (!this.floating) {
                this.renderer.removeClass(this.el.nativeElement, this.floatingClass);
                this.renderer.addClass(this.el.nativeElement, 'btn');
            }
            if (this.floating) {
                this.floatingClass = 'btn-floating';
                this.renderer.addClass(this.el.nativeElement, this.floatingClass);
                this.renderer.removeClass(this.el.nativeElement, 'btn');
            }
        }
    }
    initClasses() {
        if (this.color !== '') {
            this.renderer.addClass(this.el.nativeElement, this.colorClass);
        }
        if (this.rounded) {
            this.renderer.addClass(this.el.nativeElement, this.roundedClass);
        }
        if (this.gradient) {
            if (this.color !== '') {
                this.renderer.removeClass(this.el.nativeElement, this.colorClass);
            }
            this.renderer.addClass(this.el.nativeElement, this.gradientClass);
        }
        if (this.outline) {
            this.renderer.removeClass(this.el.nativeElement, this.colorClass);
            this.renderer.addClass(this.el.nativeElement, this.outlineClass);
        }
        if (this.flat) {
            if (this.color) {
                this.renderer.removeClass(this.el.nativeElement, this.colorClass);
            }
            if (this.gradient) {
                this.renderer.removeClass(this.el.nativeElement, this.gradientClass);
            }
            if (this.outline) {
                this.renderer.removeClass(this.el.nativeElement, this.outlineClass);
            }
            if (this.rounded) {
                this.renderer.removeClass(this.el.nativeElement, this.roundedClass);
            }
            this.renderer.addClass(this.el.nativeElement, this.flatClass);
        }
        if (this.size) {
            this.renderer.addClass(this.el.nativeElement, this.sizeClass);
        }
        if (this.block) {
            this.renderer.addClass(this.el.nativeElement, this.blockClass);
        }
        if (this.floating) {
            this.renderer.addClass(this.el.nativeElement, this.floatingClass);
            this.renderer.removeClass(this.el.nativeElement, 'btn');
        }
    }
}
MdbBtnDirective.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[mdbBtn]',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".btn{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);padding:.84rem 2.14rem;font-size:.81rem;transition:all .2s ease-in-out;margin:.375rem;border:0;border-radius:.125rem;cursor:pointer;text-transform:uppercase;white-space:normal;word-wrap:break-word;color:inherit}.btn:active,.btn:focus,.btn:hover{outline:0}.btn:active,.btn:focus,.btn:hover,.btn:not([disabled]):not(.disabled).active,.btn:not([disabled]):not(.disabled):active{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn .fab,.btn .far,.btn .fas{position:relative;font-size:.9rem}.btn .fab.right,.btn .far.right,.btn .fas.right{margin-left:.3rem}.btn .fab.left,.btn .far.left,.btn .fas.left{margin-right:.3rem}.btn.btn-lg .fab,.btn.btn-lg .far,.btn.btn-lg .fas{font-size:1rem}.btn.btn-md .fab,.btn.btn-md .far,.btn.btn-md .fas{font-size:.8rem}.btn.btn-sm .fab,.btn.btn-sm .far,.btn.btn-sm .fas{font-size:.7rem}.btn.btn-tb{padding:.3rem 1rem}.btn.disabled:active,.btn.disabled:focus,.btn.disabled:hover,.btn:disabled:active,.btn:disabled:focus,.btn:disabled:hover{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.btn.btn-block{margin:inherit}.btn.btn-link{color:#000;box-shadow:none;background-color:transparent}.btn.btn-link:active,.btn.btn-link:focus,.btn.btn-link:hover{box-shadow:none!important;background-color:transparent}.btn[class*=btn-outline-]{padding-top:.7rem;padding-bottom:.7rem}.btn[class*=btn-outline-].btn-lg{padding-top:.88rem;padding-bottom:.88rem}.btn[class*=btn-outline-].btn-md{padding-top:.58rem;padding-bottom:.58rem}.btn[class*=btn-outline-].btn-sm{padding-top:.38rem;padding-bottom:.38rem}.btn-group .btn{margin:0}.btn-floating .fa-lg,.btn .fa-lg{font-size:1.33333em!important}.btn-floating .fa-xs,.btn .fa-xs{font-size:.75em!important}.btn-floating .fa-sm,.btn .fa-sm{font-size:.875em!important}.btn-floating .fa-1x,.btn .fa-1x{font-size:1em!important}.btn-floating .fa-2x,.btn .fa-2x{font-size:2em!important}.btn-floating .fa-3x,.btn .fa-3x{font-size:3em!important}.btn-floating .fa-4x,.btn .fa-4x{font-size:4em!important}.btn-floating .fa-5x,.btn .fa-5x{font-size:5em!important}.btn-floating .fa-6x,.btn .fa-6x{font-size:6em!important}.btn-floating .fa-7x,.btn .fa-7x{font-size:7em!important}.btn-floating .fa-8x,.btn .fa-8x{font-size:8em!important}.btn-floating .fa-9x,.btn .fa-9x{font-size:9em!important}.btn-floating .fa-10x,.btn .fa-10x{font-size:10em!important}.btn-primary{background-color:#4285f4!important;color:#fff}.btn-primary:hover{background-color:#5a95f5;color:#fff}.btn-primary.focus,.btn-primary:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-primary.active,.btn-primary:active,.btn-primary:focus{background-color:#0b51c5}.btn-primary.dropdown-toggle{background-color:#4285f4!important}.btn-primary.dropdown-toggle:focus,.btn-primary.dropdown-toggle:hover{background-color:#5a95f5!important}.btn-primary:not([disabled]):not(.disabled).active,.btn-primary:not([disabled]):not(.disabled):active,.show>.btn-primary.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#0b51c5!important}.btn-primary:not([disabled]):not(.disabled).active:focus,.btn-primary:not([disabled]):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.primary-ic{color:#4285f4!important}.primary-ic:focus,.primary-ic:hover{color:#4285f4}table.table a.btn.btn-primary{color:#fff}.btn-outline-primary{border:2px solid #4285f4!important;background-color:transparent!important;color:#4285f4!important}.btn-outline-primary.active,.btn-outline-primary:active,.btn-outline-primary:active:focus,.btn-outline-primary:focus,.btn-outline-primary:hover{border-color:#4285f4!important;background-color:transparent!important;color:#4285f4!important}.btn-outline-primary:not([disabled]):not(.disabled).active,.btn-outline-primary:not([disabled]):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#4285f4!important}.btn-outline-primary:not([disabled]):not(.disabled).active:focus,.btn-outline-primary:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-danger{background-color:#ff3547!important;color:#fff}.btn-danger:hover{background-color:#ff4f5e;color:#fff}.btn-danger.focus,.btn-danger:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-danger.active,.btn-danger:active,.btn-danger:focus{background-color:#ce0012}.btn-danger.dropdown-toggle{background-color:#ff3547!important}.btn-danger.dropdown-toggle:focus,.btn-danger.dropdown-toggle:hover{background-color:#ff4f5e!important}.btn-danger:not([disabled]):not(.disabled).active,.btn-danger:not([disabled]):not(.disabled):active,.show>.btn-danger.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#ce0012!important}.btn-danger:not([disabled]):not(.disabled).active:focus,.btn-danger:not([disabled]):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.danger-ic{color:#ff3547!important}.danger-ic:focus,.danger-ic:hover{color:#ff3547}table.table a.btn.btn-danger{color:#fff}.btn-outline-danger{border:2px solid #ff3547!important;background-color:transparent!important;color:#ff3547!important}.btn-outline-danger.active,.btn-outline-danger:active,.btn-outline-danger:active:focus,.btn-outline-danger:focus,.btn-outline-danger:hover{border-color:#ff3547!important;background-color:transparent!important;color:#ff3547!important}.btn-outline-danger:not([disabled]):not(.disabled).active,.btn-outline-danger:not([disabled]):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#ff3547!important}.btn-outline-danger:not([disabled]):not(.disabled).active:focus,.btn-outline-danger:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-warning{background-color:#fb3!important;color:#fff}.btn-warning:hover{background-color:#ffc44d;color:#fff}.btn-warning.focus,.btn-warning:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-warning.active,.btn-warning:active,.btn-warning:focus{background-color:#c80}.btn-warning.dropdown-toggle{background-color:#fb3!important}.btn-warning.dropdown-toggle:focus,.btn-warning.dropdown-toggle:hover{background-color:#ffc44d!important}.btn-warning:not([disabled]):not(.disabled).active,.btn-warning:not([disabled]):not(.disabled):active,.show>.btn-warning.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#c80!important}.btn-warning:not([disabled]):not(.disabled).active:focus,.btn-warning:not([disabled]):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.warning-ic{color:#fb3!important}.warning-ic:focus,.warning-ic:hover{color:#fb3}table.table a.btn.btn-warning{color:#fff}.btn-outline-warning{border:2px solid #fb3!important;background-color:transparent!important;color:#fb3!important}.btn-outline-warning.active,.btn-outline-warning:active,.btn-outline-warning:active:focus,.btn-outline-warning:focus,.btn-outline-warning:hover{border-color:#fb3!important;background-color:transparent!important;color:#fb3!important}.btn-outline-warning:not([disabled]):not(.disabled).active,.btn-outline-warning:not([disabled]):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#fb3!important}.btn-outline-warning:not([disabled]):not(.disabled).active:focus,.btn-outline-warning:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-success{background-color:#00c851!important;color:#fff}.btn-success:hover{background-color:#00e25b;color:#fff}.btn-success.focus,.btn-success:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-success.active,.btn-success:active,.btn-success:focus{background-color:#006228}.btn-success.dropdown-toggle{background-color:#00c851!important}.btn-success.dropdown-toggle:focus,.btn-success.dropdown-toggle:hover{background-color:#00e25b!important}.btn-success:not([disabled]):not(.disabled).active,.btn-success:not([disabled]):not(.disabled):active,.show>.btn-success.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#006228!important}.btn-success:not([disabled]):not(.disabled).active:focus,.btn-success:not([disabled]):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.success-ic{color:#00c851!important}.success-ic:focus,.success-ic:hover{color:#00c851}table.table a.btn.btn-success{color:#fff}.btn-outline-success{border:2px solid #00c851!important;background-color:transparent!important;color:#00c851!important}.btn-outline-success.active,.btn-outline-success:active,.btn-outline-success:active:focus,.btn-outline-success:focus,.btn-outline-success:hover{border-color:#00c851!important;background-color:transparent!important;color:#00c851!important}.btn-outline-success:not([disabled]):not(.disabled).active,.btn-outline-success:not([disabled]):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#00c851!important}.btn-outline-success:not([disabled]):not(.disabled).active:focus,.btn-outline-success:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-info{background-color:#33b5e5!important;color:#fff}.btn-info:hover{background-color:#4abde8;color:#fff}.btn-info.focus,.btn-info:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-info.active,.btn-info:active,.btn-info:focus{background-color:#14799e}.btn-info.dropdown-toggle{background-color:#33b5e5!important}.btn-info.dropdown-toggle:focus,.btn-info.dropdown-toggle:hover{background-color:#4abde8!important}.btn-info:not([disabled]):not(.disabled).active,.btn-info:not([disabled]):not(.disabled):active,.show>.btn-info.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#14799e!important}.btn-info:not([disabled]):not(.disabled).active:focus,.btn-info:not([disabled]):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.info-ic{color:#33b5e5!important}.info-ic:focus,.info-ic:hover{color:#33b5e5}table.table a.btn.btn-info{color:#fff}.btn-outline-info{border:2px solid #33b5e5!important;background-color:transparent!important;color:#33b5e5!important}.btn-outline-info.active,.btn-outline-info:active,.btn-outline-info:active:focus,.btn-outline-info:focus,.btn-outline-info:hover{border-color:#33b5e5!important;background-color:transparent!important;color:#33b5e5!important}.btn-outline-info:not([disabled]):not(.disabled).active,.btn-outline-info:not([disabled]):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#33b5e5!important}.btn-outline-info:not([disabled]):not(.disabled).active:focus,.btn-outline-info:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-default{background-color:#2bbbad!important;color:#fff}.btn-default:hover{background-color:#30cfc0;color:#fff}.btn-default.focus,.btn-default:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-default.active,.btn-default:active,.btn-default:focus{background-color:#186860}.btn-default.dropdown-toggle{background-color:#2bbbad!important}.btn-default.dropdown-toggle:focus,.btn-default.dropdown-toggle:hover{background-color:#30cfc0!important}.btn-default:not([disabled]):not(.disabled).active,.btn-default:not([disabled]):not(.disabled):active,.show>.btn-default.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#186860!important}.btn-default:not([disabled]):not(.disabled).active:focus,.btn-default:not([disabled]):not(.disabled):active:focus,.show>.btn-default.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.default-ic{color:#2bbbad!important}.default-ic:focus,.default-ic:hover{color:#2bbbad}table.table a.btn.btn-default{color:#fff}.btn-outline-default{border:2px solid #2bbbad!important;background-color:transparent!important;color:#2bbbad!important}.btn-outline-default.active,.btn-outline-default:active,.btn-outline-default:active:focus,.btn-outline-default:focus,.btn-outline-default:hover{border-color:#2bbbad!important;background-color:transparent!important;color:#2bbbad!important}.btn-outline-default:not([disabled]):not(.disabled).active,.btn-outline-default:not([disabled]):not(.disabled):active,.show>.btn-outline-default.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#2bbbad!important}.btn-outline-default:not([disabled]):not(.disabled).active:focus,.btn-outline-default:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-default.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-secondary{background-color:#a6c!important;color:#fff}.btn-secondary:hover{background-color:#b579d2;color:#fff}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-secondary.active,.btn-secondary:active,.btn-secondary:focus{background-color:#739}.btn-secondary.dropdown-toggle{background-color:#a6c!important}.btn-secondary.dropdown-toggle:focus,.btn-secondary.dropdown-toggle:hover{background-color:#b579d2!important}.btn-secondary:not([disabled]):not(.disabled).active,.btn-secondary:not([disabled]):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#739!important}.btn-secondary:not([disabled]):not(.disabled).active:focus,.btn-secondary:not([disabled]):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.secondary-ic{color:#a6c!important}.secondary-ic:focus,.secondary-ic:hover{color:#a6c}table.table a.btn.btn-secondary{color:#fff}.btn-outline-secondary{border:2px solid #a6c!important;background-color:transparent!important;color:#a6c!important}.btn-outline-secondary.active,.btn-outline-secondary:active,.btn-outline-secondary:active:focus,.btn-outline-secondary:focus,.btn-outline-secondary:hover{border-color:#a6c!important;background-color:transparent!important;color:#a6c!important}.btn-outline-secondary:not([disabled]):not(.disabled).active,.btn-outline-secondary:not([disabled]):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#a6c!important}.btn-outline-secondary:not([disabled]):not(.disabled).active:focus,.btn-outline-secondary:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-elegant{background-color:#2e2e2e!important;color:#fff}.btn-elegant:hover{background-color:#3b3b3b;color:#fff}.btn-elegant.focus,.btn-elegant:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-elegant.active,.btn-elegant:active,.btn-elegant:focus{background-color:#000}.btn-elegant.dropdown-toggle{background-color:#2e2e2e!important}.btn-elegant.dropdown-toggle:focus,.btn-elegant.dropdown-toggle:hover{background-color:#3b3b3b!important}.btn-elegant:not([disabled]):not(.disabled).active,.btn-elegant:not([disabled]):not(.disabled):active,.show>.btn-elegant.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#000!important}.btn-elegant:not([disabled]):not(.disabled).active:focus,.btn-elegant:not([disabled]):not(.disabled):active:focus,.show>.btn-elegant.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.elegant-ic{color:#2e2e2e!important}.elegant-ic:focus,.elegant-ic:hover{color:#2e2e2e}table.table a.btn.btn-elegant{color:#fff}.btn-outline-elegant{border:2px solid #2e2e2e!important;background-color:transparent!important;color:#2e2e2e!important}.btn-outline-elegant.active,.btn-outline-elegant:active,.btn-outline-elegant:active:focus,.btn-outline-elegant:focus,.btn-outline-elegant:hover{border-color:#2e2e2e!important;background-color:transparent!important;color:#2e2e2e!important}.btn-outline-elegant:not([disabled]):not(.disabled).active,.btn-outline-elegant:not([disabled]):not(.disabled):active,.show>.btn-outline-elegant.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#2e2e2e!important}.btn-outline-elegant:not([disabled]):not(.disabled).active:focus,.btn-outline-elegant:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-elegant.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-unique{background-color:#880e4f!important;color:#fff}.btn-unique:hover{background-color:#9f105c;color:#fff}.btn-unique.focus,.btn-unique:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-unique.active,.btn-unique:active,.btn-unique:focus{background-color:#2c0419}.btn-unique.dropdown-toggle{background-color:#880e4f!important}.btn-unique.dropdown-toggle:focus,.btn-unique.dropdown-toggle:hover{background-color:#9f105c!important}.btn-unique:not([disabled]):not(.disabled).active,.btn-unique:not([disabled]):not(.disabled):active,.show>.btn-unique.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#2c0419!important}.btn-unique:not([disabled]):not(.disabled).active:focus,.btn-unique:not([disabled]):not(.disabled):active:focus,.show>.btn-unique.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.unique-ic{color:#880e4f!important}.unique-ic:focus,.unique-ic:hover{color:#880e4f}table.table a.btn.btn-unique{color:#fff}.btn-outline-unique{border:2px solid #880e4f!important;background-color:transparent!important;color:#880e4f!important}.btn-outline-unique.active,.btn-outline-unique:active,.btn-outline-unique:active:focus,.btn-outline-unique:focus,.btn-outline-unique:hover{border-color:#880e4f!important;background-color:transparent!important;color:#880e4f!important}.btn-outline-unique:not([disabled]):not(.disabled).active,.btn-outline-unique:not([disabled]):not(.disabled):active,.show>.btn-outline-unique.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#880e4f!important}.btn-outline-unique:not([disabled]):not(.disabled).active:focus,.btn-outline-unique:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-unique.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-dark-green{background-color:#388e3c!important;color:#fff}.btn-dark-green:hover{background-color:#3fa044;color:#fff}.btn-dark-green.focus,.btn-dark-green:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-dark-green.active,.btn-dark-green:active,.btn-dark-green:focus{background-color:#1b451d}.btn-dark-green.dropdown-toggle{background-color:#388e3c!important}.btn-dark-green.dropdown-toggle:focus,.btn-dark-green.dropdown-toggle:hover{background-color:#3fa044!important}.btn-dark-green:not([disabled]):not(.disabled).active,.btn-dark-green:not([disabled]):not(.disabled):active,.show>.btn-dark-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#1b451d!important}.btn-dark-green:not([disabled]):not(.disabled).active:focus,.btn-dark-green:not([disabled]):not(.disabled):active:focus,.show>.btn-dark-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.dark-green-ic{color:#388e3c!important}.dark-green-ic:focus,.dark-green-ic:hover{color:#388e3c}table.table a.btn.btn-dark-green{color:#fff}.btn-outline-dark-green{border:2px solid #388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-dark-green.active,.btn-outline-dark-green:active,.btn-outline-dark-green:active:focus,.btn-outline-dark-green:focus,.btn-outline-dark-green:hover{border-color:#388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-dark-green:not([disabled]):not(.disabled).active,.btn-outline-dark-green:not([disabled]):not(.disabled):active,.show>.btn-outline-dark-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#388e3c!important}.btn-outline-dark-green:not([disabled]):not(.disabled).active:focus,.btn-outline-dark-green:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-dark-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-mdb-color{background-color:#59698d!important;color:#fff}.btn-mdb-color:hover{background-color:#63759d;color:#fff}.btn-mdb-color.focus,.btn-mdb-color:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-mdb-color.active,.btn-mdb-color:active,.btn-mdb-color:focus{background-color:#323a4e}.btn-mdb-color.dropdown-toggle{background-color:#59698d!important}.btn-mdb-color.dropdown-toggle:focus,.btn-mdb-color.dropdown-toggle:hover{background-color:#63759d!important}.btn-mdb-color:not([disabled]):not(.disabled).active,.btn-mdb-color:not([disabled]):not(.disabled):active,.show>.btn-mdb-color.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#323a4e!important}.btn-mdb-color:not([disabled]):not(.disabled).active:focus,.btn-mdb-color:not([disabled]):not(.disabled):active:focus,.show>.btn-mdb-color.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.mdb-color-ic{color:#59698d!important}.mdb-color-ic:focus,.mdb-color-ic:hover{color:#59698d}table.table a.btn.btn-mdb-color{color:#fff}.btn-outline-mdb-color{border:2px solid #59698d!important;background-color:transparent!important;color:#59698d!important}.btn-outline-mdb-color.active,.btn-outline-mdb-color:active,.btn-outline-mdb-color:active:focus,.btn-outline-mdb-color:focus,.btn-outline-mdb-color:hover{border-color:#59698d!important;background-color:transparent!important;color:#59698d!important}.btn-outline-mdb-color:not([disabled]):not(.disabled).active,.btn-outline-mdb-color:not([disabled]):not(.disabled):active,.show>.btn-outline-mdb-color.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#59698d!important}.btn-outline-mdb-color:not([disabled]):not(.disabled).active:focus,.btn-outline-mdb-color:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-mdb-color.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-red{background-color:#d32f2f!important;color:#fff}.btn-red:hover{background-color:#d74444;color:#fff}.btn-red.focus,.btn-red:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-red.active,.btn-red:active,.btn-red:focus{background-color:#811b1b}.btn-red.dropdown-toggle{background-color:#d32f2f!important}.btn-red.dropdown-toggle:focus,.btn-red.dropdown-toggle:hover{background-color:#d74444!important}.btn-red:not([disabled]):not(.disabled).active,.btn-red:not([disabled]):not(.disabled):active,.show>.btn-red.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#811b1b!important}.btn-red:not([disabled]):not(.disabled).active:focus,.btn-red:not([disabled]):not(.disabled):active:focus,.show>.btn-red.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.red-ic{color:#d32f2f!important}.red-ic:focus,.red-ic:hover{color:#d32f2f}table.table a.btn.btn-red{color:#fff}.btn-outline-red{border:2px solid #d32f2f!important;background-color:transparent!important;color:#d32f2f!important}.btn-outline-red.active,.btn-outline-red:active,.btn-outline-red:active:focus,.btn-outline-red:focus,.btn-outline-red:hover{border-color:#d32f2f!important;background-color:transparent!important;color:#d32f2f!important}.btn-outline-red:not([disabled]):not(.disabled).active,.btn-outline-red:not([disabled]):not(.disabled):active,.show>.btn-outline-red.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#d32f2f!important}.btn-outline-red:not([disabled]):not(.disabled).active:focus,.btn-outline-red:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-red.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-pink{background-color:#ec407a!important;color:#fff}.btn-pink:hover{background-color:#ee578a;color:#fff}.btn-pink.focus,.btn-pink:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-pink.active,.btn-pink:active,.btn-pink:focus{background-color:#b41249}.btn-pink.dropdown-toggle{background-color:#ec407a!important}.btn-pink.dropdown-toggle:focus,.btn-pink.dropdown-toggle:hover{background-color:#ee578a!important}.btn-pink:not([disabled]):not(.disabled).active,.btn-pink:not([disabled]):not(.disabled):active,.show>.btn-pink.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#b41249!important}.btn-pink:not([disabled]):not(.disabled).active:focus,.btn-pink:not([disabled]):not(.disabled):active:focus,.show>.btn-pink.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.pink-ic{color:#ec407a!important}.pink-ic:focus,.pink-ic:hover{color:#ec407a}table.table a.btn.btn-pink{color:#fff}.btn-outline-pink{border:2px solid #ec407a!important;background-color:transparent!important;color:#ec407a!important}.btn-outline-pink.active,.btn-outline-pink:active,.btn-outline-pink:active:focus,.btn-outline-pink:focus,.btn-outline-pink:hover{border-color:#ec407a!important;background-color:transparent!important;color:#ec407a!important}.btn-outline-pink:not([disabled]):not(.disabled).active,.btn-outline-pink:not([disabled]):not(.disabled):active,.show>.btn-outline-pink.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#ec407a!important}.btn-outline-pink:not([disabled]):not(.disabled).active:focus,.btn-outline-pink:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-pink.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-purple{background-color:#8e24aa!important;color:#fff}.btn-purple:hover{background-color:#a028bf;color:#fff}.btn-purple.focus,.btn-purple:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-purple.active,.btn-purple:active,.btn-purple:focus{background-color:#481256}.btn-purple.dropdown-toggle{background-color:#8e24aa!important}.btn-purple.dropdown-toggle:focus,.btn-purple.dropdown-toggle:hover{background-color:#a028bf!important}.btn-purple:not([disabled]):not(.disabled).active,.btn-purple:not([disabled]):not(.disabled):active,.show>.btn-purple.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#481256!important}.btn-purple:not([disabled]):not(.disabled).active:focus,.btn-purple:not([disabled]):not(.disabled):active:focus,.show>.btn-purple.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.purple-ic{color:#8e24aa!important}.purple-ic:focus,.purple-ic:hover{color:#8e24aa}table.table a.btn.btn-purple{color:#fff}.btn-outline-purple{border:2px solid #8e24aa!important;background-color:transparent!important;color:#8e24aa!important}.btn-outline-purple.active,.btn-outline-purple:active,.btn-outline-purple:active:focus,.btn-outline-purple:focus,.btn-outline-purple:hover{border-color:#8e24aa!important;background-color:transparent!important;color:#8e24aa!important}.btn-outline-purple:not([disabled]):not(.disabled).active,.btn-outline-purple:not([disabled]):not(.disabled):active,.show>.btn-outline-purple.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#8e24aa!important}.btn-outline-purple:not([disabled]):not(.disabled).active:focus,.btn-outline-purple:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-purple.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-deep-purple{background-color:#512da8!important;color:#fff}.btn-deep-purple:hover{background-color:#5b32bc;color:#fff}.btn-deep-purple.focus,.btn-deep-purple:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-deep-purple.active,.btn-deep-purple:active,.btn-deep-purple:focus{background-color:#2a1758}.btn-deep-purple.dropdown-toggle{background-color:#512da8!important}.btn-deep-purple.dropdown-toggle:focus,.btn-deep-purple.dropdown-toggle:hover{background-color:#5b32bc!important}.btn-deep-purple:not([disabled]):not(.disabled).active,.btn-deep-purple:not([disabled]):not(.disabled):active,.show>.btn-deep-purple.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#2a1758!important}.btn-deep-purple:not([disabled]):not(.disabled).active:focus,.btn-deep-purple:not([disabled]):not(.disabled):active:focus,.show>.btn-deep-purple.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.deep-purple-ic{color:#512da8!important}.deep-purple-ic:focus,.deep-purple-ic:hover{color:#512da8}table.table a.btn.btn-deep-purple{color:#fff}.btn-outline-deep-purple{border:2px solid #512da8!important;background-color:transparent!important;color:#512da8!important}.btn-outline-deep-purple.active,.btn-outline-deep-purple:active,.btn-outline-deep-purple:active:focus,.btn-outline-deep-purple:focus,.btn-outline-deep-purple:hover{border-color:#512da8!important;background-color:transparent!important;color:#512da8!important}.btn-outline-deep-purple:not([disabled]):not(.disabled).active,.btn-outline-deep-purple:not([disabled]):not(.disabled):active,.show>.btn-outline-deep-purple.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#512da8!important}.btn-outline-deep-purple:not([disabled]):not(.disabled).active:focus,.btn-outline-deep-purple:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-deep-purple.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-indigo{background-color:#3f51b5!important;color:#fff}.btn-indigo:hover{background-color:#4d5ec1;color:#fff}.btn-indigo.focus,.btn-indigo:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-indigo.active,.btn-indigo:active,.btn-indigo:focus{background-color:#252f69}.btn-indigo.dropdown-toggle{background-color:#3f51b5!important}.btn-indigo.dropdown-toggle:focus,.btn-indigo.dropdown-toggle:hover{background-color:#4d5ec1!important}.btn-indigo:not([disabled]):not(.disabled).active,.btn-indigo:not([disabled]):not(.disabled):active,.show>.btn-indigo.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#252f69!important}.btn-indigo:not([disabled]):not(.disabled).active:focus,.btn-indigo:not([disabled]):not(.disabled):active:focus,.show>.btn-indigo.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.indigo-ic{color:#3f51b5!important}.indigo-ic:focus,.indigo-ic:hover{color:#3f51b5}table.table a.btn.btn-indigo{color:#fff}.btn-outline-indigo{border:2px solid #3f51b5!important;background-color:transparent!important;color:#3f51b5!important}.btn-outline-indigo.active,.btn-outline-indigo:active,.btn-outline-indigo:active:focus,.btn-outline-indigo:focus,.btn-outline-indigo:hover{border-color:#3f51b5!important;background-color:transparent!important;color:#3f51b5!important}.btn-outline-indigo:not([disabled]):not(.disabled).active,.btn-outline-indigo:not([disabled]):not(.disabled):active,.show>.btn-outline-indigo.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#3f51b5!important}.btn-outline-indigo:not([disabled]):not(.disabled).active:focus,.btn-outline-indigo:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-indigo.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-blue{background-color:#1976d2!important;color:#fff}.btn-blue:hover{background-color:#2083e4;color:#fff}.btn-blue.focus,.btn-blue:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-blue.active,.btn-blue:active,.btn-blue:focus{background-color:#0e4377}.btn-blue.dropdown-toggle{background-color:#1976d2!important}.btn-blue.dropdown-toggle:focus,.btn-blue.dropdown-toggle:hover{background-color:#2083e4!important}.btn-blue:not([disabled]):not(.disabled).active,.btn-blue:not([disabled]):not(.disabled):active,.show>.btn-blue.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#0e4377!important}.btn-blue:not([disabled]):not(.disabled).active:focus,.btn-blue:not([disabled]):not(.disabled):active:focus,.show>.btn-blue.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.blue-ic{color:#1976d2!important}.blue-ic:focus,.blue-ic:hover{color:#1976d2}table.table a.btn.btn-blue{color:#fff}.btn-outline-blue{border:2px solid #1976d2!important;background-color:transparent!important;color:#1976d2!important}.btn-outline-blue.active,.btn-outline-blue:active,.btn-outline-blue:active:focus,.btn-outline-blue:focus,.btn-outline-blue:hover{border-color:#1976d2!important;background-color:transparent!important;color:#1976d2!important}.btn-outline-blue:not([disabled]):not(.disabled).active,.btn-outline-blue:not([disabled]):not(.disabled):active,.show>.btn-outline-blue.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#1976d2!important}.btn-outline-blue:not([disabled]):not(.disabled).active:focus,.btn-outline-blue:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-blue.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light-blue{background-color:#82b1ff!important;color:#fff}.btn-light-blue:hover{background-color:#9cc1ff;color:#fff}.btn-light-blue.focus,.btn-light-blue:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light-blue.active,.btn-light-blue:active,.btn-light-blue:focus{background-color:#1c71ff}.btn-light-blue.dropdown-toggle{background-color:#82b1ff!important}.btn-light-blue.dropdown-toggle:focus,.btn-light-blue.dropdown-toggle:hover{background-color:#9cc1ff!important}.btn-light-blue:not([disabled]):not(.disabled).active,.btn-light-blue:not([disabled]):not(.disabled):active,.show>.btn-light-blue.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#1c71ff!important}.btn-light-blue:not([disabled]):not(.disabled).active:focus,.btn-light-blue:not([disabled]):not(.disabled):active:focus,.show>.btn-light-blue.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.light-blue-ic{color:#82b1ff!important}.light-blue-ic:focus,.light-blue-ic:hover{color:#82b1ff}table.table a.btn.btn-light-blue{color:#fff}.btn-outline-light-blue{border:2px solid #82b1ff!important;background-color:transparent!important;color:#82b1ff!important}.btn-outline-light-blue.active,.btn-outline-light-blue:active,.btn-outline-light-blue:active:focus,.btn-outline-light-blue:focus,.btn-outline-light-blue:hover{border-color:#82b1ff!important;background-color:transparent!important;color:#82b1ff!important}.btn-outline-light-blue:not([disabled]):not(.disabled).active,.btn-outline-light-blue:not([disabled]):not(.disabled):active,.show>.btn-outline-light-blue.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#82b1ff!important}.btn-outline-light-blue:not([disabled]):not(.disabled).active:focus,.btn-outline-light-blue:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-light-blue.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-cyan{background-color:#00bcd4!important;color:#fff}.btn-cyan:hover{background-color:#00d3ee;color:#fff}.btn-cyan.focus,.btn-cyan:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-cyan.active,.btn-cyan:active,.btn-cyan:focus{background-color:#00626e}.btn-cyan.dropdown-toggle{background-color:#00bcd4!important}.btn-cyan.dropdown-toggle:focus,.btn-cyan.dropdown-toggle:hover{background-color:#00d3ee!important}.btn-cyan:not([disabled]):not(.disabled).active,.btn-cyan:not([disabled]):not(.disabled):active,.show>.btn-cyan.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#00626e!important}.btn-cyan:not([disabled]):not(.disabled).active:focus,.btn-cyan:not([disabled]):not(.disabled):active:focus,.show>.btn-cyan.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.cyan-ic{color:#00bcd4!important}.cyan-ic:focus,.cyan-ic:hover{color:#00bcd4}table.table a.btn.btn-cyan{color:#fff}.btn-outline-cyan{border:2px solid #00bcd4!important;background-color:transparent!important;color:#00bcd4!important}.btn-outline-cyan.active,.btn-outline-cyan:active,.btn-outline-cyan:active:focus,.btn-outline-cyan:focus,.btn-outline-cyan:hover{border-color:#00bcd4!important;background-color:transparent!important;color:#00bcd4!important}.btn-outline-cyan:not([disabled]):not(.disabled).active,.btn-outline-cyan:not([disabled]):not(.disabled):active,.show>.btn-outline-cyan.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#00bcd4!important}.btn-outline-cyan:not([disabled]):not(.disabled).active:focus,.btn-outline-cyan:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-cyan.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-teal{background-color:#00796b!important;color:#fff}.btn-teal:hover{background-color:#009382;color:#fff}.btn-teal.focus,.btn-teal:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-teal.active,.btn-teal:active,.btn-teal:focus{background-color:#001311}.btn-teal.dropdown-toggle{background-color:#00796b!important}.btn-teal.dropdown-toggle:focus,.btn-teal.dropdown-toggle:hover{background-color:#009382!important}.btn-teal:not([disabled]):not(.disabled).active,.btn-teal:not([disabled]):not(.disabled):active,.show>.btn-teal.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#001311!important}.btn-teal:not([disabled]):not(.disabled).active:focus,.btn-teal:not([disabled]):not(.disabled):active:focus,.show>.btn-teal.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.teal-ic{color:#00796b!important}.teal-ic:focus,.teal-ic:hover{color:#00796b}table.table a.btn.btn-teal{color:#fff}.btn-outline-teal{border:2px solid #00796b!important;background-color:transparent!important;color:#00796b!important}.btn-outline-teal.active,.btn-outline-teal:active,.btn-outline-teal:active:focus,.btn-outline-teal:focus,.btn-outline-teal:hover{border-color:#00796b!important;background-color:transparent!important;color:#00796b!important}.btn-outline-teal:not([disabled]):not(.disabled).active,.btn-outline-teal:not([disabled]):not(.disabled):active,.show>.btn-outline-teal.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#00796b!important}.btn-outline-teal:not([disabled]):not(.disabled).active:focus,.btn-outline-teal:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-teal.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-green{background-color:#388e3c!important;color:#fff}.btn-green:hover{background-color:#3fa044;color:#fff}.btn-green.focus,.btn-green:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-green.active,.btn-green:active,.btn-green:focus{background-color:#1b451d}.btn-green.dropdown-toggle{background-color:#388e3c!important}.btn-green.dropdown-toggle:focus,.btn-green.dropdown-toggle:hover{background-color:#3fa044!important}.btn-green:not([disabled]):not(.disabled).active,.btn-green:not([disabled]):not(.disabled):active,.show>.btn-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#1b451d!important}.btn-green:not([disabled]):not(.disabled).active:focus,.btn-green:not([disabled]):not(.disabled):active:focus,.show>.btn-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.green-ic{color:#388e3c!important}.green-ic:focus,.green-ic:hover{color:#388e3c}table.table a.btn.btn-green{color:#fff}.btn-outline-green{border:2px solid #388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-green.active,.btn-outline-green:active,.btn-outline-green:active:focus,.btn-outline-green:focus,.btn-outline-green:hover{border-color:#388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-green:not([disabled]):not(.disabled).active,.btn-outline-green:not([disabled]):not(.disabled):active,.show>.btn-outline-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#388e3c!important}.btn-outline-green:not([disabled]):not(.disabled).active:focus,.btn-outline-green:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light-green{background-color:#8bc34a!important;color:#fff}.btn-light-green:hover{background-color:#97c95d;color:#fff}.btn-light-green.focus,.btn-light-green:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light-green.active,.btn-light-green:active,.btn-light-green:focus{background-color:#577d2a}.btn-light-green.dropdown-toggle{background-color:#8bc34a!important}.btn-light-green.dropdown-toggle:focus,.btn-light-green.dropdown-toggle:hover{background-color:#97c95d!important}.btn-light-green:not([disabled]):not(.disabled).active,.btn-light-green:not([disabled]):not(.disabled):active,.show>.btn-light-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#577d2a!important}.btn-light-green:not([disabled]):not(.disabled).active:focus,.btn-light-green:not([disabled]):not(.disabled):active:focus,.show>.btn-light-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.light-green-ic{color:#8bc34a!important}.light-green-ic:focus,.light-green-ic:hover{color:#8bc34a}table.table a.btn.btn-light-green{color:#fff}.btn-outline-light-green{border:2px solid #8bc34a!important;background-color:transparent!important;color:#8bc34a!important}.btn-outline-light-green.active,.btn-outline-light-green:active,.btn-outline-light-green:active:focus,.btn-outline-light-green:focus,.btn-outline-light-green:hover{border-color:#8bc34a!important;background-color:transparent!important;color:#8bc34a!important}.btn-outline-light-green:not([disabled]):not(.disabled).active,.btn-outline-light-green:not([disabled]):not(.disabled):active,.show>.btn-outline-light-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#8bc34a!important}.btn-outline-light-green:not([disabled]):not(.disabled).active:focus,.btn-outline-light-green:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-light-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-lime{background-color:#afb42b!important;color:#fff}.btn-lime:hover{background-color:#c3c930;color:#fff}.btn-lime.focus,.btn-lime:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-lime.active,.btn-lime:active,.btn-lime:focus{background-color:#5f6217}.btn-lime.dropdown-toggle{background-color:#afb42b!important}.btn-lime.dropdown-toggle:focus,.btn-lime.dropdown-toggle:hover{background-color:#c3c930!important}.btn-lime:not([disabled]):not(.disabled).active,.btn-lime:not([disabled]):not(.disabled):active,.show>.btn-lime.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#5f6217!important}.btn-lime:not([disabled]):not(.disabled).active:focus,.btn-lime:not([disabled]):not(.disabled):active:focus,.show>.btn-lime.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.lime-ic{color:#afb42b!important}.lime-ic:focus,.lime-ic:hover{color:#afb42b}table.table a.btn.btn-lime{color:#fff}.btn-outline-lime{border:2px solid #afb42b!important;background-color:transparent!important;color:#afb42b!important}.btn-outline-lime.active,.btn-outline-lime:active,.btn-outline-lime:active:focus,.btn-outline-lime:focus,.btn-outline-lime:hover{border-color:#afb42b!important;background-color:transparent!important;color:#afb42b!important}.btn-outline-lime:not([disabled]):not(.disabled).active,.btn-outline-lime:not([disabled]):not(.disabled):active,.show>.btn-outline-lime.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#afb42b!important}.btn-outline-lime:not([disabled]):not(.disabled).active:focus,.btn-outline-lime:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-lime.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-yellow{background-color:#fbc02d!important;color:#fff}.btn-yellow:hover{background-color:#fbc846;color:#fff}.btn-yellow.focus,.btn-yellow:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-yellow.active,.btn-yellow:active,.btn-yellow:focus{background-color:#be8904}.btn-yellow.dropdown-toggle{background-color:#fbc02d!important}.btn-yellow.dropdown-toggle:focus,.btn-yellow.dropdown-toggle:hover{background-color:#fbc846!important}.btn-yellow:not([disabled]):not(.disabled).active,.btn-yellow:not([disabled]):not(.disabled):active,.show>.btn-yellow.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#be8904!important}.btn-yellow:not([disabled]):not(.disabled).active:focus,.btn-yellow:not([disabled]):not(.disabled):active:focus,.show>.btn-yellow.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.yellow-ic{color:#fbc02d!important}.yellow-ic:focus,.yellow-ic:hover{color:#fbc02d}table.table a.btn.btn-yellow{color:#fff}.btn-outline-yellow{border:2px solid #fbc02d!important;background-color:transparent!important;color:#fbc02d!important}.btn-outline-yellow.active,.btn-outline-yellow:active,.btn-outline-yellow:active:focus,.btn-outline-yellow:focus,.btn-outline-yellow:hover{border-color:#fbc02d!important;background-color:transparent!important;color:#fbc02d!important}.btn-outline-yellow:not([disabled]):not(.disabled).active,.btn-outline-yellow:not([disabled]):not(.disabled):active,.show>.btn-outline-yellow.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#fbc02d!important}.btn-outline-yellow:not([disabled]):not(.disabled).active:focus,.btn-outline-yellow:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-yellow.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-amber{background-color:#ffa000!important;color:#fff}.btn-amber:hover{background-color:#ffaa1a;color:#fff}.btn-amber.focus,.btn-amber:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-amber.active,.btn-amber:active,.btn-amber:focus{background-color:#996000}.btn-amber.dropdown-toggle{background-color:#ffa000!important}.btn-amber.dropdown-toggle:focus,.btn-amber.dropdown-toggle:hover{background-color:#ffaa1a!important}.btn-amber:not([disabled]):not(.disabled).active,.btn-amber:not([disabled]):not(.disabled):active,.show>.btn-amber.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#996000!important}.btn-amber:not([disabled]):not(.disabled).active:focus,.btn-amber:not([disabled]):not(.disabled):active:focus,.show>.btn-amber.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.amber-ic{color:#ffa000!important}.amber-ic:focus,.amber-ic:hover{color:#ffa000}table.table a.btn.btn-amber{color:#fff}.btn-outline-amber{border:2px solid #ffa000!important;background-color:transparent!important;color:#ffa000!important}.btn-outline-amber.active,.btn-outline-amber:active,.btn-outline-amber:active:focus,.btn-outline-amber:focus,.btn-outline-amber:hover{border-color:#ffa000!important;background-color:transparent!important;color:#ffa000!important}.btn-outline-amber:not([disabled]):not(.disabled).active,.btn-outline-amber:not([disabled]):not(.disabled):active,.show>.btn-outline-amber.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#ffa000!important}.btn-outline-amber:not([disabled]):not(.disabled).active:focus,.btn-outline-amber:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-amber.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-orange{background-color:#f57c00!important;color:#fff}.btn-orange:hover{background-color:#ff8910;color:#fff}.btn-orange.focus,.btn-orange:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-orange.active,.btn-orange:active,.btn-orange:focus{background-color:#8f4800}.btn-orange.dropdown-toggle{background-color:#f57c00!important}.btn-orange.dropdown-toggle:focus,.btn-orange.dropdown-toggle:hover{background-color:#ff8910!important}.btn-orange:not([disabled]):not(.disabled).active,.btn-orange:not([disabled]):not(.disabled):active,.show>.btn-orange.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#8f4800!important}.btn-orange:not([disabled]):not(.disabled).active:focus,.btn-orange:not([disabled]):not(.disabled):active:focus,.show>.btn-orange.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.orange-ic{color:#f57c00!important}.orange-ic:focus,.orange-ic:hover{color:#f57c00}table.table a.btn.btn-orange{color:#fff}.btn-outline-orange{border:2px solid #f57c00!important;background-color:transparent!important;color:#f57c00!important}.btn-outline-orange.active,.btn-outline-orange:active,.btn-outline-orange:active:focus,.btn-outline-orange:focus,.btn-outline-orange:hover{border-color:#f57c00!important;background-color:transparent!important;color:#f57c00!important}.btn-outline-orange:not([disabled]):not(.disabled).active,.btn-outline-orange:not([disabled]):not(.disabled):active,.show>.btn-outline-orange.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#f57c00!important}.btn-outline-orange:not([disabled]):not(.disabled).active:focus,.btn-outline-orange:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-orange.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-deep-orange{background-color:#ff7043!important;color:#fff}.btn-deep-orange:hover{background-color:#ff835d;color:#fff}.btn-deep-orange.focus,.btn-deep-orange:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-deep-orange.active,.btn-deep-orange:active,.btn-deep-orange:focus{background-color:#dc3500}.btn-deep-orange.dropdown-toggle{background-color:#ff7043!important}.btn-deep-orange.dropdown-toggle:focus,.btn-deep-orange.dropdown-toggle:hover{background-color:#ff835d!important}.btn-deep-orange:not([disabled]):not(.disabled).active,.btn-deep-orange:not([disabled]):not(.disabled):active,.show>.btn-deep-orange.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#dc3500!important}.btn-deep-orange:not([disabled]):not(.disabled).active:focus,.btn-deep-orange:not([disabled]):not(.disabled):active:focus,.show>.btn-deep-orange.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.deep-orange-ic{color:#ff7043!important}.deep-orange-ic:focus,.deep-orange-ic:hover{color:#ff7043}table.table a.btn.btn-deep-orange{color:#fff}.btn-outline-deep-orange{border:2px solid #ff7043!important;background-color:transparent!important;color:#ff7043!important}.btn-outline-deep-orange.active,.btn-outline-deep-orange:active,.btn-outline-deep-orange:active:focus,.btn-outline-deep-orange:focus,.btn-outline-deep-orange:hover{border-color:#ff7043!important;background-color:transparent!important;color:#ff7043!important}.btn-outline-deep-orange:not([disabled]):not(.disabled).active,.btn-outline-deep-orange:not([disabled]):not(.disabled):active,.show>.btn-outline-deep-orange.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#ff7043!important}.btn-outline-deep-orange:not([disabled]):not(.disabled).active:focus,.btn-outline-deep-orange:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-deep-orange.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-brown{background-color:#795548!important;color:#fff}.btn-brown:hover{background-color:#896052;color:#fff}.btn-brown.focus,.btn-brown:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-brown.active,.btn-brown:active,.btn-brown:focus{background-color:#392822}.btn-brown.dropdown-toggle{background-color:#795548!important}.btn-brown.dropdown-toggle:focus,.btn-brown.dropdown-toggle:hover{background-color:#896052!important}.btn-brown:not([disabled]):not(.disabled).active,.btn-brown:not([disabled]):not(.disabled):active,.show>.btn-brown.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#392822!important}.btn-brown:not([disabled]):not(.disabled).active:focus,.btn-brown:not([disabled]):not(.disabled):active:focus,.show>.btn-brown.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.brown-ic{color:#795548!important}.brown-ic:focus,.brown-ic:hover{color:#795548}table.table a.btn.btn-brown{color:#fff}.btn-outline-brown{border:2px solid #795548!important;background-color:transparent!important;color:#795548!important}.btn-outline-brown.active,.btn-outline-brown:active,.btn-outline-brown:active:focus,.btn-outline-brown:focus,.btn-outline-brown:hover{border-color:#795548!important;background-color:transparent!important;color:#795548!important}.btn-outline-brown:not([disabled]):not(.disabled).active,.btn-outline-brown:not([disabled]):not(.disabled):active,.show>.btn-outline-brown.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#795548!important}.btn-outline-brown:not([disabled]):not(.disabled).active:focus,.btn-outline-brown:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-brown.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-grey{background-color:#616161!important;color:#fff}.btn-grey:hover{background-color:#6e6e6e;color:#fff}.btn-grey.focus,.btn-grey:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-grey.active,.btn-grey:active,.btn-grey:focus{background-color:#2e2e2e}.btn-grey.dropdown-toggle{background-color:#616161!important}.btn-grey.dropdown-toggle:focus,.btn-grey.dropdown-toggle:hover{background-color:#6e6e6e!important}.btn-grey:not([disabled]):not(.disabled).active,.btn-grey:not([disabled]):not(.disabled):active,.show>.btn-grey.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#2e2e2e!important}.btn-grey:not([disabled]):not(.disabled).active:focus,.btn-grey:not([disabled]):not(.disabled):active:focus,.show>.btn-grey.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.grey-ic{color:#616161!important}.grey-ic:focus,.grey-ic:hover{color:#616161}table.table a.btn.btn-grey{color:#fff}.btn-outline-grey{border:2px solid #616161!important;background-color:transparent!important;color:#616161!important}.btn-outline-grey.active,.btn-outline-grey:active,.btn-outline-grey:active:focus,.btn-outline-grey:focus,.btn-outline-grey:hover{border-color:#616161!important;background-color:transparent!important;color:#616161!important}.btn-outline-grey:not([disabled]):not(.disabled).active,.btn-outline-grey:not([disabled]):not(.disabled):active,.show>.btn-outline-grey.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#616161!important}.btn-outline-grey:not([disabled]):not(.disabled).active:focus,.btn-outline-grey:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-grey.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-blue-grey{background-color:#78909c!important;color:#fff}.btn-blue-grey:hover{background-color:#879ca7;color:#fff}.btn-blue-grey.focus,.btn-blue-grey:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-blue-grey.active,.btn-blue-grey:active,.btn-blue-grey:focus{background-color:#4a5b64}.btn-blue-grey.dropdown-toggle{background-color:#78909c!important}.btn-blue-grey.dropdown-toggle:focus,.btn-blue-grey.dropdown-toggle:hover{background-color:#879ca7!important}.btn-blue-grey:not([disabled]):not(.disabled).active,.btn-blue-grey:not([disabled]):not(.disabled):active,.show>.btn-blue-grey.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#4a5b64!important}.btn-blue-grey:not([disabled]):not(.disabled).active:focus,.btn-blue-grey:not([disabled]):not(.disabled):active:focus,.show>.btn-blue-grey.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.blue-grey-ic{color:#78909c!important}.blue-grey-ic:focus,.blue-grey-ic:hover{color:#78909c}table.table a.btn.btn-blue-grey{color:#fff}.btn-outline-blue-grey{border:2px solid #78909c!important;background-color:transparent!important;color:#78909c!important}.btn-outline-blue-grey.active,.btn-outline-blue-grey:active,.btn-outline-blue-grey:active:focus,.btn-outline-blue-grey:focus,.btn-outline-blue-grey:hover{border-color:#78909c!important;background-color:transparent!important;color:#78909c!important}.btn-outline-blue-grey:not([disabled]):not(.disabled).active,.btn-outline-blue-grey:not([disabled]):not(.disabled):active,.show>.btn-outline-blue-grey.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#78909c!important}.btn-outline-blue-grey:not([disabled]):not(.disabled).active:focus,.btn-outline-blue-grey:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-blue-grey.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-dark{background-color:#212121!important;color:#fff}.btn-dark:hover{background-color:#2e2e2e;color:#fff}.btn-dark.focus,.btn-dark:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-dark.active,.btn-dark:active,.btn-dark:focus{background-color:#000}.btn-dark.dropdown-toggle{background-color:#212121!important}.btn-dark.dropdown-toggle:focus,.btn-dark.dropdown-toggle:hover{background-color:#2e2e2e!important}.btn-dark:not([disabled]):not(.disabled).active,.btn-dark:not([disabled]):not(.disabled):active,.show>.btn-dark.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#000!important}.btn-dark:not([disabled]):not(.disabled).active:focus,.btn-dark:not([disabled]):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.dark-ic{color:#212121!important}.dark-ic:focus,.dark-ic:hover{color:#212121}table.table a.btn.btn-dark{color:#fff}.btn-outline-dark{border:2px solid #212121!important;background-color:transparent!important;color:#212121!important}.btn-outline-dark.active,.btn-outline-dark:active,.btn-outline-dark:active:focus,.btn-outline-dark:focus,.btn-outline-dark:hover{border-color:#212121!important;background-color:transparent!important;color:#212121!important}.btn-outline-dark:not([disabled]):not(.disabled).active,.btn-outline-dark:not([disabled]):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#212121!important}.btn-outline-dark:not([disabled]):not(.disabled).active:focus,.btn-outline-dark:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light{background-color:#e0e0e0!important;color:#000}.btn-light:hover{background-color:#ededed;color:#000}.btn-light.focus,.btn-light:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light.active,.btn-light:active,.btn-light:focus{background-color:#adadad}.btn-light.dropdown-toggle{background-color:#e0e0e0!important}.btn-light.dropdown-toggle:focus,.btn-light.dropdown-toggle:hover{background-color:#ededed!important}.btn-light:not([disabled]):not(.disabled).active,.btn-light:not([disabled]):not(.disabled):active,.show>.btn-light.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#adadad!important}.btn-light:not([disabled]):not(.disabled).active:focus,.btn-light:not([disabled]):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.light-ic{color:#e0e0e0!important}.light-ic:focus,.light-ic:hover{color:#e0e0e0}table.table a.btn.btn-light{color:#000}.btn-outline-light{border:2px solid #e0e0e0!important;background-color:transparent!important;color:#e0e0e0!important}.btn-outline-light.active,.btn-outline-light:active,.btn-outline-light:active:focus,.btn-outline-light:focus,.btn-outline-light:hover{border-color:#e0e0e0!important;background-color:transparent!important;color:#e0e0e0!important}.btn-outline-light:not([disabled]):not(.disabled).active,.btn-outline-light:not([disabled]):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#e0e0e0!important}.btn-outline-light:not([disabled]):not(.disabled).active:focus,.btn-outline-light:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-white{background-color:#fff!important;color:#000}.btn-white:hover{background-color:#fff;color:#000}.btn-white.focus,.btn-white:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-white.active,.btn-white:active,.btn-white:focus{background-color:#ccc}.btn-white.dropdown-toggle,.btn-white.dropdown-toggle:focus,.btn-white.dropdown-toggle:hover{background-color:#fff!important}.btn-white:not([disabled]):not(.disabled).active,.btn-white:not([disabled]):not(.disabled):active,.show>.btn-white.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#ccc!important}.btn-white:not([disabled]):not(.disabled).active:focus,.btn-white:not([disabled]):not(.disabled):active:focus,.show>.btn-white.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.white-ic{color:#fff!important}.white-ic:focus,.white-ic:hover{color:#fff}a.btn:not([href]):not([tabindex]),a.btn:not([href]):not([tabindex]):focus,a.btn:not([href]):not([tabindex]):hover,table.table a.btn.btn-white{color:#000}.btn-outline-white{border:2px solid #fff!important;background-color:transparent!important;color:#fff!important}.btn-outline-white.active,.btn-outline-white:active,.btn-outline-white:active:focus,.btn-outline-white:focus,.btn-outline-white:hover{border-color:#fff!important;background-color:transparent!important;color:#fff!important}.btn-outline-white:not([disabled]):not(.disabled).active,.btn-outline-white:not([disabled]):not(.disabled):active,.show>.btn-outline-white.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#fff!important}.btn-outline-white:not([disabled]):not(.disabled).active:focus,.btn-outline-white:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-white.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-black{background-color:#000!important;color:#fff}.btn-black:hover{background-color:#0d0d0d;color:#fff}.btn-black.focus,.btn-black:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-black.active,.btn-black:active,.btn-black:focus{background-color:#000}.btn-black.dropdown-toggle{background-color:#000!important}.btn-black.dropdown-toggle:focus,.btn-black.dropdown-toggle:hover{background-color:#0d0d0d!important}.btn-black:not([disabled]):not(.disabled).active,.btn-black:not([disabled]):not(.disabled):active,.show>.btn-black.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#000!important}.btn-black:not([disabled]):not(.disabled).active:focus,.btn-black:not([disabled]):not(.disabled):active:focus,.show>.btn-black.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.black-ic{color:#000!important}.black-ic:focus,.black-ic:hover{color:#000}a.btn:not([href]):not([tabindex]),a.btn:not([href]):not([tabindex]):focus,a.btn:not([href]):not([tabindex]):hover,table.table a.btn.btn-black{color:#fff}.btn-outline-black{border:2px solid #000!important;background-color:transparent!important;color:#000!important}.btn-outline-black.active,.btn-outline-black:active,.btn-outline-black:active:focus,.btn-outline-black:focus,.btn-outline-black:hover{border-color:#000!important;background-color:transparent!important;color:#000!important}.btn-outline-black:not([disabled]):not(.disabled).active,.btn-outline-black:not([disabled]):not(.disabled):active,.show>.btn-outline-black.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#000!important}.btn-outline-black:not([disabled]):not(.disabled).active:focus,.btn-outline-black:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-black.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#fff}.btn.purple-gradient{transition:.5s ease;color:#fff}.btn.purple-gradient:active,.btn.purple-gradient:active:focus .btn.purple-gradient.active,.btn.purple-gradient:focus,.btn.purple-gradient:hover{background:linear-gradient(#ff88ce,#8f8bf7)}.btn.peach-gradient{transition:.5s ease;color:#fff}.btn.peach-gradient:active,.btn.peach-gradient:active:focus .btn.peach-gradient.active,.btn.peach-gradient:focus,.btn.peach-gradient:hover{background:linear-gradient(#ffdf89,#fc7b7b)}.btn.aqua-gradient{transition:.5s ease;color:#fff}.btn.aqua-gradient:active,.btn.aqua-gradient:active:focus .btn.aqua-gradient.active,.btn.aqua-gradient:focus,.btn.aqua-gradient:hover{background:linear-gradient(#3aa2ff,#1fffac)}.btn.blue-gradient{transition:.5s ease;color:#fff}.btn.blue-gradient:active,.btn.blue-gradient:active:focus .btn.blue-gradient.active,.btn.blue-gradient:focus,.btn.blue-gradient:hover{background:linear-gradient(#5ed1fc,#3647b3)}.btn mdb-icon{position:relative;font-size:.9rem}.btn mdb-icon.right{margin-left:.3rem}.btn mdb-icon.left{margin-right:.3rem}.btn.btn-lg{padding:1rem 2.4rem;font-size:.94rem}.btn.btn-lg mdb-icon{font-size:1rem}.btn.btn-md{padding:.7rem 1.6rem;font-size:.7rem}.btn.btn-md mdb-icon{font-size:.8rem}.btn.btn-sm{padding:.5rem 1.6rem;font-size:.64rem}.btn.btn-sm mdb-icon{font-size:.7rem}"]
            },] }
];
MdbBtnDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbBtnDirective.propDecorators = {
    color: [{ type: Input }],
    rounded: [{ type: Input }],
    gradient: [{ type: Input }],
    outline: [{ type: Input }],
    flat: [{ type: Input }],
    size: [{ type: Input }],
    block: [{ type: Input }],
    floating: [{ type: Input }]
};

const CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => ButtonCheckboxDirective),
    multi: true,
};
/**
 * Add checkbox functionality to any element
 */
class ButtonCheckboxDirective {
    constructor() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    }
    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }
    get trueValue() {
        return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
    }
    get falseValue() {
        return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
    }
    toggle(state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    }
    // ControlValueAccessor
    // model -> view
    writeValue(value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonCheckboxDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] }
];
ButtonCheckboxDirective.propDecorators = {
    btnCheckboxTrue: [{ type: Input }],
    btnCheckboxFalse: [{ type: Input }],
    state: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => ButtonRadioDirective),
    multi: true,
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
        this.disabled = false;
    }
    get isActive() {
        return this.mdbRadio === this.value;
    }
    onClick(event) {
        if (this.disabled) {
            return;
        }
        try {
            this.el.nativeElement.parentElement.childNodes.forEach((element) => {
                this.radioElementsArray.push(element);
            });
            this.radioElementsArray.forEach(element => {
                this.renderer.removeClass(element, 'active');
            });
            this.renderer.addClass(event.target, 'active');
        }
        catch (error) { }
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    }
    ngOnInit() {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    }
    onBlur() {
        this.onTouched();
    }
    // ControlValueAccessor
    // model -> view
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonRadioDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] }
];
ButtonRadioDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ButtonRadioDirective.propDecorators = {
    mdbRadio: [{ type: Input }],
    uncheckable: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }, { type: Input }],
    isActive: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class FixedButtonCaptionDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.createCaptionElement();
    }
    createCaptionElement() {
        const paragraph = this.renderer.createElement('p');
        const text = this.renderer.createText(this.caption);
        this.renderer.appendChild(paragraph, text);
        this.renderer.appendChild(this.el.nativeElement, paragraph);
        this.paragraphEl = paragraph;
    }
    showCaption() {
        this.renderer.addClass(this.paragraphEl, 'fixed-button-caption');
        this.renderer.setStyle(this.paragraphEl, 'position', 'absolute');
        this.renderer.setStyle(this.paragraphEl, 'right', `60px`);
        this.renderer.setStyle(this.paragraphEl, 'top', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'overflow', 'visible');
    }
}
FixedButtonCaptionDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbFixedCaption]' },] }
];
FixedButtonCaptionDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
FixedButtonCaptionDirective.propDecorators = {
    caption: [{ type: Input, args: ['mdbFixedCaption',] }],
    collapseButtonActivator: [{ type: Input, args: ['collapseButton',] }]
};

class ButtonsModule {
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonCheckboxDirective,
                    ButtonRadioDirective,
                    MdbBtnDirective,
                    FixedButtonCaptionDirective,
                ],
                exports: [
                    ButtonCheckboxDirective,
                    ButtonRadioDirective,
                    MdbBtnDirective,
                    FixedButtonCaptionDirective,
                ],
            },] }
];

class MdbCardFooterComponent {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card-footer');
    }
}
MdbCardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-footer',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbCardFooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

class MdbCardTitleComponent {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card-title');
    }
}
MdbCardTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-title',
                template: "<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbCardTitleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

class MdbCardTextComponent {
}
MdbCardTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-text',
                template: "<p class=\"card-text {{class}} \">\n    <ng-content></ng-content>\n</p>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbCardTextComponent.propDecorators = {
    class: [{ type: Input }]
};

class MdbCardBodyComponent {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    set cascade(cascade) {
        if (cascade) {
            this._r.addClass(this._el.nativeElement, 'card-body-cascade');
        }
    }
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card-body');
        if (this.class) {
            this.class.split(' ').forEach((element) => {
                this._r.addClass(this._el.nativeElement, element);
            });
        }
    }
}
MdbCardBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-body',
                template: "<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbCardBodyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbCardBodyComponent.propDecorators = {
    class: [{ type: Input }],
    cascade: [{ type: Input }]
};

class MdbCardComponent {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    set narrower(narrower) {
        if (narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        else if (!narrower && this._el.nativeElement.classList.contains('narrower')) {
            this._r.removeClass(this._el.nativeElement, 'narrower');
        }
    }
    set reverse(reverse) {
        if (reverse) {
            this._r.addClass(this._el.nativeElement, 'reverse');
        }
        else if (!reverse && this._el.nativeElement.classList.contains('reserse')) {
            this._r.removeClass(this._el.nativeElement, 'reverse');
        }
    }
    set dark(dark) {
        if (dark) {
            this._r.addClass(this._el.nativeElement, 'card-dark');
        }
        else if (!dark && this._el.nativeElement.classList.contains('card-dark')) {
            this._r.removeClass(this._el.nativeElement, 'card-dark');
        }
    }
    set bgColor(color) {
        if (color) {
            this._r.addClass(this._el.nativeElement, color);
        }
    }
    set borderColor(color) {
        if (color) {
            this._r.addClass(this._el.nativeElement, color);
        }
    }
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card');
        if (this.cascade) {
            this._r.addClass(this._el.nativeElement, 'card-cascade');
        }
        if (this.wider) {
            this._r.addClass(this._el.nativeElement, 'wider');
        }
        if (this.narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        if (this.class) {
            this.class.split(' ').forEach((element) => {
                this._r.addClass(this._el.nativeElement, element);
            });
        }
    }
}
MdbCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".card{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border:0;font-weight:400}.card[class*=border]{border:1px solid #9e9e9e;box-shadow:none}.card .card-body h1,.card .card-body h2,.card .card-body h3,.card .card-body h4,.card .card-body h5,.card .card-body h6{font-weight:400}.card .card-body .card-title a,.card .card-body .card-title a:hover{transition:.2s ease-in-out}.card .card-body .card-text{color:#747373;font-size:.9rem;font-weight:400}.card .md-form label{font-weight:300}.card-text:last-child{margin-bottom:1rem!important}mdb-card-img img.img-fluid{width:100%}"]
            },] }
];
MdbCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbCardComponent.propDecorators = {
    class: [{ type: Input }],
    cascade: [{ type: Input }],
    wider: [{ type: Input }],
    imageBackground: [{ type: Input }],
    card: [{ type: ViewChild, args: ['card', { static: true },] }],
    narrower: [{ type: Input }],
    reverse: [{ type: Input }],
    dark: [{ type: Input }],
    bgColor: [{ type: Input }],
    borderColor: [{ type: Input }]
};

class MdbCardImageComponent {
}
MdbCardImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-img',
                template: "<img class=\"img-fluid\" [src]=\"src\" [alt]=\"alt\">",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbCardImageComponent.propDecorators = {
    src: [{ type: Input }],
    alt: [{ type: Input }]
};

class MdbCardHeaderComponent {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card-header');
        if (this.class) {
            this.class.split(' ').forEach((element) => {
                this._r.addClass(this._el.nativeElement, element);
            });
        }
    }
}
MdbCardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-header',
                template: "<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbCardHeaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbCardHeaderComponent.propDecorators = {
    class: [{ type: Input }]
};

class CardsModule {
    static forRoot() {
        return { ngModule: CardsModule, providers: [] };
    }
}
CardsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MdbCardComponent,
                    MdbCardBodyComponent,
                    MdbCardImageComponent,
                    MdbCardTextComponent,
                    MdbCardTitleComponent,
                    MdbCardFooterComponent,
                    MdbCardHeaderComponent,
                ],
                exports: [
                    MdbCardComponent,
                    MdbCardBodyComponent,
                    MdbCardImageComponent,
                    MdbCardTextComponent,
                    MdbCardTitleComponent,
                    MdbCardFooterComponent,
                    MdbCardHeaderComponent,
                ],
            },] }
];

/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};
var document$1 = win.document;
var location = win.location;
var gc = win['gc'] ? () => win['gc']() : () => null;
var performance = win['performance'] ? win['performance'] : null;
const Event = win['Event'];
const MouseEvent = win['MouseEvent'];
const KeyboardEvent = win['KeyboardEvent'];
const EventTarget = win['EventTarget'];
const History = win['History'];
const Location = win['Location'];
const EventListener = win['EventListener'];
const navigator$1 = win['navigator'];

function isBs3() {
    return win.__theme === 'bs4';
}

class SlideComponent {
    constructor(el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /** Wraps element by appropriate CSS classes */
        this.el = null;
        this.el = el;
    }
}
SlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-slide, mdb-carousel-item',
                template: `
    <ng-content></ng-content>
  `
            },] }
];
SlideComponent.ctorParameters = () => [
    { type: ElementRef }
];
SlideComponent.propDecorators = {
    active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
    animated: [{ type: HostBinding, args: ['class.animated',] }],
    directionNext: [{ type: HostBinding, args: ['class.carousel-item-next',] }],
    directionLeft: [{ type: HostBinding, args: ['class.carousel-item-left',] }],
    directionPrev: [{ type: HostBinding, args: ['class.carousel-item-prev',] }],
    directionRight: [{ type: HostBinding, args: ['class.carousel-item-right',] }],
    el: [{ type: HostBinding, args: ['class.carousel-item',] }]
};

class CarouselConfig {
    constructor() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        this.keyboard = false;
    }
}
CarouselConfig.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;

var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
class CarouselComponent {
    constructor(config, el, platformId, cdRef, renderer) {
        this.el = el;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._destroy$ = new Subject();
        this.destroyed = false;
        this.animationEnd = true;
        this.isBrowser = false;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        this.allowSwipe = true;
        this.activeSlideChange = new EventEmitter(false);
        this.isBrowser = isPlatformBrowser(platformId);
        Object.assign(this, config);
    }
    get slides() {
        return this._slidesList.toArray();
    }
    set activeSlide(index) {
        if (this._slidesList && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    get activeSlide() {
        return this._currentActiveSlide;
    }
    checkNavigation() {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    }
    checkDots() {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    }
    getImg(slide) {
        return slide.el.nativeElement.querySelector('img').src;
    }
    get interval() {
        return this._interval;
    }
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    get isBs4() {
        return !isBs3();
    }
    ngOnDestroy() {
        this.destroyed = true;
        this._destroy$.next();
        this._destroy$.complete();
    }
    ngAfterViewInit() {
        this.play();
        this._slidesList.changes
            .pipe(takeUntil(this._destroy$))
            .subscribe((slidesList) => {
            this._slidesList = slidesList;
            setTimeout(() => {
                this._select(0);
            }, 0);
        });
        if (this.activeSlideIndex) {
            setTimeout(() => {
                this._select(this.activeSlideIndex);
                this.activeSlideChange.emit({ relatedTarget: this.activeSlide });
            }, 0);
        }
        else {
            setTimeout(() => {
                this._select(0);
            }, 0);
        }
        if (this.isControls) {
            this.carouselIndicators = this.el.nativeElement.querySelectorAll('.carousel-indicators > li');
            if (this.carouselIndicators.length && this.activeSlideIndex) {
                this.renderer.addClass(this.carouselIndicators[this.activeSlideIndex], 'active');
            }
            else if (this.carouselIndicators.length) {
                this.renderer.addClass(this.carouselIndicators[0], 'active');
            }
        }
    }
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        if (this.allowSwipe) {
            if (action === this.SWIPE_ACTION.RIGHT) {
                this.previousSlide();
                this.cdRef.markForCheck();
            }
            if (action === this.SWIPE_ACTION.LEFT) {
                this.nextSlide();
                this.cdRef.markForCheck();
            }
        }
    }
    nextSlide(force = false) {
        this.restartTimer();
        // Start next slide, pause actual slide
        const videoList = this.el.nativeElement.getElementsByTagName('video');
        const direction = Direction.NEXT;
        const indexEl = this.findNextSlideIndex(direction, force);
        if (videoList.length > 0) {
            // Check for video carousel
            for (let i = 0; i < videoList.length; i++) {
                if (i === indexEl) {
                    videoList[i].play();
                }
                else {
                    videoList[i].pause();
                }
            }
        }
        if (this.animation === 'slide') {
            this.pause();
            this.slideAnimation(this.findNextSlideIndex(Direction.NEXT, force), Direction.NEXT);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force), Direction.NEXT);
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ direction: 'Next', relatedTarget: this.activeSlide });
        }
    }
    previousSlide(force = false) {
        this.restartTimer();
        // Start previous slide, pause actual slide
        const videoList = this.el.nativeElement.getElementsByTagName('video');
        const direction = Direction.PREV;
        const indexel = this.findNextSlideIndex(direction, force);
        if (videoList.length > 0) {
            // Check for video carousel
            for (let i = 0; i < videoList.length; i++) {
                if (i === indexel) {
                    videoList[i].play();
                }
                else {
                    videoList[i].pause();
                }
            }
        }
        if (this.animation === 'slide') {
            this.pause();
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force), Direction.PREV);
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ direction: 'Prev', relatedTarget: this.activeSlide });
        }
    }
    fadeAnimation(goToIndex, direction) {
        const goToSlide = this.slides[goToIndex];
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            if (this.isBrowser) {
                setTimeout(() => {
                    const previous = this.slides[this._currentActiveSlide].el.nativeElement;
                    this.renderer.setStyle(previous, 'opacity', '0');
                    this.renderer.setStyle(previous, 'transition', 'all 600ms');
                    this.renderer.setStyle(previous, 'display', 'block');
                    this.renderer.setStyle(goToSlide.el.nativeElement, 'display', 'block');
                    this.renderer.setStyle(goToSlide.el.nativeElement, 'opacity', '1');
                    this.renderer.setStyle(goToSlide.el.nativeElement, 'transition', 'all 600ms');
                    if (direction === 1) {
                        this.activeSlideChange.emit({ direction: 'Next', relatedTarget: this.activeSlide });
                    }
                    else if (direction === 2) {
                        this.activeSlideChange.emit({ direction: 'Prev', relatedTarget: this.activeSlide });
                    }
                    goToSlide.directionNext = false;
                    this.animationEnd = true;
                    this.activeSlide = goToIndex;
                    this.activeSlideChange.emit({ direction: 'Next', relatedTarget: this.activeSlide });
                    this.play();
                    this.cdRef.markForCheck();
                }, 0);
            }
        }
    }
    slideAnimation(goToIndex, direction) {
        const currentSlide = this.slides[this._currentActiveSlide];
        const goToSlide = this.slides[goToIndex];
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                if (this.isBrowser) {
                    setTimeout(() => {
                        goToSlide.directionLeft = true;
                        currentSlide.directionLeft = true;
                        this.cdRef.markForCheck();
                    }, 100);
                }
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                if (this.isBrowser) {
                    setTimeout(() => {
                        goToSlide.directionRight = true;
                        currentSlide.directionRight = true;
                        this.cdRef.markForCheck();
                    }, 100);
                }
            }
            if (this.isBrowser) {
                setTimeout(() => {
                    goToSlide.directionLeft = false;
                    goToSlide.directionNext = false;
                    currentSlide.directionLeft = false;
                    currentSlide.directionNext = false;
                    goToSlide.directionRight = false;
                    goToSlide.directionPrev = false;
                    currentSlide.directionRight = false;
                    currentSlide.directionPrev = false;
                    this.animationEnd = true;
                    this.activeSlide = goToIndex;
                    let directionName;
                    if (direction === Direction.NEXT) {
                        directionName = 'Next';
                    }
                    else if (direction === Direction.PREV) {
                        directionName = 'Prev';
                    }
                    this.activeSlideChange.emit({
                        direction: directionName,
                        relatedTarget: this.activeSlide,
                    });
                    this.play();
                    this.cdRef.markForCheck();
                }, 700);
            }
        }
    }
    selectSlide(index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        else if (!this.animation) {
            setTimeout(() => {
                const direction = index < this.activeSlide ? 'Prev' : 'Next';
                this._select(index);
                this.activeSlideChange.emit({
                    direction,
                    relatedTarget: this.activeSlide,
                });
            }, 0);
        }
        this.play();
    }
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
            this.cdRef.markForCheck();
        }
    }
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
            this.cdRef.markForCheck();
        }
    }
    getCurrentSlideIndex() {
        return this.slides.findIndex((slide) => slide.active);
    }
    isLast(index) {
        return index + 1 >= this.slides.length;
    }
    findNextSlideIndex(direction, force) {
        let nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap
                        ? this._currentActiveSlide
                        : 0;
                break;
            case Direction.PREV:
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this.slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        const currentSlide = this.slides[this._currentActiveSlide];
        if (currentSlide) {
            currentSlide.active = false;
        }
        const nextSlide = this.slides[index];
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
        }
        this.cdRef.markForCheck();
    }
    restartTimer() {
        this.resetTimer();
        if (this.isBrowser) {
            const interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = setInterval(() => {
                    const nInterval = +this.interval;
                    if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
                        this.nextSlide();
                    }
                    else {
                        this.pause();
                    }
                }, interval);
            }
        }
    }
    resetTimer() {
        if (this.isBrowser) {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = void 0;
            }
        }
    }
    hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    }
    classAdd(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    }
    removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    }
    keyboardControl(event) {
        if (this.keyboard) {
            // tslint:disable-next-line: deprecation
            if (event.keyCode === RIGHT_ARROW) {
                this.nextSlide();
            }
            // tslint:disable-next-line: deprecation
            if (event.keyCode === LEFT_ARROW) {
                this.previousSlide();
            }
        }
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-carousel',
                template: "<div\n  tabindex=\"0\"\n  (swipeleft)=\"swipe($event.type)\"\n  (swiperight)=\"swipe($event.type)\"\n  (mouseenter)=\"pause()\"\n  (mouseleave)=\"play()\"\n  (mouseup)=\"play()\"\n  class=\"carousel {{ class }} {{ type }}\"\n>\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a\n      mdbBtn\n      floating=\"true\"\n      [class.disabled]=\"activeSlide === 0 && noWrap\"\n      (click)=\"previousSlide()\"\n      ><i class=\"fas fa-chevron-left\"></i\n    ></a>\n    <a mdbBtn floating=\"true\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"\n      ><i class=\"fas fa-chevron-right\"></i\n    ></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n    <li\n      *ngFor=\"let slidez of slides; let i = index\"\n      [class.active]=\"slidez.active === true\"\n      (click)=\"selectSlide(i)\"\n    ></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n    <li\n      *ngFor=\"let slidez of slides; let i = index\"\n      [class.active]=\"slidez.active === true\"\n      (click)=\"selectSlide(i)\"\n    >\n      <img class=\"d-block w-100 img-fluid\" src=\"{{ getImg(slidez) }}\" />\n    </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a\n    class=\"carousel-control-prev\"\n    [class.disabled]=\"activeSlide === 0 && noWrap\"\n    (click)=\"previousSlide()\"\n    *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"\n  >\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a\n    class=\"carousel-control-next\"\n    (click)=\"nextSlide()\"\n    [class.disabled]=\"isLast(activeSlide) && noWrap\"\n    *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"\n  >\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".carousel .carousel-control-next-icon,.carousel .carousel-control-prev-icon{width:2.25rem;height:2.25rem}.carousel .carousel-indicators li{width:.625rem;height:.625rem;border-radius:50%;cursor:pointer}.carousel-fade .carousel-item{opacity:0;transition-duration:.6s;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{opacity:1}.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-right.active{opacity:0}.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item-prev.active,.carousel-fade .carousel-item.active{transform:translateX(0)}@supports (transform-style:preserve-3d){.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item-prev.active,.carousel-fade .carousel-item.active{transform:translateZ(0)}}.carousel-control-next,.carousel-control-prev,.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:flex;overflow:hidden}.carousel,.carousel-multi-item,.carousel-thumbnails{outline:none}.carousel-fade .carousel-inner .carousel-item{opacity:0;transition-property:opacity}.carousel-fade .carousel-inner .active{opacity:1;transition:all .6s}.carousel-fade .carousel-inner>.carousel-item.active,.carousel-fade .carousel-inner>.carousel-item.next.left,.carousel-fade .carousel-inner>.carousel-item.prev.right{opacity:1;transition:all .6s;transform:translateZ(0)}"]
            },] }
];
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
CarouselComponent.propDecorators = {
    _slidesList: [{ type: ContentChildren, args: [SlideComponent,] }],
    noWrap: [{ type: Input }],
    noPause: [{ type: Input }],
    isControls: [{ type: Input }],
    keyboard: [{ type: Input }],
    class: [{ type: Input }],
    type: [{ type: Input }],
    animation: [{ type: Input }],
    activeSlideIndex: [{ type: Input }],
    allowSwipe: [{ type: Input }],
    activeSlideChange: [{ type: Output }],
    activeSlide: [{ type: Input }],
    interval: [{ type: Input }],
    play: [{ type: HostListener, args: ['mouseleave',] }],
    pause: [{ type: HostListener, args: ['mouseenter',] }],
    keyboardControl: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    focus: [{ type: HostListener, args: ['click',] }]
};

class CarouselModule {
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ButtonsModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig],
            },] }
];

class BaseChartDirective {
    constructor(element, platformId) {
        this.element = element;
        this.labels = [];
        this.options = { legend: { display: false } };
        this.legend = false;
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    ngOnInit() {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    }
    ngOnChanges(changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) &&
                !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    }
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    }
    getChartBuilder(ctx) {
        const datasets = this.getDatasets();
        const options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = (event, active) => {
                if (active && active.length) {
                    this.chartHover.emit({ event, active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = (event, active) => {
                this.chartClick.emit({ event, active });
            };
        }
        const opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets,
            },
            options: options,
        };
        return new Chart(ctx, opts);
    }
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    getPointDataAtEvent(event) {
        if (event.active.length > 0) {
            const datasetIndex = event.active[0]._datasetIndex;
            const dataIndex = event.active[0]._index;
            const dataObject = this.datasets[datasetIndex].data[dataIndex];
            return dataObject;
        }
    }
    updateChartData(newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach((dataset, i) => {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    }
    getDatasets() {
        let datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || (!this.datasets.length && (this.data && this.data.length))) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map((data, index) => {
                    return { data, label: this.labels[index] || `Label ${index}` };
                });
            }
            else {
                datasets = [{ data: this.data, label: `Label 0` }];
            }
        }
        if ((this.datasets && this.datasets.length) || (datasets && datasets.length)) {
            datasets = (this.datasets || datasets).map((elm, index) => {
                const newElm = Object.assign({}, elm);
                if (this.colors && this.colors.length) {
                    Object.assign(newElm, this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error(`ng-charts configuration error,
      data or datasets field are required to render char ${this.chartType}`);
        }
        return datasets;
    }
    refresh() {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx);
    }
}
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96],
];
BaseChartDirective.decorators = [
    { type: Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] }
];
BaseChartDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
BaseChartDirective.propDecorators = {
    data: [{ type: Input }],
    datasets: [{ type: Input }],
    labels: [{ type: Input }],
    options: [{ type: Input }],
    chartType: [{ type: Input }],
    colors: [{ type: Input }],
    legend: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartHover: [{ type: Output }]
};
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8),
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1),
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map((color) => rgba(color, 0.6)),
        borderColor: colors.map(() => '#fff'),
        pointBackgroundColor: colors.map((color) => rgba(color, 1)),
        pointBorderColor: colors.map(() => '#fff'),
        pointHoverBackgroundColor: colors.map((color) => rgba(color, 1)),
        pointHoverBorderColor: colors.map((color) => rgba(color, 1)),
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map((color) => rgba(color, 0.6)),
        borderColor: colors.map((color) => rgba(color, 1)),
        hoverBackgroundColor: colors.map((color) => rgba(color, 0.8)),
        hoverBorderColor: colors.map((color) => rgba(color, 1)),
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 */
function generateColors(count) {
    const colorsArr = new Array(count);
    for (let i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}

class ChartsModule {
}
ChartsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BaseChartDirective],
                exports: [BaseChartDirective],
            },] }
];

const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
};
let defaultIdNumber = 0;
class MdbCheckboxChange {
}
class CheckboxComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.defaultId = `mdb-checkbox-${++defaultIdNumber}`;
        this.id = this.defaultId;
        this.checked = false;
        this.filledIn = false;
        this.indeterminate = false;
        this.rounded = false;
        this.checkboxPosition = 'left';
        this.default = false;
        this.inline = false;
        this.change = new EventEmitter();
        this.checkboxClicked = new Subject();
        // Control Value Accessor Methods
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    onLabelClick(event) {
        event.stopPropagation();
        this.checkboxClicked.next(true);
    }
    onDocumentClick() {
        this.checkboxClicked.next(false);
    }
    ngOnInit() {
        if (this.indeterminate && !this.filledIn && !this.rounded) {
            this.inputEl.indeterminate = true;
        }
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('checked')) {
            this.checked = changes.checked.currentValue;
        }
    }
    get changeEvent() {
        const newChangeEvent = new MdbCheckboxChange();
        newChangeEvent.element = this;
        newChangeEvent.checked = this.checked;
        return newChangeEvent;
    }
    toggle() {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
        this._cdRef.markForCheck();
    }
    onCheckboxClick(event) {
        event.stopPropagation();
        this.toggle();
    }
    onCheckboxChange(event) {
        event.stopPropagation();
        timer(0).subscribe(() => this.change.emit(this.changeEvent));
    }
    onBlur() {
        this.checkboxClicked.pipe(take(1)).subscribe(val => {
            if (!val) {
                this.onTouched();
            }
        });
    }
    writeValue(value) {
        this.value = value;
        this.checked = !!value;
        this._cdRef.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-checkbox',
                template: "<div\n  [ngClass]=\"{\n  'custom-control custom-checkbox': default,\n  'form-check': !default,\n  'custom-control-inline': inline,\n  'form-check-inline': inline && !default }\">\n  <input\n    #input\n    type=\"checkbox\"\n    class=\"custom-control-input\"\n    [ngClass]=\"{\n      'filled-in': filledIn || rounded,\n      'custom-control-input': default,\n      'form-check-input': !default }\"\n    [id]=\"id\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    [indeterminate]=\"indeterminate\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [tabIndex]=\"tabIndex\"\n    (blur)=\"onBlur()\"\n    (click)=\"onCheckboxClick($event)\"\n    (change)=\"onCheckboxChange($event)\">\n  <label\n    [ngClass]=\"{\n      'custom-control-label': default,\n      'form-check-label': !default,\n      'label-before': checkboxPosition === 'right',\n      'checkbox-rounded': rounded,\n      'disabled': disabled }\"\n    [attr.for]=\"id\">\n    <ng-content></ng-content>\n  </label>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [CHECKBOX_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".form-check-label.label-before:after,.form-check-label.label-before:before{top:0!important;right:0!important;left:auto!important}.custom-control-label.label-before:after,.custom-control-label.label-before:before{top:.25rem!important;right:0!important;left:auto!important}.custom-control-label.label-before{position:absolute}.custom-control-inline .label-before{position:relative}.form-check-label.label-before{padding-left:0!important;padding-right:35px}.custom-control-label.label-before{padding-left:0!important;padding-right:25px!important}.form-check-input[type=checkbox]:checked+.label-before:before,label.btn input[type=checkbox]:checked+.label-before:before{top:-4px!important;right:10px!important;left:auto!important}.form-check-input[type=checkbox]:indeterminate+.label-before:before,label.btn input[type=checkbox]:indeterminate+.label-before:before{top:-11px!important;right:16px!important;left:auto!important}.form-check-input[type=checkbox].filled-in+.label-before:before,.form-check-input[type=checkbox].filled-in:checked+.label-before:before,label.btn input[type=checkbox].filled-in+.label-before:before,label.btn input[type=checkbox].filled-in:checked+.label-before:before{top:0!important;right:10px!important;left:auto!important}.form-check-input[type=checkbox].filled-in+.label-before:after,label.btn input[type=checkbox].filled-in+.label-before:after{top:0!important;left:auto!important}.checkbox-rounded:after{border-radius:50%!important}mdb-checkbox .form-check{padding-left:0!important}"]
            },] }
];
CheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CheckboxComponent.propDecorators = {
    inputEl: [{ type: ViewChild, args: ['input', { static: true },] }],
    class: [{ type: Input }],
    id: [{ type: Input }],
    required: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    filledIn: [{ type: Input }],
    indeterminate: [{ type: Input }],
    disabled: [{ type: Input }],
    rounded: [{ type: Input }],
    checkboxPosition: [{ type: Input }],
    default: [{ type: Input }],
    inline: [{ type: Input }],
    tabIndex: [{ type: Input }],
    change: [{ type: Output }],
    onLabelClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onDocumentClick: [{ type: HostListener, args: ['document:click',] }]
};

class CheckboxModule {
}
CheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CheckboxComponent],
                exports: [CheckboxComponent],
                imports: [CommonModule, FormsModule],
            },] }
];

class CollapseComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.isCollapsed = true;
        this.showBsCollapse = new EventEmitter();
        this.shownBsCollapse = new EventEmitter();
        this.hideBsCollapse = new EventEmitter();
        this.hiddenBsCollapse = new EventEmitter();
        this.collapsed = new EventEmitter();
        this.expanded = new EventEmitter();
        this.overflow = 'hidden';
    }
    onExpandBodyDone(event) {
        setTimeout(() => {
            if (event.toState === 'expanded') {
                this.isCollapsed = false;
                this.shownBsCollapse.emit(this);
                this.expanded.emit(this);
                this.overflow = 'visible';
                this.showCaptions();
            }
            else {
                this.isCollapsed = true;
                this.hiddenBsCollapse.emit(this);
                this.collapsed.emit(this);
            }
        }, 0);
    }
    showCaptions() {
        this.captions.forEach((caption) => caption.showCaption());
    }
    toggle() {
        this.isCollapsed ? this.show() : this.hide();
    }
    show() {
        this.expandAnimationState = 'expanded';
        this.showBsCollapse.emit(this);
        this._cdRef.markForCheck();
    }
    hide() {
        this.overflow = 'hidden';
        this.expandAnimationState = 'collapsed';
        this.hideBsCollapse.emit(this);
        this._cdRef.markForCheck();
    }
    initializeCollapseState() {
        this.isCollapsed ? this.hide() : this.show();
    }
    ngOnInit() {
        this.initializeCollapseState();
    }
}
CollapseComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[mdbCollapse]',
                exportAs: 'bs-collapse',
                template: '<ng-content></ng-content>',
                animations: [
                    trigger('expandBody', [
                        state('collapsed', style({ height: '0px' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('500ms ease')),
                    ]),
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CollapseComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CollapseComponent.propDecorators = {
    captions: [{ type: ContentChildren, args: [FixedButtonCaptionDirective,] }],
    isCollapsed: [{ type: Input }],
    showBsCollapse: [{ type: Output }],
    shownBsCollapse: [{ type: Output }],
    hideBsCollapse: [{ type: Output }],
    hiddenBsCollapse: [{ type: Output }],
    collapsed: [{ type: Output }],
    expanded: [{ type: Output }],
    expandAnimationState: [{ type: HostBinding, args: ['@expandBody',] }],
    overflow: [{ type: HostBinding, args: ['style.overflow',] }],
    onExpandBodyDone: [{ type: HostListener, args: ['@expandBody.done', ['$event'],] }]
};

class CollapseModule {
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CollapseComponent],
                exports: [CollapseComponent],
            },] }
];

/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class Trigger {
    constructor(open, close) {
        this.open = open;
        this.close = close || open;
    }
    isManual() {
        return this.open === 'manual' || this.close === 'manual';
    }
}

const DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/* tslint:disable-next-line: no-any */
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    const trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    const parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map((trigger) => trigger.split(':'))
        .map((triggerPair) => {
        const alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.isManual());
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, 
/* tslint:disable-next-line: no-any */
target, triggers, showFn, hideFn, toggleFn) {
    const parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    const listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach((trigger) => {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return () => {
        listeners.forEach((unsubscribeFn) => unsubscribeFn());
    };
}
function listenToTriggersV2(renderer, options) {
    const parsedTriggers = parseTriggers(options.triggers);
    const target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    const listeners = [];
    // lazy listeners registration
    const _registerHide = [];
    const registerHide = () => {
        // add hide listeners to unregister array
        _registerHide.forEach((fn) => listeners.push(fn()));
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach((trigger) => {
        const useToggle = trigger.open === trigger.close;
        const showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(() => renderer.listen(target, trigger.close, options.hide));
        }
        listeners.push(renderer.listen(target, trigger.open, () => showFn(registerHide)));
    });
    return () => {
        listeners.forEach((unsubscribeFn) => unsubscribeFn());
    };
}
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    /* tslint:disable-next-line: no-any */
    return renderer.listen('document', 'click', (event) => {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(target => target.contains(event.target))) {
            return undefined;
        }
        options.hide();
    });
}
function registerEscClick(renderer, options) {
    if (!options.outsideEsc) {
        return Function.prototype;
    }
    return renderer.listen('document', 'keyup.esc', (event) => {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(target => target.contains(event.target))) {
            return undefined;
        }
        options.hide();
    });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
const win$1 = (typeof window !== 'undefined' && window) || {};
const document$2 = win$1.document;
const location$1 = win$1.location;
const gc$1 = win$1.gc ? () => win$1.gc() : () => null;
const performance$1 = win$1.performance ? win$1.performance : null;
const Event$1 = win$1.Event;
const MouseEvent$1 = win$1.MouseEvent;
const KeyboardEvent$1 = win$1.KeyboardEvent;
const EventTarget$1 = win$1.EventTarget;
const History$1 = win$1.History;
const Location$1 = win$1.Location;
const EventListener$1 = win$1.EventListener;

let guessedVersion;
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    const spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    const rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
function isBs3$1() {
    if (typeof win$1 === 'undefined') {
        return true;
    }
    if (typeof win$1.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return win$1.__theme !== 'bs4';
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /* tslint:disable-next-line: no-any*/
        const node = {
            value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                const currentPreviousNode = this.getNode(position - 1);
                const currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    }
    remove(position = 0) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            const removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    }
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        const node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    }
    toArray() {
        return this.asArray;
    }
    /* tslint:disable-next-line: no-any*/
    findAll(fn) {
        let current = this.head;
        /* tslint:disable-next-line: no-any*/
        const result = [];
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    // Array methods overriding start
    push(...args) {
        /* tslint:disable-next-line: no-any*/
        args.forEach((arg) => {
            this.add(arg);
        });
        return this.length;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    }
    unshift(...args) {
        args.reverse();
        /* tslint:disable-next-line: no-any*/
        args.forEach((arg) => {
            this.add(arg, 0);
        });
        return this.length;
    }
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const lastItem = this.head.value;
        this.remove();
        return lastItem;
    }
    /* tslint:disable-next-line: no-any*/
    forEach(fn) {
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    }
    indexOf(value) {
        let current = this.head;
        let position = 0;
        for (let index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    }
    /* tslint:disable-next-line: no-any*/
    some(fn) {
        let current = this.head;
        let result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /* tslint:disable-next-line: no-any*/
    every(fn) {
        let current = this.head;
        let result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    }
    toString() {
        return '[Linked List]';
    }
    /* tslint:disable-next-line: no-any*/
    find(fn) {
        let current = this.head;
        let result;
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /* tslint:disable-next-line: no-any*/
    findIndex(fn) {
        let current = this.head;
        let result;
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /* tslint:disable-next-line: no-any*/
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }
    createInternalArrayRepresentation() {
        /* tslint:disable-next-line: no-any*/
        const outArray = [];
        let current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
}

/*tslint:disable:no-invalid-this */
/* tslint:disable-next-line: no-any */
function OnChange() {
    const sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return function OnChangeHandler(target, propertyKey) {
        const _key = ` __${propertyKey}Value`;
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            get() {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set(value) {
                const prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */

class Utils {
    /* tslint:disable-next-line: no-any */
    static reflow(element) {
        /* tslint:disable-next-line: no-any */
        ((bs) => bs)(element.offsetHeight);
    }
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        let view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win$1;
        }
        return view.getComputedStyle(elem);
    }
}

const _messagesHash = {};
const _hideMsg = typeof console === 'undefined' || !('warn' in console);
function warnOnce(msg) {
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}

/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class ContentRef {
    constructor(
    /* tslint:disable-next-line: no-any */
    nodes, viewRef, 
    /* tslint:disable-next-line: no-any */
    componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}

// tslint:disable:max-file-line-count
class ComponentLoader {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onShown = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this._providers = [];
        this._isHiding = false;
        /**
         * A selector used if container element was not found
         */
        this.containerDefaultSelector = 'body';
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    get isShown() {
        if (this._isHiding) {
            return false;
        }
        return !!this._componentRef;
    }
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    // todo: add behaviour: to target element, `body`, custom element
    to(container) {
        this.container = container || this.container;
        return this;
    }
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    }
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    // todo: appendChild to element or document.querySelector(this.container)
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.data);
            const injector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (typeof this.container === 'string' && typeof document !== 'undefined') {
                const selectedElement = document.querySelector(this.container) ||
                    document.querySelector(this.containerDefaultSelector);
                if (selectedElement) {
                    selectedElement.appendChild(this._componentRef.location.nativeElement);
                }
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    }
    hide() {
        if (!this._componentRef) {
            return this;
        }
        this._posService.deletePositionElement(this._componentRef.location);
        this.onBeforeHide.emit(this._componentRef.instance);
        const componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    }
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    dispose() {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    }
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        this._listenOpts.outsideEsc = listenOpts.outsideEsc;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        const hide = (this._listenOpts.hide = () => listenOpts.hide ? listenOpts.hide() : void this.hide());
        const show = (this._listenOpts.show = (registerHide) => {
            listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
            registerHide();
        });
        const toggle = (registerHide) => {
            this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show,
            hide,
            toggle
        });
        return this;
    }
    _removeGlobalListener() {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    }
    attachInline(vRef, 
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    }
    _registerOutsideClick() {
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts && this._listenOpts.outsideClick) {
            const target = this._componentRef.location.nativeElement;
            setTimeout(() => {
                this._globalListener = registerOutsideClick(this._renderer, {
                    targets: [target, this._elementRef.nativeElement],
                    outsideClick: this._listenOpts.outsideClick,
                    hide: () => this._listenOpts.hide()
                });
            });
        }
        if (this._listenOpts.outsideEsc) {
            const target = this._componentRef.location.nativeElement;
            this._globalListener = registerEscClick(this._renderer, {
                targets: [target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: () => this._listenOpts.hide()
            });
        }
    }
    getInnerComponent() {
        return this._innerComponent;
    }
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this.onShown.subscribe(() => {
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        });
        this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
            if (!this._componentRef) {
                return;
            }
            this._posService.calcPosition();
        });
    }
    _unsubscribePositioning() {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    }
    _getContentRef(
    /* tslint:disable-next-line: no-any*/
    content, 
    /* tslint:disable-next-line: no-any*/
    data) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                const _viewRef = this._viewContainerRef
                    .createEmbeddedView(content);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            const viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            const modalContentInjector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            const componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, data);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}

/**
 * Get CSS computed property of the given element
 */
function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    const window = element.ownerDocument.defaultView;
    const css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 */
function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 */
function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
        default:
    }
    // Firefox want us to check `-x` and `-y` variations as well
    const { overflow, overflowX, overflowY } = getStyleComputedProperty(element);
    if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determines if the browser is Internet Explorer
 */
const isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
const isIE10 = isBrowser && !!(window.MSInputMethodContext && /MSIE 10/.test(navigator.userAgent));
function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 */
function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    const noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    let offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    let sibling;
    while (offsetParent === noOffsetParent && element.nextElementSibling && element.nodeName !== 'BODY') {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    const nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
        getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}

function isOffsetContainer(element) {
    const { nodeName } = element;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 */
function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 */
function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    /* tslint:disable-next-line: no-bitwise */
    const order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    const start = order ? element1 : element2;
    const end = order ? element2 : element1;
    // Get common ancestor container
    const range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    const { commonAncestorContainer } = range;
    // Both nodes are inside #document
    if ((element1 !== commonAncestorContainer &&
        element2 !== commonAncestorContainer) ||
        start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    const element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    }
    else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}

/**
 * Helper to detect borders of a given element
 */
function getBordersSize(styles, axis) {
    const sideA = axis === 'x' ? 'Left' : 'Top';
    const sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[`border${sideA}Width`]) +
        parseFloat(styles[`border${sideB}Width`]));
}

function getSize(axis, body, html, computedStyle) {
    return Math.max(body[`offset${axis}`], body[`scroll${axis}`], html[`client${axis}`], html[`offset${axis}`], html[`scroll${axis}`], isIE(10)
        ? (parseInt(html[`offset${axis}`], 10) +
            parseInt(computedStyle[`margin${axis === 'Height' ? 'Top' : 'Left'}`], 10) +
            parseInt(computedStyle[`margin${axis === 'Height' ? 'Bottom' : 'Right'}`], 10))
        : 0);
}
function getWindowSizes(document) {
    const body = document.body;
    const html = document.documentElement;
    const computedStyle = isIE(10) && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 */
function getScroll(element, side = 'top') {
    const upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    const nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        const html = element.ownerDocument.documentElement;
        const scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}

function getClientRect(offsets) {
    return Object.assign(Object.assign({}, offsets), { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
}

/**
 * Get bounding client rect of given element
 */
function getBoundingClientRect(element) {
    let rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            const scrollTop = getScroll(element, 'top');
            const scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        }
        else {
            rect = element.getBoundingClientRect();
        }
    }
    catch (e) {
        return undefined;
    }
    const result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    const sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    const width = sizes.width || element.clientWidth || result.right - result.left;
    const height = sizes.height || element.clientHeight || result.bottom - result.top;
    let horizScrollbar = element.offsetWidth - width;
    let vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        const styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}

/**
 * Sum or subtract the element scroll values (left and top) from a given rect object
 */
function includeScroll(rect, element, subtract = false) {
    const scrollTop = getScroll(element, 'top');
    const scrollLeft = getScroll(element, 'left');
    const modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}

function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
    const isIE10 = isIE(10);
    const isHTML = parent.nodeName === 'HTML';
    const childrenRect = getBoundingClientRect(children);
    const parentRect = getBoundingClientRect(parent);
    const scrollParent = getScrollParent(children);
    const styles = getStyleComputedProperty(parent);
    const borderTopWidth = parseFloat(styles.borderTopWidth);
    const borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    let offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        const marginTop = parseFloat(styles.marginTop);
        const marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition
        ? parent.contains(scrollParent)
        : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
    const html = element.ownerDocument.documentElement;
    const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    const width = Math.max(html.clientWidth, window.innerWidth || 0);
    const height = Math.max(html.clientHeight, window.innerHeight || 0);
    const scrollTop = !excludeScroll ? getScroll(html) : 0;
    const scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    const offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width,
        height
    };
    return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 */
function isFixed(element) {
    const nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 */
function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    let el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
    }
    return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 */
function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
    // NOTE: 1 DOM access here
    let boundaries = { top: 0, left: 0 };
    const offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        let boundariesNode;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(host));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = target.ownerDocument.documentElement;
            }
        }
        else if (boundariesElement === 'window') {
            boundariesNode = target.ownerDocument.documentElement;
        }
        else {
            boundariesNode = boundariesElement;
        }
        const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            const { height, width } = getWindowSizes(target.ownerDocument);
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = Number(height) + Number(offsets.top);
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = Number(width) + Number(offsets.left);
        }
        else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;
    return boundaries;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
function getArea({ width, height }) {
    return width * height;
}
function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'left', 'bottom', 'right'], boundariesElement = 'viewport', padding = 0) {
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    const boundaries = getBoundaries(target, host, padding, boundariesElement);
    const rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    const sortedAreas = Object.keys(rects)
        .map(key => (Object.assign(Object.assign({ key }, rects[key]), { area: getArea(rects[key]) })))
        .sort((a, b) => b.area - a.area);
    let filteredAreas = sortedAreas.filter(({ width, height }) => width >= target.clientWidth && height >= target.clientHeight);
    filteredAreas = allowedPositions
        .reduce((obj, key) => {
        return Object.assign(Object.assign({}, obj), { [key]: filteredAreas[key] });
    }, {});
    const computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    const variation = placement.split(' ')[1];
    target.className = target.className.replace(/auto/g, computedPlacement);
    return computedPlacement + (variation ? `-${variation}` : '');
}

function getOffsets(data) {
    return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor(data.offsets.target.left),
        top: Math.round(data.offsets.target.top),
        bottom: Math.round(data.offsets.target.bottom),
        right: Math.floor(data.offsets.target.right)
    };
}

/**
 * Get the opposite placement of the given one
 */
function getOppositePlacement(placement) {
    const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, matched => hash[matched]);
}

/**
 * Get the opposite placement variation of the given one
 */
function getOppositeVariation(variation) {
    if (variation === 'right') {
        return 'left';
    }
    else if (variation === 'left') {
        return 'right';
    }
    return variation;
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 */
function getOuterSizes(element) {
    const window = element.ownerDocument.defaultView;
    const styles = window.getComputedStyle(element);
    const x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    const y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
    };
}

/**
 * Get offsets to the reference element
 */
function getReferenceOffsets(target, host, fixedPosition = null) {
    const commonOffsetParent = fixedPosition
        ? getFixedPositionOffsetParent(target)
        : findCommonOffsetParent(target, host);
    return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}

/**
 * Get offsets to the target
 */
function getTargetOffsets(target, hostOffsets, position) {
    const placement = position.split(' ')[0];
    // Get target node sizes
    const targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    const targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    const isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    const mainSide = isHoriz ? 'top' : 'left';
    const secondarySide = isHoriz ? 'left' : 'top';
    const measurement = isHoriz ? 'height' : 'width';
    const secondaryMeasurement = !isHoriz ? 'height' : 'width';
    targetOffsets[mainSide] =
        hostOffsets[mainSide] +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    targetOffsets[secondarySide] = placement === secondarySide
        ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
        : hostOffsets[getOppositePlacement(secondarySide)];
    return targetOffsets;
}

/**
 * Helper used to know if the given modifier is enabled.
 */
function isModifierEnabled(options, modifierName) {
    return options
        && options.modifiers
        && options.modifiers[modifierName]
        && options.modifiers[modifierName].enabled;
}

/**
 * Tells if a given input is a number
 */
function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

function setStyles(element, styles, renderer) {
    Object.keys(styles).forEach((prop) => {
        let unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
            return;
        }
        element.style[prop] = String(styles[prop]) + unit;
    });
}

function setAllStyles(data, renderer) {
    const target = data.instance.target;
    const offsets = getOffsets(data);
    setStyles(target, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    if (data.placementAuto) {
        if (renderer) {
            renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`));
            renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`));
            renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, `\s${data.placement}`));
            if (target.className.match(/popover/g)) {
                renderer.addClass(target, 'popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                renderer.addClass(target, 'tooltip-auto');
            }
        }
        else {
            target.className = target.className.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`);
            target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`);
            target.className = target.className.replace(/\sauto/g, `\s${data.placement}`);
            if (target.className.match(/popover/g)) {
                target.classList.add('popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                target.classList.add('tooltip-auto');
            }
        }
    }
    if (renderer) {
        renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, `${data.placement.split(' ')[0]}`));
    }
    else {
        target.className = target.className.replace(/left|right|top|bottom/g, `${data.placement.split(' ')[0]}`);
    }
}

function arrow(data) {
    let targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    const arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    const isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    const len = isVertical ? 'height' : 'width';
    const sideCapitalized = isVertical ? 'Top' : 'Left';
    const side = sideCapitalized.toLowerCase();
    const altSide = isVertical ? 'left' : 'top';
    const opSide = isVertical ? 'bottom' : 'right';
    const arrowElementSize = getOuterSizes(arrowElement)[len];
    // top/left side
    if (data.offsets.host[opSide] - arrowElementSize < targetOffsets[side]) {
        targetOffsets[side] -=
            targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (Number(data.offsets.host[side]) + Number(arrowElementSize) > targetOffsets[opSide]) {
        targetOffsets[side] +=
            Number(data.offsets.host[side]) + Number(arrowElementSize) - Number(targetOffsets[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // compute center of the target
    const center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    const css = getStyleComputedProperty(data.instance.target);
    const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]);
    const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]);
    let sideValue = center - targetOffsets[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
    data.instance.arrow = arrowElement;
    return data;
}

function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    let placement = data.placement.split(' ')[0];
    let variation = data.placement.split(' ')[1] || '';
    const offsetsHost = data.offsets.host;
    const target = data.instance.target;
    const host = data.instance.host;
    const adaptivePosition = variation
        ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
        : computeAutoPlacement('auto', offsetsHost, target, host);
    const flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((step, index) => {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        const overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        const overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        const overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        const overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        const overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        const overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        const flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    });
    return data;
}

function initData(targetElement, hostElement, position, options) {
    const hostElPosition = getReferenceOffsets(targetElement, hostElement);
    const placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    let placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement,
        placementAuto
    };
}

function preventOverflow(data) {
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the targetOffsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    const transformProp = 'transform';
    const targetStyles = data.instance.target.style; // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    const order = ['left', 'right', 'top', 'bottom'];
    const check = {
        primary(placement) {
            let value = data.offsets.target[placement];
            if (data.offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(data.offsets.target[placement], boundaries[placement]);
            }
            return { [placement]: value };
        },
        secondary(placement) {
            const mainSide = placement === 'right' ? 'left' : 'top';
            let value = data.offsets.target[mainSide];
            if (data.offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    let side;
    order.forEach(placement => {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), check[side](placement));
    });
    return data;
}

function shift(data) {
    const placement = data.placement;
    const basePlacement = placement.split(' ')[0];
    const shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        const { host, target } = data.offsets;
        const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        const side = isVertical ? 'left' : 'top';
        const measurement = isVertical ? 'width' : 'height';
        const shiftOffsets = {
            left: { [side]: host[side] },
            right: {
                [side]: host[side] + host[measurement] - host[measurement]
            }
        };
        data.offsets.target = Object.assign(Object.assign({}, target), shiftOffsets[shiftvariation]);
    }
    return data;
}

class Positioning {
    position(hostElement, targetElement) {
        return this.offset(hostElement, targetElement);
    }
    offset(hostElement, targetElement) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    positionElements(hostElement, targetElement, position, _appendToBody, options) {
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), initData(targetElement, hostElement, position, options));
    }
}
const positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}

class PositioningService {
    constructor(rendererFactory, platformId, _ngZone) {
        this._ngZone = _ngZone;
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            this._ngZone.runOutsideAngular(() => {
                merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), 
                // tslint:disable-next-line: deprecation
                of(0, animationFrameScheduler), this.update$$).subscribe(() => {
                    this.positionElements.forEach((positionElement) => {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                    });
                });
            });
        }
    }
    position(options) {
        this.addPositionElement(options);
    }
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    calcPosition() {
        this.update$$.next();
    }
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.decorators = [
    { type: Injectable }
];
PositioningService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: Number, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
function _getHtmlElement(element) {
    // it means that we got a selector
    if (element && typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element;
}

class ComponentLoaderFactory {
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.decorators = [
    { type: Injectable }
];
ComponentLoaderFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: NgZone },
    { type: Injector },
    { type: PositioningService },
    { type: ApplicationRef }
];

/** Default dropdown configuration */
class BsDropdownConfig {
    constructor() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
}
BsDropdownConfig.decorators = [
    { type: Injectable }
];

class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise((resolve) => {
            this.resolveDropdownMenu = resolve;
        });
    }
}
BsDropdownState.decorators = [
    { type: Injectable }
];
BsDropdownState.ctorParameters = () => [];

class BsDropdownContainerComponent {
    constructor(_state) {
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
        });
    }
    get direction() {
        return this._state.direction;
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
BsDropdownContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-dropdown-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      [class.dropup]="direction === 'up'"
      [class.dropdown]="direction === 'down'"
      [class.show]="isOpen"
      [class.open]="isOpen"
    >
      <ng-content></ng-content>
    </div>
  `
            },] }
];
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState }
];
BsDropdownContainerComponent.propDecorators = {
    display: [{ type: HostBinding, args: ['style.display',] }],
    position: [{ type: HostBinding, args: ['style.position',] }]
};

// tslint:disable-next-line:component-class-suffix
class BsDropdownDirective {
    constructor(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        this.cdRef = cdRef;
        this.dropupDefault = false;
        this.dynamicPosition = false;
        this._destroy$ = new Subject();
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.shown = this._dropdown.shown;
        this.onHidden = this._dropdown.onHidden;
        this.hidden = this._dropdown.hidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    /**
     * This attribute indicates that the dropdown should be opened upwards
     */
    get isDropup() {
        if (this.dropup) {
            this._isDropupDefault = false;
            return this.dropup;
        }
        else if (this.dropupDefault) {
            this._isDropupDefault = true;
            return this.dropupDefault;
        }
        else if (this.dropupDefault && this.dropup) {
            this._isDropupDefault = false;
            return this.dropup;
        }
    }
    /**
     * Indicates that dropdown will be closed on item or document click,
     * and after pressing ESC
     */
    set autoClose(value) {
        if (typeof value === 'boolean') {
            this._state.autoClose = value;
        }
    }
    get autoClose() {
        return this._state.autoClose;
    }
    /**
     * Disables dropdown toggle and hides dropdown menu if opened
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this._state.isDisabledChange.emit(value);
        if (value) {
            this.hide();
        }
    }
    get isDisabled() {
        return this._isDisabled;
    }
    /**
     * Returns whether or not the popover is currently being shown
     */
    get isOpen() {
        if (this._showInline) {
            return this._isInlineOpen;
        }
        return this._dropdown.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    get isBs4() {
        return !isBs3();
    }
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        this._dropup = this.dropup;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: () => this.show(),
        });
        // toggle visibility on toggle element click
        this._state.toggleClick
            .pipe(takeUntil(this._destroy$))
            .subscribe((value) => this.toggle(value));
        // hide dropdown if set disabled while opened
        this._state.isDisabledChange.pipe(takeUntil(this._destroy$)).subscribe((element) => {
            if (element === true) {
                this.hide();
            }
        });
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu.then((dropdownMenu) => {
                this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
        this._state.isOpenChange.pipe(takeUntil(this._destroy$)).subscribe(() => {
            setTimeout(() => {
                const dropdownContainer = this._elementRef.nativeElement.querySelector('.dropdown-menu');
                const left = dropdownContainer.getBoundingClientRect().left;
                if (dropdownContainer.classList.contains('dropdown-menu-right') &&
                    left <= dropdownContainer.clientWidth) {
                    if (left < 0) {
                        this._renderer.setStyle(dropdownContainer, 'right', left + 'px');
                    }
                    else {
                        this._renderer.setStyle(dropdownContainer, 'right', '0');
                    }
                }
            }, 0);
        });
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    show() {
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        const button = this._elementRef.nativeElement.children[0];
        const container = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        if (!container.parentNode.classList.contains('btn-group') &&
            !container.parentNode.classList.contains('dropdown') &&
            !this._isDropupDefault) {
            container.parentNode.classList.add('dropdown');
        }
        if (this.dropup && !this._isDropupDefault) {
            container.parentNode.classList.add('dropup-material');
        }
        if (button.tagName !== 'BUTTON') {
            if (button.tagName === 'A') {
                container.classList.add('a-various-dropdown');
            }
            else {
                container.classList.add('various-dropdown');
            }
        }
        else {
            if (button.classList.contains('btn-sm')) {
                container.classList.add('small-dropdown');
            }
            if (button.classList.contains('btn-md')) {
                container.classList.add('medium-dropdown');
            }
            if (button.classList.contains('btn-lg')) {
                container.classList.add('large-dropdown');
            }
        }
        setTimeout(() => {
            container.classList.add('fadeInDropdown');
            if (this.dynamicPosition) {
                const bounding = container.getBoundingClientRect();
                const out = {
                    top: bounding.top < 0,
                    bottom: bounding.bottom > (window.innerHeight || document.documentElement.clientHeight),
                };
                if (this.dropup && out.top) {
                    this.dropup = false;
                }
                else if (!this.dropup && out.bottom) {
                    this.dropup = true;
                }
            }
        }, 0);
        if (this._showInline) {
            this._isInlineOpen = true;
            if (container.parentNode.classList.contains('dropdown') ||
                container.parentNode.classList.contains('dropup-material')) {
                setTimeout(() => {
                    this.onShown.emit(true);
                    this.shown.emit(true);
                }, 560);
            }
            else {
                setTimeout(() => {
                    this.onShown.emit(true);
                    this.shown.emit(true);
                }, 0);
            }
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(dropdownMenu => {
            // check direction in which dropdown should be opened
            const _dropup = this.dropup === true || this.dropupDefault === true;
            this._state.direction = _dropup ? 'up' : 'down';
            const _placement = this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement,
            });
            this._state.isOpenChange.emit(true);
        });
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    hide() {
        if (!this.isOpen) {
            return;
        }
        if (this.dropup !== this._dropup) {
            this.dropup = this._dropup;
        }
        const container = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        container.classList.remove('fadeInDropdown');
        if (container.parentNode.classList.contains('dropdown') ||
            container.parentNode.classList.contains('dropup-material')) {
            setTimeout(() => {
                if (this._showInline) {
                    this._isInlineOpen = false;
                    this.onHidden.emit(true);
                    this.hidden.emit(true);
                    this.cdRef.markForCheck();
                }
                else {
                    this._dropdown.hide();
                }
                this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            setTimeout(() => {
                if (this._showInline) {
                    this._isInlineOpen = false;
                    this.onHidden.emit(true);
                    this.hidden.emit(true);
                    this.cdRef.markForCheck();
                }
                else {
                    this._dropdown.hide();
                }
                this._state.isOpenChange.emit(false);
            }, 0);
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    toggle(value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    }
    ngOnDestroy() {
        // clean up subscriptions and destroy dropdown
        this._destroy$.next();
        this._destroy$.complete();
        this._dropdown.dispose();
    }
}
BsDropdownDirective.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[mdbDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                providers: [BsDropdownState],
                styles: [".dropdown-menu .dropdown-item:active{background-color:#757575}.show>.dropdown-menu{display:block}.show>a{outline:0}.dropdown-menu{margin-top:5px}.various-dropdown{transform:translate3d(0,21px,0)!important}.a-various-dropdown{transform:translate3d(0,29px,0)!important}.medium-dropdown{transform:translate3d(0,36px,0)!important}.small-dropdown{transform:translate3d(5px,34px,0)!important}.large-dropdown{transform:translate3d(5px,57px,0)!important}.btn-group>.dropdown-menu{transform:translate3d(0,43px,0)}.dropup>.dropdown-menu{display:none;transform:translate3d(117px,0,0)!important;will-change:transform}.dropup.show .dropdown-menu{display:block;opacity:0}.dropup.show .fadeInDropdown{opacity:1}.dropup-material.show .dropdown-menu{transition:.55s}.dropdown-menu{display:none;position:absolute;transform:translate3d(6px,49px,0);top:0;left:0;will-change:transform}.dropdown.show .dropdown-menu{display:block;opacity:0;transition:.55s}.dropdown.show .fadeInDropdown{opacity:1}"]
            },] }
];
BsDropdownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: ComponentLoaderFactory },
    { type: BsDropdownConfig },
    { type: BsDropdownState },
    { type: ChangeDetectorRef }
];
BsDropdownDirective.propDecorators = {
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    dropup: [{ type: Input }],
    dropupDefault: [{ type: Input }],
    dynamicPosition: [{ type: Input }],
    isDropup: [{ type: HostBinding, args: ['class.dropup',] }],
    autoClose: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isOpen: [{ type: HostBinding, args: ['class.open',] }, { type: HostBinding, args: ['class.show',] }, { type: Input }],
    isOpenChange: [{ type: Output }],
    onShown: [{ type: Output }],
    shown: [{ type: Output }],
    onHidden: [{ type: Output }],
    hidden: [{ type: Output }]
};

class BsDropdownMenuDirective {
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] }
];
BsDropdownMenuDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ViewContainerRef },
    { type: TemplateRef }
];

class BsDropdownToggleDirective {
    constructor(_state, _element, _renderer, _cdRef) {
        this._state = _state;
        this._element = _element;
        this._renderer = _renderer;
        this._cdRef = _cdRef;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        this.isDisabled = null;
        // sync is open value with state
        this._state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
            if (value) {
                this._documentClickListener = this._renderer.listen('document', 'click', (event) => {
                    if (this._state.autoClose &&
                        event.button !== 2 &&
                        !this._element.nativeElement.contains(event.target)) {
                        this._state.toggleClick.emit(false);
                        this._cdRef.detectChanges();
                    }
                });
                this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, 'keyup.esc', () => {
                    if (this._state.autoClose) {
                        this._state.toggleClick.emit(false);
                        this._cdRef.detectChanges();
                    }
                });
            }
            else {
                this._documentClickListener();
                this._escKeyUpListener();
            }
        });
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe((value) => (this.isDisabled = value || null)));
    }
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    }
    ngOnDestroy() {
        if (this._documentClickListener) {
            this._documentClickListener();
        }
        if (this._escKeyUpListener) {
            this._escKeyUpListener();
        }
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
            },] }
];
BsDropdownToggleDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
BsDropdownToggleDirective.propDecorators = {
    ariaHaspopup: [{ type: HostBinding, args: ['attr.aria-haspopup',] }],
    isDisabled: [{ type: HostBinding, args: ['attr.disabled',] }],
    isOpen: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

class DropdownModule {
    static forRoot(config) {
        return {
            ngModule: DropdownModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } },
            ],
        };
    }
}
DropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective,
                ],
                exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective],
                entryComponents: [BsDropdownContainerComponent],
            },] }
];

/*tslint:disable:no-invalid-this */
function OnChange$1() {
    const sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        const _key = ` __${propertyKey}Value`;
        Object.defineProperty(target, propertyKey, {
            get() { return this[_key]; },
            set(value) {
                const prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */

class LinkedList$1 {
    constructor() {
        // public length: = 0;
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }
    createInternalArrayRepresentation() {
        const outArray = [];
        let current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
    // public get(position: number): T {
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        const node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                const currentPreviousNode = this.getNode(position - 1);
                const currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    }
    remove(position = 0) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            const removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    }
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        const node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    }
    toArray() {
        return this.asArray;
    }
    findAll(fn) {
        let current = this.head;
        const result = [];
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    // Array methods overriding start
    push(...args) {
        args.forEach((arg) => {
            this.add(arg);
        });
        return this.length;
    }
    // public pop(): T {
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    }
    unshift(...args) {
        args.reverse();
        args.forEach((arg) => {
            this.add(arg, 0);
        });
        return this.length;
    }
    // public shift(): T {
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const lastItem = this.head.value;
        this.remove();
        return lastItem;
    }
    forEach(fn) {
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    }
    indexOf(value) {
        let current = this.head;
        let position = 0;
        for (let index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    }
    some(fn) {
        let current = this.head;
        let result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    }
    every(fn) {
        let current = this.head;
        let result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    }
    toString() {
        return '[Linked List]';
    }
    // public find(fn: any): T {
    find(fn) {
        let current = this.head;
        // let result: T;
        let result;
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    }
    findIndex(fn) {
        let current = this.head;
        // let result: number;
        let result;
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    }
}

/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class Trigger$1 {
    constructor(open, close) {
        this.open = open;
        this.close = close || open;
    }
    isManual() { return this.open === 'manual' || this.close === 'manual'; }
}

class Utils$1 {
    constructor() {
    }
    static reflow(element) {
        ((bs) => bs)(element.offsetHeight);
    }
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        let view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    }
    focusTrapModal(event, el) {
        let focusableElements;
        let firstFocusableElement;
        let lastFocusableElement;
        const KEYCODE_TAB = 9;
        /*tslint:disable-next-line:max-line-length */
        focusableElements = el.nativeElement.querySelectorAll('a[href], button, textarea, input, select, form, mdb-select, mdb-auto-completer, mdb-checkbox, mdb-range-input');
        firstFocusableElement = focusableElements[0];
        lastFocusableElement = focusableElements[focusableElements.length - 1];
        if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
            if (event.shiftKey) {
                if (document$1 && document$1.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    event.preventDefault();
                }
            }
            else {
                if (document$1 && document$1.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    event.preventDefault();
                }
            }
        }
    }
    getClosestEl(el, selector) {
        for (; el && el !== document$1; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
    }
    getCoords(elem) {
        const box = elem.getBoundingClientRect();
        const body = document$1.body;
        const docEl = document$1.documentElement;
        const scrollTop = win.pageYOffset || docEl.scrollTop || body.scrollTop;
        const scrollLeft = win.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        const clientTop = docEl.clientTop || body.clientTop || 0;
        const clientLeft = docEl.clientLeft || body.clientLeft || 0;
        const top = box.top + scrollTop - clientTop;
        const left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }
}

class MdbIconComponent {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fad = false;
        this.fas = true;
        this.sizeClass = '';
        this.utils = new Utils$1();
    }
    ngOnInit() {
        if (this.size) {
            this.sizeClass = `fa-${this.size}`;
        }
        const classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
        this.fad = classList.contains('fad');
        const formWrapper = this.utils.getClosestEl(this._el.nativeElement, '.md-form') ||
            this.utils.getClosestEl(this._el.nativeElement, '.md-outline');
        if (formWrapper) {
            formWrapper.childNodes.forEach((el) => {
                if (el.tagName === 'INPUT' || 'TEXTAREA') {
                    this._renderer.listen(el, 'focus', () => {
                        this._renderer.addClass(this._el.nativeElement, 'active');
                    });
                    this._renderer.listen(el, 'blur', () => {
                        this._renderer.removeClass(this._el.nativeElement, 'active');
                    });
                }
            });
        }
    }
}
MdbIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-icon',
                template: "<i\n  [ngClass]=\"{ fas: fas, far: far, fab: fab, fal: fal, fad: fad }\"\n  class=\"fa-{{ icon }} {{ class }} {{ classInside }} {{ sizeClass }}\"\n></i>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbIconComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    class: [{ type: Input }],
    classInside: [{ type: Input }]
};

// tslint:disable-next-line:directive-selector
class FalDirective {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fal');
    }
}
FalDirective.decorators = [
    { type: Directive, args: [{ selector: '[fal], [light]' },] }
];
FalDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

// tslint:disable-next-line:directive-selector
class FarDirective {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'far');
    }
}
FarDirective.decorators = [
    { type: Directive, args: [{ selector: '[far], [regular]' },] }
];
FarDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

// tslint:disable-next-line:directive-selector
class FasDirective {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fas');
    }
}
FasDirective.decorators = [
    { type: Directive, args: [{ selector: '[fas], [solid]' },] }
];
FasDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

// tslint:disable-next-line:directive-selector
class FabDirective {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fab');
    }
}
FabDirective.decorators = [
    { type: Directive, args: [{ selector: '[fab], [brands]' },] }
];
FabDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

// tslint:disable-next-line:directive-selector
class FadDirective {
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fad');
    }
}
FadDirective.decorators = [
    { type: Directive, args: [{ selector: '[fad], [duotone]' },] }
];
FadDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

class IconsModule {
}
IconsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MdbIconComponent,
                    FabDirective,
                    FarDirective,
                    FasDirective,
                    FalDirective,
                    FadDirective,
                ],
                imports: [CommonModule],
                exports: [MdbIconComponent, FabDirective, FarDirective, FasDirective, FalDirective, FadDirective],
            },] }
];

let defaultIdNumber$1 = 0;
// tslint:disable-next-line:component-class-suffix
class MdbErrorDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = `mdb-error-${defaultIdNumber$1++}`;
        this.errorMsg = true;
        this.messageId = this.id;
        this.utils = new Utils$1();
    }
    _calculateMarginTop() {
        const parent = this.el.nativeElement.parentNode.querySelector('.form-check');
        const heightParent = parent ? parent.offsetHeight : null;
        if (heightParent) {
            const margin = heightParent / 12.5;
            this.el.nativeElement.style.top = `${heightParent + heightParent / margin}px`;
        }
    }
    ngOnInit() {
        this.prefix = this.el.nativeElement.parentNode.querySelector('.prefix');
        if (this.prefix) {
            this.prefix.classList.add('error-message');
        }
        const textarea = this.utils.getClosestEl(this.el.nativeElement, '.md-textarea');
        this._calculateMarginTop();
        if (textarea) {
            let height = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', () => {
                height = textarea.offsetHeight + 4 + 'px';
                this.renderer.setStyle(this.el.nativeElement, 'top', height);
            });
        }
    }
    ngOnDestroy() {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
        if (this.prefix) {
            this.prefix.classList.remove('error-message');
        }
    }
}
MdbErrorDirective.decorators = [
    { type: Component, args: [{
                selector: 'mdb-error',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".error-message,.success-message{position:absolute;top:40px;left:0;font-size:.8rem}textarea~.error-message,textarea~.success-message{top:unset;bottom:-20px}.error-message{color:#f44336}.success-message{color:#00c851}"]
            },] }
];
MdbErrorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbErrorDirective.propDecorators = {
    id: [{ type: Input }],
    errorMsg: [{ type: HostBinding, args: ['class.error-message',] }],
    messageId: [{ type: HostBinding, args: ['attr.id',] }]
};

let defaultIdNumber$2 = 0;
// tslint:disable-next-line:component-class-suffix
class MdbSuccessDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = `mdb-success-${defaultIdNumber$2++}`;
        this.successMsg = true;
        this.messageId = this.id;
        this.utils = new Utils$1();
    }
    _calculateMarginTop() {
        const parent = this.el.nativeElement.parentNode.querySelector('.form-check');
        const heightParent = parent ? parent.offsetHeight : null;
        if (heightParent) {
            const margin = heightParent / 12.5;
            this.el.nativeElement.style.top = `${heightParent + heightParent / margin}px`;
        }
    }
    ngOnInit() {
        this.prefix = this.el.nativeElement.parentNode.querySelector('.prefix');
        if (this.prefix) {
            this.prefix.classList.add('success-message');
        }
        const textarea = this.utils.getClosestEl(this.el.nativeElement, '.md-textarea');
        this._calculateMarginTop();
        if (textarea) {
            let height = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', () => {
                height = textarea.offsetHeight + 4 + 'px';
                this.renderer.setStyle(this.el.nativeElement, 'top', height);
            });
        }
    }
    ngOnDestroy() {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
        if (this.prefix) {
            this.prefix.classList.remove('success-message');
        }
    }
}
MdbSuccessDirective.decorators = [
    { type: Component, args: [{
                selector: 'mdb-success',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".error-message,.success-message{position:absolute;top:40px;left:0;font-size:.8rem}textarea~.error-message,textarea~.success-message{top:unset;bottom:-20px}.error-message{color:#f44336}.success-message{color:#00c851}"]
            },] }
];
MdbSuccessDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbSuccessDirective.propDecorators = {
    id: [{ type: Input }],
    successMsg: [{ type: HostBinding, args: ['class.success-message',] }],
    messageId: [{ type: HostBinding, args: ['attr.id',] }]
};

class MdbValidateDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    get validate() {
        return this._validate;
    }
    set validate(value) {
        this._validate = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    get validateSuccess() {
        return this._validateSuccess;
    }
    set validateSuccess(value) {
        this._validateSuccess = value;
        this.updateSuccessClass();
    }
    get validateError() {
        return this._validateError;
    }
    set validateError(value) {
        this._validateError = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    updateSuccessClass() {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    }
    updateErrorClass() {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    }
    ngOnInit() {
        this.updateSuccessClass();
        this.updateErrorClass();
    }
}
MdbValidateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbValidate]',
            },] }
];
MdbValidateDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
MdbValidateDirective.propDecorators = {
    mdbValidate: [{ type: Input }],
    validate: [{ type: Input }],
    validateSuccess: [{ type: Input }],
    validateError: [{ type: Input }]
};

class InputUtilitiesModule {
}
InputUtilitiesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective],
                exports: [MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective],
            },] }
];

class EqualValidatorDirective {
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    validate(c) {
        // self value (e.g. retype password)
        const v = c.value;
        // control value (e.g. password)
        const e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false,
            });
        }
        // return null;
        return null;
    }
}
EqualValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true },
                ],
            },] }
];
EqualValidatorDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];

class MdbInputDirective {
    constructor(_elRef, _renderer, platformId) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.mdbValidate = true;
        this.validateSuccess = true;
        this.validateError = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    onfocus() {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) { }
    }
    onblur() {
        this.validationFunction();
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) { }
    }
    onchange() {
        try {
            this.checkValue();
        }
        catch (error) { }
    }
    oniput() {
        this.validationFunction();
    }
    onkeydown(event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 10;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    }
    oncut() {
        try {
            setTimeout(() => {
                this.delayedResize();
            }, 0);
        }
        catch (error) { }
    }
    onpaste() {
        try {
            setTimeout(() => {
                this.delayedResize();
            }, 0);
        }
        catch (error) { }
    }
    ondrop() {
        try {
            setTimeout(() => {
                this.delayedResize();
            }, 0);
        }
        catch (error) { }
    }
    updateErrorMsg(value) {
        if (this.wrongTextContainer) {
            this.wrongTextContainer.innerHTML = value;
        }
    }
    updateSuccessMsg(value) {
        if (this.rightTextContainer) {
            this.rightTextContainer.innerHTML = value;
        }
    }
    ngOnInit() {
        try {
            setTimeout(() => {
                this.delayedResize();
            }, 0);
        }
        catch (error) {
            console.log(error);
        }
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        if (this.mdbValidate) {
            this.wrongTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.wrongTextContainer, 'inputVal');
            this._renderer.addClass(this.wrongTextContainer, 'text-danger');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.wrongTextContainer);
            const textWrong = this._elRef.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = textWrong ? textWrong : 'wrong';
            if (!textWrong && this.errorMessage !== undefined) {
                this.wrongTextContainer.innerHTML = this.errorMessage;
            }
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this.rightTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.rightTextContainer, 'inputVal');
            this._renderer.addClass(this.rightTextContainer, 'text-success');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.rightTextContainer);
            const textSuccess = this._elRef.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = textSuccess ? textSuccess : 'success';
            if (!textSuccess && this.successMessage !== undefined) {
                this.rightTextContainer.innerHTML = this.successMessage;
            }
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('errorMessage')) {
            const newErrorMsg = changes.errorMessage.currentValue;
            this.updateErrorMsg(newErrorMsg);
        }
        if (changes.hasOwnProperty('successMessage')) {
            const newSuccessMsg = changes.successMessage.currentValue;
            this.updateSuccessMsg(newSuccessMsg);
        }
    }
    ngDoCheck() {
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-valid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-success')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-danger')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if ((this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-pristine') &&
            this._elRef.nativeElement.classList.contains('ng-untouched')) ||
            this._elRef.nativeElement.disabled) {
            if (this._elRef.nativeElement.classList.contains('counter-success')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            }
            else if (this._elRef.nativeElement.classList.contains('counter-danger')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            }
        }
        if (!this.validateSuccess) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.rightTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-valid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
        }
        if (!this.validateError) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.wrongTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            }
        }
    }
    validationFunction() {
        setTimeout(() => {
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
            if (this._elRef.nativeElement.classList.contains('ng-touched') &&
                this._elRef.nativeElement.classList.contains('ng-invalid')) {
                if (this.mdbValidate) {
                    this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
                    this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                    this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
            else if (this._elRef.nativeElement.classList.contains('ng-touched') &&
                this._elRef.nativeElement.classList.contains('ng-valid')) {
                if (this.mdbValidate) {
                    this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
                    this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                    this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
        }, 0);
    }
    ngAfterViewInit() {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        const type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    }
    ngAfterViewChecked() {
        this.initComponent();
        this.checkValue();
    }
    resize() {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    }
    delayedResize() {
        setTimeout(() => {
            this.resize();
        }, 0);
    }
    initComponent() {
        let inputId;
        let inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel =
                inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    }
    checkValue() {
        let value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if ((value === '' && this.isClicked) ||
                (value === '' && this.el.nativeElement.placeholder) ||
                (value === '' && this.el.nativeElement.attributes.placeholder)) {
                this._renderer.addClass(this.elLabel, 'active');
            }
        }
    }
}
MdbInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInputDirective]',
            },] }
];
MdbInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbInputDirective.propDecorators = {
    mdbInputDirective: [{ type: Input }],
    customRegex: [{ type: Input }],
    mdbValidate: [{ type: Input }],
    validateSuccess: [{ type: Input }],
    validateError: [{ type: Input }],
    focusCheckbox: [{ type: Input }],
    focusRadio: [{ type: Input }],
    errorMessage: [{ type: Input }],
    successMessage: [{ type: Input }],
    onfocus: [{ type: HostListener, args: ['focus',] }],
    onblur: [{ type: HostListener, args: ['blur',] }],
    onchange: [{ type: HostListener, args: ['change',] }],
    oniput: [{ type: HostListener, args: ['input',] }],
    onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    oncut: [{ type: HostListener, args: ['cut',] }],
    onpaste: [{ type: HostListener, args: ['paste',] }],
    ondrop: [{ type: HostListener, args: ['drop',] }]
};

// tslint:disable-next-line:directive-class-suffix
class MdbInput {
    constructor(el, _renderer, platformId) {
        this.el = el;
        this._renderer = _renderer;
        this.elLabel = null;
        this.elIcon = null;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.element = null;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    onfocus() {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) { }
    }
    onblur() {
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) { }
    }
    onchange() {
        try {
            this.checkValue();
        }
        catch (error) { }
    }
    onkeydown(event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 10;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    }
    oncut() {
        try {
            setTimeout(() => {
                this.delayedResize();
            }, 0);
        }
        catch (error) { }
    }
    onpaste() {
        try {
            setTimeout(() => {
                this.delayedResize();
            }, 0);
        }
        catch (error) { }
    }
    ondrop() {
        try {
            setTimeout(() => {
                this.delayedResize();
            }, 0);
        }
        catch (error) { }
    }
    ngAfterViewInit() {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
                if (this.element) {
                    this.delayedResize();
                }
            }
            catch (error) { }
        }
        const type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    }
    ngAfterViewChecked() {
        this.initComponent();
        this.checkValue();
    }
    resize() {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            if (this.el.nativeElement.scrollHeight) {
                this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
            }
        }
    }
    delayedResize() {
        setTimeout(() => {
            this.resize();
        }, 0);
    }
    initComponent() {
        let inputId;
        let inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel =
                inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
        }
    }
    checkValue() {
        let value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
            }
            if ((value === '' && this.isClicked) ||
                (value === '' && this.el.nativeElement.placeholder) ||
                (value === '' && this.el.nativeElement.attributes.placeholder)) {
                this._renderer.addClass(this.elLabel, 'active');
            }
        }
    }
}
MdbInput.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInput]',
            },] }
];
MdbInput.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbInput.propDecorators = {
    focusCheckbox: [{ type: Input }],
    focusRadio: [{ type: Input }],
    onfocus: [{ type: HostListener, args: ['focus',] }],
    onblur: [{ type: HostListener, args: ['blur',] }],
    onchange: [{ type: HostListener, args: ['change',] }],
    onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    oncut: [{ type: HostListener, args: ['cut',] }],
    onpaste: [{ type: HostListener, args: ['paste',] }],
    ondrop: [{ type: HostListener, args: ['drop',] }]
};

class InputsModule {
    static forRoot() {
        return { ngModule: InputsModule, providers: [] };
    }
}
InputsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MdbInput, MdbInputDirective, EqualValidatorDirective],
                exports: [MdbInput, MdbInputDirective, EqualValidatorDirective],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];

class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable }
];
class MDBModalRef {
    /**
     * Hides the modal
     */
    hide() { }
}
MDBModalRef.decorators = [
    { type: Injectable }
];
const ɵ0 = {};
const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    scroll: false,
    data: ɵ0,
};
const ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show',
};
const Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed',
};
const TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150,
};
const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
};

class ModalBackdropOptions {
    constructor(options) {
        this.animate = true;
        Object.assign(this, options);
    }
}
/** This component will be added as background layout for modals if enabled */
class ModalBackdropComponent {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.classNameBackDrop = true;
        this._isShown = false;
    }
    get isAnimated() {
        return this._isAnimated;
    }
    set isAnimated(value) {
        this._isAnimated = value;
    }
    get isShown() {
        return this._isShown;
    }
    set isShown(value) {
        this._isShown = value;
        if (value) {
            this.renderer.addClass(this.element.nativeElement, `${ClassName.IN}`);
            if (!isBs3()) {
                this.renderer.addClass(this.element.nativeElement, `${ClassName.SHOW}`);
            }
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, `${ClassName.IN}`);
            if (!isBs3()) {
                this.renderer.removeClass(this.element.nativeElement, `${ClassName.SHOW}`);
            }
        }
    }
    ngOnInit() {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, `${ClassName.FADE}`);
            Utils$1.reflow(this.element.nativeElement);
        }
        else {
            this.renderer.addClass(this.element.nativeElement, `${ClassName.FADE}`);
            Utils$1.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    }
}
ModalBackdropComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-modal-backdrop',
                template: ``
            },] }
];
ModalBackdropComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ModalBackdropComponent.propDecorators = {
    classNameBackDrop: [{ type: HostBinding, args: ['class.modal-backdrop',] }]
};

const TRANSITION_DURATION = 300;
const BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
// tslint:disable-next-line:component-class-suffix
class ModalDirective {
    constructor(_element, _focusTrapFactory, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._focusTrapFactory = _focusTrapFactory;
        this._renderer = _renderer;
        /** This event fires immediately when the `show` instance method is called. */
        // tslint:disable-next-line:no-output-on-prefix
        this.onShow = new EventEmitter();
        this.open = new EventEmitter();
        /** This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete) */
        // tslint:disable-next-line:no-output-on-prefix
        this.onShown = new EventEmitter();
        this.opened = new EventEmitter();
        /** This event is fired immediately when the hide instance method has been called. */
        // tslint:disable-next-line:no-output-on-prefix
        this.onHide = new EventEmitter();
        this.close = new EventEmitter();
        /** This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). */
        // tslint:disable-next-line:no-output-on-prefix
        this.onHidden = new EventEmitter();
        this.closed = new EventEmitter();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this.utils = new Utils$1();
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    /** allows to set modal configuration via element property */
    set config(conf) {
        this._config = this.getConfig(conf);
    }
    get config() {
        return this._config;
    }
    get isShown() {
        return this._isShown;
    }
    /*   @HostListener('keydown', ['$event']) onKeyDown(event: any) {
      this.utils.focusTrapModal(event, this._element);
    }
   */
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    }
    // todo: consider preventing default and stopping propagation
    onEsc() {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    }
    ngOnDestroy() {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    }
    ngAfterViewInit() {
        this._config = this._config || this.getConfig();
        setTimeout(() => {
            if (this._config.show) {
                this.show();
            }
        }, 0);
        this._createFocusTrap();
    }
    ngOnChanges() {
        this.config.backdrop ? this.showBackdrop() : this.removeBackdrop();
    }
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    toggle() {
        return this._isShown ? this.hide() : this.show();
    }
    /** Allows to manually open modal */
    show() {
        this.dismissReason = null;
        this.onShow.emit(this);
        this.open.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(ClassName.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, ClassName.OPEN);
            }
        }
        this.showBackdrop(() => {
            this.showElement();
        });
        if (!this.config.backdrop && this.config.ignoreBackdropClick) {
            this._renderer.setStyle(this._element.nativeElement, 'position', 'fixed');
            if (navigator$1.userAgent.indexOf('Safari') !== -1 &&
                navigator$1.userAgent.indexOf('Chrome') === -1) {
                this._renderer.setStyle(this._element.nativeElement, 'overflow', 'unset');
                this._renderer.setStyle(this._element.nativeElement, 'overflow-y', 'unset');
                this._renderer.setStyle(this._element.nativeElement, 'overflow-x', 'unset');
            }
        }
    }
    /** Allows to manually close modal */
    hide(event) {
        if (event) {
            event.preventDefault();
        }
        // fix(modal): resolved problem with not pausing iframe/video when closing modal
        const iframeElements = Array.from(this._element.nativeElement.querySelectorAll('iframe'));
        const videoElements = Array.from(this._element.nativeElement.querySelectorAll('video'));
        iframeElements.forEach((iframe) => {
            const srcAttribute = iframe.getAttribute('src');
            this._renderer.setAttribute(iframe, 'src', srcAttribute);
        });
        videoElements.forEach((video) => {
            video.pause();
        });
        this.onHide.emit(this);
        this.close.emit(this);
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, ClassName.SHOW);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(() => this.hideModal(), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    }
    /** Private methods @internal */
    getConfig(config) {
        return Object.assign({}, modalConfigDefaults, config);
    }
    /**
     *  Show dialog
     *  @internal
     */
    showElement() {
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            Utils$1.reflow(this._element.nativeElement);
        }
        this._renderer.addClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, ClassName.SHOW);
        }
        const transitionComplete = () => {
            if (this._config.focus) {
                this._element.nativeElement.focus();
            }
            this.onShown.emit(this);
            this.opened.emit(this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    }
    _createFocusTrap() {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._element.nativeElement);
        }
    }
    /** @internal */
    hideModal() {
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(() => {
            if (!this.isNested) {
                if (document$1 && document$1.body) {
                    this._renderer.removeClass(document$1.body, ClassName.OPEN);
                }
            }
            this.resetAdjustments();
            this.focusOtherModal();
            this.onHidden.emit(this);
            this.closed.emit(this);
        });
    }
    /** @internal */
    showBackdrop(callback) {
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            const callbackRemove = () => {
                this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    }
    /** @internal */
    removeBackdrop() {
        this._backdrop.hide();
        this.backdrop = undefined;
    }
    focusOtherModal() {
        try {
            const otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
            if (!otherOpenedModals.length) {
                return;
            }
            otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
        }
        catch (error) { }
    }
    /** @internal */
    resetAdjustments() {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    }
    /** Scroll bar tricks */
    /** @internal */
    checkScrollbar() {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    setScrollbar() {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
    }
    // thx d.walsh
    getScrollbarWidth() {
        const scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(document$1.body, scrollDiv);
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document$1.body.removeChild(scrollDiv);
        return scrollbarWidth;
    }
}
ModalDirective.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[mdbModal]',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                exportAs: 'mdb-modal, mdbModal',
                styles: [".img-fluid,.modal-dialog.cascading-modal.modal-avatar .modal-header,.video-fluid{max-width:100%;height:auto}.flex-center{display:flex;justify-content:center;align-items:center;height:100%}.flex-center p{margin:0}.flex-center ul{text-align:center}.flex-center ul li{margin-bottom:1rem}.flex-center ul li:last-of-type{margin-bottom:0}.hr-light{border-top:1px solid #fff}.hr-dark{border-top:1px solid #666}.w-responsive{width:75%}@media (max-width:740px){.w-responsive{width:100%}}.collapsible-body{display:none}.jumbotron{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;background-color:#fff}.bg-primary{background-color:#4285f4!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#1266f1!important}.border-primary{border-color:#4285f4!important}.bg-danger{background-color:#ff3547!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#ff0219!important}.border-danger{border-color:#ff3547!important}.bg-warning{background-color:#fb3!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#fa0!important}.border-warning{border-color:#fb3!important}.bg-success{background-color:#00c851!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#00953c!important}.border-success{border-color:#00c851!important}.bg-info{background-color:#33b5e5!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#1a9bcb!important}.border-info{border-color:#33b5e5!important}.bg-default{background-color:#2bbbad!important}a.bg-default:focus,a.bg-default:hover,button.bg-default:focus,button.bg-default:hover{background-color:#219287!important}.border-default{border-color:#2bbbad!important}.bg-secondary{background-color:#a6c!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#9540bf!important}.border-secondary{border-color:#a6c!important}.bg-dark{background-color:#212121!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#080808!important}.border-dark{border-color:#212121!important}.bg-light{background-color:#e0e0e0!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#c7c7c7!important}.border-light{border-color:#e0e0e0!important}.card-img-100{width:100px;height:100px}.card-img-64{width:64px;height:64px}.mml-1{margin-left:-.25rem!important}.flex-1{flex:1}body.modal-open{overflow:auto}.modal-dialog .modal-content{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.modal-dialog .modal-content .modal-header{border-top-left-radius:.125rem;border-top-right-radius:.125rem}.modal-dialog.cascading-modal .close{opacity:1;text-shadow:none;color:#fff;outline:0}.modal-dialog.cascading-modal .modal-header{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.modal-dialog.cascading-modal .modal-header .close{margin-right:1rem}.modal-dialog.cascading-modal .modal-header .title .fab,.modal-dialog.cascading-modal .modal-header .title .far,.modal-dialog.cascading-modal .modal-header .title .fas{margin-right:9px}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);display:flex}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li{flex:1}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a{text-align:center}.modal-dialog.cascading-modal .modal-c-tabs .tab-content{box-shadow:unset}.modal-dialog.cascading-modal.modal-avatar .modal-header{box-shadow:none;margin:-6rem 0 -1rem}.modal-dialog.cascading-modal.modal-avatar .modal-header img{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin-left:auto;margin-right:auto}.modal-dialog.modal-notify .modal-header{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.modal-dialog.modal-notify.modal-primary .modal-header{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .fab,.modal-dialog.modal-notify.modal-primary .far,.modal-dialog.modal-notify.modal-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-primary .badge{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .btn .fab,.modal-dialog.modal-notify.modal-primary .btn .far,.modal-dialog.modal-notify.modal-primary .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-danger .modal-header{background-color:#ff3547}.modal-dialog.modal-notify.modal-danger .fab,.modal-dialog.modal-notify.modal-danger .far,.modal-dialog.modal-notify.modal-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-danger .badge{background-color:#ff3547}.modal-dialog.modal-notify.modal-danger .btn .fab,.modal-dialog.modal-notify.modal-danger .btn .far,.modal-dialog.modal-notify.modal-danger .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-warning .modal-header{background-color:#fb3}.modal-dialog.modal-notify.modal-warning .fab,.modal-dialog.modal-notify.modal-warning .far,.modal-dialog.modal-notify.modal-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-warning .badge{background-color:#fb3}.modal-dialog.modal-notify.modal-warning .btn .fab,.modal-dialog.modal-notify.modal-warning .btn .far,.modal-dialog.modal-notify.modal-warning .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-success .modal-header{background-color:#00c851}.modal-dialog.modal-notify.modal-success .fab,.modal-dialog.modal-notify.modal-success .far,.modal-dialog.modal-notify.modal-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-success .badge{background-color:#00c851}.modal-dialog.modal-notify.modal-success .btn .fab,.modal-dialog.modal-notify.modal-success .btn .far,.modal-dialog.modal-notify.modal-success .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-info .modal-header{background-color:#33b5e5}.modal-dialog.modal-notify.modal-info .fab,.modal-dialog.modal-notify.modal-info .far,.modal-dialog.modal-notify.modal-info .fas{color:#33b5e5}.modal-dialog.modal-notify.modal-info .badge{background-color:#33b5e5}.modal-dialog.modal-notify.modal-info .btn .fab,.modal-dialog.modal-notify.modal-info .btn .far,.modal-dialog.modal-notify.modal-info .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas{color:#33b5e5}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom{bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{bottom:10px;left:10px}.modal .modal-dialog.modal-bottom-right{bottom:10px;right:10px}}@media (min-width:992px){.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{width:100%;max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;margin:0!important;width:100%;max-width:100%!important}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-frame.modal-dialog{height:inherit}.modal .modal-full-height{position:absolute;display:flex;margin:0;width:400px;height:auto;min-height:100%;top:0;right:0}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;max-width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{min-height:0;top:auto}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{width:90%;max-width:90%}}@media (min-width:992px) and (min-width:992px){.modal .modal-full-height.modal-lg{width:800px;max-width:800px}}@media (min-width:992px) and (min-width:1200px){.modal .modal-full-height.modal-lg{width:1000px;max-width:1000px}}@media (min-width:992px){.modal .modal-side{position:absolute;bottom:10px;right:10px;margin:0;width:400px}}body.scrollable{overflow-y:auto}.modal-dialog .modal-content{border:0}.modal{padding-right:0!important}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0;left:0;right:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom>.modal-content{position:absolute;bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{left:10px;bottom:10px}.modal .modal-dialog.modal-bottom-right{right:10px;bottom:10px}}.modal .modal-side.modal-top{top:0}.modal .modal-side.modal-left{left:0}.modal .modal-side.modal-right{right:0}.modal .modal-side.modal-bottom{bottom:0}.modal .modal-side.modal-top-left{top:10px;left:10px}.modal .modal-side.modal-top-right{top:10px;right:10px}.modal .modal-side.modal-bottom-left{left:10px;bottom:10px}.modal .modal-side.modal-bottom-right{right:10px;bottom:10px}.modal.fade.top:not(.show) .modal-dialog{transform:translate3d(0,-25%,0)}.modal.fade.left:not(.show) .modal-dialog{transform:translate3d(-25%,0,0)}.modal.fade.right:not(.show) .modal-dialog{transform:translate3d(25%,0,0)}.modal.fade.bottom:not(.show) .modal-dialog{transform:translate3d(0,25%,0)}.modal.fade.in{opacity:1}.modal.fade.in .modal-dialog{transform:translate(0)}.modal.fade.in .modal-dialog .relative{display:inline-block}.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{width:100%;max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;width:100%;max-width:100%;margin:0}@media (max-width:767px){.modal .modal-frame{padding:.5rem}}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-full-height{display:flex;position:absolute;width:400px;min-height:100%;margin:0;top:0;right:0}@media (max-width:576px){.modal .modal-full-height{width:100%;padding:.5rem}}@media (max-width:992px){.modal .modal-full-height{width:100%;height:unset;position:unset}}@media (max-width:992px){.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin:1.75rem auto;min-height:unset}}@media (max-width:768px){.modal .modal-full-height.modal-bottom{margin-top:1.75rem}}@media (min-width:768px) and (max-width:992px){.modal .modal-full-height.modal-bottom{margin-bottom:1.75rem}.modal .modal-full-height.modal-bottom .modal-content{bottom:1rem}}@media (max-width:992px){.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin-left:auto;margin-right:auto}}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{bottom:0}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{max-width:90%;width:90%}@media (min-width:992px){.modal .modal-full-height.modal-lg{max-width:800px;width:800px}}@media (min-width:1200px){.modal .modal-full-height.modal-lg{max-width:1000px;width:1000px}}.modal .modal-side{position:absolute;right:10px;bottom:10px;margin:0;min-width:100px}@media (max-width:768px){.modal .modal-side{padding-left:.5rem}}.modal-dialog.cascading-modal{margin-top:10%}.modal-dialog.cascading-modal .modal-header{text-align:center;margin:-2rem 1rem 1rem;padding:1.5rem;border:none;flex-direction:column}.modal-dialog.cascading-modal .modal-header .close{margin-right:2.5rem}.modal-dialog.cascading-modal .modal-header.white-text .close{color:#fff;opacity:1}.modal-dialog.cascading-modal .modal-header .title{width:100%;margin-bottom:0;font-size:1.25rem}.modal-dialog.cascading-modal .modal-header .title .fa{margin-right:9px}.modal-dialog.cascading-modal .modal-header .social-buttons{margin-top:1.5rem}.modal-dialog.cascading-modal .modal-header .social-buttons a{font-size:1rem}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{margin:-1.5rem 1rem 0}.modal-dialog.cascading-modal .modal-c-tabs .tab-content{padding:1.7rem 0 0}.modal-dialog.cascading-modal .modal-body,.modal-dialog.cascading-modal .modal-footer{color:#616161;padding-right:2rem;padding-left:2rem}.modal-dialog.cascading-modal .modal-body .additional-option,.modal-dialog.cascading-modal .modal-footer .additional-option{text-align:center;margin-top:1rem}.modal-dialog.cascading-modal.modal-avatar{margin-top:6rem}.modal-dialog.cascading-modal.modal-avatar .modal-header{margin:-6rem 2rem -1rem}.modal-dialog.cascading-modal.modal-avatar .modal-header img{width:130px}.modal-dialog.modal-notify .heading{margin:0;padding:.3rem;color:#fff;font-size:1.15rem}.modal-dialog.modal-notify .modal-header{border:0}.modal-dialog.modal-notify .close{opacity:1}.modal-dialog.modal-notify .modal-body{padding:1.5rem;color:#616161}.modal-dialog.modal-notify .btn-outline-secondary-modal{background-color:transparent}.modal-dialog.modal-notify.modal-info .modal-header{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .fa{color:#5394ff}.modal-dialog.modal-notify.modal-info .badge{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal{background:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal:active,.modal-dialog.modal-notify.modal-info .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-info .btn-primary-modal:hover{background-color:#6da4ff!important}.modal-dialog.modal-notify.modal-info .btn-primary-modal.active{background-color:#0059ec!important}.modal-dialog.modal-notify.modal-info .btn-outline-secondary-modal{border:2px solid #5394ff;color:#5394ff!important}.modal-dialog.modal-notify.modal-warning .modal-header{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .fa{color:#ff8e38}.modal-dialog.modal-notify.modal-warning .badge{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal{background:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal:active,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:hover{background-color:#ff9c52!important}.modal-dialog.modal-notify.modal-warning .btn-primary-modal.active{background-color:#d15a00!important}.modal-dialog.modal-notify.modal-warning .btn-outline-secondary-modal{border:2px solid #ff8e38;color:#ff8e38!important}.modal-dialog.modal-notify.modal-success .modal-header{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .fa{color:#01d36b}.modal-dialog.modal-notify.modal-success .badge{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal{background:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal:active,.modal-dialog.modal-notify.modal-success .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-success .btn-primary-modal:hover{background-color:#01ec78!important}.modal-dialog.modal-notify.modal-success .btn-primary-modal.active{background-color:#016d38!important}.modal-dialog.modal-notify.modal-success .btn-outline-secondary-modal{border:2px solid #01d36b;color:#01d36b!important}.modal-dialog.modal-notify.modal-danger .modal-header{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .fa{color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .badge{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal{background:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal:active,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:hover{background-color:#ff6565!important}.modal-dialog.modal-notify.modal-danger .btn-primary-modal.active{background-color:#e40000!important}.modal-dialog.modal-notify.modal-danger .btn-outline-secondary-modal{border:2px solid #ff4b4b;color:#ff4b4b!important}.modal-sm .modal-content{margin:0 auto;max-width:300px}@media (min-width:768px){.modal-sm{max-width:300px}}.modal .modal-fluid,.modal .modal-frame{width:100%;max-width:100%}.modal-ext .modal-content .modal-header{text-align:center}.modal-ext .modal-content .options{float:left}.modal-ext .modal-content .modal-body .text-xs-center fieldset{margin-top:20px}.modal-ext .modal-content .call{margin-top:1rem}.modal-ext .modal-content .modal-body{padding:2rem 2rem 1rem}.modal-content:not(.card-image) .close{position:absolute;right:15px}.modal-cart li p{margin:5px;font-weight:400}.modal-cart li p .badge{margin-left:10px;margin-top:3px;font-weight:400;position:absolute}.modal-cart li p .quantity{font-size:16px;margin-right:7px;font-weight:300}.modal-cart .cartPageLink{margin-left:10px}.modal-cart .cartPageLink a{text-decoration:underline;color:#666}.modal-cart .total{float:right;font-weight:400}.cf-phone{margin-left:7px}.side-modal{position:fixed;width:400px;height:100%;width:100%;z-index:9999}.side-modal .modal-dialog{position:absolute;bottom:10px;right:10px;width:400px;margin:10px}@media (max-width:760px){.side-modal .modal-dialog{display:none}}.side-modal .modal-header{padding:1rem}.side-modal .modal-header .heading{margin:0;padding:0}.side-modal .modal-content{border:none}.modal-dynamic>:first-child{display:flex;flex-direction:column;height:100%}.side-modal.fade:not(.show) .modal-dialog{transform:translate3d(25%,0,0)}.transparent-bd{opacity:0!important}.modal-backdrop,.modal-backdrop.in{opacity:.5}#exampleModalScroll{overflow-x:hidden;overflow-y:auto}.modal-open .modal{overflow-x:hidden;overflow-y:hidden}.form-dark .card-image{background-size:100%}"]
            },] }
];
ModalDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ConfigurableFocusTrapFactory },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: ComponentLoaderFactory }
];
ModalDirective.propDecorators = {
    config: [{ type: Input }],
    onShow: [{ type: Output }],
    open: [{ type: Output }],
    onShown: [{ type: Output }],
    opened: [{ type: Output }],
    onHide: [{ type: Output }],
    close: [{ type: Output }],
    onHidden: [{ type: Output }],
    closed: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onEsc: [{ type: HostListener, args: ['keydown.esc',] }]
};

class ModalContainerComponent {
    constructor(options, _element, _renderer) {
        // this.mdbModalService = msConfig.serviceInstance;
        this._renderer = _renderer;
        this.modalClass = 'modal';
        this.tabindex = -1;
        this.role = 'dialog';
        this.modal = true;
        this.isShown = false;
        this.isModalHiding = false;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    onEsc() {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    ngOnInit() {
        if (this.config.animated) {
            this._renderer.addClass(this._element.nativeElement, 'fade');
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        if ((window &&
            window.navigator.userAgent.indexOf('Edge') !== -1 &&
            this.config &&
            this.config.toString().indexOf('side-modal') === -1) ||
            (window &&
                window.navigator.userAgent.indexOf('Edge') !== -1 &&
                this.config &&
                this.config.toString().indexOf('modal-full-height') === -1)) {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
            this._renderer.setStyle(this._element.nativeElement, 'transition', 'transform 0.3s ease-out');
            this._renderer.setStyle(this._element.nativeElement, 'transform', 'translate(0, 25px)');
        }
        else {
            setTimeout(() => {
                this.isShown = true;
                this._renderer.addClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
            }, this.isAnimated ? TransitionDurations.BACKDROP : 0);
        }
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, ClassName.OPEN);
        }
        if (this.config.containerClass) {
            this.updateContainerClass();
        }
        if (this.config.scroll) {
            this._renderer.setStyle(this._element.nativeElement, 'overflow-y', 'auto');
        }
    }
    focusModalElement() {
        if (this.config.focus) {
            this._element.nativeElement.focus();
        }
    }
    updateContainerClass() {
        if (this.config.containerClass) {
            const containerClasses = this.config.containerClass;
            const classArr = containerClasses.split(' ');
            for (let i = 0; i < classArr.length; i++) {
                this._renderer.addClass(this._element.nativeElement, classArr[i]);
            }
        }
    }
    ngOnDestroy() {
        if (this.isShown) {
            this.hide();
        }
    }
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        // fix(modal): resolved problem with not pausing iframe/video when closing modal
        const iframeElements = Array.from(this._element.nativeElement.querySelectorAll('iframe'));
        const videoElements = Array.from(this._element.nativeElement.querySelectorAll('video'));
        iframeElements.forEach((iframe) => {
            const srcAttribute = iframe.getAttribute('src');
            this._renderer.setAttribute(iframe, 'src', srcAttribute);
        });
        videoElements.forEach((video) => {
            video.pause();
        });
        setTimeout(() => {
            this.isShown = false;
            if (document && document.body && this.mdbModalService.getModalsCount() === 1) {
                this._renderer.removeClass(document.body, ClassName.OPEN);
            }
            this.mdbModalService.hide(this.level);
            this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    }
}
ModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-modal-container',
                template: "<div\n  [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\"\n  role=\"document\"\n  cdkTrapFocus\n>\n  <div class=\"modal-content modal-dynamic\"><ng-content></ng-content></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".img-fluid,.modal-dialog.cascading-modal.modal-avatar .modal-header,.video-fluid{max-width:100%;height:auto}.flex-center{display:flex;justify-content:center;align-items:center;height:100%}.flex-center p{margin:0}.flex-center ul{text-align:center}.flex-center ul li{margin-bottom:1rem}.flex-center ul li:last-of-type{margin-bottom:0}.hr-light{border-top:1px solid #fff}.hr-dark{border-top:1px solid #666}.w-responsive{width:75%}@media (max-width:740px){.w-responsive{width:100%}}.collapsible-body{display:none}.jumbotron{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;background-color:#fff}.bg-primary{background-color:#4285f4!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#1266f1!important}.border-primary{border-color:#4285f4!important}.bg-danger{background-color:#ff3547!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#ff0219!important}.border-danger{border-color:#ff3547!important}.bg-warning{background-color:#fb3!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#fa0!important}.border-warning{border-color:#fb3!important}.bg-success{background-color:#00c851!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#00953c!important}.border-success{border-color:#00c851!important}.bg-info{background-color:#33b5e5!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#1a9bcb!important}.border-info{border-color:#33b5e5!important}.bg-default{background-color:#2bbbad!important}a.bg-default:focus,a.bg-default:hover,button.bg-default:focus,button.bg-default:hover{background-color:#219287!important}.border-default{border-color:#2bbbad!important}.bg-secondary{background-color:#a6c!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#9540bf!important}.border-secondary{border-color:#a6c!important}.bg-dark{background-color:#212121!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#080808!important}.border-dark{border-color:#212121!important}.bg-light{background-color:#e0e0e0!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#c7c7c7!important}.border-light{border-color:#e0e0e0!important}.card-img-100{width:100px;height:100px}.card-img-64{width:64px;height:64px}.mml-1{margin-left:-.25rem!important}.flex-1{flex:1}body.modal-open{overflow:auto}.modal-dialog .modal-content{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.modal-dialog .modal-content .modal-header{border-top-left-radius:.125rem;border-top-right-radius:.125rem}.modal-dialog.cascading-modal .close{opacity:1;text-shadow:none;color:#fff;outline:0}.modal-dialog.cascading-modal .modal-header{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.modal-dialog.cascading-modal .modal-header .close{margin-right:1rem}.modal-dialog.cascading-modal .modal-header .title .fab,.modal-dialog.cascading-modal .modal-header .title .far,.modal-dialog.cascading-modal .modal-header .title .fas{margin-right:9px}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);display:flex}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li{flex:1}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a{text-align:center}.modal-dialog.cascading-modal .modal-c-tabs .tab-content{box-shadow:unset}.modal-dialog.cascading-modal.modal-avatar .modal-header{box-shadow:none;margin:-6rem 0 -1rem}.modal-dialog.cascading-modal.modal-avatar .modal-header img{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin-left:auto;margin-right:auto}.modal-dialog.modal-notify .modal-header{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.modal-dialog.modal-notify.modal-primary .modal-header{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .fab,.modal-dialog.modal-notify.modal-primary .far,.modal-dialog.modal-notify.modal-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-primary .badge{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .btn .fab,.modal-dialog.modal-notify.modal-primary .btn .far,.modal-dialog.modal-notify.modal-primary .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-danger .modal-header{background-color:#ff3547}.modal-dialog.modal-notify.modal-danger .fab,.modal-dialog.modal-notify.modal-danger .far,.modal-dialog.modal-notify.modal-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-danger .badge{background-color:#ff3547}.modal-dialog.modal-notify.modal-danger .btn .fab,.modal-dialog.modal-notify.modal-danger .btn .far,.modal-dialog.modal-notify.modal-danger .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-warning .modal-header{background-color:#fb3}.modal-dialog.modal-notify.modal-warning .fab,.modal-dialog.modal-notify.modal-warning .far,.modal-dialog.modal-notify.modal-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-warning .badge{background-color:#fb3}.modal-dialog.modal-notify.modal-warning .btn .fab,.modal-dialog.modal-notify.modal-warning .btn .far,.modal-dialog.modal-notify.modal-warning .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-success .modal-header{background-color:#00c851}.modal-dialog.modal-notify.modal-success .fab,.modal-dialog.modal-notify.modal-success .far,.modal-dialog.modal-notify.modal-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-success .badge{background-color:#00c851}.modal-dialog.modal-notify.modal-success .btn .fab,.modal-dialog.modal-notify.modal-success .btn .far,.modal-dialog.modal-notify.modal-success .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-info .modal-header{background-color:#33b5e5}.modal-dialog.modal-notify.modal-info .fab,.modal-dialog.modal-notify.modal-info .far,.modal-dialog.modal-notify.modal-info .fas{color:#33b5e5}.modal-dialog.modal-notify.modal-info .badge{background-color:#33b5e5}.modal-dialog.modal-notify.modal-info .btn .fab,.modal-dialog.modal-notify.modal-info .btn .far,.modal-dialog.modal-notify.modal-info .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas{color:#33b5e5}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom{bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{bottom:10px;left:10px}.modal .modal-dialog.modal-bottom-right{bottom:10px;right:10px}}@media (min-width:992px){.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{width:100%;max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;margin:0!important;width:100%;max-width:100%!important}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-frame.modal-dialog{height:inherit}.modal .modal-full-height{position:absolute;display:flex;margin:0;width:400px;height:auto;min-height:100%;top:0;right:0}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;max-width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{min-height:0;top:auto}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{width:90%;max-width:90%}}@media (min-width:992px) and (min-width:992px){.modal .modal-full-height.modal-lg{width:800px;max-width:800px}}@media (min-width:992px) and (min-width:1200px){.modal .modal-full-height.modal-lg{width:1000px;max-width:1000px}}@media (min-width:992px){.modal .modal-side{position:absolute;bottom:10px;right:10px;margin:0;width:400px}}body.scrollable{overflow-y:auto}.modal-dialog .modal-content{border:0}.modal{padding-right:0!important}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0;left:0;right:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom>.modal-content{position:absolute;bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{left:10px;bottom:10px}.modal .modal-dialog.modal-bottom-right{right:10px;bottom:10px}}.modal .modal-side.modal-top{top:0}.modal .modal-side.modal-left{left:0}.modal .modal-side.modal-right{right:0}.modal .modal-side.modal-bottom{bottom:0}.modal .modal-side.modal-top-left{top:10px;left:10px}.modal .modal-side.modal-top-right{top:10px;right:10px}.modal .modal-side.modal-bottom-left{left:10px;bottom:10px}.modal .modal-side.modal-bottom-right{right:10px;bottom:10px}.modal.fade.top:not(.show) .modal-dialog{transform:translate3d(0,-25%,0)}.modal.fade.left:not(.show) .modal-dialog{transform:translate3d(-25%,0,0)}.modal.fade.right:not(.show) .modal-dialog{transform:translate3d(25%,0,0)}.modal.fade.bottom:not(.show) .modal-dialog{transform:translate3d(0,25%,0)}.modal.fade.in{opacity:1}.modal.fade.in .modal-dialog{transform:translate(0)}.modal.fade.in .modal-dialog .relative{display:inline-block}.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{width:100%;max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;width:100%;max-width:100%;margin:0}@media (max-width:767px){.modal .modal-frame{padding:.5rem}}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-full-height{display:flex;position:absolute;width:400px;min-height:100%;margin:0;top:0;right:0}@media (max-width:576px){.modal .modal-full-height{width:100%;padding:.5rem}}@media (max-width:992px){.modal .modal-full-height{width:100%;height:unset;position:unset}}@media (max-width:992px){.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin:1.75rem auto;min-height:unset}}@media (max-width:768px){.modal .modal-full-height.modal-bottom{margin-top:1.75rem}}@media (min-width:768px) and (max-width:992px){.modal .modal-full-height.modal-bottom{margin-bottom:1.75rem}.modal .modal-full-height.modal-bottom .modal-content{bottom:1rem}}@media (max-width:992px){.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin-left:auto;margin-right:auto}}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{bottom:0}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{max-width:90%;width:90%}@media (min-width:992px){.modal .modal-full-height.modal-lg{max-width:800px;width:800px}}@media (min-width:1200px){.modal .modal-full-height.modal-lg{max-width:1000px;width:1000px}}.modal .modal-side{position:absolute;right:10px;bottom:10px;margin:0;min-width:100px}@media (max-width:768px){.modal .modal-side{padding-left:.5rem}}.modal-dialog.cascading-modal{margin-top:10%}.modal-dialog.cascading-modal .modal-header{text-align:center;margin:-2rem 1rem 1rem;padding:1.5rem;border:none;flex-direction:column}.modal-dialog.cascading-modal .modal-header .close{margin-right:2.5rem}.modal-dialog.cascading-modal .modal-header.white-text .close{color:#fff;opacity:1}.modal-dialog.cascading-modal .modal-header .title{width:100%;margin-bottom:0;font-size:1.25rem}.modal-dialog.cascading-modal .modal-header .title .fa{margin-right:9px}.modal-dialog.cascading-modal .modal-header .social-buttons{margin-top:1.5rem}.modal-dialog.cascading-modal .modal-header .social-buttons a{font-size:1rem}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{margin:-1.5rem 1rem 0}.modal-dialog.cascading-modal .modal-c-tabs .tab-content{padding:1.7rem 0 0}.modal-dialog.cascading-modal .modal-body,.modal-dialog.cascading-modal .modal-footer{color:#616161;padding-right:2rem;padding-left:2rem}.modal-dialog.cascading-modal .modal-body .additional-option,.modal-dialog.cascading-modal .modal-footer .additional-option{text-align:center;margin-top:1rem}.modal-dialog.cascading-modal.modal-avatar{margin-top:6rem}.modal-dialog.cascading-modal.modal-avatar .modal-header{margin:-6rem 2rem -1rem}.modal-dialog.cascading-modal.modal-avatar .modal-header img{width:130px}.modal-dialog.modal-notify .heading{margin:0;padding:.3rem;color:#fff;font-size:1.15rem}.modal-dialog.modal-notify .modal-header{border:0}.modal-dialog.modal-notify .close{opacity:1}.modal-dialog.modal-notify .modal-body{padding:1.5rem;color:#616161}.modal-dialog.modal-notify .btn-outline-secondary-modal{background-color:transparent}.modal-dialog.modal-notify.modal-info .modal-header{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .fa{color:#5394ff}.modal-dialog.modal-notify.modal-info .badge{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal{background:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal:active,.modal-dialog.modal-notify.modal-info .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-info .btn-primary-modal:hover{background-color:#6da4ff!important}.modal-dialog.modal-notify.modal-info .btn-primary-modal.active{background-color:#0059ec!important}.modal-dialog.modal-notify.modal-info .btn-outline-secondary-modal{border:2px solid #5394ff;color:#5394ff!important}.modal-dialog.modal-notify.modal-warning .modal-header{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .fa{color:#ff8e38}.modal-dialog.modal-notify.modal-warning .badge{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal{background:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal:active,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:hover{background-color:#ff9c52!important}.modal-dialog.modal-notify.modal-warning .btn-primary-modal.active{background-color:#d15a00!important}.modal-dialog.modal-notify.modal-warning .btn-outline-secondary-modal{border:2px solid #ff8e38;color:#ff8e38!important}.modal-dialog.modal-notify.modal-success .modal-header{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .fa{color:#01d36b}.modal-dialog.modal-notify.modal-success .badge{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal{background:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal:active,.modal-dialog.modal-notify.modal-success .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-success .btn-primary-modal:hover{background-color:#01ec78!important}.modal-dialog.modal-notify.modal-success .btn-primary-modal.active{background-color:#016d38!important}.modal-dialog.modal-notify.modal-success .btn-outline-secondary-modal{border:2px solid #01d36b;color:#01d36b!important}.modal-dialog.modal-notify.modal-danger .modal-header{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .fa{color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .badge{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal{background:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal:active,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:hover{background-color:#ff6565!important}.modal-dialog.modal-notify.modal-danger .btn-primary-modal.active{background-color:#e40000!important}.modal-dialog.modal-notify.modal-danger .btn-outline-secondary-modal{border:2px solid #ff4b4b;color:#ff4b4b!important}.modal-sm .modal-content{margin:0 auto;max-width:300px}@media (min-width:768px){.modal-sm{max-width:300px}}.modal .modal-fluid,.modal .modal-frame{width:100%;max-width:100%}.modal-ext .modal-content .modal-header{text-align:center}.modal-ext .modal-content .options{float:left}.modal-ext .modal-content .modal-body .text-xs-center fieldset{margin-top:20px}.modal-ext .modal-content .call{margin-top:1rem}.modal-ext .modal-content .modal-body{padding:2rem 2rem 1rem}.modal-content:not(.card-image) .close{position:absolute;right:15px}.modal-cart li p{margin:5px;font-weight:400}.modal-cart li p .badge{margin-left:10px;margin-top:3px;font-weight:400;position:absolute}.modal-cart li p .quantity{font-size:16px;margin-right:7px;font-weight:300}.modal-cart .cartPageLink{margin-left:10px}.modal-cart .cartPageLink a{text-decoration:underline;color:#666}.modal-cart .total{float:right;font-weight:400}.cf-phone{margin-left:7px}.side-modal{position:fixed;width:400px;height:100%;width:100%;z-index:9999}.side-modal .modal-dialog{position:absolute;bottom:10px;right:10px;width:400px;margin:10px}@media (max-width:760px){.side-modal .modal-dialog{display:none}}.side-modal .modal-header{padding:1rem}.side-modal .modal-header .heading{margin:0;padding:0}.side-modal .modal-content{border:none}.modal-dynamic>:first-child{display:flex;flex-direction:column;height:100%}.side-modal.fade:not(.show) .modal-dialog{transform:translate3d(25%,0,0)}.transparent-bd{opacity:0!important}.modal-backdrop,.modal-backdrop.in{opacity:.5}#exampleModalScroll{overflow-x:hidden;overflow-y:auto}.modal-open .modal{overflow-x:hidden;overflow-y:hidden}.form-dark .card-image{background-size:100%}"]
            },] }
];
ModalContainerComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef },
    { type: Renderer2 }
];
ModalContainerComponent.propDecorators = {
    tabindex: [{ type: HostBinding, args: ['tabindex',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    modal: [{ type: HostBinding, args: ['class.modal',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onEsc: [{ type: HostListener, args: ['window:keydown.esc',] }]
};

class MDBModalService {
    constructor(rendererFactory, clf) {
        this.clf = clf;
        this.config = modalConfigDefaults;
        this.open = new EventEmitter();
        this.opened = new EventEmitter();
        this.close = new EventEmitter();
        this.closed = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    show(content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    hide(level) {
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(() => {
            this._hideModal(level);
            this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    }
    _showBackdrop() {
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        const duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(() => this.removeBackdrop(), duration);
    }
    _showModal(content) {
        const modalLoader = this.loaders[this.loaders.length - 1];
        const mdbModalRef = new MDBModalRef();
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({
            content,
            isAnimated: this.config.animated,
            data: this.config.data,
            mdbModalService: this,
        });
        modalContainerRef.instance.focusModalElement();
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = () => {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    }
    _hideModal(level) {
        const modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    }
    getModalsCount() {
        return this.modalsCount;
    }
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    removeBackdrop() {
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
    }
    resetScrollbar() {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    }
    // thx d.walsh
    getScrollbarWidth() {
        const scrollDiv = this.renderer.createElement('div');
        this.renderer.addClass(scrollDiv, ClassName.SCROLLBAR_MEASURER);
        this.renderer.appendChild(document.body, scrollDiv);
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    _createLoaders() {
        const loader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.copyEvent(loader.onBeforeShow, this.open);
        this.copyEvent(loader.onShown, this.opened);
        this.copyEvent(loader.onBeforeHide, this.close);
        this.copyEvent(loader.onHidden, this.closed);
        this.loaders.push(loader);
    }
    removeLoaders(level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((loader, i) => {
            loader.instance.level = i + 1;
        });
    }
    copyEvent(from, to) {
        from.subscribe(() => {
            to.emit(this.lastDismissReason);
        });
    }
}
MDBModalService.decorators = [
    { type: Injectable }
];
MDBModalService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: ComponentLoaderFactory }
];

class ModalModule {
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [MDBModalService, ComponentLoaderFactory, PositioningService],
        };
    }
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                imports: [A11yModule],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];

class NavbarService {
    constructor() {
        this.navbarLinkClicks = new Subject();
    }
    getNavbarLinkClicks() {
        return this.navbarLinkClicks.asObservable();
    }
    setNavbarLinkClicks() {
        this.navbarLinkClicks.next();
    }
}
NavbarService.decorators = [
    { type: Injectable }
];

class LinksComponent {
    constructor(_navbarService, renderer) {
        this._navbarService = _navbarService;
        this.renderer = renderer;
        this.linkClick = new EventEmitter();
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.links.forEach((link) => {
                this.renderer.listen(link.nativeElement, 'click', () => {
                    this._navbarService.setNavbarLinkClicks();
                });
            });
        }, 0);
    }
}
LinksComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'links',
                template: `
    <ng-content></ng-content>
  `
            },] }
];
LinksComponent.ctorParameters = () => [
    { type: NavbarService },
    { type: Renderer2 }
];
LinksComponent.propDecorators = {
    links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
    linkClick: [{ type: Output }]
};

class NavbarComponent {
    constructor(renderer, _navbarService, _cdRef, _ngZone, _document) {
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        this._document = _document;
        this.containerInside = true;
        this.collapseId = 'navbarCollapse';
        this.scrollSensitivity = 120;
        this.scrollableNavbar = false;
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this._destroy$ = new Subject();
        this.isShown = false;
        this.duration = 350; // ms
        this.collapse = true;
        this.showClass = false;
        this.collapsing = false;
        this._itemsLength = 0;
        this.ariaExpanded = false;
        this._navbarService
            .getNavbarLinkClicks()
            .pipe(takeUntil(this._destroy$))
            .subscribe(navbarLinkClicks => {
            this.closeNavbarOnClick(navbarLinkClicks);
        });
    }
    closeNavbarOnClick(navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    }
    addTogglerIconClasses() {
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach(iconClass => {
                    this.renderer.addClass(this.toggler.nativeElement, iconClass);
                });
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    }
    _listenToScroll() {
        this._ngZone.runOutsideAngular(() => {
            fromEvent(this._document, 'scroll')
                .pipe(takeUntil(this._destroy$))
                .subscribe(() => {
                if (window.pageYOffset > this.scrollSensitivity) {
                    this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
                }
                else {
                    this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
                }
            });
        });
    }
    ngOnInit() {
        const isDoubleNav = this.SideClass.split(' ');
        this.doubleNav = isDoubleNav.indexOf('double-nav') !== -1;
    }
    ngAfterViewInit() {
        if (!this.containerInside) {
            const childrens = Array.from(this.container.nativeElement.children);
            childrens.forEach(child => {
                this.renderer.appendChild(this.navbar.nativeElement, child);
                this.container.nativeElement.remove();
            });
        }
        if (this.el.nativeElement.children.length === 0) {
            this.el.nativeElement.remove();
        }
        this.addTogglerIconClasses();
        if (this.scrollableNavbar) {
            this.renderer.addClass(this.el.nativeElement, 'collapsed-navbar-scroll');
        }
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            this._listenToScroll();
        }
    }
    toggle() {
        if (!this.collapsing) {
            if (this.isShown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    show() {
        this.isShown = true;
        this.collapse = false;
        this.collapsing = true;
        this.ariaExpanded = true;
        setTimeout(() => {
            this.height = this.el.nativeElement.scrollHeight;
            this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
        }, 0);
        setTimeout(() => {
            this.collapsing = false;
            this.collapse = true;
            this.showClass = true;
            this.shown.emit();
        }, this.duration);
        this._cdRef.markForCheck();
    }
    hide() {
        if (this.isShown) {
            this.isShown = false;
            this.collapse = false;
            this.showClass = false;
            this.collapsing = true;
            this.ariaExpanded = false;
            setTimeout(() => {
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
            }, 0);
            setTimeout(() => {
                this.collapsing = false;
                this.collapse = true;
                this.hidden.emit();
            }, this.duration);
        }
        this._cdRef.markForCheck();
    }
    get displayStyle() {
        if (!this.containerInside) {
            return 'flex';
        }
        else {
            return '';
        }
    }
    onResize(event) {
        let breakpoint = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoint = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoint = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoint = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoint = 576;
        }
        else {
            breakpoint = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoint) {
            if (!this.isShown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(() => {
                    this.height = this.el.nativeElement.scrollHeight;
                    this.collapse = true;
                    this.renderer.setStyle(this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.isShown = false;
            this.showClass = false;
            this.collapse = true;
            this.ariaExpanded = false;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    }
    ngAfterContentChecked() {
        if (this.el.nativeElement.firstElementChild) {
            if (this._itemsLength !==
                this.el.nativeElement.firstElementChild.firstElementChild.children.length) {
                this.height = this.el.nativeElement.firstElementChild.firstElementChild.clientHeight;
                this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
            }
            this._itemsLength = this.el.nativeElement.firstElementChild.firstElementChild.children.length;
        }
        this._cdRef.markForCheck();
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-navbar',
                template: "<nav class=\"{{ SideClass }}\" #nav>\n  <div [ngClass]=\"{ container: containerInside }\" [ngStyle]=\"{ display: displayStyle }\" #container>\n    <ng-content select=\"mdb-navbar-brand\"></ng-content>\n    <ng-content select=\"logo\"></ng-content>\n    <ng-content></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button\n        #toggler\n        class=\"navbar-toggler\"\n        type=\"button\"\n        [attr.aria-controls]=\"collapseId\"\n        [attr.aria-expanded]=\"ariaExpanded\"\n        aria-label=\"Toggle navigation\"\n        (click)=\"toggle(); $event.preventDefault()\"\n        mdbWavesEffect\n        *ngIf=\"this.el.nativeElement.children.length !== 0\"\n      >\n        <span class=\"navbar-toggler-icon\"> </span>\n      </button>\n    </div>\n    <div\n      #navbar\n      [attr.id]=\"collapseId\"\n      [style.height]=\"height\"\n      class=\"navbar-collapse collapse\"\n      [ngClass]=\"{ collapse: collapse, show: showClass, collapsing: collapsing }\"\n    >\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".navbar{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);font-weight:300}.navbar form .md-form input{margin:0 5px 1px 8px}.navbar .breadcrumb{margin:0;padding:.3rem 0 0 1rem;background-color:inherit;font-size:15px;font-weight:300}.navbar .breadcrumb .breadcrumb-item{color:#fff}.navbar .breadcrumb .breadcrumb-item.active,.navbar .breadcrumb .breadcrumb-item:before{color:hsla(0,0%,100%,.65)}.navbar .navbar-toggler{outline:0;border-width:0}.navbar .nav-flex-icons{flex-direction:row}@media (max-width:992px){.navbar .container{width:100%}.navbar .container .navbar-toggler-right{right:0}}.navbar .nav-item .nav-link{display:block}.navbar .nav-item .nav-link.disabled:active{pointer-events:none}.navbar .nav-item .nav-link .fab,.navbar .nav-item .nav-link .far,.navbar .nav-item .nav-link .fas{padding-right:3px;padding-left:3px}@media (max-width:992px){.navbar .nav-item .nav-link{padding-right:6px;padding-left:6px}}.navbar .dropdown-menu{position:absolute!important;margin-top:0}.navbar .dropdown-menu a{padding:10px;font-size:.9375rem;font-weight:300;color:#000}@media (max-width:600px){.navbar .dropdown-menu form{width:17rem}}@media (min-width:600px){.navbar .dropdown-menu form{width:22rem}}.navbar.navbar-light .navbar-nav .nav-item .nav-link.disbled,.navbar.navbar-light .navbar-nav .nav-item .nav-link.disbled:hover{color:rgba(0,0,0,.5)}.navbar.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");cursor:pointer}.navbar.navbar-light .breadcrumb .nav-item .nav-link,.navbar.navbar-light .navbar-nav .nav-item .nav-link{color:#000;transition:.35s}.navbar.navbar-light .breadcrumb .nav-item .nav-link:hover,.navbar.navbar-light .navbar-nav .nav-item .nav-link:hover{color:rgba(0,0,0,.75)}.navbar.navbar-light .breadcrumb .nav-item.active>.nav-link,.navbar.navbar-light .navbar-nav .nav-item.active>.nav-link{background-color:rgba(0,0,0,.1)}.navbar.navbar-light .breadcrumb .nav-item.active>.nav-link:hover,.navbar.navbar-light .navbar-nav .nav-item.active>.nav-link:hover,.navbar.navbar-light .navbar-toggler{color:#000}.navbar.navbar-light form .md-form input{border-bottom:1px solid #000}.navbar.navbar-light form .md-form input:focus:not([readonly]){border-color:#4285f4}.navbar.navbar-light form .md-form .form-control{color:#000}.navbar.navbar-light form .md-form .form-control::-moz-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control:-ms-input-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control::placeholder{color:#000;font-weight:300}.navbar.navbar-dark .navbar-nav .nav-item .nav-link.disbled,.navbar.navbar-dark .navbar-nav .nav-item .nav-link.disbled:hover{color:hsla(0,0%,100%,.5)}.navbar.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");cursor:pointer}.navbar.navbar-dark .breadcrumb .nav-item .nav-link,.navbar.navbar-dark .navbar-nav .nav-item .nav-link{color:#fff;transition:.35s}.navbar.navbar-dark .breadcrumb .nav-item .nav-link:hover,.navbar.navbar-dark .navbar-nav .nav-item .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar.navbar-dark .breadcrumb .nav-item.active>.nav-link,.navbar.navbar-dark .navbar-nav .nav-item.active>.nav-link{background-color:hsla(0,0%,100%,.1)}.navbar.navbar-dark .breadcrumb .nav-item.active>.nav-link:hover,.navbar.navbar-dark .navbar-nav .nav-item.active>.nav-link:hover,.navbar.navbar-dark .navbar-toggler{color:#fff}.navbar.navbar-dark form .md-form input{border-bottom:1px solid #fff}.navbar.navbar-dark form .md-form input:focus:not([readonly]){border-color:#4285f4}.navbar.navbar-dark form .md-form .form-control{color:#fff}.navbar.navbar-dark form .md-form .form-control::-moz-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control:-ms-input-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control::placeholder{color:#fff;font-weight:300}@media (min-width:600px){.navbar.scrolling-navbar{transition:background .5s ease-in-out,padding .5s ease-in-out;padding-top:12px;padding-bottom:12px}.navbar.scrolling-navbar .navbar-nav>li{transition-duration:1s}.navbar.scrolling-navbar.top-nav-collapse{padding-top:5px;padding-bottom:5px}}@media (min-width:1200px){.navbar.navbar-expand-xl links,.navbar.navbar-expand-xl navlinks{display:flex;flex-direction:row;align-items:center!important;align-self:center!important;width:100%}}@media (min-width:992px){.navbar>logo>div>a img{margin-left:20px}.navbar.navbar-expand-lg links,.navbar.navbar-expand-lg navlinks{display:flex;flex-direction:row;align-items:center!important;align-self:center!important;width:100%}}@media (min-width:768px){.navbar.navbar-expand-md links,.navbar.navbar-expand-md navlinks{display:flex;flex-direction:row;width:100%}}@media (min-width:576px){.navbar.navbar-expand-sm links,.navbar.navbar-expand-sm navlinks{display:flex;flex-direction:row;width:100%}}@media (max-width:992px){.collapsed-navbar-scroll{max-height:calc(100vh - 40px);overflow-y:scroll}}.navbar-container{order:-1;width:50px!important;padding-left:5px;padding-right:5px}.navbar-nav .dropdown-menu-right.dropdown-menu{left:unset}.navbar-nav .dropdown-menu{top:100%!important;transform:translateZ(0)!important}.breadcrumbs{display:flex;padding-left:5px;padding-right:5px;order:0;align-items:center}@media (min-width:1441px){.breadcrumbs{margin-left:-.6rem}}@supports (-ms-ime-align:auto){@media (min-width:992px){.ie-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.ie-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.ie-nav .navbar-brand>img{margin-top:-2px;padding-right:16px}}.ie-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}@media (min-width:992px){.intro-non-fixed-nav>links .navbar-collapse{display:inline-flex!important;align-items:center!important;justify-content:space-between!important}}@media (min-width:992px){.intro-fixed-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.intro-fixed-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.intro-fixed-nav .navbar-brand img{margin-top:-2px;padding-right:16px}}.intro-fixed-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}}@media (-ms-high-contrast:active) and (min-width:992px),(-ms-high-contrast:none) and (min-width:992px){.ie-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.ie-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.ie-nav .navbar-brand>img{margin-top:-2px;padding-right:16px}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ie-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}}@media (-ms-high-contrast:active) and (min-width:992px),(-ms-high-contrast:none) and (min-width:992px){.intro-non-fixed-nav>links .navbar-collapse{display:inline-flex!important;align-items:center!important;justify-content:space-between!important}}@media (-ms-high-contrast:active) and (min-width:992px),(-ms-high-contrast:none) and (min-width:992px){.intro-fixed-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.intro-fixed-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.intro-fixed-nav .navbar-brand img{margin-top:-2px;padding-right:16px}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.intro-fixed-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:none}"]
            },] }
];
NavbarComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NavbarService },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NavbarComponent.propDecorators = {
    iconBackground: [{ type: Input }],
    SideClass: [{ type: Input }],
    containerInside: [{ type: Input }],
    collapseId: [{ type: Input }],
    scrollSensitivity: [{ type: Input }],
    scrollableNavbar: [{ type: Input }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }],
    el: [{ type: ViewChild, args: ['navbar', { static: true },] }],
    mobile: [{ type: ViewChild, args: ['mobile',] }],
    navbar: [{ type: ViewChild, args: ['nav', { static: true },] }],
    container: [{ type: ViewChild, args: ['container', { static: true },] }],
    toggler: [{ type: ViewChild, args: ['toggler',] }],
    links: [{ type: ContentChild, args: [LinksComponent,] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

class LogoComponent {
}
LogoComponent.decorators = [
    { type: Component, args: [{
                selector: 'logo, mdb-navbar-brand',
                template: `<ng-content></ng-content>`
            },] }
];

class NavlinksComponent {
    constructor(_navbarService, renderer) {
        this._navbarService = _navbarService;
        this.renderer = renderer;
        this.linkClick = new EventEmitter();
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.links.forEach((link) => {
                this.renderer.listen(link.nativeElement, 'click', () => {
                    this._navbarService.setNavbarLinkClicks();
                });
            });
        }, 0);
    }
}
NavlinksComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'navlinks',
                template: `
    <ng-content></ng-content>
  `
            },] }
];
NavlinksComponent.ctorParameters = () => [
    { type: NavbarService },
    { type: Renderer2 }
];
NavlinksComponent.propDecorators = {
    links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
    linkClick: [{ type: Output }]
};

class NavbarModule {
}
NavbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                providers: [NavbarService]
            },] }
];

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
class PopoverConfig {
    constructor() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
}
PopoverConfig.decorators = [
    { type: Injectable }
];

class PopoverContainerComponent {
    constructor(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.class =
            'popover-fadeIn popover in popover-' +
                this.placement +
                ' ' +
                this.placement +
                ' bs-popover-' +
                this.placement +
                ' ' +
                this.containerClass;
    }
}
PopoverContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <h3 class="popover-header" [ngClass]="headerClass" *ngIf="title">{{ title }}</h3>
    <div class="popover-body" [ngClass]="bodyClass">
      <ng-content></ng-content>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [".popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom:after,.popover.bs-tether-element-attached-bottom:before,.popover.popover-top:after,.popover.popover-top:before{left:50%;border-bottom-width:0}.popover.bs-tether-element-attached-bottom:before,.popover.popover-top:before{bottom:-11px;margin-left:-11px;border-top-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-bottom:after,.popover.popover-top:after{bottom:-10px;margin-left:-10px;border-top-color:#fff}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left:after,.popover.bs-tether-element-attached-left:before,.popover.popover-right:after,.popover.popover-right:before{top:50%;border-left-width:0}.popover.bs-tether-element-attached-left:before,.popover.popover-right:before{left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-left:after,.popover.popover-right:after{left:-10px;margin-top:-10px;border-right-color:#fff}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top:after,.popover.bs-tether-element-attached-top:before,.popover.popover-bottom:after,.popover.popover-bottom:before{left:50%;border-top-width:0}.popover.bs-tether-element-attached-top:before,.popover.popover-bottom:before{top:-11px;margin-left:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top:after,.popover.popover-bottom:after{top:-10px;margin-left:-10px;border-bottom-color:#f7f7f7}.popover.bs-tether-element-attached-top .popover-title:before,.popover.popover-bottom .popover-title:before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:\"\";border-bottom:1px solid #f7f7f7}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right:after,.popover.bs-tether-element-attached-right:before,.popover.popover-left:after,.popover.popover-left:before{top:50%;border-right-width:0}.popover.bs-tether-element-attached-right:before,.popover.popover-left:before{right:-11px;margin-top:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right:after,.popover.popover-left:after{right:-10px;margin-top:-10px;border-left-color:#fff}.popover:after,.popover:before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover:before{content:\"\";border-width:11px}.popover:after{content:\"\";border-width:10px}@-webkit-keyframes fadeInPopover{0%{opacity:0}to{opacity:1}}@keyframes fadeInPopover{0%{opacity:0}to{opacity:1}}.popover-fadeIn{-webkit-animation-name:fadeInPopover;animation-name:fadeInPopover;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}"]
            },] }
];
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: Input }],
    title: [{ type: Input }],
    show: [{ type: HostBinding, args: ['class.show',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    class: [{ type: HostBinding, args: ['class',] }]
};

/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
    constructor(_elementRef, _renderer, _viewContainerRef, _config, cis, _positionService) {
        this._positionService = _positionService;
        this.dynamicPosition = true;
        this.outsideClick = false;
        this.popoverDisabled = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.shown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        this.hidden = this._popover.onHidden;
    }
    /**
     * Returns whether or not the popover is currently being shown
     */
    get isOpen() {
        return this._popover.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    get hasContent() {
        if (typeof this.mdbPopover === 'string') {
            return this.mdbPopover.length > 0;
        }
        return true;
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    show() {
        if (this._popover.isShown || this.popoverDisabled || !this.hasContent) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.dynamicPosition,
                },
                preventOverflow: {
                    enabled: this.dynamicPosition,
                },
            },
        });
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.mdbPopoverHeader || this.popoverTitle,
            containerClass: this.containerClass ? this.containerClass : '',
            bodyClass: this.bodyClass ? this.bodyClass : '',
            headerClass: this.headerClass ? this.headerClass : '',
        });
        this.isOpen = true;
        if (!this.dynamicPosition) {
            this._positionService.calcPosition();
            this._positionService.deletePositionElement(this._popover._componentRef.location);
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    hide() {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    onclick(event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    }
    onblur() {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    }
    // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
    onTouchStart(event) {
        if (this.outsideClick && !event.target.classList.contains('popover-body')) {
            this.hide();
        }
    }
    ngOnInit() {
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: () => this.show(),
        });
    }
    dispose() {
        this._popover.dispose();
    }
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] }
];
PopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: PopoverConfig },
    { type: ComponentLoaderFactory },
    { type: PositioningService }
];
PopoverDirective.propDecorators = {
    containerClass: [{ type: Input }],
    bodyClass: [{ type: Input }],
    headerClass: [{ type: Input }],
    mdbPopover: [{ type: Input }],
    mdbPopoverHeader: [{ type: Input }],
    popoverTitle: [{ type: Input }],
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    isOpen: [{ type: Input }],
    dynamicPosition: [{ type: Input }],
    outsideClick: [{ type: Input }],
    popoverDisabled: [{ type: Input }],
    onShown: [{ type: Output }],
    shown: [{ type: Output }],
    onHidden: [{ type: Output }],
    hidden: [{ type: Output }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onblur: [{ type: HostListener, args: ['window:click',] }],
    onTouchStart: [{ type: HostListener, args: ['document:touchstart', ['$event'],] }]
};

class PopoverModule {
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService],
        };
    }
}
PopoverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent],
            },] }
];

// tslint:disable-next-line:component-class-suffix
class MdbTableDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '#f2f2f2';
        this.stickyHeaderTextColor = '#000000';
        this.stickyFooter = false;
        this.stickyFooterBgColor = '#f2f2f2';
        this.stickyFooterTextColor = '#000000';
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    addRow(newRow) {
        this.getDataSource().push(newRow);
    }
    addRowAfter(index, row) {
        this.getDataSource().splice(index, 0, row);
    }
    removeRow(index) {
        this.getDataSource().splice(index, 1);
    }
    rowRemoved() {
        return new Observable((observer) => {
            observer.next(true);
        });
    }
    removeLastRow() {
        this.getDataSource().pop();
    }
    getDataSource() {
        return this._dataSource;
    }
    setDataSource(data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    }
    dataSourceChange() {
        return this._dataSourceChanged;
    }
    filterLocalDataBy(searchKey) {
        return this.getDataSource().filter((obj) => {
            return Object.keys(obj).some((key) => {
                if (obj[key]) {
                    // Fix(tableSearch): table search will now able to filter through nested data
                    return JSON.stringify(obj)
                        .toLowerCase()
                        .includes(searchKey);
                }
            });
        });
    }
    filterLocalDataByFields(searchKey, keys) {
        return this.getDataSource().filter((obj) => {
            return Object.keys(obj).some((key) => {
                if (obj[key]) {
                    if (keys.includes(key)) {
                        if (obj[key].toLowerCase().includes(searchKey)) {
                            return obj[key];
                        }
                    }
                }
            });
        });
    }
    filterLocalDataByMultipleFields(searchKey, keys) {
        const items = searchKey.split(' ').map((x) => x.toLowerCase());
        return this.getDataSource().filter((x) => {
            for (const item of items) {
                let flag = false;
                if (keys !== undefined) {
                    for (const prop in x) {
                        if (x[prop] && x.hasOwnProperty(prop)) {
                            if (keys.includes(prop)) {
                                if (x[prop].toLowerCase().indexOf(item) !== -1) {
                                    flag = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (keys === undefined) {
                    for (const prop in x) {
                        if (x.hasOwnProperty(prop) && x[prop].toLowerCase().indexOf(item) !== -1) {
                            flag = true;
                            break;
                        }
                    }
                }
                if (!flag) {
                    return false;
                }
            }
            return true;
        });
    }
    searchLocalDataBy(searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    searchLocalDataByFields(searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys.length > 0) {
            return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
        }
        if (!keys || keys.length === 0) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    searchLocalDataByMultipleFields(searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys !== undefined) {
            return this.filterLocalDataByMultipleFields(searchKey.toLowerCase(), keys);
        }
    }
    searchDataObservable(searchKey) {
        return new Observable((observer) => {
            observer.next(this.searchLocalDataBy(searchKey));
        });
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'table');
    }
    ngAfterViewInit() {
        // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
        if (this.stickyHeader) {
            this.makeSticky('thead', 'sticky-top', this.stickyHeaderBgColor, this.stickyHeaderTextColor);
        }
        if (this.stickyFooter) {
            this.makeSticky('tfoot', 'sticky-bottom', this.stickyFooterBgColor, this.stickyFooterTextColor);
        }
    }
    makeSticky(query, elementClass, bgColor, color) {
        const tableHead = this.el.nativeElement.querySelector(query);
        Array.from(tableHead.firstElementChild.children).forEach((child) => {
            this.renderer.addClass(child, elementClass);
            if (bgColor) {
                this.renderer.setStyle(child, 'background-color', bgColor);
            }
            if (color) {
                this.renderer.setStyle(child, 'color', color);
            }
        });
    }
}
MdbTableDirective.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[mdbTable]',
                exportAs: 'mdbTable',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: ["table th{font-size:.9rem;font-weight:400}table td{font-size:.9rem;font-weight:300}table thead td svg.ascending,table thead td svg.descending,table thead th svg.ascending,table thead th svg.descending{display:none;max-height:.9rem;max-width:.9rem}table thead td[aria-sort=ascending] svg.ascending,table thead td[aria-sort=descending] svg.descending,table thead th[aria-sort=ascending] svg.ascending,table thead th[aria-sort=descending] svg.descending{display:unset}table thead td:not([aria-sort]):hover svg.descending,table thead td[aria-sort=constant]:hover svg.descending,table thead th:not([aria-sort]):hover svg.descending,table thead th[aria-sort=constant]:hover svg.descending{display:unset;opacity:.5}table tfoot .sticky-bottom{position:sticky;bottom:0}table.table{margin-bottom:0}table.table thead th{border-top:none;border-bottom-width:1px}table.table td,table.table th{padding:1.1rem 16px 1rem}table.table .label-table{margin:0;padding:0;line-height:.94rem;height:.94rem}table.table.btn-table td{vertical-align:middle}table.table-hover tbody tr:hover{transition:.5s;background-color:rgba(0,0,0,.075)}table .th-lg{min-width:9rem}table .th-sm{min-width:6rem}table.table-sm td,table.table-sm th{padding-top:.6rem;padding-bottom:.6rem}.table-scroll-vertical{max-height:300px;overflow-y:auto}.table-fixed{table-layout:fixed}.table-responsive-lg>.table-bordered,.table-responsive-md>.table-bordered,.table-responsive-sm>.table-bordered,.table-responsive-xl>.table-bordered,.table-responsive>.table-bordered{border-top:1px solid #dee2e6}"]
            },] }
];
MdbTableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbTableDirective.propDecorators = {
    striped: [{ type: Input }, { type: HostBinding, args: ['class.table-striped',] }],
    bordered: [{ type: Input }, { type: HostBinding, args: ['class.table-bordered',] }],
    borderless: [{ type: Input }, { type: HostBinding, args: ['class.table-borderless',] }],
    hover: [{ type: Input }, { type: HostBinding, args: ['class.table-hover',] }],
    small: [{ type: Input }, { type: HostBinding, args: ['class.table-sm',] }],
    responsive: [{ type: Input }, { type: HostBinding, args: ['class.table-responsive',] }],
    stickyHeader: [{ type: Input }],
    stickyHeaderBgColor: [{ type: Input }],
    stickyHeaderTextColor: [{ type: Input }],
    stickyFooter: [{ type: Input }],
    stickyFooterBgColor: [{ type: Input }],
    stickyFooterTextColor: [{ type: Input }]
};

var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ascending";
    SortDirection["DESC"] = "descending";
    SortDirection["CONST"] = "constant";
})(SortDirection || (SortDirection = {}));
class MdbTableSortDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.data = [];
        this.sortedInto = true;
        this.order = SortDirection.CONST;
        this.dataSource = [];
        this.sortIcon = false;
        this.resetSortDirection = false;
        this.sortEnd = new EventEmitter();
        this.sorted = new EventEmitter();
    }
    onclick() {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
        this.removeSort();
    }
    trimWhiteSigns(headElement) {
        return headElement.replace(/ /g, '');
    }
    moveArrayItem(arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            let k = newIndex - arr.length;
            while (k-- + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    }
    sortDataBy(key) {
        let ariaPass = true;
        const setAria = (sort, id) => {
            if (ariaPass) {
                let nextSortType = '';
                if (this.resetSortDirection) {
                    if (sort === SortDirection.CONST) {
                        nextSortType = SortDirection.DESC;
                    }
                    else if (sort === SortDirection.DESC) {
                        nextSortType = SortDirection.ASC;
                    }
                    else if (sort === SortDirection.ASC) {
                        nextSortType = SortDirection.CONST;
                    }
                }
                else {
                    if (sort === SortDirection.DESC) {
                        nextSortType = SortDirection.ASC;
                    }
                    else if (sort === SortDirection.ASC) {
                        nextSortType = SortDirection.DESC;
                    }
                }
                this.renderer.setAttribute(this.el.nativeElement, 'aria-sort', sort);
                this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${id}: activate to sort column ${nextSortType}`);
                ariaPass = false;
            }
        };
        key = key.split('.');
        if (this.resetSortDirection) {
            const sortFn = (a, b) => {
                a = a[key];
                b = b[key];
                return a > b ? -1 : 1;
            };
            if (this.order === SortDirection.CONST) {
                setAria(SortDirection.DESC, key);
                this.order = SortDirection.DESC;
                this.dataSource.sort(sortFn);
            }
            else if (this.order === SortDirection.DESC) {
                setAria(SortDirection.ASC, key);
                this.order = SortDirection.ASC;
                this.dataSource.sort(sortFn).reverse();
            }
            else if (this.order === SortDirection.ASC) {
                setAria(SortDirection.CONST, key);
                this.order = SortDirection.CONST;
                this.data.map((el, index) => {
                    this.dataSource[index] = el;
                });
            }
        }
        else {
            this.dataSource.sort((a, b) => {
                let i = 0;
                while (i < key.length) {
                    a = a[key[i]];
                    b = b[key[i]];
                    i++;
                }
                if (a < b) {
                    setAria(SortDirection.ASC, key);
                    this.order = SortDirection.ASC;
                    return this.sortedInto ? 1 : -1;
                }
                else if (a > b) {
                    setAria(SortDirection.DESC, key);
                    this.order = SortDirection.DESC;
                    return this.sortedInto ? -1 : 1;
                }
                else if (a == null || b == null) {
                    this.order = SortDirection.CONST;
                    return 1;
                }
                else {
                    this.order = SortDirection.CONST;
                    return 0;
                }
            });
            this.sortedInto = !this.sortedInto;
        }
    }
    ngOnInit() {
        const key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${key}: activate to sort column descending`);
        if (this.data.length === 0) {
            // this.dataSource.map((element: any) => {
            //   this.data.push(element);
            // })
            this.data = Array.from(this.dataSource);
        }
    }
    ngAfterViewInit() {
        if (this.sortIcon) {
            this.createIcon();
        }
    }
    createIcon() {
        // tslint:disable-next-line:max-line-length
        const iconUp = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="svg-inline--fa fa-arrow-up fa-w-14 ascending" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>`;
        // tslint:disable-next-line:max-line-length
        const iconDown = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="svg-inline--fa fa-arrow-down fa-w-14 descending" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>`;
        const title = this.el.nativeElement.innerHTML;
        this.el.nativeElement.innerHTML = `${title} ${iconUp} ${iconDown}`;
    }
    removeSort() {
        const nodes = this.el.nativeElement.parentElement.childNodes;
        if (nodes) {
            Array.from(nodes).map((node) => {
                if (node !== this.el.nativeElement && node.nodeName !== '#comment') {
                    this.renderer.removeAttribute(node, 'aria-sort');
                }
            });
        }
    }
}
MdbTableSortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableSort]',
            },] }
];
MdbTableSortDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbTableSortDirective.propDecorators = {
    dataSource: [{ type: Input, args: ['mdbTableSort',] }],
    sortBy: [{ type: Input }],
    sortIcon: [{ type: Input }],
    resetSortDirection: [{ type: Input }],
    sortEnd: [{ type: Output }],
    sorted: [{ type: Output }],
    onclick: [{ type: HostListener, args: ['click',] }]
};

class MdbTableScrollDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.scrollY = false;
        this.maxHeight = null;
        this.scrollX = false;
        this.maxWidth = null;
    }
    wrapTableWithVerticalScrollingWrapper(tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-y', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    }
    wrapTableWithHorizontalScrollingWrapper(tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    }
    wrapTableWithHorizontalAndVerticalScrollingWrapper(tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    }
    ngOnInit() {
        const parent = this.el.nativeElement.parentNode;
        const tableWrapper = this.renderer.createElement('div');
        if (this.scrollY && this.scrollX && this.maxHeight && this.maxWidth) {
            this.wrapTableWithHorizontalAndVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollY && this.maxHeight) {
            this.wrapTableWithVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollX && this.maxWidth) {
            this.wrapTableWithHorizontalScrollingWrapper(tableWrapper);
        }
        this.renderer.insertBefore(parent, tableWrapper, this.el.nativeElement);
        this.renderer.removeChild(parent, this.el.nativeElement);
        this.renderer.appendChild(tableWrapper, this.el.nativeElement);
    }
}
MdbTableScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableScroll]',
            },] }
];
MdbTableScrollDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
MdbTableScrollDirective.propDecorators = {
    scrollY: [{ type: Input }],
    maxHeight: [{ type: Input }],
    scrollX: [{ type: Input }],
    maxWidth: [{ type: Input }]
};

class MdbTableRowDirective {
    constructor(el) {
        this.el = el;
        this.rowCreated = new EventEmitter();
        this.rowRemoved = new EventEmitter();
    }
    ngOnInit() {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    }
    ngOnDestroy() {
        this.rowRemoved.emit({ removed: true });
    }
}
MdbTableRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableRow]'
            },] }
];
MdbTableRowDirective.ctorParameters = () => [
    { type: ElementRef }
];
MdbTableRowDirective.propDecorators = {
    rowCreated: [{ type: Output }],
    rowRemoved: [{ type: Output }]
};

class MdbTableService {
    constructor() {
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    addRow(newRow) {
        this.getDataSource().push(newRow);
    }
    addRowAfter(index, row) {
        this.getDataSource().splice(index, 0, row);
    }
    removeRow(index) {
        this.getDataSource().splice(index, 1);
    }
    rowRemoved() {
        const rowRemoved = new Observable((observer) => {
            observer.next(true);
        });
        return rowRemoved;
    }
    removeLastRow() {
        this.getDataSource().pop();
    }
    getDataSource() {
        return this._dataSource;
    }
    setDataSource(data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    }
    dataSourceChange() {
        return this._dataSourceChanged;
    }
    filterLocalDataBy(searchKey) {
        return this.getDataSource().filter((obj) => {
            return Object.keys(obj).some((key) => {
                if (obj[key]) {
                    return obj[key]
                        .toString()
                        .toLowerCase()
                        .includes(searchKey);
                }
            });
        });
    }
    searchLocalDataBy(searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    searchDataObservable(searchKey) {
        const observable = new Observable((observer) => {
            observer.next(this.searchLocalDataBy(searchKey));
        });
        return observable;
    }
}
MdbTableService.ɵprov = ɵɵdefineInjectable({ factory: function MdbTableService_Factory() { return new MdbTableService(); }, token: MdbTableService, providedIn: "root" });
MdbTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
MdbTableService.ctorParameters = () => [];

class MdbTablePaginationComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.searchPagination = false;
        this.searchDataSource = null;
        this.ofKeyword = 'of';
        this.dashKeyword = '-';
        this.paginationAlign = '';
        this.hideDescription = false;
        this._destroy$ = new Subject();
        this.maxVisibleItems = 10;
        this.firstItemIndex = 0;
        this.lastItemIndex = this.maxVisibleItems;
        this.lastVisibleItemIndex = 5;
        this.activePageNumber = 1;
        this.allItemsLength = 0;
        this.nextShouldBeDisabled = false;
        this.previousShouldBeDisabled = true;
        this.searchText = '';
        this.pagination = new Subject();
        this.nextPageClick = new EventEmitter();
        this.previousPageClick = new EventEmitter();
        this.firstPageClick = new EventEmitter();
        this.lastPageClick = new EventEmitter();
    }
    ngOnInit() {
        if (this.tableEl) {
            this.allItemsLength = this.tableEl.getDataSource().length;
        }
    }
    ngAfterViewInit() {
        if (this.tableEl) {
            this.tableEl
                .dataSourceChange()
                .pipe(takeUntil(this._destroy$))
                .subscribe((data) => {
                this.allItemsLength = data.length;
                this.lastVisibleItemIndex = data.length;
                this.calculateFirstItemIndex();
                this.calculateLastItemIndex();
                this.disableNextButton(data);
                if (this.searchDataSource) {
                    setTimeout(() => {
                        if (this.searchDataSource.length !== data.length) {
                            this.activePageNumber = 1;
                            this.firstItemIndex = 1;
                        }
                    }, 0);
                }
            });
        }
        this.paginationChange()
            .pipe(takeUntil(this._destroy$))
            .subscribe((data) => {
            this.firstItemIndex = data.first;
            this.lastVisibleItemIndex = data.last;
        });
    }
    ngOnChanges(changes) {
        const searchDataSource = changes['searchDataSource'];
        if (searchDataSource.currentValue.length !== 0) {
            this.allItemsLength = searchDataSource.currentValue.length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        if (searchDataSource.currentValue.length === 0) {
            this.firstItemIndex = 0;
            this.lastItemIndex = 0;
            this.lastVisibleItemIndex = 0;
            this.allItemsLength = 0;
        }
        if (!searchDataSource.isFirstChange() &&
            searchDataSource.currentValue.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
            this.lastVisibleItemIndex = searchDataSource.currentValue.length;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    }
    setMaxVisibleItemsNumberTo(value) {
        this.lastItemIndex = value;
        this.lastVisibleItemIndex = value;
        this.maxVisibleItems = value;
        this.cdRef.detectChanges();
    }
    searchTextObs() {
        const observable = new Observable((observer) => {
            observer.next(this.searchText);
        });
        return observable;
    }
    disableNextButton(data) {
        if (data.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    }
    calculateFirstItemIndex() {
        this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1;
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    calculateLastItemIndex() {
        this.lastItemIndex = this.activePageNumber * this.maxVisibleItems;
        this.lastVisibleItemIndex = this.lastItemIndex;
        if (this.searchDataSource && this.lastItemIndex > this.searchDataSource.length) {
            this.lastVisibleItemIndex = this.searchDataSource.length;
        }
        else if (!this.searchDataSource) {
            this.lastVisibleItemIndex = this.lastItemIndex;
        }
        if (this.lastItemIndex > this.tableEl.getDataSource().length) {
            this.lastItemIndex = this.tableEl.getDataSource().length;
            this.lastVisibleItemIndex = this.tableEl.getDataSource().length;
        }
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    paginationChange() {
        return this.pagination;
    }
    calculateHowManyPagesShouldBe() {
        return Math.ceil(this.tableEl.getDataSource().length / this.maxVisibleItems);
    }
    previousPage() {
        this.activePageNumber--;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    nextPage() {
        this.activePageNumber++;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        if (this.lastItemIndex > this.tableEl.getDataSource().length) {
            this.lastItemIndex = this.tableEl.getDataSource().length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        this.nextPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    firstPage() {
        this.activePageNumber = 1;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.firstPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    lastPage() {
        const lastPage = Math.ceil(this.allItemsLength / this.maxVisibleItems);
        this.activePageNumber = lastPage;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.lastPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    nextPageObservable() {
        const obs = new Observable((observer) => {
            observer.next(this.firstItemIndex);
        });
        return obs;
    }
    previousPageObservable() {
        const obs = new Observable((observer) => {
            observer.next(this.lastVisibleItemIndex);
        });
        return obs;
    }
    checkIfNextShouldBeDisabled() {
        if (this.searchDataSource && this.lastVisibleItemIndex === this.searchDataSource.length) {
            return true;
        }
        if (this.activePageNumber >= this.calculateHowManyPagesShouldBe()) {
            return true;
        }
        if (this.nextShouldBeDisabled) {
            return this.nextShouldBeDisabled;
        }
    }
    checkIfPreviousShouldBeDisabled() {
        if (this.activePageNumber === 1) {
            return true;
        }
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
MdbTablePaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-table-pagination',
                template: "<!--Pagination -->\n<nav>\n  <ul\n    class=\"pagination pagination-circle pg-blue d-flex flex-center\"\n    [ngClass]=\"{\n      'justify-content-end': paginationAlign == 'end',\n      'justify-content-start': paginationAlign == 'start'\n    }\"\n  >\n    <li *ngIf=\"!hideDescription\">\n      {{ firstItemIndex }} {{ dashKeyword }} {{ lastVisibleItemIndex }} {{ ofKeyword }}\n      {{ allItemsLength }}\n    </li>\n    <!--Arrow left-->\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfPreviousShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"firstPage()\">\n        <span aria-hidden=\"true\">\u00AB</span>\n      </a>\n    </li>\n\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfPreviousShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"previousPage()\">\n        <span aria-hidden=\"true\">&#8249;</span>\n      </a>\n    </li>\n\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfNextShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"nextPage()\">\n        <span aria-hidden=\"true\">&#8250;</span>\n      </a>\n    </li>\n\n    <!--Arrow right-->\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfNextShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\" (click)=\"lastPage()\">\n        <span aria-hidden=\"true\">\u00BB</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n<!--/Pagination -->\n"
            },] }
];
MdbTablePaginationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MdbTablePaginationComponent.propDecorators = {
    tableEl: [{ type: Input }],
    searchPagination: [{ type: Input }],
    searchDataSource: [{ type: Input }],
    ofKeyword: [{ type: Input }],
    dashKeyword: [{ type: Input }],
    paginationAlign: [{ type: Input }],
    hideDescription: [{ type: Input }],
    nextPageClick: [{ type: Output }],
    previousPageClick: [{ type: Output }],
    firstPageClick: [{ type: Output }],
    lastPageClick: [{ type: Output }]
};

class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MdbTablePaginationComponent,
                    MdbTableRowDirective,
                    MdbTableScrollDirective,
                    MdbTableSortDirective,
                    MdbTableDirective,
                ],
                exports: [
                    MdbTablePaginationComponent,
                    MdbTableRowDirective,
                    MdbTableScrollDirective,
                    MdbTableSortDirective,
                    MdbTableDirective,
                ],
                entryComponents: [MdbTablePaginationComponent],
                providers: [MdbTableService],
            },] }
];

/** Default values provider for tooltip */
class TooltipConfig {
    constructor() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
}
TooltipConfig.decorators = [
    { type: Injectable }
];

class TooltipContainerComponent {
    constructor(config, elem) {
        this.elem = elem;
        this.containerClass = '';
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    get tooltipClasses() {
        return `tooltip-fadeIn tooltip in tooltip-${this.placement} bs-tooltip-${this.placement} ${this.placement} ${this.containerClass}`;
    }
    get isBs3() {
        return isBs3();
    }
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    }
}
TooltipContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div #tooltipArrow class="tooltip-arrow arrow"></div>
    <div #tooltipInner class="tooltip-inner">
      <ng-content></ng-content>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: ["a .tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}a .tooltip.show{opacity:.9}a .tooltip.bs-tether-element-attached-bottom,a .tooltip.tooltip-top{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-bottom .tooltip-inner:before,a .tooltip.tooltip-top .tooltip-inner:before{bottom:0;left:50%;margin-left:-.8rem;content:\"\";border-width:.8rem .8rem 0}a .tooltip.bs-tether-element-attached-left,a .tooltip.tooltip-right{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-left .tooltip-inner:before,a .tooltip.tooltip-right .tooltip-inner:before{top:50%;left:0;margin-top:-.8rem;content:\"\";border-width:.8rem .8rem .8rem 0}a .tooltip.bs-tether-element-attached-top,a .tooltip.tooltip-bottom{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-top .tooltip-inner:before,a .tooltip.tooltip-bottom .tooltip-inner:before{top:0;left:50%;margin-left:-.8rem;content:\"\";border-width:0 .8rem .8rem}a .tooltip.bs-tether-element-attached-right,a .tooltip.tooltip-left{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-right .tooltip-inner:before,a .tooltip.tooltip-left .tooltip-inner:before{top:50%;right:0;margin-top:-.8rem;content:\"\";border-width:.8rem 0 .8rem .8rem}.tooltip-inner{max-width:200px;text-align:center;padding:.2rem .4rem;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.25rem}.tooltip-inner:before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}@-webkit-keyframes fadeInTooltip{0%{opacity:0}to{opacity:1}}@keyframes fadeInTooltip{0%{opacity:0}to{opacity:1}}.tooltip-fadeIn{-webkit-animation-name:fadeInTooltip;animation-name:fadeInTooltip;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.single-tooltip{padding:.75rem 0 0}.single-tooltip a{padding:0!important}a[tooltip]{margin-left:0!important;padding:0 .5rem}.tooltip-arrow.left{position:relative;margin-right:-.6rem;transform:rotate(90deg)}.tooltip-arrow.right{position:relative;margin-left:-.6rem;transform:rotate(-90deg)}.tooltip-arrow.top{position:relative;transform:rotate(-180deg)}.tooltip-top{padding:.4rem 0}.tooltip-top .arrow{bottom:0}.tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.tooltip-right{padding:0 .4rem}.tooltip-right .arrow{left:0}.tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.tooltip-bottom{padding:.4rem 0}.tooltip-bottom .arrow{top:0}.tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.tooltip-left{padding:0 .4rem}.tooltip-left .arrow{right:0}.tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}"]
            },] }
];
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig },
    { type: ElementRef }
];
TooltipContainerComponent.propDecorators = {
    containerClass: [{ type: Input }],
    tooltipInner: [{ type: ViewChild, args: ['tooltipInner', { static: true },] }],
    tooltipArrow: [{ type: ViewChild, args: ['tooltipArrow', { static: true },] }],
    show: [{ type: HostBinding, args: ['class.show',] }],
    tooltipClasses: [{ type: HostBinding, args: ['class',] }]
};

class TooltipDirective {
    constructor(_renderer, _elementRef, _positionService, _viewContainerRef, cis, config, platformId) {
        this._elementRef = _elementRef;
        this._positionService = _positionService;
        this.platformId = platformId;
        /** Fired when tooltip content changes */
        this.tooltipChange = new EventEmitter();
        this.dynamicPosition = true;
        this.delay = 0;
        this.fadeDuration = 150;
        this._destroy$ = new Subject();
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(this.platformId);
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.shown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
        this.hidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show(),
        });
        this.tooltipChange.pipe(takeUntil(this._destroy$)).subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
    }
    ngOnChanges(changes) {
        if (changes['mdbTooltip'] && !changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    show() {
        if (this.isOpen || this.tooltipDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.dynamicPosition,
                },
                preventOverflow: {
                    enabled: this.dynamicPosition,
                },
            },
        });
        const showTooltip = () => {
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.mdbTooltip,
                placement: this.placement,
            });
        };
        this.showTooltip(showTooltip);
    }
    showTooltip(fn) {
        if (this.delay) {
            this._delayTimeoutId = setTimeout(() => {
                fn();
            }, this.delay);
        }
        else {
            fn();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(() => {
            this._tooltip.hide();
        }, this.fadeDuration);
    }
    dispose() {
        this._tooltip.dispose();
    }
    ngOnDestroy() {
        this._tooltip.dispose();
        this._destroy$.next();
        this._destroy$.complete();
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTooltip]',
                exportAs: 'mdb-tooltip',
            },] }
];
TooltipDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: PositioningService },
    { type: ViewContainerRef },
    { type: ComponentLoaderFactory },
    { type: TooltipConfig },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
TooltipDirective.propDecorators = {
    mdbTooltip: [{ type: Input }],
    tooltipChange: [{ type: Output }],
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    isOpen: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    dynamicPosition: [{ type: Input }],
    onShown: [{ type: Output }],
    shown: [{ type: Output }],
    onHidden: [{ type: Output }],
    hidden: [{ type: Output }],
    delay: [{ type: Input }],
    customHeight: [{ type: Input }],
    fadeDuration: [{ type: Input }]
};
__decorate([
    OnChange$1(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "mdbTooltip", void 0);

class TooltipModule {
    static forRoot() {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService],
        };
    }
}
TooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent],
            },] }
];

class WavesDirective {
    constructor(el) {
        this.el = el;
    }
    click(event) {
        if (!this.el.nativeElement.classList.contains('disabled')) {
            const button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            const xPos = event.clientX - button.getBoundingClientRect().left;
            const yPos = event.clientY - button.getBoundingClientRect().top;
            const tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            const ripple = button.appendChild(tmp);
            const top = yPos + 'px';
            const left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            const scale = 'scale(' + (button.clientWidth / 100) * 3 + ') translate(0,0)';
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            const duration = 750;
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    }
    removeRipple(button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(() => {
            ripple.style.opacity = '0';
            setTimeout(() => {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    }
}
WavesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbWavesEffect]',
            },] }
];
WavesDirective.ctorParameters = () => [
    { type: ElementRef }
];
WavesDirective.propDecorators = {
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class WavesModule {
    static forRoot() {
        return { ngModule: WavesModule, providers: [] };
    }
}
WavesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WavesDirective],
                exports: [WavesDirective],
            },] }
];

var Direction$1;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
})(Direction$1 || (Direction$1 = {}));
class StickyHeaderDirective {
    constructor(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
        this._destroy$ = new Subject();
    }
    ngAfterViewInit() {
        const scroll$ = fromEvent(win, 'scroll').pipe(throttleTime(10), map(() => win.pageYOffset), pairwise(), map(([y1, y2]) => (y2 < y1 ? Direction$1.Up : Direction$1.Down)), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter(direction => direction === Direction$1.Up));
        this.scrollDown$ = scroll$.pipe(filter(direction => direction === Direction$1.Down));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        this._renderer.setStyle(this._el.nativeElement, 'z-index', '1030');
        setTimeout(() => {
            this.scrollUp$
                .pipe(skip(0), takeUntil(this._destroy$))
                .subscribe(() => {
                this._renderer.setStyle(this._el.nativeElement, 'transition', `all ${this.animationDuration}ms ease-in`);
                this._renderer.setStyle(this._el.nativeElement, 'transform', 'translateY(0%)');
                this.transitionEnd.emit({ state: 'Visible' });
            });
            this.scrollDown$
                .pipe(skip(0), takeUntil(this._destroy$))
                .subscribe(() => {
                this._renderer.setStyle(this._el.nativeElement, 'transition', `all ${this.animationDuration}ms ease-in`);
                this._renderer.setStyle(this._el.nativeElement, 'transform', 'translateY(-100%)');
                this.transitionEnd.emit({ state: 'Hidden' });
            });
        }, 0);
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
StickyHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbStickyHeader]',
                exportAs: 'mdbStickyHeader',
            },] }
];
StickyHeaderDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
StickyHeaderDirective.propDecorators = {
    animationDuration: [{ type: Input }],
    transitionEnd: [{ type: Output }]
};

class StickyHeaderModule {
}
StickyHeaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StickyHeaderDirective],
                exports: [StickyHeaderDirective],
                imports: [CommonModule],
            },] }
];

// free
const MODULES = [
    ButtonsModule,
    CardsModule,
    WavesModule,
    InputsModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    IconsModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    BreadcrumbModule,
    InputUtilitiesModule,
    StickyHeaderModule,
];
class MDBRootModule {
}
MDBRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ButtonsModule,
                    WavesModule.forRoot(),
                    InputsModule.forRoot(),
                    NavbarModule,
                    DropdownModule.forRoot(),
                    CarouselModule.forRoot(),
                    ChartsModule,
                    CollapseModule.forRoot(),
                    ModalModule.forRoot(),
                    TooltipModule.forRoot(),
                    PopoverModule.forRoot(),
                    IconsModule,
                    CardsModule.forRoot(),
                    CheckboxModule,
                    TableModule,
                    BadgeModule,
                    BreadcrumbModule,
                    InputUtilitiesModule,
                    StickyHeaderModule,
                ],
                exports: MODULES,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
class MDBBootstrapModule {
    static forRoot() {
        return { ngModule: MDBRootModule };
    }
}
MDBBootstrapModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];

/*
 * Public API Surface of ng-uikit-pro-standard-compile
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeModule, BaseChartDirective, BreadcrumbModule, BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownState, BsDropdownToggleDirective, ButtonCheckboxDirective, ButtonRadioDirective, ButtonsModule, CHECKBOX_VALUE_ACCESSOR, CardsModule, CarouselComponent, CarouselConfig, CarouselModule, ChartsModule, CheckboxComponent, CheckboxModule, CollapseComponent, CollapseModule, DropdownModule, EqualValidatorDirective, FabDirective, FadDirective, FalDirective, FarDirective, FasDirective, FixedButtonCaptionDirective, IconsModule, InputUtilitiesModule, InputsModule, LinksComponent, LogoComponent, MDBBadgeComponent, MDBBootstrapModule, MDBModalRef, MDBModalService, MDBRootModule, MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, MdbBtnDirective, MdbCardBodyComponent, MdbCardComponent, MdbCardFooterComponent, MdbCardHeaderComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCheckboxChange, MdbErrorDirective, MdbIconComponent, MdbInput, MdbInputDirective, MdbSuccessDirective, MdbTableDirective, MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableService, MdbTableSortDirective, MdbValidateDirective, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, NavbarComponent, NavbarModule, NavbarService, NavlinksComponent, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, SlideComponent, StickyHeaderDirective, StickyHeaderModule, TableModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, WavesDirective, WavesModule, RADIO_CONTROL_VALUE_ACCESSOR as ɵa, CHECKBOX_CONTROL_VALUE_ACCESSOR as ɵb, CHECKBOX_VALUE_ACCESSOR as ɵc, CheckboxComponent as ɵd, ComponentLoaderFactory as ɵe, PositioningService as ɵf, OnChange$1 as ɵg };
//# sourceMappingURL=angular-bootstrap-md.js.map
