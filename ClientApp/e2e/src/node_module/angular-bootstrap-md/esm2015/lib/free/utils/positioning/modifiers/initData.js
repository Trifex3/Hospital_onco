import { computeAutoPlacement, getReferenceOffsets, getTargetOffsets } from '../utils/index';
export function initData(targetElement, hostElement, position, options) {
    const hostElPosition = getReferenceOffsets(targetElement, hostElement);
    const placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    let placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement,
        placementAuto
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdERhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWJvb3RzdHJhcC1tZC9zcmMvbGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvbW9kaWZpZXJzL2luaXREYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNqQixNQUFNLGdCQUFnQixDQUFDO0FBSXhCLE1BQU0sVUFBVSxRQUFRLENBQ3RCLGFBQTBCLEVBQUUsV0FBd0IsRUFBRSxRQUFnQixFQUFFLE9BQWdCO0lBR3hGLE1BQU0sY0FBYyxHQUFHLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RSxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVoRCxzREFBc0Q7SUFDdEQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUM5QixDQUFDLENBQUMsUUFBUSxDQUFDO0lBRWIsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRixTQUFTLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFeEYsT0FBTztRQUNMLE9BQU87UUFDUCxRQUFRLEVBQUU7WUFDUixNQUFNLEVBQUUsYUFBYTtZQUNyQixJQUFJLEVBQUUsV0FBVztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNELGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFNBQVM7UUFDVCxhQUFhO0tBQ2QsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjb21wdXRlQXV0b1BsYWNlbWVudCxcbiAgZ2V0UmVmZXJlbmNlT2Zmc2V0cyxcbiAgZ2V0VGFyZ2V0T2Zmc2V0c1xufSBmcm9tICcuLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IERhdGEsIE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEoXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHBvc2l0aW9uOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNcbik6IERhdGEge1xuXG4gIGNvbnN0IGhvc3RFbFBvc2l0aW9uID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XG4gIGNvbnN0IHBsYWNlbWVudEF1dG8gPSAhIXBvc2l0aW9uLm1hdGNoKC9hdXRvL2cpO1xuXG4gIC8vIHN1cHBvcnQgb2xkIHBsYWNlbWVudHMgJ2F1dG8gbGVmdHxyaWdodHx0b3B8Ym90dG9tJ1xuICBsZXQgcGxhY2VtZW50ID0gISFwb3NpdGlvbi5tYXRjaCgvYXV0b1xccyhsZWZ0fHJpZ2h0fHRvcHxib3R0b20pL2cpXG4gICAgPyBwb3NpdGlvbi5zcGxpdCgnICcpWzFdIHx8ICcnXG4gICAgOiBwb3NpdGlvbjtcblxuICBjb25zdCB0YXJnZXRPZmZzZXQgPSBnZXRUYXJnZXRPZmZzZXRzKHRhcmdldEVsZW1lbnQsIGhvc3RFbFBvc2l0aW9uLCBwbGFjZW1lbnQpO1xuICBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChwbGFjZW1lbnQsIGhvc3RFbFBvc2l0aW9uLCB0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIGluc3RhbmNlOiB7XG4gICAgICB0YXJnZXQ6IHRhcmdldEVsZW1lbnQsXG4gICAgICBob3N0OiBob3N0RWxlbWVudCxcbiAgICAgIGFycm93OiBudWxsXG4gICAgfSxcbiAgICBvZmZzZXRzOiB7XG4gICAgICB0YXJnZXQ6IHRhcmdldE9mZnNldCxcbiAgICAgIGhvc3Q6IGhvc3RFbFBvc2l0aW9uLFxuICAgICAgYXJyb3c6IG51bGxcbiAgICB9LFxuICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudCxcbiAgICBwbGFjZW1lbnRBdXRvXG4gIH07XG59XG4iXX0=