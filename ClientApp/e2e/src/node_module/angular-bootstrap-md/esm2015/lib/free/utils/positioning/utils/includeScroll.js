/**
 * Sum or subtract the element scroll values (left and top) from a given rect object
 */
import { getScroll } from './getScroll';
export function includeScroll(rect, element, subtract = false) {
    const scrollTop = getScroll(element, 'top');
    const scrollLeft = getScroll(element, 'left');
    const modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZVNjcm9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLW1kL3NyYy9saWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9pbmNsdWRlU2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4QyxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQVMsRUFBRSxPQUFvQixFQUFFLFFBQVEsR0FBRyxLQUFLO0lBQzdFLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDbkMsSUFBSSxDQUFDLEtBQUssSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBRXBDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VtIG9yIHN1YnRyYWN0IHRoZSBlbGVtZW50IHNjcm9sbCB2YWx1ZXMgKGxlZnQgYW5kIHRvcCkgZnJvbSBhIGdpdmVuIHJlY3Qgb2JqZWN0XG4gKi9cbmltcG9ydCB7IGdldFNjcm9sbCB9IGZyb20gJy4vZ2V0U2Nyb2xsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdDogYW55LCBlbGVtZW50OiBIVE1MRWxlbWVudCwgc3VidHJhY3QgPSBmYWxzZSkge1xuICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIGNvbnN0IG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XG4gIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG5cbiAgcmV0dXJuIHJlY3Q7XG59XG4iXX0=