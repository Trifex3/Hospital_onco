/**
 * Returns the parentNode or the host of the element
 */
export function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UGFyZW50Tm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItYm9vdHN0cmFwLW1kL3NyYy9saWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9nZXRQYXJlbnROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUFZO0lBQ3hDLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7UUFDL0IsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFFRCxPQUFPLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQztBQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xufVxuIl19