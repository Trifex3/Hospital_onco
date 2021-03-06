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
export { win as window };
export var document = win.document;
export var location = win.location;
export var gc = win['gc'] ? () => win['gc']() : () => null;
export var performance = win['performance'] ? win['performance'] : null;
export const Event = win['Event'];
export const MouseEvent = win['MouseEvent'];
export const KeyboardEvent = win['KeyboardEvent'];
export const EventTarget = win['EventTarget'];
export const History = win['History'];
export const Location = win['Location'];
export const EventListener = win['EventListener'];
export const navigator = win['navigator'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLW1kL3NyYy9saWIvZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7Ozs7OztHQU1HO0FBRUg7O0dBRUc7QUFDSCxJQUFJLEdBQUcsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxJQUFTLEVBQUUsQ0FBQztBQUU3RCxPQUFPLEVBQUMsR0FBRyxJQUFJLE1BQU0sRUFBQyxDQUFDO0FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDaEUsTUFBTSxDQUFDLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDeEUsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbEQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM5QyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyp0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxuICovXG52YXIgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IDxhbnk+e307XG5cbmV4cG9ydCB7d2luIGFzIHdpbmRvd307XG5leHBvcnQgdmFyIGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xuZXhwb3J0IHZhciBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbmV4cG9ydCB2YXIgZ2MgPSB3aW5bJ2djJ10gPyAoKSA9PiB3aW5bJ2djJ10oKSA6ICgpOiBhbnkgPT4gbnVsbDtcbmV4cG9ydCB2YXIgcGVyZm9ybWFuY2UgPSB3aW5bJ3BlcmZvcm1hbmNlJ10gPyB3aW5bJ3BlcmZvcm1hbmNlJ10gOiBudWxsO1xuZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luWydFdmVudCddO1xuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW5bJ01vdXNlRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luWydLZXlib2FyZEV2ZW50J107XG5leHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW5bJ0V2ZW50VGFyZ2V0J107XG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpblsnSGlzdG9yeSddO1xuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luWydMb2NhdGlvbiddO1xuZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW5bJ0V2ZW50TGlzdGVuZXInXTtcbmV4cG9ydCBjb25zdCBuYXZpZ2F0b3IgPSB3aW5bJ25hdmlnYXRvciddO1xuIl19