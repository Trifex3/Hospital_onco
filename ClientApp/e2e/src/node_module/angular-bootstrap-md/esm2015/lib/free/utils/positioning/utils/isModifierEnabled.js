/**
 * Helper used to know if the given modifier is enabled.
 */
export function isModifierEnabled(options, modifierName) {
    return options
        && options.modifiers
        && options.modifiers[modifierName]
        && options.modifiers[modifierName].enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNNb2RpZmllckVuYWJsZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWJvb3RzdHJhcC1tZC9zcmMvbGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvaXNNb2RpZmllckVuYWJsZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsT0FBWSxFQUFFLFlBQW9CO0lBQ2xFLE9BQU8sT0FBTztXQUNULE9BQU8sQ0FBQyxTQUFTO1dBQ2pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1dBQy9CLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQy9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChvcHRpb25zOiBhbnksIG1vZGlmaWVyTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBvcHRpb25zXG4gICAgJiYgb3B0aW9ucy5tb2RpZmllcnNcbiAgICAmJiBvcHRpb25zLm1vZGlmaWVyc1ttb2RpZmllck5hbWVdXG4gICAgJiYgb3B0aW9ucy5tb2RpZmllcnNbbW9kaWZpZXJOYW1lXS5lbmFibGVkO1xufVxuIl19