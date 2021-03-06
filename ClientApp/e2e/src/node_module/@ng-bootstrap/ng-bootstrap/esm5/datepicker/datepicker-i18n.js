/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { FormStyle, getLocaleDayNames, getLocaleMonthNames, TranslationWidth, formatDate } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * @param {?} locale
 * @return {?}
 */
export function NGB_DATEPICKER_18N_FACTORY(locale) {
    return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 * @abstract
 */
var NgbDatepickerI18n = /** @class */ (function () {
    function NgbDatepickerI18n() {
    }
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * @since 3.0.0
     */
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * \@since 3.0.0
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getDayNumerals = /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * \@since 3.0.0
     * @param {?} date
     * @return {?}
     */
    function (date) { return "" + date.day; };
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * @since 3.0.0
     */
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * \@since 3.0.0
     * @param {?} weekNumber
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getWeekNumerals = /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * \@since 3.0.0
     * @param {?} weekNumber
     * @return {?}
     */
    function (weekNumber) { return "" + weekNumber; };
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * @since 3.0.0
     */
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * \@since 3.0.0
     * @param {?} year
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getYearNumerals = /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * \@since 3.0.0
     * @param {?} year
     * @return {?}
     */
    function (year) { return "" + year; };
    NgbDatepickerI18n.decorators = [
        { type: Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [LOCALE_ID] },] }
    ];
    /** @nocollapse */ NgbDatepickerI18n.ngInjectableDef = i0.????defineInjectable({ factory: function NgbDatepickerI18n_Factory() { return NGB_DATEPICKER_18N_FACTORY(i0.????inject(i0.LOCALE_ID)); }, token: NgbDatepickerI18n, providedIn: "root" });
    return NgbDatepickerI18n;
}());
export { NgbDatepickerI18n };
if (false) {
    /**
     * Returns the short weekday name to display in the heading of the month view.
     *
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
     * @abstract
     * @param {?} weekday
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getWeekdayShortName = function (weekday) { };
    /**
     * Returns the short month name to display in the date picker navigation.
     *
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * @abstract
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getMonthShortName = function (month, year) { };
    /**
     * Returns the full month name to display in the date picker navigation.
     *
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * @abstract
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getMonthFullName = function (month, year) { };
    /**
     * Returns the value of the `aria-label` attribute for a specific date.
     *
     * \@since 2.0.0
     * @abstract
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18n.prototype.getDayAriaLabel = function (date) { };
}
var NgbDatepickerI18nDefault = /** @class */ (function (_super) {
    tslib_1.__extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault(_locale) {
        var _this = _super.call(this) || this;
        _this._locale = _locale;
        /** @type {?} */
        var weekdaysStartingOnSunday = getLocaleDayNames(_locale, FormStyle.Standalone, TranslationWidth.Short);
        _this._weekdaysShort = weekdaysStartingOnSunday.map((/**
         * @param {?} day
         * @param {?} index
         * @return {?}
         */
        function (day, index) { return weekdaysStartingOnSunday[(index + 1) % 7]; }));
        _this._monthsShort = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
        _this._monthsFull = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Wide);
        return _this;
    }
    /**
     * @param {?} weekday
     * @return {?}
     */
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = /**
     * @param {?} weekday
     * @return {?}
     */
    function (weekday) { return this._weekdaysShort[weekday - 1]; };
    /**
     * @param {?} month
     * @return {?}
     */
    NgbDatepickerI18nDefault.prototype.getMonthShortName = /**
     * @param {?} month
     * @return {?}
     */
    function (month) { return this._monthsShort[month - 1]; };
    /**
     * @param {?} month
     * @return {?}
     */
    NgbDatepickerI18nDefault.prototype.getMonthFullName = /**
     * @param {?} month
     * @return {?}
     */
    function (month) { return this._monthsFull[month - 1]; };
    /**
     * @param {?} date
     * @return {?}
     */
    NgbDatepickerI18nDefault.prototype.getDayAriaLabel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var jsDate = new Date(date.year, date.month - 1, date.day);
        return formatDate(jsDate, 'fullDate', this._locale);
    };
    NgbDatepickerI18nDefault.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgbDatepickerI18nDefault.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));
export { NgbDatepickerI18nDefault };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerI18nDefault.prototype._weekdaysShort;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerI18nDefault.prototype._monthsShort;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerI18nDefault.prototype._monthsFull;
    /**
     * @type {?}
     * @private
     */
    NgbDatepickerI18nDefault.prototype._locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvIiwic291cmNlcyI6WyJkYXRlcGlja2VyL2RhdGVwaWNrZXItaTE4bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFHaEgsTUFBTSxVQUFVLDBCQUEwQixDQUFDLE1BQU07SUFDL0MsT0FBTyxJQUFJLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWVEO0lBQUE7S0FrREM7SUFwQkM7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCwwQ0FBYzs7Ozs7OztJQUFkLFVBQWUsSUFBbUIsSUFBWSxPQUFPLEtBQUcsSUFBSSxDQUFDLEdBQUssQ0FBQyxDQUFDLENBQUM7SUFFckU7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCwyQ0FBZTs7Ozs7OztJQUFmLFVBQWdCLFVBQWtCLElBQVksT0FBTyxLQUFHLFVBQVksQ0FBQyxDQUFDLENBQUM7SUFFdkU7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCwyQ0FBZTs7Ozs7OztJQUFmLFVBQWdCLElBQVksSUFBWSxPQUFPLEtBQUcsSUFBTSxDQUFDLENBQUMsQ0FBQzs7Z0JBakQ1RCxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQzs7OzRCQXJCM0Y7Q0F1RUMsQUFsREQsSUFrREM7U0FqRHFCLGlCQUFpQjs7Ozs7Ozs7OztJQU1yQyx5RUFBc0Q7Ozs7Ozs7Ozs7SUFPdEQsMkVBQWlFOzs7Ozs7Ozs7O0lBT2pFLDBFQUFnRTs7Ozs7Ozs7O0lBT2hFLGtFQUFzRDs7QUF3QnhEO0lBQzhDLG9EQUFpQjtJQUs3RCxrQ0FBdUMsT0FBZTtRQUF0RCxZQUNFLGlCQUFPLFNBT1I7UUFSc0MsYUFBTyxHQUFQLE9BQU8sQ0FBUTs7WUFHOUMsd0JBQXdCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQ3pHLEtBQUksQ0FBQyxjQUFjLEdBQUcsd0JBQXdCLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBekMsQ0FBeUMsRUFBQyxDQUFDO1FBRTlHLEtBQUksQ0FBQyxZQUFZLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckcsS0FBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDL0YsQ0FBQzs7Ozs7SUFFRCxzREFBbUI7Ozs7SUFBbkIsVUFBb0IsT0FBZSxJQUFZLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUV6RixvREFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBYSxJQUFZLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUVqRixtREFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYSxJQUFZLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUUvRSxrREFBZTs7OztJQUFmLFVBQWdCLElBQW1COztZQUMzQixNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzVELE9BQU8sVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQXpCRixVQUFVOzs7OzZDQU1JLE1BQU0sU0FBQyxTQUFTOztJQW9CL0IsK0JBQUM7Q0FBQSxBQTFCRCxDQUM4QyxpQkFBaUIsR0F5QjlEO1NBekJZLHdCQUF3Qjs7Ozs7O0lBQ25DLGtEQUFzQzs7Ozs7SUFDdEMsZ0RBQW9DOzs7OztJQUNwQywrQ0FBbUM7Ozs7O0lBRXZCLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtU3R5bGUsIGdldExvY2FsZURheU5hbWVzLCBnZXRMb2NhbGVNb250aE5hbWVzLCBUcmFuc2xhdGlvbldpZHRoLCBmb3JtYXREYXRlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ2JEYXRlU3RydWN0fSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOR0JfREFURVBJQ0tFUl8xOE5fRkFDVE9SWShsb2NhbGUpIHtcbiAgcmV0dXJuIG5ldyBOZ2JEYXRlcGlja2VySTE4bkRlZmF1bHQobG9jYWxlKTtcbn1cblxuLyoqXG4gKiBBIHNlcnZpY2Ugc3VwcGx5aW5nIGkxOG4gZGF0YSB0byB0aGUgZGF0ZXBpY2tlciBjb21wb25lbnQuXG4gKlxuICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBzZXJ2aWNlIHVzZXMgdGhlIEFuZ3VsYXIgbG9jYWxlIGFuZCByZWdpc3RlcmVkIGxvY2FsZSBkYXRhIGZvclxuICogd2Vla2RheXMgYW5kIG1vbnRoIG5hbWVzIChhcyBleHBsYWluZWQgaW4gdGhlIEFuZ3VsYXIgaTE4biBndWlkZSkuXG4gKlxuICogSXQgYWxzbyBwcm92aWRlcyBhIHdheSB0byBpMThuIGRhdGEgdGhhdCBkZXBlbmRzIG9uIGNhbGVuZGFyIGNhbGN1bGF0aW9ucywgbGlrZSBhcmlhIGxhYmVscywgZGF5LCB3ZWVrIGFuZCB5ZWFyXG4gKiBudW1lcmFscy4gRm9yIG90aGVyIHN0YXRpYyBsYWJlbHMgdGhlIGRhdGVwaWNrZXIgdXNlcyB0aGUgZGVmYXVsdCBBbmd1bGFyIGkxOG4uXG4gKlxuICogU2VlIHRoZSBbaTE4biBkZW1vXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9leGFtcGxlcyNpMThuKSBhbmRcbiAqIFtIZWJyZXcgY2FsZW5kYXIgZGVtb10oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvY2FsZW5kYXJzI2hlYnJldykgb24gaG93IHRvIGV4dGVuZCB0aGlzIGNsYXNzIGFuZCBkZWZpbmVcbiAqIGEgY3VzdG9tIHByb3ZpZGVyIGZvciBpMThuLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnLCB1c2VGYWN0b3J5OiBOR0JfREFURVBJQ0tFUl8xOE5fRkFDVE9SWSwgZGVwczogW0xPQ0FMRV9JRF19KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nYkRhdGVwaWNrZXJJMThuIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNob3J0IHdlZWtkYXkgbmFtZSB0byBkaXNwbGF5IGluIHRoZSBoZWFkaW5nIG9mIHRoZSBtb250aCB2aWV3LlxuICAgKlxuICAgKiBXaXRoIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnd2Vla2RheScgaXMgMT1Nb24gLi4uIDc9U3VuLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0V2Vla2RheVNob3J0TmFtZSh3ZWVrZGF5OiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNob3J0IG1vbnRoIG5hbWUgdG8gZGlzcGxheSBpbiB0aGUgZGF0ZSBwaWNrZXIgbmF2aWdhdGlvbi5cbiAgICpcbiAgICogV2l0aCBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0TW9udGhTaG9ydE5hbWUobW9udGg6IG51bWJlciwgeWVhcj86IG51bWJlcik6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZnVsbCBtb250aCBuYW1lIHRvIGRpc3BsYXkgaW4gdGhlIGRhdGUgcGlja2VyIG5hdmlnYXRpb24uXG4gICAqXG4gICAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICdtb250aCcgaXMgMT1KYW4gLi4uIDEyPURlYy5cbiAgICovXG4gIGFic3RyYWN0IGdldE1vbnRoRnVsbE5hbWUobW9udGg6IG51bWJlciwgeWVhcj86IG51bWJlcik6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUgZm9yIGEgc3BlY2lmaWMgZGF0ZS5cbiAgICpcbiAgICogQHNpbmNlIDIuMC4wXG4gICAqL1xuICBhYnN0cmFjdCBnZXREYXlBcmlhTGFiZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiBhIGRheSB0aGF0IGlzIHJlbmRlcmVkIGluIGEgZGF5IGNlbGwuXG4gICAqXG4gICAqIEBzaW5jZSAzLjAuMFxuICAgKi9cbiAgZ2V0RGF5TnVtZXJhbHMoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7IHJldHVybiBgJHtkYXRlLmRheX1gOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgYSB3ZWVrIG51bWJlciByZW5kZXJlZCBieSBkYXRlcGlja2VyLlxuICAgKlxuICAgKiBAc2luY2UgMy4wLjBcbiAgICovXG4gIGdldFdlZWtOdW1lcmFscyh3ZWVrTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gYCR7d2Vla051bWJlcn1gOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgYSB5ZWFyIHRoYXQgaXMgcmVuZGVyZWQgaW4gdGhlIGRhdGVwaWNrZXIgeWVhciBzZWxlY3QgYm94LlxuICAgKlxuICAgKiBAc2luY2UgMy4wLjBcbiAgICovXG4gIGdldFllYXJOdW1lcmFscyh5ZWFyOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gYCR7eWVhcn1gOyB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VySTE4bkRlZmF1bHQgZXh0ZW5kcyBOZ2JEYXRlcGlja2VySTE4biB7XG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnQ6IEFycmF5PHN0cmluZz47XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0OiBBcnJheTxzdHJpbmc+O1xuICBwcml2YXRlIF9tb250aHNGdWxsOiBBcnJheTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCB3ZWVrZGF5c1N0YXJ0aW5nT25TdW5kYXkgPSBnZXRMb2NhbGVEYXlOYW1lcyhfbG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgVHJhbnNsYXRpb25XaWR0aC5TaG9ydCk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydCA9IHdlZWtkYXlzU3RhcnRpbmdPblN1bmRheS5tYXAoKGRheSwgaW5kZXgpID0+IHdlZWtkYXlzU3RhcnRpbmdPblN1bmRheVsoaW5kZXggKyAxKSAlIDddKTtcblxuICAgIHRoaXMuX21vbnRoc1Nob3J0ID0gZ2V0TG9jYWxlTW9udGhOYW1lcyhfbG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCk7XG4gICAgdGhpcy5fbW9udGhzRnVsbCA9IGdldExvY2FsZU1vbnRoTmFtZXMoX2xvY2FsZSwgRm9ybVN0eWxlLlN0YW5kYWxvbmUsIFRyYW5zbGF0aW9uV2lkdGguV2lkZSk7XG4gIH1cblxuICBnZXRXZWVrZGF5U2hvcnROYW1lKHdlZWtkYXk6IG51bWJlcik6IHN0cmluZyB7IHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0W3dlZWtkYXkgLSAxXTsgfVxuXG4gIGdldE1vbnRoU2hvcnROYW1lKG1vbnRoOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRbbW9udGggLSAxXTsgfVxuXG4gIGdldE1vbnRoRnVsbE5hbWUobW9udGg6IG51bWJlcik6IHN0cmluZyB7IHJldHVybiB0aGlzLl9tb250aHNGdWxsW21vbnRoIC0gMV07IH1cblxuICBnZXREYXlBcmlhTGFiZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7XG4gICAgY29uc3QganNEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpO1xuICAgIHJldHVybiBmb3JtYXREYXRlKGpzRGF0ZSwgJ2Z1bGxEYXRlJywgdGhpcy5fbG9jYWxlKTtcbiAgfVxufVxuIl19