import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef, ViewEncapsulation, ChangeDetectorRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { BsDropdownConfig } from './dropdown.config';
import { BsDropdownContainerComponent } from './dropdown-container.component';
import { BsDropdownState } from './dropdown.state';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { takeUntil } from 'rxjs/operators';
// tslint:disable-next-line:component-class-suffix
export class BsDropdownDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1ib290c3RyYXAtbWQvc3JjL2xpYi9mcmVlL2Ryb3Bkb3duL2Ryb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVzNDLGtEQUFrRDtBQUNsRCxNQUFNLE9BQU8sbUJBQW1CO0lBd0g5QixZQUNVLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ3BCLGlCQUFtQyxFQUNuQyxJQUE0QixFQUM1QixPQUF5QixFQUN6QixNQUF1QixFQUN2QixLQUF3QjtRQU54QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7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QUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUEzWEYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7O2FBQzdCOzs7WUFqQ0MsVUFBVTtZQVFWLFNBQVM7WUFDVCxnQkFBZ0I7WUFPVCxzQkFBc0I7WUFDdEIsZ0JBQWdCO1lBRWhCLGVBQWU7WUFSdEIsaUJBQWlCOzs7d0JBNEJoQixLQUFLO3VCQUtMLEtBQUs7d0JBS0wsS0FBSztxQkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFJTCxXQUFXLFNBQUMsY0FBYzt3QkFpQjFCLEtBQUs7eUJBYUwsS0FBSztxQkFlTCxXQUFXLFNBQUMsWUFBWSxjQUN4QixXQUFXLFNBQUMsWUFBWSxjQUN4QixLQUFLOzJCQW1CTCxNQUFNO3NCQU1OLE1BQU07b0JBQ04sTUFBTTt1QkFNTixNQUFNO3FCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5mYWN0b3J5JztcbmltcG9ydCB7IEJzRHJvcGRvd25Db25maWcgfSBmcm9tICcuL2Ryb3Bkb3duLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vZHJvcGRvd24uc3RhdGUnO1xuaW1wb3J0IHsgQnNDb21wb25lbnRSZWYgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2JzLWNvbXBvbmVudC1yZWYuY2xhc3MnO1xuaW1wb3J0IHsgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnLi4vdXRpbHMvbmcyLWJvb3RzdHJhcC1jb25maWcnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJEcm9wZG93bl0sW2Ryb3Bkb3duXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnZHJvcGRvd24tbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbQnNEcm9wZG93blN0YXRlXSxcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBASW5wdXQoKSBkcm9wdXA6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRyb3B1cERlZmF1bHQgPSBmYWxzZTtcbiAgQElucHV0KCkgZHluYW1pY1Bvc2l0aW9uID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZCB1cHdhcmRzXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRyb3B1cCcpIHB1YmxpYyBnZXQgaXNEcm9wdXAoKSB7XG4gICAgaWYgKHRoaXMuZHJvcHVwKSB7XG4gICAgICB0aGlzLl9pc0Ryb3B1cERlZmF1bHQgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLmRyb3B1cDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZHJvcHVwRGVmYXVsdCkge1xuICAgICAgdGhpcy5faXNEcm9wdXBEZWZhdWx0ID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLmRyb3B1cERlZmF1bHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRyb3B1cERlZmF1bHQgJiYgdGhpcy5kcm9wdXApIHtcbiAgICAgIHRoaXMuX2lzRHJvcHVwRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuZHJvcHVwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBkcm9wZG93biB3aWxsIGJlIGNsb3NlZCBvbiBpdGVtIG9yIGRvY3VtZW50IGNsaWNrLFxuICAgKiBhbmQgYWZ0ZXIgcHJlc3NpbmcgRVNDXG4gICAqL1xuICBASW5wdXQoKSBzZXQgYXV0b0Nsb3NlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXV0b0Nsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2U7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgZHJvcGRvd24gdG9nZ2xlIGFuZCBoaWRlcyBkcm9wZG93biBtZW51IGlmIG9wZW5lZFxuICAgKi9cbiAgQElucHV0KCkgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm9wZW4nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNJbmxpbmVPcGVuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd24uaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBpc09wZW4gY2hhbmdlXG4gICAqL1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgc2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIGhpZGRlblxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIGhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBfaXNJbmxpbmVPcGVuID0gZmFsc2U7XG4gIF9zaG93SW5saW5lOiBib29sZWFuO1xuICBfaW5saW5lZE1lbnU6IEVtYmVkZGVkVmlld1JlZjxCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZT47XG5cbiAgX2lzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIF9kcm9wZG93bjogQ29tcG9uZW50TG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+O1xuICBfZHJvcHVwOiBib29sZWFuO1xuICBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgX2lzSW5pdGVkID0gZmFsc2U7XG4gIF9pc0Ryb3B1cERlZmF1bHQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgIHByaXZhdGUgX2NvbmZpZzogQnNEcm9wZG93bkNvbmZpZyxcbiAgICBwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIC8vIGNyZWF0ZSBkcm9wZG93biBjb21wb25lbnQgbG9hZGVyXG4gICAgdGhpcy5fZHJvcGRvd24gPSB0aGlzLl9jaXNcbiAgICAgIC5jcmVhdGVMb2FkZXI8QnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyXG4gICAgICApXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IEJzRHJvcGRvd25TdGF0ZSwgdXNlVmFsdWU6IHRoaXMuX3N0YXRlIH0pO1xuXG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fZHJvcGRvd24ub25TaG93bjtcbiAgICB0aGlzLnNob3duID0gdGhpcy5fZHJvcGRvd24uc2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX2Ryb3Bkb3duLm9uSGlkZGVuO1xuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5fZHJvcGRvd24uaGlkZGVuO1xuICAgIHRoaXMuaXNPcGVuQ2hhbmdlID0gdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgZHJvcGRvd24gc3RhdGUgZnJvbSBjb25maWdcbiAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgPSB0aGlzLl9jb25maWcuYXV0b0Nsb3NlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gZml4OiBzZWVtcyB0aGVyZSBhcmUgYW4gaXNzdWUgd2l0aCBgcm91dGVyTGlua0FjdGl2ZWBcbiAgICAvLyB3aGljaCByZXN1bHQgaW4gZHVwbGljYXRlZCBjYWxsIG5nT25Jbml0IHdpdGhvdXQgY2FsbCB0byBuZ09uRGVzdHJveVxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcbiAgICBpZiAodGhpcy5faXNJbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNJbml0ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2hvd0lubGluZSA9ICF0aGlzLmNvbnRhaW5lcjtcblxuICAgIHRoaXMuX2Ryb3B1cCA9IHRoaXMuZHJvcHVwO1xuXG4gICAgLy8gYXR0YWNoIERPTSBsaXN0ZW5lcnNcbiAgICB0aGlzLl9kcm9wZG93bi5saXN0ZW4oe1xuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKSxcbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IG9uIHRvZ2dsZSBlbGVtZW50IGNsaWNrXG4gICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2tcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gdGhpcy50b2dnbGUodmFsdWUpKTtcblxuICAgIC8vIGhpZGUgZHJvcGRvd24gaWYgc2V0IGRpc2FibGVkIHdoaWxlIG9wZW5lZFxuICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhdHRhY2ggZHJvcGRvd24gbWVudSBpbnNpZGUgb2YgZHJvcGRvd25cbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51LnRoZW4oKGRyb3Bkb3duTWVudTogQnNDb21wb25lbnRSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+KSA9PiB7XG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51ID0gZHJvcGRvd25NZW51LnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KGRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51Jyk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkcm9wZG93bkNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnKSAmJlxuICAgICAgICAgIGxlZnQgPD0gZHJvcGRvd25Db250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93bkNvbnRhaW5lciwgJ3JpZ2h0JywgbGVmdCArICdweCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93bkNvbnRhaW5lciwgJ3JpZ2h0JywgJzAnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG1hdGVyaWFsIGFuZCBkcm9wdXAgZHJvcGRvd24gYW5pbWF0aW9uXG5cbiAgICBjb25zdCBidXR0b24gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51Jyk7XG5cbiAgICBpZiAoXG4gICAgICAhY29udGFpbmVyLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tZ3JvdXAnKSAmJlxuICAgICAgIWNvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSAmJlxuICAgICAgIXRoaXMuX2lzRHJvcHVwRGVmYXVsdFxuICAgICkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHJvcHVwICYmICF0aGlzLl9pc0Ryb3B1cERlZmF1bHQpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Ryb3B1cC1tYXRlcmlhbCcpO1xuICAgIH1cbiAgICBpZiAoYnV0dG9uLnRhZ05hbWUgIT09ICdCVVRUT04nKSB7XG4gICAgICBpZiAoYnV0dG9uLnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYS12YXJpb3VzLWRyb3Bkb3duJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmFyaW91cy1kcm9wZG93bicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNtJykpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NtYWxsLWRyb3Bkb3duJyk7XG4gICAgICB9XG4gICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnRuLW1kJykpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1kcm9wZG93bicpO1xuICAgICAgfVxuICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1sZycpKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsYXJnZS1kcm9wZG93bicpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlSW5Ecm9wZG93bicpO1xuXG4gICAgICBpZiAodGhpcy5keW5hbWljUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgYm91bmRpbmcgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IG91dDogeyB0b3A6IGJvb2xlYW47IGJvdHRvbTogYm9vbGVhbiB9ID0ge1xuICAgICAgICAgIHRvcDogYm91bmRpbmcudG9wIDwgMCxcbiAgICAgICAgICBib3R0b206IGJvdW5kaW5nLmJvdHRvbSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuZHJvcHVwICYmIG91dC50b3ApIHtcbiAgICAgICAgICB0aGlzLmRyb3B1cCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmRyb3B1cCAmJiBvdXQuYm90dG9tKSB7XG4gICAgICAgICAgdGhpcy5kcm9wdXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMCk7XG5cbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gdHJ1ZTtcbiAgICAgIGlmIChcbiAgICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bicpIHx8XG4gICAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcHVwLW1hdGVyaWFsJylcbiAgICAgICkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uU2hvd24uZW1pdCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnNob3duLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0sIDU2MCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uU2hvd24uZW1pdCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnNob3duLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51LnRoZW4oZHJvcGRvd25NZW51ID0+IHtcbiAgICAgIC8vIGNoZWNrIGRpcmVjdGlvbiBpbiB3aGljaCBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkXG4gICAgICBjb25zdCBfZHJvcHVwID0gdGhpcy5kcm9wdXAgPT09IHRydWUgfHwgdGhpcy5kcm9wdXBEZWZhdWx0ID09PSB0cnVlO1xuXG4gICAgICB0aGlzLl9zdGF0ZS5kaXJlY3Rpb24gPSBfZHJvcHVwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgIGNvbnN0IF9wbGFjZW1lbnQgPSB0aGlzLnBsYWNlbWVudCB8fCAoX2Ryb3B1cCA/ICd0b3AgbGVmdCcgOiAnYm90dG9tIGxlZnQnKTtcblxuICAgICAgLy8gc2hvdyBkcm9wZG93blxuICAgICAgdGhpcy5fZHJvcGRvd25cbiAgICAgICAgLmF0dGFjaChCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAgIC5wb3NpdGlvbih7IGF0dGFjaG1lbnQ6IF9wbGFjZW1lbnQgfSlcbiAgICAgICAgLnNob3coe1xuICAgICAgICAgIGNvbnRlbnQ6IGRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZixcbiAgICAgICAgICBwbGFjZW1lbnQ6IF9wbGFjZW1lbnQsXG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kcm9wdXAgIT09IHRoaXMuX2Ryb3B1cCkge1xuICAgICAgdGhpcy5kcm9wdXAgPSB0aGlzLl9kcm9wdXA7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51Jyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZUluRHJvcGRvd24nKTtcbiAgICBpZiAoXG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgfHxcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcHVwLW1hdGVyaWFsJylcbiAgICApIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgICAgIHRoaXMuX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0cnVlKTtcbiAgICAgICAgICB0aGlzLmhpZGRlbi5lbWl0KHRydWUpO1xuICAgICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgICAgfSwgNTYwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRydWUpO1xuICAgICAgICAgIHRoaXMuaGlkZGVuLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kcm9wZG93bi5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHRvZ2dsZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgZGVzdHJveSBkcm9wZG93blxuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2Ryb3Bkb3duLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19