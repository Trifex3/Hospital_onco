(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('positioning'), require('rxjs'), require('rxjs/operators'), require('calendar-utils'), require('angular-draggable-droppable'), require('@angular/animations'), require('angular-resizable-element')) :
    typeof define === 'function' && define.amd ? define('angular-calendar', ['exports', '@angular/core', '@angular/common', 'positioning', 'rxjs', 'rxjs/operators', 'calendar-utils', 'angular-draggable-droppable', '@angular/animations', 'angular-resizable-element'], factory) :
    (global = global || self, factory(global['angular-calendar'] = {}, global.ng.core, global.ng.common, global.positioning, global.rxjs, global.rxjs.operators, global.calendarUtils, global['angular-draggable-droppable'], global.ng.animations, global['angular-resizable-element']));
}(this, (function (exports, core, common, positioning, rxjs, operators, calendarUtils, angularDraggableDroppable, animations, angularResizableElement) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CalendarEventActionsComponent = /** @class */ (function () {
        function CalendarEventActionsComponent() {
            this.trackByActionId = function (index, action) {
                return action.id ? action.id : action;
            };
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarEventActionsComponent.prototype, "event", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarEventActionsComponent.prototype, "customTemplate", void 0);
        CalendarEventActionsComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-event-actions',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
            })
        ], CalendarEventActionsComponent);
        return CalendarEventActionsComponent;
    }());

    var CalendarEventTitleComponent = /** @class */ (function () {
        function CalendarEventTitleComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarEventTitleComponent.prototype, "event", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarEventTitleComponent.prototype, "view", void 0);
        CalendarEventTitleComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-event-title',
                template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
            })
        ], CalendarEventTitleComponent);
        return CalendarEventTitleComponent;
    }());

    var CalendarTooltipWindowComponent = /** @class */ (function () {
        function CalendarTooltipWindowComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarTooltipWindowComponent.prototype, "contents", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarTooltipWindowComponent.prototype, "placement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarTooltipWindowComponent.prototype, "event", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
        CalendarTooltipWindowComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-tooltip-window',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
            })
        ], CalendarTooltipWindowComponent);
        return CalendarTooltipWindowComponent;
    }());
    var CalendarTooltipDirective = /** @class */ (function () {
        function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
        ) {
            this.elementRef = elementRef;
            this.injector = injector;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.document = document;
            this.placement = 'auto'; // tslint:disable-line no-input-rename
            this.delay = null; // tslint:disable-line no-input-rename
            this.cancelTooltipDelay$ = new rxjs.Subject();
            this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
        }
        CalendarTooltipDirective.prototype.ngOnChanges = function (changes) {
            if (this.tooltipRef &&
                (changes.contents || changes.customTemplate || changes.event)) {
                this.tooltipRef.instance.contents = this.contents;
                this.tooltipRef.instance.customTemplate = this.customTemplate;
                this.tooltipRef.instance.event = this.event;
                this.tooltipRef.changeDetectorRef.markForCheck();
                if (!this.contents) {
                    this.hide();
                }
            }
        };
        CalendarTooltipDirective.prototype.ngOnDestroy = function () {
            this.hide();
        };
        CalendarTooltipDirective.prototype.onMouseOver = function () {
            var _this = this;
            var delay$ = this.delay === null ? rxjs.of('now') : rxjs.timer(this.delay);
            delay$.pipe(operators.takeUntil(this.cancelTooltipDelay$)).subscribe(function () {
                _this.show();
            });
        };
        CalendarTooltipDirective.prototype.onMouseOut = function () {
            this.hide();
        };
        CalendarTooltipDirective.prototype.show = function () {
            var _this = this;
            if (!this.tooltipRef && this.contents) {
                this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
                this.tooltipRef.instance.contents = this.contents;
                this.tooltipRef.instance.customTemplate = this.customTemplate;
                this.tooltipRef.instance.event = this.event;
                if (this.appendToBody) {
                    this.document.body.appendChild(this.tooltipRef.location.nativeElement);
                }
                requestAnimationFrame(function () {
                    _this.positionTooltip();
                });
            }
        };
        CalendarTooltipDirective.prototype.hide = function () {
            if (this.tooltipRef) {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
                this.tooltipRef = null;
            }
            this.cancelTooltipDelay$.next();
        };
        CalendarTooltipDirective.prototype.positionTooltip = function (previousPositions) {
            if (previousPositions === void 0) { previousPositions = []; }
            if (this.tooltipRef) {
                this.tooltipRef.changeDetectorRef.detectChanges();
                this.tooltipRef.instance.placement = positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
                // keep re-positioning the tooltip until the arrow position doesn't make a difference
                if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                    this.positionTooltip(__spread(previousPositions, [
                        this.tooltipRef.instance.placement,
                    ]));
                }
            }
        };
        CalendarTooltipDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Injector },
            { type: core.Renderer2 },
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        __decorate([
            core.Input('mwlCalendarTooltip'),
            __metadata("design:type", String)
        ], CalendarTooltipDirective.prototype, "contents", void 0);
        __decorate([
            core.Input('tooltipPlacement'),
            __metadata("design:type", Object)
        ], CalendarTooltipDirective.prototype, "placement", void 0);
        __decorate([
            core.Input('tooltipTemplate'),
            __metadata("design:type", core.TemplateRef)
        ], CalendarTooltipDirective.prototype, "customTemplate", void 0);
        __decorate([
            core.Input('tooltipEvent'),
            __metadata("design:type", Object)
        ], CalendarTooltipDirective.prototype, "event", void 0);
        __decorate([
            core.Input('tooltipAppendToBody'),
            __metadata("design:type", Boolean)
        ], CalendarTooltipDirective.prototype, "appendToBody", void 0);
        __decorate([
            core.Input('tooltipDelay'),
            __metadata("design:type", Number)
        ], CalendarTooltipDirective.prototype, "delay", void 0);
        __decorate([
            core.HostListener('mouseenter'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarTooltipDirective.prototype, "onMouseOver", null);
        __decorate([
            core.HostListener('mouseleave'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarTooltipDirective.prototype, "onMouseOut", null);
        CalendarTooltipDirective = __decorate([
            core.Directive({
                selector: '[mwlCalendarTooltip]',
            }),
            __param(5, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [core.ElementRef,
                core.Injector,
                core.Renderer2,
                core.ComponentFactoryResolver,
                core.ViewContainerRef, Object])
        ], CalendarTooltipDirective);
        return CalendarTooltipDirective;
    }());

    var DateAdapter = /** @class */ (function () {
        function DateAdapter() {
        }
        return DateAdapter;
    }());


    (function (CalendarView) {
        CalendarView["Month"] = "month";
        CalendarView["Week"] = "week";
        CalendarView["Day"] = "day";
    })(exports.CalendarView || (exports.CalendarView = {}));

    var validateEvents = function (events) {
        var warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.warn.apply(console, __spread(['angular-calendar'], args));
        };
        return calendarUtils.validateEvents(events, warn);
    };
    function isInside(outer, inner) {
        return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
            Math.floor(inner.left) <= Math.ceil(outer.right) &&
            Math.floor(outer.left) <= Math.ceil(inner.right) &&
            Math.floor(inner.right) <= Math.ceil(outer.right) &&
            Math.floor(outer.top) <= Math.ceil(inner.top) &&
            Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
            Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
            Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
    }
    function roundToNearest(amount, precision) {
        return Math.round(amount / precision) * precision;
    }
    var trackByEventId = function (index, event) {
        return event.id ? event.id : event;
    };
    var trackByWeekDayHeaderDate = function (index, day) {
        return day.date.toISOString();
    };
    var trackByHourSegment = function (index, segment) { return segment.date.toISOString(); };
    var trackByHour = function (index, hour) {
        return hour.segments[0].date.toISOString();
    };
    var trackByWeekAllDayEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
    var trackByWeekTimeEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
    var MINUTES_IN_HOUR = 60;
    function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
        return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    }
    function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
        var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
        var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
        return draggedInPixelsSnapSize * pixelAmountInMinutes;
    }
    function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
        return (getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight);
    }
    function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
        if (event.end) {
            return event.end;
        }
        else {
            return dateAdapter.addMinutes(event.start, minimumMinutes);
        }
    }
    function addDaysWithExclusions(dateAdapter, date, days, excluded) {
        var daysCounter = 0;
        var daysToAdd = 0;
        var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
        var result = date;
        while (daysToAdd <= Math.abs(days)) {
            result = changeDays(date, daysCounter);
            var day = dateAdapter.getDay(result);
            if (excluded.indexOf(day) === -1) {
                daysToAdd++;
            }
            daysCounter++;
        }
        return result;
    }
    function isDraggedWithinPeriod(newStart, newEnd, period) {
        var end = newEnd || newStart;
        return ((period.start <= newStart && newStart <= period.end) ||
            (period.start <= end && end <= period.end));
    }
    function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
        return (dropEvent.dropData &&
            dropEvent.dropData.event &&
            (dropEvent.dropData.calendarId !== calendarId ||
                (dropEvent.dropData.event.allDay && !allDay) ||
                (!dropEvent.dropData.event.allDay && allDay)));
    }
    function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
        if (excluded === void 0) { excluded = []; }
        var viewStart = daysInWeek
            ? dateAdapter.startOfDay(viewDate)
            : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        var endOfWeek = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 &&
            viewStart < endOfWeek) {
            viewStart = dateAdapter.addDays(viewStart, 1);
        }
        if (daysInWeek) {
            var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
            return { viewStart: viewStart, viewEnd: viewEnd };
        }
        else {
            var viewEnd = endOfWeek;
            while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 &&
                viewEnd > viewStart) {
                viewEnd = dateAdapter.subDays(viewEnd, 1);
            }
            return { viewStart: viewStart, viewEnd: viewEnd };
        }
    }
    function isWithinThreshold(_a) {
        var x = _a.x, y = _a.y;
        var DRAG_THRESHOLD = 1;
        return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
    }

    /**
     * Change the view date to the previous view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarPreviousView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Previous
     * </button>
     * ```
     */
    var CalendarPreviousViewDirective = /** @class */ (function () {
        function CalendarPreviousViewDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Days to skip when going back by 1 day
             */
            this.excludeDays = [];
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new core.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarPreviousViewDirective.prototype.onClick = function () {
            var subFn = {
                day: this.dateAdapter.subDays,
                week: this.dateAdapter.subWeeks,
                month: this.dateAdapter.subMonths,
            }[this.view];
            if (this.view === exports.CalendarView.Day) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
            }
            else if (this.view === exports.CalendarView.Week && this.daysInWeek) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
            }
            else {
                this.viewDateChange.emit(subFn(this.viewDate, 1));
            }
        };
        CalendarPreviousViewDirective.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarPreviousViewDirective.prototype, "view", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
        __decorate([
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarPreviousViewDirective.prototype, "onClick", null);
        CalendarPreviousViewDirective = __decorate([
            core.Directive({
                selector: '[mwlCalendarPreviousView]',
            }),
            __metadata("design:paramtypes", [DateAdapter])
        ], CalendarPreviousViewDirective);
        return CalendarPreviousViewDirective;
    }());

    /**
     * Change the view date to the next view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarNextView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Next
     * </button>
     * ```
     */
    var CalendarNextViewDirective = /** @class */ (function () {
        function CalendarNextViewDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Days to skip when going forward by 1 day
             */
            this.excludeDays = [];
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new core.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarNextViewDirective.prototype.onClick = function () {
            var addFn = {
                day: this.dateAdapter.addDays,
                week: this.dateAdapter.addWeeks,
                month: this.dateAdapter.addMonths,
            }[this.view];
            if (this.view === exports.CalendarView.Day) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
            }
            else if (this.view === exports.CalendarView.Week && this.daysInWeek) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
            }
            else {
                this.viewDateChange.emit(addFn(this.viewDate, 1));
            }
        };
        CalendarNextViewDirective.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarNextViewDirective.prototype, "view", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarNextViewDirective.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarNextViewDirective.prototype, "excludeDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
        __decorate([
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarNextViewDirective.prototype, "onClick", null);
        CalendarNextViewDirective = __decorate([
            core.Directive({
                selector: '[mwlCalendarNextView]',
            }),
            __metadata("design:paramtypes", [DateAdapter])
        ], CalendarNextViewDirective);
        return CalendarNextViewDirective;
    }());

    /**
     * Change the view date to the current day. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarToday
     *  [(viewDate)]="viewDate">
     *  Today
     * </button>
     * ```
     */
    var CalendarTodayDirective = /** @class */ (function () {
        function CalendarTodayDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new core.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarTodayDirective.prototype.onClick = function () {
            this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
        };
        CalendarTodayDirective.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarTodayDirective.prototype, "viewDate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarTodayDirective.prototype, "viewDateChange", void 0);
        __decorate([
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarTodayDirective.prototype, "onClick", null);
        CalendarTodayDirective = __decorate([
            core.Directive({
                selector: '[mwlCalendarToday]',
            }),
            __metadata("design:paramtypes", [DateAdapter])
        ], CalendarTodayDirective);
        return CalendarTodayDirective;
    }());

    /**
     * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
     */
    var CalendarAngularDateFormatter = /** @class */ (function () {
        function CalendarAngularDateFormatter(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarAngularDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'EEEE', locale);
        };
        /**
         * The month view cell day number
         */
        CalendarAngularDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'd', locale);
        };
        /**
         * The month view title
         */
        CalendarAngularDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'LLLL y', locale);
        };
        /**
         * The week view header week day labels
         */
        CalendarAngularDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'EEEE', locale);
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'MMM d', locale);
        };
        /**
         * The week view title
         */
        CalendarAngularDateFormatter.prototype.weekViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) {
                return common.formatDate(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
            };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarAngularDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'h a', locale);
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarAngularDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'h a', locale);
        };
        /**
         * The day view title
         */
        CalendarAngularDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'EEEE, MMMM d, y', locale);
        };
        CalendarAngularDateFormatter.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        CalendarAngularDateFormatter = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [DateAdapter])
        ], CalendarAngularDateFormatter);
        return CalendarAngularDateFormatter;
    }());

    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * @Injectable()
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */
    var CalendarDateFormatter = /** @class */ (function (_super) {
        __extends(CalendarDateFormatter, _super);
        function CalendarDateFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CalendarDateFormatter = __decorate([
            core.Injectable()
        ], CalendarDateFormatter);
        return CalendarDateFormatter;
    }(CalendarAngularDateFormatter));

    /**
     * This pipe is primarily for rendering the current view title. Example usage:
     * ```typescript
     * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
     * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
     * ```
     */
    var CalendarDatePipe = /** @class */ (function () {
        function CalendarDatePipe(dateFormatter, locale) {
            this.dateFormatter = dateFormatter;
            this.locale = locale;
        }
        CalendarDatePipe.prototype.transform = function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
            if (locale === void 0) { locale = this.locale; }
            if (weekStartsOn === void 0) { weekStartsOn = 0; }
            if (excludeDays === void 0) { excludeDays = []; }
            if (typeof this.dateFormatter[method] === 'undefined') {
                var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
                throw new Error(method + " is not a valid date formatter. Can only be one of " + allowedMethods.join(', '));
            }
            return this.dateFormatter[method]({
                date: date,
                locale: locale,
                weekStartsOn: weekStartsOn,
                excludeDays: excludeDays,
                daysInWeek: daysInWeek,
            });
        };
        CalendarDatePipe.ctorParameters = function () { return [
            { type: CalendarDateFormatter },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        CalendarDatePipe = __decorate([
            core.Pipe({
                name: 'calendarDate',
            }),
            __param(1, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [CalendarDateFormatter, String])
        ], CalendarDatePipe);
        return CalendarDatePipe;
    }());

    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { Injectable } from '@angular/core';
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * @Injectable()
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */
    var CalendarEventTitleFormatter = /** @class */ (function () {
        function CalendarEventTitleFormatter() {
        }
        /**
         * The month view event title.
         */
        CalendarEventTitleFormatter.prototype.month = function (event, title) {
            return event.title;
        };
        /**
         * The month view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.monthTooltip = function (event, title) {
            return event.title;
        };
        /**
         * The week view event title.
         */
        CalendarEventTitleFormatter.prototype.week = function (event, title) {
            return event.title;
        };
        /**
         * The week view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.weekTooltip = function (event, title) {
            return event.title;
        };
        /**
         * The day view event title.
         */
        CalendarEventTitleFormatter.prototype.day = function (event, title) {
            return event.title;
        };
        /**
         * The day view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.dayTooltip = function (event, title) {
            return event.title;
        };
        return CalendarEventTitleFormatter;
    }());

    var CalendarEventTitlePipe = /** @class */ (function () {
        function CalendarEventTitlePipe(calendarEventTitle) {
            this.calendarEventTitle = calendarEventTitle;
        }
        CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
            return this.calendarEventTitle[titleType](event, title);
        };
        CalendarEventTitlePipe.ctorParameters = function () { return [
            { type: CalendarEventTitleFormatter }
        ]; };
        CalendarEventTitlePipe = __decorate([
            core.Pipe({
                name: 'calendarEventTitle',
            }),
            __metadata("design:paramtypes", [CalendarEventTitleFormatter])
        ], CalendarEventTitlePipe);
        return CalendarEventTitlePipe;
    }());

    var ClickDirective = /** @class */ (function () {
        function ClickDirective(renderer, elm, document) {
            this.renderer = renderer;
            this.elm = elm;
            this.document = document;
            this.clickListenerDisabled = false;
            this.click = new core.EventEmitter(); // tslint:disable-line
            this.destroy$ = new rxjs.Subject();
        }
        ClickDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.clickListenerDisabled) {
                this.listen()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (event) {
                    event.stopPropagation();
                    _this.click.emit(event);
                });
            }
        };
        ClickDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
        };
        ClickDirective.prototype.listen = function () {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                return _this.renderer.listen(_this.elm.nativeElement, 'click', function (event) {
                    observer.next(event);
                });
            });
        };
        ClickDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ClickDirective.prototype, "clickListenerDisabled", void 0);
        __decorate([
            core.Output('mwlClick'),
            __metadata("design:type", Object)
        ], ClickDirective.prototype, "click", void 0);
        ClickDirective = __decorate([
            core.Directive({
                selector: '[mwlClick]',
            }),
            __param(2, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [core.Renderer2,
                core.ElementRef, Object])
        ], ClickDirective);
        return ClickDirective;
    }());

    var KeydownEnterDirective = /** @class */ (function () {
        function KeydownEnterDirective(host, ngZone, renderer) {
            this.host = host;
            this.ngZone = ngZone;
            this.renderer = renderer;
            this.keydown = new core.EventEmitter(); // tslint:disable-line
            this.keydownListener = null;
        }
        KeydownEnterDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                _this.keydownListener = _this.renderer.listen(_this.host.nativeElement, 'keydown', function (event) {
                    if (event.keyCode === 13 ||
                        event.which === 13 ||
                        event.key === 'Enter') {
                        event.preventDefault();
                        event.stopPropagation();
                        _this.ngZone.run(function () {
                            _this.keydown.emit(event);
                        });
                    }
                });
            });
        };
        KeydownEnterDirective.prototype.ngOnDestroy = function () {
            if (this.keydownListener !== null) {
                this.keydownListener();
                this.keydownListener = null;
            }
        };
        KeydownEnterDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Output('mwlKeydownEnter'),
            __metadata("design:type", Object)
        ], KeydownEnterDirective.prototype, "keydown", void 0);
        KeydownEnterDirective = __decorate([
            core.Directive({ selector: '[mwlKeydownEnter]' }),
            __metadata("design:paramtypes", [core.ElementRef,
                core.NgZone,
                core.Renderer2])
        ], KeydownEnterDirective);
        return KeydownEnterDirective;
    }());

    var CalendarUtils = /** @class */ (function () {
        function CalendarUtils(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        CalendarUtils.prototype.getMonthView = function (args) {
            return calendarUtils.getMonthView(this.dateAdapter, args);
        };
        CalendarUtils.prototype.getWeekViewHeader = function (args) {
            return calendarUtils.getWeekViewHeader(this.dateAdapter, args);
        };
        CalendarUtils.prototype.getWeekView = function (args) {
            return calendarUtils.getWeekView(this.dateAdapter, args);
        };
        CalendarUtils.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        CalendarUtils = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [DateAdapter])
        ], CalendarUtils);
        return CalendarUtils;
    }());

    /**
     * This class is responsible for adding accessibility to the calendar.
     * You may override any of its methods via angulars DI to suit your requirements.
     * For example:
     *
     * ```typescript
     * import { A11yParams, CalendarA11y } from 'angular-calendar';
     * import { formatDate, I18nPluralPipe } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * // adding your own a11y params
     * export interface CustomA11yParams extends A11yParams {
     *   isDrSuess?: boolean;
     * }
     *
     * @Injectable()
     * export class CustomCalendarA11y extends CalendarA11y {
     *   constructor(protected i18nPlural: I18nPluralPipe) {
     *     super(i18nPlural);
     *   }
     *
     *   // overriding a function
     *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
     *     if (isDrSuess) {
     *       return `
     *         ${formatDate(date, 'EEEE MMMM d', locale)}
     *          Today you are you! That is truer than true! There is no one alive
     *          who is you-er than you!
     *       `;
     *     }
     *   }
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *  provide: CalendarA11y,
     *  useClass: CustomCalendarA11y
     * }]
     * ```
     */
    var CalendarA11y = /** @class */ (function () {
        function CalendarA11y(i18nPlural) {
            this.i18nPlural = i18nPlural;
        }
        /**
         * Aria label for the badges/date of a cell
         * @example: `Saturday October 19 1 event click to expand`
         */
        CalendarA11y.prototype.monthCell = function (_a) {
            var day = _a.day, locale = _a.locale;
            if (day.badgeTotal > 0) {
                return "\n        " + common.formatDate(day.date, 'EEEE MMMM d', locale) + ",\n        " + this.i18nPlural.transform(day.badgeTotal, {
                    '=0': 'No events',
                    '=1': 'One event',
                    other: '# events',
                }) + ",\n         click to expand\n      ";
            }
            else {
                return "" + common.formatDate(day.date, 'EEEE MMMM d', locale);
            }
        };
        /**
         * Aria label for the open day events start landmark
         * @example: `Saturday October 19 expanded view`
         */
        CalendarA11y.prototype.openDayEventsLandmark = function (_a) {
            var date = _a.date, locale = _a.locale;
            return "\n      Beginning of expanded view for " + common.formatDate(date, 'EEEE MMMM dd', locale) + "\n    ";
        };
        /**
         * Aria label for alert that a day in the month view was expanded
         * @example: `Saturday October 19 expanded`
         */
        CalendarA11y.prototype.openDayEventsAlert = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'EEEE MMMM dd', locale) + " expanded";
        };
        /**
         * Descriptive aria label for an event
         * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
         */
        CalendarA11y.prototype.eventDescription = function (_a) {
            var event = _a.event, locale = _a.locale;
            if (event.allDay === true) {
                return this.allDayEventDescription({ event: event, locale: locale });
            }
            var aria = "\n      " + common.formatDate(event.start, 'EEEE MMMM dd', locale) + ",\n      " + event.title + ", from " + common.formatDate(event.start, 'hh:mm a', locale) + "\n    ";
            if (event.end) {
                return aria + (" to " + common.formatDate(event.end, 'hh:mm a', locale));
            }
            return aria;
        };
        /**
         * Descriptive aria label for an all day event
         * @example:
         * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
         */
        CalendarA11y.prototype.allDayEventDescription = function (_a) {
            var event = _a.event, locale = _a.locale;
            var aria = "\n      " + event.title + ", event spans multiple days:\n      start time " + common.formatDate(event.start, 'MMMM dd hh:mm a', locale) + "\n    ";
            if (event.end) {
                return (aria + (", stop time " + common.formatDate(event.end, 'MMMM d hh:mm a', locale)));
            }
            return aria + ", no stop time";
        };
        /**
         * Aria label for the calendar event actions icons
         * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
         */
        CalendarA11y.prototype.actionButtonLabel = function (_a) {
            var action = _a.action;
            return action.a11yLabel;
        };
        /**
         * @returns {number} Tab index to be given to month cells
         */
        CalendarA11y.prototype.monthCellTabIndex = function () {
            return 0;
        };
        /**
         * @returns true if the events inside the month cell should be aria-hidden
         */
        CalendarA11y.prototype.hideMonthCellEvents = function () {
            return true;
        };
        /**
         * @returns true if event titles should be aria-hidden (global)
         */
        CalendarA11y.prototype.hideEventTitle = function () {
            return true;
        };
        /**
         * @returns true if hour segments in the week view should be aria-hidden
         */
        CalendarA11y.prototype.hideWeekHourSegment = function () {
            return true;
        };
        /**
         * @returns true if hour segments in the day view should be aria-hidden
         */
        CalendarA11y.prototype.hideDayHourSegment = function () {
            return true;
        };
        CalendarA11y.ctorParameters = function () { return [
            { type: common.I18nPluralPipe }
        ]; };
        CalendarA11y = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [common.I18nPluralPipe])
        ], CalendarA11y);
        return CalendarA11y;
    }());

    /**
     * This pipe is primarily for rendering aria labels. Example usage:
     * ```typescript
     * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
     * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
     * ```
     */
    var CalendarA11yPipe = /** @class */ (function () {
        function CalendarA11yPipe(calendarA11y, locale) {
            this.calendarA11y = calendarA11y;
            this.locale = locale;
        }
        CalendarA11yPipe.prototype.transform = function (a11yParams, method) {
            a11yParams.locale = a11yParams.locale || this.locale;
            if (typeof this.calendarA11y[method] === 'undefined') {
                var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
                throw new Error(method + " is not a valid a11y method. Can only be one of " + allowedMethods.join(', '));
            }
            return this.calendarA11y[method](a11yParams);
        };
        CalendarA11yPipe.ctorParameters = function () { return [
            { type: CalendarA11y },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        CalendarA11yPipe = __decorate([
            core.Pipe({
                name: 'calendarA11y',
            }),
            __param(1, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [CalendarA11y, String])
        ], CalendarA11yPipe);
        return CalendarA11yPipe;
    }());

    var MOMENT = new core.InjectionToken('Moment');
    /**
     * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
     *
     * ```typescript
     * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
     * import moment from 'moment';
     *
     * // in your component
     * provide: [{
     *   provide: MOMENT, useValue: moment
     * }, {
     *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
     * }]
     *
     * ```
     */
    var CalendarMomentDateFormatter = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarMomentDateFormatter(moment, dateAdapter) {
            this.moment = moment;
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd');
        };
        /**
         * The month view cell day number
         */
        CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('D');
        };
        /**
         * The month view title
         */
        CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('MMMM YYYY');
        };
        /**
         * The week view header week day labels
         */
        CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd');
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('MMM D');
        };
        /**
         * The week view title
         */
        CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
            var _this = this;
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) {
                return _this.moment(dateToFormat)
                    .locale(locale)
                    .format('MMM D' + (showYear ? ', YYYY' : ''));
            };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarMomentDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('ha');
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('ha');
        };
        /**
         * The day view title
         */
        CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
        };
        CalendarMomentDateFormatter.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MOMENT,] }] },
            { type: DateAdapter }
        ]; };
        CalendarMomentDateFormatter = __decorate([
            core.Injectable(),
            __param(0, core.Inject(MOMENT)),
            __metadata("design:paramtypes", [Object, DateAdapter])
        ], CalendarMomentDateFormatter);
        return CalendarMomentDateFormatter;
    }());

    /**
     * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
     *
     * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
     */
    var CalendarNativeDateFormatter = /** @class */ (function () {
        function CalendarNativeDateFormatter(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
        };
        /**
         * The month view cell day number
         */
        CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
        };
        /**
         * The month view title
         */
        CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                year: 'numeric',
                month: 'long',
            }).format(date);
        };
        /**
         * The week view header week day labels
         */
        CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
            }).format(date);
        };
        /**
         * The week view title
         */
        CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) {
                return new Intl.DateTimeFormat(locale, {
                    day: 'numeric',
                    month: 'short',
                    year: showYear ? 'numeric' : undefined,
                }).format(dateToFormat);
            };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarNativeDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
        };
        /**
         * The day view title
         */
        CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                weekday: 'long',
            }).format(date);
        };
        CalendarNativeDateFormatter.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        CalendarNativeDateFormatter = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [DateAdapter])
        ], CalendarNativeDateFormatter);
        return CalendarNativeDateFormatter;
    }());


    (function (CalendarEventTimesChangedEventType) {
        CalendarEventTimesChangedEventType["Drag"] = "drag";
        CalendarEventTimesChangedEventType["Drop"] = "drop";
        CalendarEventTimesChangedEventType["Resize"] = "resize";
    })(exports.CalendarEventTimesChangedEventType || (exports.CalendarEventTimesChangedEventType = {}));

    /**
     * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
     *
     * ```typescript
     * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalendarCommonModule.forRoot(),
     *     CalendarMonthModule
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */
    var CalendarCommonModule = /** @class */ (function () {
        function CalendarCommonModule() {
        }
        CalendarCommonModule_1 = CalendarCommonModule;
        CalendarCommonModule.forRoot = function (dateAdapter, config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: CalendarCommonModule_1,
                providers: [
                    dateAdapter,
                    config.eventTitleFormatter || CalendarEventTitleFormatter,
                    config.dateFormatter || CalendarDateFormatter,
                    config.utils || CalendarUtils,
                    config.a11y || CalendarA11y,
                ],
            };
        };
        var CalendarCommonModule_1;
        CalendarCommonModule = CalendarCommonModule_1 = __decorate([
            core.NgModule({
                declarations: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    CalendarA11yPipe,
                    ClickDirective,
                    KeydownEnterDirective,
                ],
                imports: [common.CommonModule],
                exports: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    CalendarA11yPipe,
                    ClickDirective,
                    KeydownEnterDirective,
                ],
                providers: [common.I18nPluralPipe],
                entryComponents: [CalendarTooltipWindowComponent],
            })
        ], CalendarCommonModule);
        return CalendarCommonModule;
    }());

    /**
     * Shows all events on a given month. Example usage:
     *
     * ```typescript
     * <mwl-calendar-month-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-month-view>
     * ```
     */
    var CalendarMonthViewComponent = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
            var _this = this;
            this.cdr = cdr;
            this.utils = utils;
            this.dateAdapter = dateAdapter;
            /**
             * An array of events to display on view.
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
             */
            this.excludeDays = [];
            /**
             * Whether the events list for the day of the `viewDate` option is visible or not
             */
            this.activeDayIsOpen = false;
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * An output that will be called before the view is rendered for the current month.
             * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
             */
            this.beforeViewRender = new core.EventEmitter();
            /**
             * Called when the day cell is clicked
             */
            this.dayClicked = new core.EventEmitter();
            /**
             * Called when the event title is clicked
             */
            this.eventClicked = new core.EventEmitter();
            /**
             * Called when a header week day is clicked. Returns ISO day number.
             */
            this.columnHeaderClicked = new core.EventEmitter();
            /**
             * Called when an event is dragged and dropped
             */
            this.eventTimesChanged = new core.EventEmitter();
            /**
             * @hidden
             */
            this.trackByRowOffset = function (index, offset) {
                return _this.view.days
                    .slice(offset, _this.view.totalDaysVisibleInWeek)
                    .map(function (day) { return day.date.toISOString(); })
                    .join('-');
            };
            /**
             * @hidden
             */
            this.trackByDate = function (index, day) { return day.date.toISOString(); };
            this.locale = locale;
        }
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe(function () {
                    _this.refreshAll();
                    _this.cdr.markForCheck();
                });
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
            var refreshBody = changes.viewDate ||
                changes.events ||
                changes.excludeDays ||
                changes.weekendDays;
            if (refreshHeader) {
                this.refreshHeader();
            }
            if (changes.events) {
                validateEvents(this.events);
            }
            if (refreshBody) {
                this.refreshBody();
            }
            if (refreshHeader || refreshBody) {
                this.emitBeforeViewRender();
            }
            if (changes.activeDayIsOpen ||
                changes.viewDate ||
                changes.events ||
                changes.excludeDays ||
                changes.activeDay) {
                this.checkActiveDayIsOpen();
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
            this.view.days.forEach(function (day) {
                if (isHighlighted && day.events.indexOf(event) > -1) {
                    day.backgroundColor =
                        (event.color && event.color.secondary) || '#D1E8FF';
                }
                else {
                    delete day.backgroundColor;
                }
            });
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.eventDropped = function (droppedOn, event, draggedFrom) {
            if (droppedOn !== draggedFrom) {
                var year = this.dateAdapter.getYear(droppedOn.date);
                var month = this.dateAdapter.getMonth(droppedOn.date);
                var date = this.dateAdapter.getDate(droppedOn.date);
                var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
                var newEnd = void 0;
                if (event.end) {
                    var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                    newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
                }
                this.eventTimesChanged.emit({
                    event: event,
                    newStart: newStart,
                    newEnd: newEnd,
                    day: droppedOn,
                    type: exports.CalendarEventTimesChangedEventType.Drop,
                });
            }
        };
        CalendarMonthViewComponent.prototype.refreshHeader = function () {
            this.columnHeaders = this.utils.getWeekViewHeader({
                viewDate: this.viewDate,
                weekStartsOn: this.weekStartsOn,
                excluded: this.excludeDays,
                weekendDays: this.weekendDays,
            });
        };
        CalendarMonthViewComponent.prototype.refreshBody = function () {
            this.view = this.utils.getMonthView({
                events: this.events,
                viewDate: this.viewDate,
                weekStartsOn: this.weekStartsOn,
                excluded: this.excludeDays,
                weekendDays: this.weekendDays,
            });
        };
        CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
            var _this = this;
            if (this.activeDayIsOpen === true) {
                var activeDay_1 = this.activeDay || this.viewDate;
                this.openDay = this.view.days.find(function (day) {
                    return _this.dateAdapter.isSameDay(day.date, activeDay_1);
                });
                var index = this.view.days.indexOf(this.openDay);
                this.openRowIndex =
                    Math.floor(index / this.view.totalDaysVisibleInWeek) *
                        this.view.totalDaysVisibleInWeek;
            }
            else {
                this.openRowIndex = null;
                this.openDay = null;
            }
        };
        CalendarMonthViewComponent.prototype.refreshAll = function () {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
            this.checkActiveDayIsOpen();
        };
        CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
            if (this.columnHeaders && this.view) {
                this.beforeViewRender.emit({
                    header: this.columnHeaders,
                    body: this.view.days,
                    period: this.view.period,
                });
            }
        };
        CalendarMonthViewComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: CalendarUtils },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarMonthViewComponent.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarMonthViewComponent.prototype, "events", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarMonthViewComponent.prototype, "activeDay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", rxjs.Subject)
        ], CalendarMonthViewComponent.prototype, "refresh", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarMonthViewComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
        CalendarMonthViewComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-month-view',
                template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
            }),
            __param(2, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [core.ChangeDetectorRef,
                CalendarUtils, String, DateAdapter])
        ], CalendarMonthViewComponent);
        return CalendarMonthViewComponent;
    }());

    var CalendarMonthViewHeaderComponent = /** @class */ (function () {
        function CalendarMonthViewHeaderComponent() {
            this.columnHeaderClicked = new core.EventEmitter();
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);
        CalendarMonthViewHeaderComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-month-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
            })
        ], CalendarMonthViewHeaderComponent);
        return CalendarMonthViewHeaderComponent;
    }());

    var CalendarMonthCellComponent = /** @class */ (function () {
        function CalendarMonthCellComponent() {
            this.highlightDay = new core.EventEmitter();
            this.unhighlightDay = new core.EventEmitter();
            this.eventClicked = new core.EventEmitter();
            this.trackByEventId = trackByEventId;
            this.validateDrag = isWithinThreshold;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarMonthCellComponent.prototype, "day", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarMonthCellComponent.prototype, "openDay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarMonthCellComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthCellComponent.prototype, "eventClicked", void 0);
        CalendarMonthCellComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-month-cell',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                host: {
                    class: 'cal-cell cal-day-cell',
                    '[class.cal-past]': 'day.isPast',
                    '[class.cal-today]': 'day.isToday',
                    '[class.cal-future]': 'day.isFuture',
                    '[class.cal-weekend]': 'day.isWeekend',
                    '[class.cal-in-month]': 'day.inMonth',
                    '[class.cal-out-month]': '!day.inMonth',
                    '[class.cal-has-events]': 'day.events.length > 0',
                    '[class.cal-open]': 'day === openDay',
                    '[class.cal-event-highlight]': '!!day.backgroundColor',
                }
            })
        ], CalendarMonthCellComponent);
        return CalendarMonthCellComponent;
    }());

    var collapseAnimation = animations.trigger('collapse', [
        animations.state('void', animations.style({
            height: 0,
            overflow: 'hidden',
            'padding-top': 0,
            'padding-bottom': 0,
        })),
        animations.state('*', animations.style({
            height: '*',
            overflow: 'hidden',
            'padding-top': '*',
            'padding-bottom': '*',
        })),
        animations.transition('* => void', animations.animate('150ms ease-out')),
        animations.transition('void => *', animations.animate('150ms ease-in')),
    ]);
    var CalendarOpenDayEventsComponent = /** @class */ (function () {
        function CalendarOpenDayEventsComponent() {
            this.isOpen = false;
            this.eventClicked = new core.EventEmitter();
            this.trackByEventId = trackByEventId;
            this.validateDrag = isWithinThreshold;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarOpenDayEventsComponent.prototype, "events", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarOpenDayEventsComponent.prototype, "date", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);
        CalendarOpenDayEventsComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-open-day-events',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                animations: [collapseAnimation]
            })
        ], CalendarOpenDayEventsComponent);
        return CalendarOpenDayEventsComponent;
    }());

    var CalendarMonthModule = /** @class */ (function () {
        function CalendarMonthModule() {
        }
        CalendarMonthModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, angularDraggableDroppable.DragAndDropModule, CalendarCommonModule],
                declarations: [
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent,
                ],
                exports: [
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent,
                ],
            })
        ], CalendarMonthModule);
        return CalendarMonthModule;
    }());

    var CalendarDragHelper = /** @class */ (function () {
        function CalendarDragHelper(dragContainerElement, draggableElement) {
            this.dragContainerElement = dragContainerElement;
            this.startPosition = draggableElement.getBoundingClientRect();
        }
        CalendarDragHelper.prototype.validateDrag = function (_a) {
            var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents, dragAlreadyMoved = _a.dragAlreadyMoved, transform = _a.transform;
            if (snapDraggedEvents) {
                var newRect = Object.assign({}, this.startPosition, {
                    left: this.startPosition.left + transform.x,
                    right: this.startPosition.right + transform.x,
                    top: this.startPosition.top + transform.y,
                    bottom: this.startPosition.bottom + transform.y,
                });
                return ((isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved) &&
                    isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
            }
            else {
                return isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved;
            }
        };
        return CalendarDragHelper;
    }());

    var CalendarResizeHelper = /** @class */ (function () {
        function CalendarResizeHelper(resizeContainerElement, minWidth) {
            this.resizeContainerElement = resizeContainerElement;
            this.minWidth = minWidth;
        }
        CalendarResizeHelper.prototype.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            if (this.minWidth &&
                Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
                return false;
            }
            return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
        };
        return CalendarResizeHelper;
    }());

    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-week-view>
     * ```
     */
    var CalendarWeekViewComponent = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
            this.cdr = cdr;
            this.utils = utils;
            this.dateAdapter = dateAdapter;
            /**
             * An array of events to display on view
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
             */
            this.excludeDays = [];
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * The precision to display events.
             * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
             */
            this.precision = 'days';
            /**
             * Whether to snap events to a grid when dragging
             */
            this.snapDraggedEvents = true;
            /**
             * The number of segments in an hour. Must divide equally into 60.
             */
            this.hourSegments = 2;
            /**
             * The height in pixels of each hour segment
             */
            this.hourSegmentHeight = 30;
            /**
             * The day start hours in 24 hour time. Must be 0-23
             */
            this.dayStartHour = 0;
            /**
             * The day start minutes. Must be 0-59
             */
            this.dayStartMinute = 0;
            /**
             * The day end hours in 24 hour time. Must be 0-23
             */
            this.dayEndHour = 23;
            /**
             * The day end minutes. Must be 0-59
             */
            this.dayEndMinute = 59;
            /**
             * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
             */
            this.dayHeaderClicked = new core.EventEmitter();
            /**
             * Called when the event title is clicked
             */
            this.eventClicked = new core.EventEmitter();
            /**
             * Called when an event is resized or dragged and dropped
             */
            this.eventTimesChanged = new core.EventEmitter();
            /**
             * An output that will be called before the view is rendered for the current week.
             * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
             */
            this.beforeViewRender = new core.EventEmitter();
            /**
             * Called when an hour segment is clicked
             */
            this.hourSegmentClicked = new core.EventEmitter();
            /**
             * @hidden
             */
            this.allDayEventResizes = new Map();
            /**
             * @hidden
             */
            this.timeEventResizes = new Map();
            /**
             * @hidden
             */
            this.eventDragEnterByType = {
                allDay: 0,
                time: 0,
            };
            /**
             * @hidden
             */
            this.dragActive = false;
            /**
             * @hidden
             */
            this.dragAlreadyMoved = false;
            /**
             * @hidden
             */
            this.calendarId = Symbol('angular calendar week view id');
            /**
             * @hidden
             */
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
            /**
             * @hidden
             */
            this.trackByHourSegment = trackByHourSegment;
            /**
             * @hidden
             */
            this.trackByHour = trackByHour;
            /**
             * @hidden
             */
            this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
            /**
             * @hidden
             */
            this.trackByWeekTimeEvent = trackByWeekTimeEvent;
            /**
             * @hidden
             */
            this.trackByHourColumn = function (index, column) {
                return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
            };
            /**
             * @hidden
             */
            this.trackById = function (index, row) { return row.id; };
            this.locale = locale;
        }
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe(function () {
                    _this.refreshAll();
                    _this.cdr.markForCheck();
                });
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
            var refreshHeader = changes.viewDate ||
                changes.excludeDays ||
                changes.weekendDays ||
                changes.daysInWeek ||
                changes.weekStartsOn;
            var refreshBody = changes.viewDate ||
                changes.dayStartHour ||
                changes.dayStartMinute ||
                changes.dayEndHour ||
                changes.dayEndMinute ||
                changes.hourSegments ||
                changes.weekStartsOn ||
                changes.weekendDays ||
                changes.excludeDays ||
                changes.hourSegmentHeight ||
                changes.events ||
                changes.daysInWeek;
            if (refreshHeader) {
                this.refreshHeader();
            }
            if (changes.events) {
                validateEvents(this.events);
            }
            if (refreshBody) {
                this.refreshBody();
            }
            if (refreshHeader || refreshBody) {
                this.emitBeforeViewRender();
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizeStarted = function (eventsContainer, timeEvent, resizeEvent) {
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            this.resizeStarted(eventsContainer);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizing = function (timeEvent, resizeEvent) {
            var _this = this;
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            var adjustedEvents = new Map();
            var tempEvents = __spread(this.events);
            this.timeEventResizes.forEach(function (lastResizeEvent, event) {
                var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
                var adjustedEvent = __assign(__assign({}, event), newEventDates);
                adjustedEvents.set(adjustedEvent, event);
                var eventIndex = tempEvents.indexOf(event);
                tempEvents[eventIndex] = adjustedEvent;
            });
            this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizeEnded = function (timeEvent) {
            this.view = this.getWeekView(this.events);
            var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
            if (lastResizeEvent) {
                this.timeEventResizes.delete(timeEvent.event);
                var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
                this.eventTimesChanged.emit({
                    newStart: newEventDates.start,
                    newEnd: newEventDates.end,
                    event: timeEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Resize,
                });
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizeStarted = function (allDayEventsContainer, allDayEvent, resizeEvent) {
            this.allDayEventResizes.set(allDayEvent, {
                originalOffset: allDayEvent.offset,
                originalSpan: allDayEvent.span,
                edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right',
            });
            this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizing = function (allDayEvent, resizeEvent, dayWidth) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            if (typeof resizeEvent.edges.left !== 'undefined') {
                var diff = Math.round(+resizeEvent.edges.left / dayWidth);
                allDayEvent.offset = currentResize.originalOffset + diff;
                allDayEvent.span = currentResize.originalSpan - diff;
            }
            else if (typeof resizeEvent.edges.right !== 'undefined') {
                var diff = Math.round(+resizeEvent.edges.right / dayWidth);
                allDayEvent.span = currentResize.originalSpan + diff;
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizeEnded = function (allDayEvent) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            if (currentResize) {
                var allDayEventResizingBeforeStart = currentResize.edge === 'left';
                var daysDiff = void 0;
                if (allDayEventResizingBeforeStart) {
                    daysDiff = allDayEvent.offset - currentResize.originalOffset;
                }
                else {
                    daysDiff = allDayEvent.span - currentResize.originalSpan;
                }
                allDayEvent.offset = currentResize.originalOffset;
                allDayEvent.span = currentResize.originalSpan;
                var newStart = allDayEvent.event.start;
                var newEnd = allDayEvent.event.end || allDayEvent.event.start;
                if (allDayEventResizingBeforeStart) {
                    newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
                }
                else {
                    newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
                }
                this.eventTimesChanged.emit({
                    newStart: newStart,
                    newEnd: newEnd,
                    event: allDayEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Resize,
                });
                this.allDayEventResizes.delete(allDayEvent);
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
            return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dateDragEnter = function (date) {
            this.lastDragEnterDate = date;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.eventDropped = function (dropEvent, date, allDay) {
            if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) &&
                this.lastDragEnterDate.getTime() === date.getTime() &&
                (!this.snapDraggedEvents ||
                    dropEvent.dropData.event !== this.lastDraggedEvent)) {
                this.eventTimesChanged.emit({
                    type: exports.CalendarEventTimesChangedEventType.Drop,
                    event: dropEvent.dropData.event,
                    newStart: date,
                    allDay: allDay,
                });
            }
            this.lastDraggedEvent = null;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragEnter = function (type) {
            this.eventDragEnterByType[type]++;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragLeave = function (type) {
            this.eventDragEnterByType[type]--;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragStarted = function (eventsContainer, event, dayEvent) {
            var _this = this;
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var dragHelper = new CalendarDragHelper(eventsContainer, event);
            this.validateDrag = function (_a) {
                var x = _a.x, y = _a.y, transform = _a.transform;
                return _this.allDayEventResizes.size === 0 &&
                    _this.timeEventResizes.size === 0 &&
                    dragHelper.validateDrag({
                        x: x,
                        y: y,
                        snapDraggedEvents: _this.snapDraggedEvents,
                        dragAlreadyMoved: _this.dragAlreadyMoved,
                        transform: transform,
                    });
            };
            this.dragActive = true;
            this.dragAlreadyMoved = false;
            this.lastDraggedEvent = null;
            this.eventDragEnterByType = {
                allDay: 0,
                time: 0,
            };
            if (!this.snapDraggedEvents && dayEvent) {
                this.view.hourColumns.forEach(function (column) {
                    var linkedEvent = column.events.find(function (columnEvent) {
                        return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                    });
                    // hide any linked events while dragging
                    if (linkedEvent) {
                        linkedEvent.width = 0;
                        linkedEvent.height = 0;
                    }
                });
            }
            this.cdr.markForCheck();
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragMove = function (dayEvent, dragEvent) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = __assign(__assign({}, originalEvent), newEventTimes);
            var tempEvents = this.events.map(function (event) {
                if (event === originalEvent) {
                    return adjustedEvent;
                }
                return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
            this.dragAlreadyMoved = true;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventDragMove = function () {
            this.dragAlreadyMoved = true;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragEnded = function (weekEvent, dragEndEvent, dayWidth, useY) {
            if (useY === void 0) { useY = false; }
            this.view = this.getWeekView(this.events);
            this.dragActive = false;
            this.validateDrag = null;
            var _a = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY), start = _a.start, end = _a.end;
            if ((this.snapDraggedEvents ||
                this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) &&
                isDraggedWithinPeriod(start, end, this.view.period)) {
                this.lastDraggedEvent = weekEvent.event;
                this.eventTimesChanged.emit({
                    newStart: start,
                    newEnd: end,
                    event: weekEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Drag,
                    allDay: !useY,
                });
            }
        };
        CalendarWeekViewComponent.prototype.refreshHeader = function () {
            this.days = this.utils.getWeekViewHeader(__assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        };
        CalendarWeekViewComponent.prototype.refreshBody = function () {
            this.view = this.getWeekView(this.events);
        };
        CalendarWeekViewComponent.prototype.refreshAll = function () {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
        };
        CalendarWeekViewComponent.prototype.emitBeforeViewRender = function () {
            if (this.days && this.view) {
                this.beforeViewRender.emit(__assign({ header: this.days }, this.view));
            }
        };
        CalendarWeekViewComponent.prototype.getWeekView = function (events) {
            return this.utils.getWeekView(__assign({ events: events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                    hour: this.dayStartHour,
                    minute: this.dayStartMinute,
                }, dayEnd: {
                    hour: this.dayEndHour,
                    minute: this.dayEndMinute,
                }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        };
        CalendarWeekViewComponent.prototype.getDragMovedEventTimes = function (weekEvent, dragEndEvent, dayWidth, useY) {
            var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
            var minutesMoved = useY
                ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
                : 0;
            var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
            var end;
            if (weekEvent.event.end) {
                end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
            }
            return { start: start, end: end };
        };
        CalendarWeekViewComponent.prototype.restoreOriginalEvents = function (tempEvents, adjustedEvents, snapDraggedEvents) {
            if (snapDraggedEvents === void 0) { snapDraggedEvents = true; }
            var previousView = this.view;
            if (snapDraggedEvents) {
                this.view = this.getWeekView(tempEvents);
            }
            var adjustedEventsArray = tempEvents.filter(function (event) {
                return adjustedEvents.has(event);
            });
            this.view.hourColumns.forEach(function (column, columnIndex) {
                previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
                    hour.segments.forEach(function (segment, segmentIndex) {
                        column.hours[hourIndex].segments[segmentIndex].cssClass =
                            segment.cssClass;
                    });
                });
                adjustedEventsArray.forEach(function (adjustedEvent) {
                    var originalEvent = adjustedEvents.get(adjustedEvent);
                    var existingColumnEvent = column.events.find(function (columnEvent) {
                        return columnEvent.event ===
                            (snapDraggedEvents ? adjustedEvent : originalEvent);
                    });
                    if (existingColumnEvent) {
                        // restore the original event so trackBy kicks in and the dom isn't changed
                        existingColumnEvent.event = originalEvent;
                        existingColumnEvent['tempEvent'] = adjustedEvent;
                        if (!snapDraggedEvents) {
                            existingColumnEvent.height = 0;
                            existingColumnEvent.width = 0;
                        }
                    }
                    else {
                        // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                        var event_1 = {
                            event: originalEvent,
                            left: 0,
                            top: 0,
                            height: 0,
                            width: 0,
                            startsBeforeDay: false,
                            endsAfterDay: false,
                            tempEvent: adjustedEvent,
                        };
                        column.events.push(event_1);
                    }
                });
            });
            adjustedEvents.clear();
        };
        CalendarWeekViewComponent.prototype.getTimeEventResizedDates = function (calendarEvent, resizeEvent) {
            var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
            var newEventDates = {
                start: calendarEvent.start,
                end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight),
            };
            var end = calendarEvent.end, eventWithoutEnd = __rest(calendarEvent, ["end"]);
            var smallestResizes = {
                start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
                end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight),
            };
            if (typeof resizeEvent.edges.left !== 'undefined') {
                var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
                var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
                if (newStart < smallestResizes.start) {
                    newEventDates.start = newStart;
                }
                else {
                    newEventDates.start = smallestResizes.start;
                }
            }
            else if (typeof resizeEvent.edges.right !== 'undefined') {
                var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
                var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
                if (newEnd > smallestResizes.end) {
                    newEventDates.end = newEnd;
                }
                else {
                    newEventDates.end = smallestResizes.end;
                }
            }
            if (typeof resizeEvent.edges.top !== 'undefined') {
                var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
                var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
                if (newStart < smallestResizes.start) {
                    newEventDates.start = newStart;
                }
                else {
                    newEventDates.start = smallestResizes.start;
                }
            }
            else if (typeof resizeEvent.edges.bottom !== 'undefined') {
                var minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
                var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
                if (newEnd > smallestResizes.end) {
                    newEventDates.end = newEnd;
                }
                else {
                    newEventDates.end = smallestResizes.end;
                }
            }
            return newEventDates;
        };
        CalendarWeekViewComponent.prototype.resizeStarted = function (eventsContainer, minWidth) {
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);
            this.validateResize = function (_a) {
                var rectangle = _a.rectangle;
                return resizeHelper.validateResize({ rectangle: rectangle });
            };
            this.cdr.markForCheck();
        };
        CalendarWeekViewComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: CalendarUtils },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarWeekViewComponent.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarWeekViewComponent.prototype, "events", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", rxjs.Subject)
        ], CalendarWeekViewComponent.prototype, "refresh", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewComponent.prototype, "precision", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
        CalendarWeekViewComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-week-view',
                template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
            }),
            __param(2, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [core.ChangeDetectorRef,
                CalendarUtils, String, DateAdapter])
        ], CalendarWeekViewComponent);
        return CalendarWeekViewComponent;
    }());

    var CalendarWeekViewHeaderComponent = /** @class */ (function () {
        function CalendarWeekViewHeaderComponent() {
            this.dayHeaderClicked = new core.EventEmitter();
            this.eventDropped = new core.EventEmitter();
            this.dragEnter = new core.EventEmitter();
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);
        CalendarWeekViewHeaderComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-week-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
            })
        ], CalendarWeekViewHeaderComponent);
        return CalendarWeekViewHeaderComponent;
    }());

    var CalendarWeekViewEventComponent = /** @class */ (function () {
        function CalendarWeekViewEventComponent() {
            this.eventClicked = new core.EventEmitter();
        }
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewEventComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewEventComponent.prototype, "column", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);
        CalendarWeekViewEventComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-week-view-event',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
            })
        ], CalendarWeekViewEventComponent);
        return CalendarWeekViewEventComponent;
    }());

    var CalendarWeekViewHourSegmentComponent = /** @class */ (function () {
        function CalendarWeekViewHourSegmentComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);
        CalendarWeekViewHourSegmentComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-week-view-hour-segment',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
            })
        ], CalendarWeekViewHourSegmentComponent);
        return CalendarWeekViewHourSegmentComponent;
    }());

    var CalendarWeekViewCurrentTimeMarkerComponent = /** @class */ (function () {
        function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter, zone) {
            var _this = this;
            this.dateAdapter = dateAdapter;
            this.zone = zone;
            this.columnDate$ = new rxjs.BehaviorSubject(this.columnDate);
            this.marker$ = this.zone.onStable.pipe(operators.switchMap(function () { return rxjs.interval(60 * 1000); }), operators.startWith(0), operators.switchMapTo(this.columnDate$), operators.map(function (columnDate) {
                var startOfDay = _this.dateAdapter.setMinutes(_this.dateAdapter.setHours(columnDate, _this.dayStartHour), _this.dayStartMinute);
                var endOfDay = _this.dateAdapter.setMinutes(_this.dateAdapter.setHours(columnDate, _this.dayEndHour), _this.dayEndMinute);
                var hourHeightModifier = (_this.hourSegments * _this.hourSegmentHeight) / 60;
                var now = new Date();
                return {
                    isVisible: _this.dateAdapter.isSameDay(columnDate, now) &&
                        now >= startOfDay &&
                        now <= endOfDay,
                    top: _this.dateAdapter.differenceInMinutes(now, startOfDay) *
                        hourHeightModifier,
                };
            }));
        }
        CalendarWeekViewCurrentTimeMarkerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.columnDate) {
                this.columnDate$.next(changes.columnDate.currentValue);
            }
        };
        CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = function () { return [
            { type: DateAdapter },
            { type: core.NgZone }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
        CalendarWeekViewCurrentTimeMarkerComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-week-view-current-time-marker',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
            }),
            __metadata("design:paramtypes", [DateAdapter, core.NgZone])
        ], CalendarWeekViewCurrentTimeMarkerComponent);
        return CalendarWeekViewCurrentTimeMarkerComponent;
    }());

    var CalendarWeekModule = /** @class */ (function () {
        function CalendarWeekModule() {
        }
        CalendarWeekModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    angularResizableElement.ResizableModule,
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarCommonModule,
                ],
                declarations: [
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent,
                ],
                exports: [
                    angularResizableElement.ResizableModule,
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent,
                ],
            })
        ], CalendarWeekModule);
        return CalendarWeekModule;
    }());

    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */
    var CalendarDayViewComponent = /** @class */ (function () {
        function CalendarDayViewComponent() {
            /**
             * An array of events to display on view
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * The number of segments in an hour. Must divide equally into 60.
             */
            this.hourSegments = 2;
            /**
             * The height in pixels of each hour segment
             */
            this.hourSegmentHeight = 30;
            /**
             * The day start hours in 24 hour time. Must be 0-23
             */
            this.dayStartHour = 0;
            /**
             * The day start minutes. Must be 0-59
             */
            this.dayStartMinute = 0;
            /**
             * The day end hours in 24 hour time. Must be 0-23
             */
            this.dayEndHour = 23;
            /**
             * The day end minutes. Must be 0-59
             */
            this.dayEndMinute = 59;
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * Whether to snap events to a grid when dragging
             */
            this.snapDraggedEvents = true;
            /**
             * Called when an event title is clicked
             */
            this.eventClicked = new core.EventEmitter();
            /**
             * Called when an hour segment is clicked
             */
            this.hourSegmentClicked = new core.EventEmitter();
            /**
             * Called when an event is resized or dragged and dropped
             */
            this.eventTimesChanged = new core.EventEmitter();
            /**
             * An output that will be called before the view is rendered for the current day.
             * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
             */
            this.beforeViewRender = new core.EventEmitter();
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarDayViewComponent.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarDayViewComponent.prototype, "events", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "hourSegments", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", rxjs.Subject)
        ], CalendarDayViewComponent.prototype, "refresh", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarDayViewComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "eventClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);
        CalendarDayViewComponent = __decorate([
            core.Component({
                selector: 'mwl-calendar-day-view',
                template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
            })
        ], CalendarDayViewComponent);
        return CalendarDayViewComponent;
    }());

    var CalendarDayModule = /** @class */ (function () {
        function CalendarDayModule() {
        }
        CalendarDayModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, CalendarCommonModule, CalendarWeekModule],
                declarations: [CalendarDayViewComponent],
                exports: [CalendarDayViewComponent],
            })
        ], CalendarDayModule);
        return CalendarDayModule;
    }());

    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */
    var CalendarModule = /** @class */ (function () {
        function CalendarModule() {
        }
        CalendarModule_1 = CalendarModule;
        CalendarModule.forRoot = function (dateAdapter, config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: CalendarModule_1,
                providers: [
                    dateAdapter,
                    config.eventTitleFormatter || CalendarEventTitleFormatter,
                    config.dateFormatter || CalendarDateFormatter,
                    config.utils || CalendarUtils,
                    config.a11y || CalendarA11y,
                ],
            };
        };
        var CalendarModule_1;
        CalendarModule = CalendarModule_1 = __decorate([
            core.NgModule({
                imports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule,
                ],
                exports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule,
                ],
            })
        ], CalendarModule);
        return CalendarModule;
    }());

    Object.defineProperty(exports, 'DAYS_OF_WEEK', {
        enumerable: true,
        get: function () {
            return calendarUtils.DAYS_OF_WEEK;
        }
    });
    exports.CalendarA11y = CalendarA11y;
    exports.CalendarAngularDateFormatter = CalendarAngularDateFormatter;
    exports.CalendarCommonModule = CalendarCommonModule;
    exports.CalendarDateFormatter = CalendarDateFormatter;
    exports.CalendarDayModule = CalendarDayModule;
    exports.CalendarDayViewComponent = CalendarDayViewComponent;
    exports.CalendarEventTitleFormatter = CalendarEventTitleFormatter;
    exports.CalendarModule = CalendarModule;
    exports.CalendarMomentDateFormatter = CalendarMomentDateFormatter;
    exports.CalendarMonthModule = CalendarMonthModule;
    exports.CalendarMonthViewComponent = CalendarMonthViewComponent;
    exports.CalendarNativeDateFormatter = CalendarNativeDateFormatter;
    exports.CalendarUtils = CalendarUtils;
    exports.CalendarWeekModule = CalendarWeekModule;
    exports.CalendarWeekViewComponent = CalendarWeekViewComponent;
    exports.DateAdapter = DateAdapter;
    exports.MOMENT = MOMENT;
    exports.collapseAnimation = collapseAnimation;
    exports.getWeekViewPeriod = getWeekViewPeriod;
    exports.ɵa = CalendarOpenDayEventsComponent;
    exports.ɵb = CalendarEventActionsComponent;
    exports.ɵc = CalendarEventTitleComponent;
    exports.ɵd = CalendarTooltipWindowComponent;
    exports.ɵe = CalendarTooltipDirective;
    exports.ɵf = CalendarPreviousViewDirective;
    exports.ɵg = CalendarNextViewDirective;
    exports.ɵh = CalendarTodayDirective;
    exports.ɵi = CalendarDatePipe;
    exports.ɵj = CalendarEventTitlePipe;
    exports.ɵk = CalendarA11yPipe;
    exports.ɵl = ClickDirective;
    exports.ɵm = KeydownEnterDirective;
    exports.ɵn = CalendarMonthCellComponent;
    exports.ɵo = CalendarMonthViewHeaderComponent;
    exports.ɵp = CalendarWeekViewHeaderComponent;
    exports.ɵq = CalendarWeekViewEventComponent;
    exports.ɵr = CalendarWeekViewHourSegmentComponent;
    exports.ɵs = CalendarWeekViewCurrentTimeMarkerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-calendar.umd.js.map
