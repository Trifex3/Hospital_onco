import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EqualValidatorDirective } from './equal-validator.directive';
import { MdbInputDirective } from './mdb-input.directive';
import { MdbInput } from './input.directive';
export class InputsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLW1kL3NyYy9saWIvZnJlZS9pbnB1dHMvaW5wdXRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPN0MsTUFBTSxPQUFPLFlBQVk7SUFDaEIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ25ELENBQUM7OztZQVJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ3BFLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztnQkFDL0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXF1YWxWYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL21kYi1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiSW5wdXQgfSBmcm9tICcuL2lucHV0LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01kYklucHV0LCBNZGJJbnB1dERpcmVjdGl2ZSwgRXF1YWxWYWxpZGF0b3JEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTWRiSW5wdXQsIE1kYklucHV0RGlyZWN0aXZlLCBFcXVhbFZhbGlkYXRvckRpcmVjdGl2ZV0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRzTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SW5wdXRzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IElucHV0c01vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXX0=