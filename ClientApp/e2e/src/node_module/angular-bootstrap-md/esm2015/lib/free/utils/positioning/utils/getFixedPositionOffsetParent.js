/**
 * Finds the first parent of an element that has a transformed property defined
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { isIE } from './isIE';
export function getFixedPositionOffsetParent(element) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLW1kL3NyYy9saWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU5QixNQUFNLFVBQVUsNEJBQTRCLENBQUMsT0FBWTtJQUN2RCxnR0FBZ0c7SUFDaEcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFLEVBQUU7UUFDakQsT0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDO0tBQ2hDO0lBRUQsSUFBSSxFQUFFLEdBQVEsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVwQyxPQUFPLEVBQUUsSUFBSSx3QkFBd0IsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEtBQUssTUFBTSxFQUFFO1FBQ2pFLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQ3ZCO0lBRUQsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUN4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gKi9cblxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4vaXNJRSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFKCkpIHtcbiAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBsZXQgZWw6IGFueSA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG4iXX0=