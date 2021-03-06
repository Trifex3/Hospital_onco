import { ElementRef, AfterViewInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy, Renderer2 } from '@angular/core';
import { FlatpickrDefaults, DisableEnableDate, FlatpickrDefaultsInterface } from './flatpickr-defaults.service';
import { ControlValueAccessor } from '@angular/forms';
export interface FlatPickrOutputOptions {
    selectedDates: Date[];
    dateString: string;
    instance: any;
}
export interface FlatPickrDayCreateOutputOptions extends FlatPickrOutputOptions {
    dayElement: HTMLElement;
}
export declare const FLATPICKR_CONTROL_VALUE_ACCESSOR: any;
export declare class FlatpickrDirective implements AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {
    private elm;
    private defaults;
    private renderer;
    /**
     * Object-options that can be user for multiple instances of Flatpickr.
     * Option from this object is applied only if specific option is not specified.
     * Example:
     * ```typescript
     * options: FlatpickrDefaultsInterface = {
     *      altFormat: 'd/m/Y',   // will be ignored since altFormat is provided via specific attribute
     *      altInput: true        // will be used since specific attribute is not provided
     * };
     * ```
     * ```html
     * <input
     *   class="form-control"
     *   type="text"
     *   mwlFlatpickr
     *   [options]="options"
     *   altFormat="d/m/Y">
     * ```
     */
    options: FlatpickrDefaultsInterface;
    /**
     * Exactly the same as date format, but for the altInput field.
     */
    altFormat: string;
    /**
     * 	Show the user a readable date (as per altFormat), but return something totally different to the server.
     */
    altInput: boolean;
    /**
     * This class will be added to the input element created by the altInput option.
     * Note that `altInput` already inherits classes from the original input.
     */
    altInputClass: string;
    /**
     * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
     */
    allowInput: boolean;
    /**
     * Instead of `body`, appends the calendar to the specified node instead.
     */
    appendTo: HTMLElement;
    /**
     * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
     */
    ariaDateFormat?: string;
    /**
     * Whether clicking on the input should open the picker.
     * You could disable this if you wish to open the calendar manually `with.open()`.
     */
    clickOpens: boolean;
    /**
     * A string of characters which are used to define how the date will be displayed in the input box.
     * The supported characters are defined in the table below.
     */
    dateFormat: string;
    /**
     * Initial value of the hour element.
     */
    defaultHour?: number;
    /**
     * Initial value of the minute element.
     */
    defaultMinute?: number;
    /**
     * Initial value of the seconds element.
     */
    defaultSeconds?: number;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
     */
    disable: DisableEnableDate[];
    /**
     * Set disableMobile to true to always use the non-native picker.
     * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
     */
    disableMobile: boolean;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few">enabling dates</a>.
     */
    enable: DisableEnableDate[];
    /**
     * Enables time picker.
     */
    enableTime: boolean;
    /**
     * Enables seconds in the time picker.
     */
    enableSeconds: boolean;
    /**
     * Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
     */
    formatDate?: (value: any) => string;
    /**
     * Adjusts the step for the hour input (incl. scrolling).
     */
    hourIncrement: number;
    /**
     * Displays the calendar inline.
     */
    inline: boolean;
    /**
     * The maximum date that a user can pick to (inclusive).
     */
    maxDate: string | Date;
    /**
     * The minimum date that a user can start picking from (inclusive).
     */
    minDate: string | Date;
    /**
     * Adjusts the step for the minute input (incl. scrolling).
     */
    minuteIncrement: number;
    /**
     * Select a single date, multiple dates or a date range.
     */
    mode: 'single' | 'multiple' | 'range';
    /**
     * HTML for the arrow icon, used to switch months.
     */
    nextArrow: string;
    /**
     * Hides the day selection in calendar. Use it along with `enableTime` to create a time picker.
     */
    noCalendar: boolean;
    /**
     * Provide a date for 'today', which will be used instead of "new Date()"
     */
    now?: Date | string | number;
    /**
     * Function that expects a date string and must return a Date object.
     */
    parseDate: (str: string) => Date;
    /**
     * HTML for the left arrow icon.
     */
    prevArrow: string;
    /**
     * Show the month using the shorthand version (ie, Sep instead of September).
     */
    shorthandCurrentMonth: boolean;
    /**
     * The number of months shown.
     */
    showMonths: number;
    /**
     * Position the calendar inside the wrapper and next to the input element. (Leave `false` unless you know what you're doing).
     */
    static: boolean;
    /**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     */
    time24hr: boolean;
    /**
     * Enables display of week numbers in calendar.
     */
    weekNumbers: boolean;
    /**
     * You may override the function that extracts the week numbers from a Date by supplying a getWeek function.
     * It takes in a date as a parameter and should return a corresponding string that you want to appear left of every week.
     */
    getWeek: (date: Date) => string;
    /**
     * Custom elements and input groups.
     */
    wrap: boolean;
    /**
     * Array of plugin instances to use.
     */
    plugins: any[];
    /**
     * The locale object or string to use for the locale.
     */
    locale: object | string;
    /**
     * Auto convert the ngModel value from a string to a date / array of dates / from - to date object depending on the `mode`
     */
    convertModelValue: boolean;
    /**
     * How the month should be displayed in the header of the calendar.
     */
    monthSelectorType: 'static' | 'dropdown';
    /**
     * Gets triggered once the calendar is in a ready state
     */
    flatpickrReady: EventEmitter<FlatPickrOutputOptions>;
    /**
     * Gets triggered when the user selects a date, or changes the time on a selected date.
     */
    flatpickrChange: EventEmitter<FlatPickrOutputOptions>;
    /**
     * Gets triggered when the input value is updated with a new date string.
     */
    flatpickrValueUpdate: EventEmitter<FlatPickrOutputOptions>;
    /**
     * Gets triggered when the calendar is opened.
     */
    flatpickrOpen: EventEmitter<FlatPickrOutputOptions>;
    /**
     * Gets triggered when the calendar is closed.
     */
    flatpickrClose: EventEmitter<FlatPickrOutputOptions>;
    /**
     * Gets triggered when the month is changed, either by the user or programmatically.
     */
    flatpickrMonthChange: EventEmitter<FlatPickrOutputOptions>;
    /**
     * Gets triggered when the year is changed, either by the user or programmatically.
     */
    flatpickrYearChange: EventEmitter<FlatPickrOutputOptions>;
    /**
     * Take full control of every date cell with this output
     */
    flatpickrDayCreate: EventEmitter<FlatPickrDayCreateOutputOptions>;
    private instance;
    private isDisabled;
    private initialValue;
    onChangeFn: (value: any) => void;
    onTouchedFn: () => void;
    constructor(elm: ElementRef, defaults: FlatpickrDefaults, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    inputChanged(): void;
}
