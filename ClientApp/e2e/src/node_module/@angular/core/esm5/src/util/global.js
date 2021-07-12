/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __globalThis = typeof globalThis !== 'undefined' && globalThis;
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
// Always use __globalThis if available, which is the spec-defined global variable across all
// environments, then fallback to __global first, because in Node tests both __global and
// __window may be defined and _global should be __global in that case.
var _global = __globalThis || __global || __window || __self;
/**
 * Attention: whenever providing a new value, be sure to add an
 * entry into the corresponding `....externs.js` file,
 * so that closure won't use that global for its purposes.
 */
export { _global as global };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9nbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBV0gsSUFBTSxZQUFZLEdBQUcsT0FBTyxVQUFVLEtBQUssV0FBVyxJQUFJLFVBQVUsQ0FBQztBQUNyRSxJQUFNLFFBQVEsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDO0FBQ3pELElBQU0sTUFBTSxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsSUFBSSxPQUFPLGlCQUFpQixLQUFLLFdBQVc7SUFDbEYsSUFBSSxZQUFZLGlCQUFpQixJQUFJLElBQUksQ0FBQztBQUM5QyxJQUFNLFFBQVEsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDO0FBRXpELDZGQUE2RjtBQUM3Rix5RkFBeUY7QUFDekYsdUVBQXVFO0FBQ3ZFLElBQU0sT0FBTyxHQUFHLFlBQVksSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLE1BQU0sQ0FBQztBQUUvRDs7OztHQUlHO0FBQ0gsT0FBTyxFQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVE9ETyhqdGVwbGl0ejYwMik6IExvYWQgV29ya2VyR2xvYmFsU2NvcGUgZnJvbSBsaWIud2Vid29ya2VyLmQudHMgZmlsZSAjMzQ5MlxuZGVjbGFyZSB2YXIgV29ya2VyR2xvYmFsU2NvcGU6IGFueSAvKiogVE9ETyAjOTEwMCAqLztcbi8vIENvbW1vbkpTIC8gTm9kZSBoYXZlIGdsb2JhbCBjb250ZXh0IGV4cG9zZWQgYXMgXCJnbG9iYWxcIiB2YXJpYWJsZS5cbi8vIFdlIGRvbid0IHdhbnQgdG8gaW5jbHVkZSB0aGUgd2hvbGUgbm9kZS5kLnRzIHRoaXMgdGhpcyBjb21waWxhdGlvbiB1bml0IHNvIHdlJ2xsIGp1c3QgZmFrZVxuLy8gdGhlIGdsb2JhbCBcImdsb2JhbFwiIHZhciBmb3Igbm93LlxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnkgLyoqIFRPRE8gIzkxMDAgKi87XG4vLyBOb3QgeWV0IGF2YWlsYWJsZSBpbiBUeXBlU2NyaXB0OiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvcHVsbC8yOTMzMlxuZGVjbGFyZSB2YXIgZ2xvYmFsVGhpczogYW55IC8qKiBUT0RPICM5MTAwICovO1xuXG5jb25zdCBfX2dsb2JhbFRoaXMgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcztcbmNvbnN0IF9fd2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93O1xuY29uc3QgX19zZWxmID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUgJiYgc2VsZjtcbmNvbnN0IF9fZ2xvYmFsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsO1xuXG4vLyBBbHdheXMgdXNlIF9fZ2xvYmFsVGhpcyBpZiBhdmFpbGFibGUsIHdoaWNoIGlzIHRoZSBzcGVjLWRlZmluZWQgZ2xvYmFsIHZhcmlhYmxlIGFjcm9zcyBhbGxcbi8vIGVudmlyb25tZW50cywgdGhlbiBmYWxsYmFjayB0byBfX2dsb2JhbCBmaXJzdCwgYmVjYXVzZSBpbiBOb2RlIHRlc3RzIGJvdGggX19nbG9iYWwgYW5kXG4vLyBfX3dpbmRvdyBtYXkgYmUgZGVmaW5lZCBhbmQgX2dsb2JhbCBzaG91bGQgYmUgX19nbG9iYWwgaW4gdGhhdCBjYXNlLlxuY29uc3QgX2dsb2JhbCA9IF9fZ2xvYmFsVGhpcyB8fCBfX2dsb2JhbCB8fCBfX3dpbmRvdyB8fCBfX3NlbGY7XG5cbi8qKlxuICogQXR0ZW50aW9uOiB3aGVuZXZlciBwcm92aWRpbmcgYSBuZXcgdmFsdWUsIGJlIHN1cmUgdG8gYWRkIGFuXG4gKiBlbnRyeSBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIGAuLi4uZXh0ZXJucy5qc2AgZmlsZSxcbiAqIHNvIHRoYXQgY2xvc3VyZSB3b24ndCB1c2UgdGhhdCBnbG9iYWwgZm9yIGl0cyBwdXJwb3Nlcy5cbiAqL1xuZXhwb3J0IHtfZ2xvYmFsIGFzIGdsb2JhbH07XG4iXX0=