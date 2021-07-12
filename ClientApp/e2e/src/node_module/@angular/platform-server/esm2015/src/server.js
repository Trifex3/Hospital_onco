/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵAnimationEngine } from '@angular/animations/browser';
import { DOCUMENT, PlatformLocation, ViewportScroller, ɵNullViewportScroller as NullViewportScroller, ɵPLATFORM_SERVER_ID as PLATFORM_SERVER_ID } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule, NgZone, Optional, PLATFORM_ID, PLATFORM_INITIALIZER, RendererFactory2, Testability, createPlatformFactory, platformCore, ɵALLOW_MULTIPLE_PLATFORMS as ALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { BrowserModule, EVENT_MANAGER_PLUGINS, ɵSharedStylesHost as SharedStylesHost, ɵgetDOM as getDOM } from '@angular/platform-browser';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { NoopAnimationsModule, ɵAnimationRendererFactory } from '@angular/platform-browser/animations';
import { DominoAdapter, parseDocument } from './domino_adapter';
import { SERVER_HTTP_PROVIDERS } from './http';
import { ServerPlatformLocation } from './location';
import { PlatformState } from './platform_state';
import { ServerEventManagerPlugin } from './server_events';
import { ServerRendererFactory2 } from './server_renderer';
import { ServerStylesHost } from './styles_host';
import { INITIAL_CONFIG } from './tokens';
/**
 * @param {?} feature
 * @return {?}
 */
function notSupported(feature) {
    throw new Error(`platform-server does not support '${feature}'.`);
}
/** @type {?} */
export const INTERNAL_SERVER_PLATFORM_PROVIDERS = [
    { provide: DOCUMENT, useFactory: _document, deps: [Injector] },
    { provide: PLATFORM_ID, useValue: PLATFORM_SERVER_ID },
    { provide: PLATFORM_INITIALIZER, useFactory: initDominoAdapter, multi: true, deps: [Injector] }, {
        provide: PlatformLocation,
        useClass: ServerPlatformLocation,
        deps: [DOCUMENT, [Optional, INITIAL_CONFIG]]
    },
    { provide: PlatformState, deps: [DOCUMENT] },
    // Add special provider that allows multiple instances of platformServer* to be created.
    { provide: ALLOW_MULTIPLE_PLATFORMS, useValue: true }
];
/**
 * @param {?} injector
 * @return {?}
 */
function initDominoAdapter(injector) {
    return (/**
     * @return {?}
     */
    () => { DominoAdapter.makeCurrent(); });
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
export function instantiateServerRendererFactory(renderer, engine, zone) {
    return new ɵAnimationRendererFactory(renderer, engine, zone);
}
/** @type {?} */
export const SERVER_RENDER_PROVIDERS = [
    ServerRendererFactory2,
    {
        provide: RendererFactory2,
        useFactory: instantiateServerRendererFactory,
        deps: [ServerRendererFactory2, ɵAnimationEngine, NgZone]
    },
    ServerStylesHost,
    { provide: SharedStylesHost, useExisting: ServerStylesHost },
    { provide: EVENT_MANAGER_PLUGINS, multi: true, useClass: ServerEventManagerPlugin },
];
/**
 * The ng module for the server.
 *
 * \@publicApi
 */
export class ServerModule {
}
ServerModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserModule],
                imports: [HttpClientModule, NoopAnimationsModule],
                providers: [
                    SERVER_RENDER_PROVIDERS,
                    SERVER_HTTP_PROVIDERS,
                    { provide: Testability, useValue: null },
                    { provide: ViewportScroller, useClass: NullViewportScroller },
                ],
            },] }
];
/**
 * @param {?} injector
 * @return {?}
 */
function _document(injector) {
    /** @type {?} */
    let config = injector.get(INITIAL_CONFIG, null);
    if (config && config.document) {
        return parseDocument(config.document, config.url);
    }
    else {
        return getDOM().createHtmlDocument();
    }
}
/**
 * \@publicApi
 * @type {?}
 */
export const platformServer = createPlatformFactory(platformCore, 'server', INTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * The server platform that supports the runtime compiler.
 *
 * \@publicApi
 * @type {?}
 */
export const platformDynamicServer = createPlatformFactory(platformCoreDynamic, 'serverDynamic', INTERNAL_SERVER_PLATFORM_PROVIDERS);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixJQUFJLG9CQUFvQixFQUFFLG1CQUFtQixJQUFJLGtCQUFrQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkssT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUE2QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUF5QixnQkFBZ0IsRUFBZ0MsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSx5QkFBeUIsSUFBSSx3QkFBd0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsVCxPQUFPLEVBQUMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixJQUFJLGdCQUFnQixFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN6SSxPQUFPLEVBQUMsb0JBQW9CLElBQUksbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RixPQUFPLEVBQUMsb0JBQW9CLEVBQUUseUJBQXlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUVyRyxPQUFPLEVBQUMsYUFBYSxFQUFFLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUM3QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxN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LEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25EO1NBQU07UUFDTCxPQUFPLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDdEM7QUFDSCxDQUFDOzs7OztBQUtELE1BQU0sT0FBTyxjQUFjLEdBQ3ZCLHFCQUFxQixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsa0NBQWtDLENBQUM7Ozs7Ozs7QUFPckYsTUFBTSxPQUFPLHFCQUFxQixHQUM5QixxQkFBcUIsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ybVBbmltYXRpb25FbmdpbmV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3Nlcic7XG5pbXBvcnQge0RPQ1VNRU5ULCBQbGF0Zm9ybUxvY2F0aW9uLCBWaWV3cG9ydFNjcm9sbGVyLCDJtU51bGxWaWV3cG9ydFNjcm9sbGVyIGFzIE51bGxWaWV3cG9ydFNjcm9sbGVyLCDJtVBMQVRGT1JNX1NFUlZFUl9JRCBhcyBQTEFURk9STV9TRVJWRVJfSUR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBOZ01vZHVsZSwgTmdab25lLCBPcHRpb25hbCwgUExBVEZPUk1fSUQsIFBMQVRGT1JNX0lOSVRJQUxJWkVSLCBQbGF0Zm9ybVJlZiwgUHJvdmlkZXIsIFJlbmRlcmVyRmFjdG9yeTIsIFJvb3RSZW5kZXJlciwgU3RhdGljUHJvdmlkZXIsIFRlc3RhYmlsaXR5LCBjcmVhdGVQbGF0Zm9ybUZhY3RvcnksIHBsYXRmb3JtQ29yZSwgybVBTExPV19NVUxUSVBMRV9QTEFURk9STVMgYXMgQUxMT1dfTVVMVElQTEVfUExBVEZPUk1TfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZSwgRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCDJtVNoYXJlZFN0eWxlc0hvc3QgYXMgU2hhcmVkU3R5bGVzSG9zdCwgybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7ybVwbGF0Zm9ybUNvcmVEeW5hbWljIGFzIHBsYXRmb3JtQ29yZUR5bmFtaWN9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQge05vb3BBbmltYXRpb25zTW9kdWxlLCDJtUFuaW1hdGlvblJlbmRlcmVyRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtEb21pbm9BZGFwdGVyLCBwYXJzZURvY3VtZW50fSBmcm9tICcuL2RvbWlub19hZGFwdGVyJztcbmltcG9ydCB7U0VSVkVSX0hUVFBfUFJPVklERVJTfSBmcm9tICcuL2h0dHAnO1xuaW1wb3J0IHtTZXJ2ZXJQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL2xvY2F0aW9uJztcbmltcG9ydCB7UGxhdGZvcm1TdGF0ZX0gZnJvbSAnLi9wbGF0Zm9ybV9zdGF0ZSc7XG5pbXBvcnQge1NlcnZlckV2ZW50TWFuYWdlclBsdWdpbn0gZnJvbSAnLi9zZXJ2ZXJfZXZlbnRzJztcbmltcG9ydCB7U2VydmVyUmVuZGVyZXJGYWN0b3J5Mn0gZnJvbSAnLi9zZXJ2ZXJfcmVuZGVyZXInO1xuaW1wb3J0IHtTZXJ2ZXJTdHlsZXNIb3N0fSBmcm9tICcuL3N0eWxlc19ob3N0JztcbmltcG9ydCB7SU5JVElBTF9DT05GSUcsIFBsYXRmb3JtQ29uZmlnfSBmcm9tICcuL3Rva2Vucyc7XG5cbmZ1bmN0aW9uIG5vdFN1cHBvcnRlZChmZWF0dXJlOiBzdHJpbmcpOiBFcnJvciB7XG4gIHRocm93IG5ldyBFcnJvcihgcGxhdGZvcm0tc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgJyR7ZmVhdHVyZX0nLmApO1xufVxuXG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX1BMQVRGT1JNX1BST1ZJREVSUzogU3RhdGljUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IERPQ1VNRU5ULCB1c2VGYWN0b3J5OiBfZG9jdW1lbnQsIGRlcHM6IFtJbmplY3Rvcl19LFxuICB7cHJvdmlkZTogUExBVEZPUk1fSUQsIHVzZVZhbHVlOiBQTEFURk9STV9TRVJWRVJfSUR9LFxuICB7cHJvdmlkZTogUExBVEZPUk1fSU5JVElBTElaRVIsIHVzZUZhY3Rvcnk6IGluaXREb21pbm9BZGFwdGVyLCBtdWx0aTogdHJ1ZSwgZGVwczogW0luamVjdG9yXX0sIHtcbiAgICBwcm92aWRlOiBQbGF0Zm9ybUxvY2F0aW9uLFxuICAgIHVzZUNsYXNzOiBTZXJ2ZXJQbGF0Zm9ybUxvY2F0aW9uLFxuICAgIGRlcHM6IFtET0NVTUVOVCwgW09wdGlvbmFsLCBJTklUSUFMX0NPTkZJR11dXG4gIH0sXG4gIHtwcm92aWRlOiBQbGF0Zm9ybVN0YXRlLCBkZXBzOiBbRE9DVU1FTlRdfSxcbiAgLy8gQWRkIHNwZWNpYWwgcHJvdmlkZXIgdGhhdCBhbGxvd3MgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHBsYXRmb3JtU2VydmVyKiB0byBiZSBjcmVhdGVkLlxuICB7cHJvdmlkZTogQUxMT1dfTVVMVElQTEVfUExBVEZPUk1TLCB1c2VWYWx1ZTogdHJ1ZX1cbl07XG5cbmZ1bmN0aW9uIGluaXREb21pbm9BZGFwdGVyKGluamVjdG9yOiBJbmplY3Rvcikge1xuICByZXR1cm4gKCkgPT4geyBEb21pbm9BZGFwdGVyLm1ha2VDdXJyZW50KCk7IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZVNlcnZlclJlbmRlcmVyRmFjdG9yeShcbiAgICByZW5kZXJlcjogUmVuZGVyZXJGYWN0b3J5MiwgZW5naW5lOiDJtUFuaW1hdGlvbkVuZ2luZSwgem9uZTogTmdab25lKSB7XG4gIHJldHVybiBuZXcgybVBbmltYXRpb25SZW5kZXJlckZhY3RvcnkocmVuZGVyZXIsIGVuZ2luZSwgem9uZSk7XG59XG5cbmV4cG9ydCBjb25zdCBTRVJWRVJfUkVOREVSX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAgU2VydmVyUmVuZGVyZXJGYWN0b3J5MixcbiAge1xuICAgIHByb3ZpZGU6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVTZXJ2ZXJSZW5kZXJlckZhY3RvcnksXG4gICAgZGVwczogW1NlcnZlclJlbmRlcmVyRmFjdG9yeTIsIMm1QW5pbWF0aW9uRW5naW5lLCBOZ1pvbmVdXG4gIH0sXG4gIFNlcnZlclN0eWxlc0hvc3QsXG4gIHtwcm92aWRlOiBTaGFyZWRTdHlsZXNIb3N0LCB1c2VFeGlzdGluZzogU2VydmVyU3R5bGVzSG9zdH0sXG4gIHtwcm92aWRlOiBFVkVOVF9NQU5BR0VSX1BMVUdJTlMsIG11bHRpOiB0cnVlLCB1c2VDbGFzczogU2VydmVyRXZlbnRNYW5hZ2VyUGx1Z2lufSxcbl07XG5cbi8qKlxuICogVGhlIG5nIG1vZHVsZSBmb3IgdGhlIHNlcnZlci5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtCcm93c2VyTW9kdWxlXSxcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGUsIE5vb3BBbmltYXRpb25zTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU0VSVkVSX1JFTkRFUl9QUk9WSURFUlMsXG4gICAgU0VSVkVSX0hUVFBfUFJPVklERVJTLFxuICAgIHtwcm92aWRlOiBUZXN0YWJpbGl0eSwgdXNlVmFsdWU6IG51bGx9LFxuICAgIHtwcm92aWRlOiBWaWV3cG9ydFNjcm9sbGVyLCB1c2VDbGFzczogTnVsbFZpZXdwb3J0U2Nyb2xsZXJ9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJNb2R1bGUge1xufVxuXG5mdW5jdGlvbiBfZG9jdW1lbnQoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGxldCBjb25maWc6IFBsYXRmb3JtQ29uZmlnfG51bGwgPSBpbmplY3Rvci5nZXQoSU5JVElBTF9DT05GSUcsIG51bGwpO1xuICBpZiAoY29uZmlnICYmIGNvbmZpZy5kb2N1bWVudCkge1xuICAgIHJldHVybiBwYXJzZURvY3VtZW50KGNvbmZpZy5kb2N1bWVudCwgY29uZmlnLnVybCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldERPTSgpLmNyZWF0ZUh0bWxEb2N1bWVudCgpO1xuICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgcGxhdGZvcm1TZXJ2ZXIgPVxuICAgIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeShwbGF0Zm9ybUNvcmUsICdzZXJ2ZXInLCBJTlRFUk5BTF9TRVJWRVJfUExBVEZPUk1fUFJPVklERVJTKTtcblxuLyoqXG4gKiBUaGUgc2VydmVyIHBsYXRmb3JtIHRoYXQgc3VwcG9ydHMgdGhlIHJ1bnRpbWUgY29tcGlsZXIuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgcGxhdGZvcm1EeW5hbWljU2VydmVyID1cbiAgICBjcmVhdGVQbGF0Zm9ybUZhY3RvcnkocGxhdGZvcm1Db3JlRHluYW1pYywgJ3NlcnZlckR5bmFtaWMnLCBJTlRFUk5BTF9TRVJWRVJfUExBVEZPUk1fUFJPVklERVJTKTtcbiJdfQ==