/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/identifiers", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CORE = '@angular/core';
    var Identifiers = /** @class */ (function () {
        function Identifiers() {
        }
        Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS = {
            name: 'ANALYZE_FOR_ENTRY_COMPONENTS',
            moduleName: CORE,
        };
        Identifiers.ElementRef = { name: 'ElementRef', moduleName: CORE };
        Identifiers.NgModuleRef = { name: 'NgModuleRef', moduleName: CORE };
        Identifiers.ViewContainerRef = { name: 'ViewContainerRef', moduleName: CORE };
        Identifiers.ChangeDetectorRef = {
            name: 'ChangeDetectorRef',
            moduleName: CORE,
        };
        Identifiers.QueryList = { name: 'QueryList', moduleName: CORE };
        Identifiers.TemplateRef = { name: 'TemplateRef', moduleName: CORE };
        Identifiers.Renderer2 = { name: 'Renderer2', moduleName: CORE };
        Identifiers.CodegenComponentFactoryResolver = {
            name: 'ÉµCodegenComponentFactoryResolver',
            moduleName: CORE,
        };
        Identifiers.ComponentFactoryResolver = {
            name: 'ComponentFactoryResolver',
            moduleName: CORE,
        };
        Identifiers.ComponentFactory = { name: 'ComponentFactory', moduleName: CORE };
        Identifiers.ComponentRef = { name: 'ComponentRef', moduleName: CORE };
        Identifiers.NgModuleFactory = { name: 'NgModuleFactory', moduleName: CORE };
        Identifiers.createModuleFactory = {
            name: 'Éµcmf',
            moduleName: CORE,
        };
        Identifiers.moduleDef = {
            name: 'Éµmod',
            moduleName: CORE,
        };
        Identifiers.moduleProviderDef = {
            name: 'Éµmpd',
            moduleName: CORE,
        };
        Identifiers.RegisterModuleFactoryFn = {
            name: 'ÉµregisterModuleFactory',
            moduleName: CORE,
        };
        Identifiers.inject = { name: 'ÉµÉµinject', moduleName: CORE };
        Identifiers.INJECTOR = { name: 'INJECTOR', moduleName: CORE };
        Identifiers.Injector = { name: 'Injector', moduleName: CORE };
        Identifiers.ÉµÉµdefineInjectable = { name: 'ÉµÉµdefineInjectable', moduleName: CORE };
        Identifiers.InjectableDef = { name: 'ÉµÉµInjectableDef', moduleName: CORE };
        Identifiers.ViewEncapsulation = {
            name: 'ViewEncapsulation',
            moduleName: CORE,
        };
        Identifiers.ChangeDetectionStrategy = {
            name: 'ChangeDetectionStrategy',
            moduleName: CORE,
        };
        Identifiers.SecurityContext = {
            name: 'SecurityContext',
            moduleName: CORE,
        };
        Identifiers.LOCALE_ID = { name: 'LOCALE_ID', moduleName: CORE };
        Identifiers.TRANSLATIONS_FORMAT = {
            name: 'TRANSLATIONS_FORMAT',
            moduleName: CORE,
        };
        Identifiers.inlineInterpolate = {
            name: 'ÉµinlineInterpolate',
            moduleName: CORE,
        };
        Identifiers.interpolate = { name: 'Éµinterpolate', moduleName: CORE };
        Identifiers.EMPTY_ARRAY = { name: 'ÉµEMPTY_ARRAY', moduleName: CORE };
        Identifiers.EMPTY_MAP = { name: 'ÉµEMPTY_MAP', moduleName: CORE };
        Identifiers.Renderer = { name: 'Renderer', moduleName: CORE };
        Identifiers.viewDef = { name: 'Éµvid', moduleName: CORE };
        Identifiers.elementDef = { name: 'Éµeld', moduleName: CORE };
        Identifiers.anchorDef = { name: 'Éµand', moduleName: CORE };
        Identifiers.textDef = { name: 'Éµted', moduleName: CORE };
        Identifiers.directiveDef = { name: 'Éµdid', moduleName: CORE };
        Identifiers.providerDef = { name: 'Éµprd', moduleName: CORE };
        Identifiers.queryDef = { name: 'Éµqud', moduleName: CORE };
        Identifiers.pureArrayDef = { name: 'Éµpad', moduleName: CORE };
        Identifiers.pureObjectDef = { name: 'Éµpod', moduleName: CORE };
        Identifiers.purePipeDef = { name: 'Éµppd', moduleName: CORE };
        Identifiers.pipeDef = { name: 'Éµpid', moduleName: CORE };
        Identifiers.nodeValue = { name: 'Éµnov', moduleName: CORE };
        Identifiers.ngContentDef = { name: 'Éµncd', moduleName: CORE };
        Identifiers.unwrapValue = { name: 'Éµunv', moduleName: CORE };
        Identifiers.createRendererType2 = { name: 'Éµcrt', moduleName: CORE };
        // type only
        Identifiers.RendererType2 = {
            name: 'RendererType2',
            moduleName: CORE,
        };
        // type only
        Identifiers.ViewDefinition = {
            name: 'ÉµViewDefinition',
            moduleName: CORE,
        };
        Identifiers.createComponentFactory = { name: 'Éµccf', moduleName: CORE };
        Identifiers.setClassMetadata = { name: 'ÉµsetClassMetadata', moduleName: CORE };
        return Identifiers;
    }());
    exports.Identifiers = Identifiers;
    function createTokenForReference(reference) {
        return { identifier: { reference: reference } };
    }
    exports.createTokenForReference = createTokenForReference;
    function createTokenForExternalReference(reflector, reference) {
        return createTokenForReference(reflector.resolveExternalReference(reference));
    }
    exports.createTokenForExternalReference = createTokenForExternalReference;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFNSCxJQUFNLElBQUksR0FBRyxlQUFlLENBQUM7SUFFN0I7UUFBQTtRQWdIQSxDQUFDO1FBL0dRLHdDQUE0QixHQUF3QjtZQUN6RCxJQUFJLEVBQUUsOEJBQThCO1lBQ3BDLFVBQVUsRUFBRSxJQUFJO1NBRWpCLENBQUM7UUFDSyxzQkFBVSxHQUF3QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3pFLHVCQUFXLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDM0UsNEJBQWdCLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNyRiw2QkFBaUIsR0FBd0I7WUFDOUMsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixVQUFVLEVBQUUsSUFBSTtTQUVqQixDQUFDO1FBQ0sscUJBQVMsR0FBd0IsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN2RSx1QkFBVyxHQUF3QixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQzNFLHFCQUFTLEdBQXdCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDdkUsMkNBQStCLEdBQXdCO1lBQzVELElBQUksRUFBRSxrQ0FBa0M7WUFDeEMsVUFBVSxFQUFFLElBQUk7U0FFakIsQ0FBQztRQUNLLG9DQUF3QixHQUF3QjtZQUNyRCxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDLFVBQVUsRUFBRSxJQUFJO1NBRWpCLENBQUM7UUFDSyw0QkFBZ0IsR0FBd0IsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3JGLHdCQUFZLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDN0UsMkJBQWUsR0FBd0IsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ25GLCtCQUFtQixHQUF3QjtZQUNoRCxJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxJQUFJO1NBRWpCLENBQUM7UUFDSyxxQkFBUyxHQUF3QjtZQUN0QyxJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxJQUFJO1NBRWpCLENBQUM7UUFDSyw2QkFBaUIsR0FBd0I7WUFDOUMsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsSUFBSTtTQUVqQixDQUFDO1FBQ0ssbUNBQXVCLEdBQXdCO1lBQ3BELElBQUksRUFBRSx3QkFBd0I7WUFDOUIsVUFBVSxFQUFFLElBQUk7U0FFakIsQ0FBQztRQUNLLGtCQUFNLEdBQXdCLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDbkUsb0JBQVEsR0FBd0IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNyRSxvQkFBUSxHQUF3QixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3JFLDhCQUFrQixHQUF3QixFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDekYseUJBQWEsR0FBd0IsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ2pGLDZCQUFpQixHQUF3QjtZQUM5QyxJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLFVBQVUsRUFBRSxJQUFJO1NBRWpCLENBQUM7UUFDSyxtQ0FBdUIsR0FBd0I7WUFDcEQsSUFBSSxFQUFFLHlCQUF5QjtZQUMvQixVQUFVLEVBQUUsSUFBSTtTQUVqQixDQUFDO1FBQ0ssMkJBQWUsR0FBd0I7WUFDNUMsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixVQUFVLEVBQUUsSUFBSTtTQUVqQixDQUFDO1FBQ0sscUJBQVMsR0FBd0IsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN2RSwrQkFBbUIsR0FBd0I7WUFDaEQsSUFBSSxFQUFFLHFCQUFxQjtZQUMzQixVQUFVLEVBQUUsSUFBSTtTQUVqQixDQUFDO1FBQ0ssNkJBQWlCLEdBQXdCO1lBQzlDLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNLLHVCQUFXLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDNUUsdUJBQVcsR0FBd0IsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUM1RSxxQkFBUyxHQUF3QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3hFLG9CQUFRLEdBQXdCLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDckUsbUJBQU8sR0FBd0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNoRSxzQkFBVSxHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ25FLHFCQUFTLEdBQXdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDbEUsbUJBQU8sR0FBd0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNoRSx3QkFBWSxHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3JFLHVCQUFXLEdBQXdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDcEUsb0JBQVEsR0FBd0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNqRSx3QkFBWSxHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3JFLHlCQUFhLEdBQXdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDdEUsdUJBQVcsR0FBd0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNwRSxtQkFBTyxHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ2hFLHFCQUFTLEdBQXdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDbEUsd0JBQVksR0FBd0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNyRSx1QkFBVyxHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3BFLCtCQUFtQixHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ25GLFlBQVk7UUFDTCx5QkFBYSxHQUF3QjtZQUMxQyxJQUFJLEVBQUUsZUFBZTtZQUNyQixVQUFVLEVBQUUsSUFBSTtTQUVqQixDQUFDO1FBQ0YsWUFBWTtRQUNMLDBCQUFjLEdBQXdCO1lBQzNDLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNLLGtDQUFzQixHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQy9FLDRCQUFnQixHQUF3QixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDL0Ysa0JBQUM7S0FBQSxBQWhIRCxJQWdIQztJQWhIWSxrQ0FBVztJQWtIeEIsU0FBZ0IsdUJBQXVCLENBQUMsU0FBYztRQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFFLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQUM7SUFDOUMsQ0FBQztJQUZELDBEQUVDO0lBRUQsU0FBZ0IsK0JBQStCLENBQzNDLFNBQTJCLEVBQUUsU0FBOEI7UUFDN0QsT0FBTyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBSEQsMEVBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuL291dHB1dC9vdXRwdXRfYXN0JztcblxuY29uc3QgQ09SRSA9ICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJzIHtcbiAgc3RhdGljIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFM6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0FOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIEVsZW1lbnRSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0VsZW1lbnRSZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIE5nTW9kdWxlUmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdOZ01vZHVsZVJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgVmlld0NvbnRhaW5lclJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnVmlld0NvbnRhaW5lclJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdG9yUmVmJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBRdWVyeUxpc3Q6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1F1ZXJ5TGlzdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgVGVtcGxhdGVSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1RlbXBsYXRlUmVmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBSZW5kZXJlcjI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1JlbmRlcmVyMicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgQ29kZWdlbkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVDb2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgQ29tcG9uZW50RmFjdG9yeTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnQ29tcG9uZW50RmFjdG9yeScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgQ29tcG9uZW50UmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdDb21wb25lbnRSZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIE5nTW9kdWxlRmFjdG9yeTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnTmdNb2R1bGVGYWN0b3J5JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBjcmVhdGVNb2R1bGVGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWNtZicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgbW9kdWxlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtW1vZCcsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgbW9kdWxlUHJvdmlkZXJEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1bXBkJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBSZWdpc3Rlck1vZHVsZUZhY3RvcnlGbjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVyZWdpc3Rlck1vZHVsZUZhY3RvcnknLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIGluamVjdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybXJtWluamVjdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgSU5KRUNUT1I6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0lOSkVDVE9SJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBJbmplY3Rvcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnSW5qZWN0b3InLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIMm1ybVkZWZpbmVJbmplY3RhYmxlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtcm1ZGVmaW5lSW5qZWN0YWJsZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgSW5qZWN0YWJsZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybXJtUluamVjdGFibGVEZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFZpZXdFbmNhcHN1bGF0aW9uOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdWaWV3RW5jYXBzdWxhdGlvbicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdGlvblN0cmF0ZWd5JyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBTZWN1cml0eUNvbnRleHQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1NlY3VyaXR5Q29udGV4dCcsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgTE9DQUxFX0lEOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdMT0NBTEVfSUQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFRSQU5TTEFUSU9OU19GT1JNQVQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1RSQU5TTEFUSU9OU19GT1JNQVQnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIGlubGluZUludGVycG9sYXRlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWlubGluZUludGVycG9sYXRlJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuICB9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIEVNUFRZX0FSUkFZOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtUVNUFRZX0FSUkFZJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBFTVBUWV9NQVA6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1RU1QVFlfTUFQJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBSZW5kZXJlcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnUmVuZGVyZXInLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHZpZXdEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dmlkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBlbGVtZW50RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVsZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgYW5jaG9yRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWFuZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgdGV4dERlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybV0ZWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGRpcmVjdGl2ZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVkaWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHByb3ZpZGVyRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXByZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcXVlcnlEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cXVkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlQXJyYXlEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGFkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlT2JqZWN0RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBvZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZVBpcGVEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHBkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwaXBlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbm9kZVZhbHVlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5vdicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbmdDb250ZW50RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5jZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgdW53cmFwVmFsdWU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dW52JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBjcmVhdGVSZW5kZXJlclR5cGUyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWNydCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICAvLyB0eXBlIG9ubHlcbiAgc3RhdGljIFJlbmRlcmVyVHlwZTI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1JlbmRlcmVyVHlwZTInLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgLy8gdHlwZSBvbmx5XG4gIHN0YXRpYyBWaWV3RGVmaW5pdGlvbjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVWaWV3RGVmaW5pdGlvbicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcbiAgc3RhdGljIGNyZWF0ZUNvbXBvbmVudEZhY3Rvcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1Y2NmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBzZXRDbGFzc01ldGFkYXRhOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXNldENsYXNzTWV0YWRhdGEnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRva2VuRm9yUmVmZXJlbmNlKHJlZmVyZW5jZTogYW55KTogQ29tcGlsZVRva2VuTWV0YWRhdGEge1xuICByZXR1cm4ge2lkZW50aWZpZXI6IHtyZWZlcmVuY2U6IHJlZmVyZW5jZX19O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9rZW5Gb3JFeHRlcm5hbFJlZmVyZW5jZShcbiAgICByZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IsIHJlZmVyZW5jZTogby5FeHRlcm5hbFJlZmVyZW5jZSk6IENvbXBpbGVUb2tlbk1ldGFkYXRhIHtcbiAgcmV0dXJuIGNyZWF0ZVRva2VuRm9yUmVmZXJlbmNlKHJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UocmVmZXJlbmNlKSk7XG59XG4iXX0=