import { EventEmitter, ElementRef, Input, Output, Directive, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
export class BaseChartDirective {
    constructor(element, platformId) {
        this.element = element;
        this.labels = [];
        this.options = { legend: { display: false } };
        this.legend = false;
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    ngOnInit() {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    }
    ngOnChanges(changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) &&
                !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    }
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    }
    getChartBuilder(ctx) {
        const datasets = this.getDatasets();
        const options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = (event, active) => {
                if (active && active.length) {
                    this.chartHover.emit({ event, active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = (event, active) => {
                this.chartClick.emit({ event, active });
            };
        }
        const opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets,
            },
            options: options,
        };
        return new Chart(ctx, opts);
    }
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    getPointDataAtEvent(event) {
        if (event.active.length > 0) {
            const datasetIndex = event.active[0]._datasetIndex;
            const dataIndex = event.active[0]._index;
            const dataObject = this.datasets[datasetIndex].data[dataIndex];
            return dataObject;
        }
    }
    updateChartData(newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach((dataset, i) => {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    }
    getDatasets() {
        let datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || (!this.datasets.length && (this.data && this.data.length))) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map((data, index) => {
                    return { data, label: this.labels[index] || `Label ${index}` };
                });
            }
            else {
                datasets = [{ data: this.data, label: `Label 0` }];
            }
        }
        if ((this.datasets && this.datasets.length) || (datasets && datasets.length)) {
            datasets = (this.datasets || datasets).map((elm, index) => {
                const newElm = Object.assign({}, elm);
                if (this.colors && this.colors.length) {
                    Object.assign(newElm, this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error(`ng-charts configuration error,
      data or datasets field are required to render char ${this.chartType}`);
        }
        return datasets;
    }
    refresh() {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx);
    }
}
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96],
];
BaseChartDirective.decorators = [
    { type: Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] }
];
BaseChartDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
BaseChartDirective.propDecorators = {
    data: [{ type: Input }],
    datasets: [{ type: Input }],
    labels: [{ type: Input }],
    options: [{ type: Input }],
    chartType: [{ type: Input }],
    colors: [{ type: Input }],
    legend: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartHover: [{ type: Output }]
};
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8),
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1),
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map((color) => rgba(color, 0.6)),
        borderColor: colors.map(() => '#fff'),
        pointBackgroundColor: colors.map((color) => rgba(color, 1)),
        pointBorderColor: colors.map(() => '#fff'),
        pointHoverBackgroundColor: colors.map((color) => rgba(color, 1)),
        pointHoverBorderColor: colors.map((color) => rgba(color, 1)),
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map((color) => rgba(color, 0.6)),
        borderColor: colors.map((color) => rgba(color, 1)),
        hoverBackgroundColor: colors.map((color) => rgba(color, 0.8)),
        hoverBorderColor: colors.map((color) => rgba(color, 1)),
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 */
function generateColors(count) {
    const colorsArr = new Array(count);
    for (let i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1ib290c3RyYXAtbWQvc3JjL2xpYi9mcmVlL2NoYXJ0cy9jaGFydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUlMLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLGtCQUFrQjtJQW1DN0IsWUFBMEIsT0FBbUIsRUFBdUIsVUFBa0I7UUFBNUQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQWpCN0IsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUc5QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU1wRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FB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SUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFO1FBQ25ELE9BQU8sZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQy9DO0lBRUQsSUFBSSxTQUFTLEtBQUssV0FBVyxFQUFFO1FBQzdCLE9BQU8scUJBQXFCLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDckQ7SUFFRCxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksU0FBUyxLQUFLLE9BQU8sRUFBRTtRQUNqRCxPQUFPLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUVELElBQUksU0FBUyxLQUFLLEtBQUssSUFBSSxTQUFTLEtBQUssZUFBZSxFQUFFO1FBQ3hELE9BQU8sY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzdDO0lBQ0QsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRGlyZWN0aXZlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL2NvbG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuL2NvbG9ycy5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIENoYXJ0OiBhbnk7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2NhbnZhc1ttZGJDaGFydF0nLCBleHBvcnRBczogJ21kYi1iYXNlLWNoYXJ0JyB9KVxuZXhwb3J0IGNsYXNzIEJhc2VDaGFydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQsIENvbG9ycyB7XG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdENvbG9yczogQXJyYXk8bnVtYmVyW10+ID0gW1xuICAgIFsyNTUsIDk5LCAxMzJdLFxuICAgIFs1NCwgMTYyLCAyMzVdLFxuICAgIFsyNTUsIDIwNiwgODZdLFxuICAgIFsyMzEsIDIzMywgMjM3XSxcbiAgICBbNzUsIDE5MiwgMTkyXSxcbiAgICBbMTUxLCAxODcsIDIwNV0sXG4gICAgWzIyMCwgMjIwLCAyMjBdLFxuICAgIFsyNDcsIDcwLCA3NF0sXG4gICAgWzcwLCAxOTEsIDE4OV0sXG4gICAgWzI1MywgMTgwLCA5Ml0sXG4gICAgWzE0OCwgMTU5LCAxNzddLFxuICAgIFs3NywgODMsIDk2XSxcbiAgXTtcblxuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogbnVtYmVyW10gfCBhbnlbXTtcbiAgQElucHV0KCkgcHVibGljIGRhdGFzZXRzOiBhbnlbXTtcbiAgQElucHV0KCkgcHVibGljIGxhYmVsczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogYW55ID0geyBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfSB9O1xuICBASW5wdXQoKSBwdWJsaWMgY2hhcnRUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xvcnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpIHB1YmxpYyBsZWdlbmQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBjdHg6IGFueTtcbiAgcHVibGljIGNoYXJ0OiBhbnk7XG5cbiAgY3ZzOiBhbnk7XG4gIGluaXRGbGFnID0gZmFsc2U7XG5cbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIHRoaXMuY3ZzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmRhdGEgfHwgdGhpcy5kYXRhc2V0cykge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgY2hhbmdlcyBhcmUgaW4gdGhlIGRhdGEgb3IgZGF0YXNldHNcbiAgICAgIGlmIChcbiAgICAgICAgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSB8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkYXRhc2V0cycpKSAmJlxuICAgICAgICAhY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbGFiZWxzJylcbiAgICAgICkge1xuICAgICAgICBpZiAoY2hhbmdlc1snZGF0YSddKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFydERhdGEoY2hhbmdlc1snZGF0YSddLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFydERhdGEoY2hhbmdlc1snZGF0YXNldHMnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSByZWJ1aWxkIHRoZSBjaGFydFxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGFydEJ1aWxkZXIoY3R4OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGRhdGFzZXRzOiBhbnkgPSB0aGlzLmdldERhdGFzZXRzKCk7XG5cbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICh0aGlzLmxlZ2VuZCA9PT0gZmFsc2UpIHtcbiAgICAgIG9wdGlvbnMubGVnZW5kID0geyBkaXNwbGF5OiBmYWxzZSB9O1xuICAgIH1cbiAgICAvLyBob2NrIGZvciBvbkhvdmVyIGFuZCBvbkNsaWNrIGV2ZW50c1xuICAgIG9wdGlvbnMuaG92ZXIgPSBvcHRpb25zLmhvdmVyIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5ob3Zlci5vbkhvdmVyKSB7XG4gICAgICBvcHRpb25zLmhvdmVyLm9uSG92ZXIgPSAoZXZlbnQ6IGFueSwgYWN0aXZlOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUgJiYgYWN0aXZlLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KHsgZXZlbnQsIGFjdGl2ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMub25DbGljaykge1xuICAgICAgb3B0aW9ucy5vbkNsaWNrID0gKGV2ZW50OiBhbnksIGFjdGl2ZTogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGV2ZW50LCBhY3RpdmUgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB0eXBlOiB0aGlzLmNoYXJ0VHlwZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiB0aGlzLmxhYmVscyxcbiAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgQ2hhcnQoY3R4LCBvcHRzKTtcbiAgfVxuXG4gIC8vIGZlYXR1cmUoY2hhcnQpOiBhZGRlZCBnZXRQb2ludERhdGFBdEV2ZW50IHdoaWNoIHdpbGwgcmV0dXJuIGNsaWNrZWQgY2hhcnQncyBwb2ludCBkYXRhXG4gIHB1YmxpYyBnZXRQb2ludERhdGFBdEV2ZW50KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQuYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRhdGFzZXRJbmRleCA9IGV2ZW50LmFjdGl2ZVswXS5fZGF0YXNldEluZGV4O1xuICAgICAgY29uc3QgZGF0YUluZGV4ID0gZXZlbnQuYWN0aXZlWzBdLl9pbmRleDtcbiAgICAgIGNvbnN0IGRhdGFPYmplY3QgPSB0aGlzLmRhdGFzZXRzW2RhdGFzZXRJbmRleF0uZGF0YVtkYXRhSW5kZXhdO1xuICAgICAgcmV0dXJuIGRhdGFPYmplY3Q7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGFydERhdGEobmV3RGF0YVZhbHVlczogbnVtYmVyW10gfCBhbnlbXSk6IHZvaWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0RhdGFWYWx1ZXNbMF0uZGF0YSkpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cy5mb3JFYWNoKChkYXRhc2V0OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBkYXRhc2V0LmRhdGEgPSBuZXdEYXRhVmFsdWVzW2ldLmRhdGE7XG5cbiAgICAgICAgaWYgKG5ld0RhdGFWYWx1ZXNbaV0ubGFiZWwpIHtcbiAgICAgICAgICBkYXRhc2V0LmxhYmVsID0gbmV3RGF0YVZhbHVlc1tpXS5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbmV3RGF0YVZhbHVlcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldERhdGFzZXRzKCk6IGFueSB7XG4gICAgbGV0IGRhdGFzZXRzOiBhbnkgPSB2b2lkIDA7XG4gICAgLy8gaW4gY2FzZSBpZiBkYXRhc2V0cyBpcyBub3QgcHJvdmlkZWQsIGJ1dCBkYXRhIGlzIHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZGF0YXNldHMgfHwgKCF0aGlzLmRhdGFzZXRzLmxlbmd0aCAmJiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGgpKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhWzBdKSkge1xuICAgICAgICBkYXRhc2V0cyA9ICh0aGlzLmRhdGEgYXMgQXJyYXk8bnVtYmVyW10+KS5tYXAoKGRhdGE6IG51bWJlcltdLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgZGF0YSwgbGFiZWw6IHRoaXMubGFiZWxzW2luZGV4XSB8fCBgTGFiZWwgJHtpbmRleH1gIH07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YXNldHMgPSBbeyBkYXRhOiB0aGlzLmRhdGEsIGxhYmVsOiBgTGFiZWwgMGAgfV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLmRhdGFzZXRzICYmIHRoaXMuZGF0YXNldHMubGVuZ3RoKSB8fCAoZGF0YXNldHMgJiYgZGF0YXNldHMubGVuZ3RoKSkge1xuICAgICAgZGF0YXNldHMgPSAodGhpcy5kYXRhc2V0cyB8fCBkYXRhc2V0cykubWFwKChlbG06IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbG06IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIGVsbSk7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ycyAmJiB0aGlzLmNvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld0VsbSwgdGhpcy5jb2xvcnNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld0VsbSwgZ2V0Q29sb3JzKHRoaXMuY2hhcnRUeXBlLCBpbmRleCwgbmV3RWxtLmRhdGEubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0VsbTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghZGF0YXNldHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbmctY2hhcnRzIGNvbmZpZ3VyYXRpb24gZXJyb3IsXG4gICAgICBkYXRhIG9yIGRhdGFzZXRzIGZpZWxkIGFyZSByZXF1aXJlZCB0byByZW5kZXIgY2hhciAke3RoaXMuY2hhcnRUeXBlfWApO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhc2V0cztcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaCgpOiBhbnkge1xuICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5nZXRDaGFydEJ1aWxkZXIodGhpcy5jdHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJnYmEoY29sb3VyOiBBcnJheTxudW1iZXI+LCBhbHBoYTogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuICdyZ2JhKCcgKyBjb2xvdXIuY29uY2F0KGFscGhhKS5qb2luKCcsJykgKyAnKSc7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TGluZUNvbG9yKGNvbG9yczogQXJyYXk8bnVtYmVyPik6IENvbG9yIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAwLjQpLFxuICAgIGJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMSksXG4gICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAxKSxcbiAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDAuOCksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEJhckNvbG9yKGNvbG9yczogQXJyYXk8bnVtYmVyPik6IENvbG9yIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAwLjYpLFxuICAgIGJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMSksXG4gICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoY29sb3JzLCAwLjgpLFxuICAgIGhvdmVyQm9yZGVyQ29sb3I6IHJnYmEoY29sb3JzLCAxKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UGllQ29sb3JzKGNvbG9yczogQXJyYXk8bnVtYmVyW10+KTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMC42KSksXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKCkgPT4gJyNmZmYnKSxcbiAgICBwb2ludEJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gICAgcG9pbnRCb3JkZXJDb2xvcjogY29sb3JzLm1hcCgoKSA9PiAnI2ZmZicpLFxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFBvbGFyQXJlYUNvbG9ycyhjb2xvcnM6IEFycmF5PG51bWJlcltdPik6IENvbG9yIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMC42KSksXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDAuOCkpLFxuICAgIGhvdmVyQm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpOiBudW1iZXJbXSB7XG4gIHJldHVybiBbZ2V0UmFuZG9tSW50KDAsIDI1NSksIGdldFJhbmRvbUludCgwLCAyNTUpLCBnZXRSYW5kb21JbnQoMCwgMjU1KV07XG59XG5cbi8qKlxuICogR2VuZXJhdGUgY29sb3JzIGZvciBsaW5lfGJhciBjaGFydHNcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVDb2xvcihpbmRleDogbnVtYmVyKTogbnVtYmVyW10ge1xuICByZXR1cm4gQmFzZUNoYXJ0RGlyZWN0aXZlLmRlZmF1bHRDb2xvcnNbaW5kZXhdIHx8IGdldFJhbmRvbUNvbG9yKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgY29sb3JzIGZvciBwaWV8ZG91Z2hudXQgY2hhcnRzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3JzKGNvdW50OiBudW1iZXIpOiBBcnJheTxudW1iZXJbXT4ge1xuICBjb25zdCBjb2xvcnNBcnI6IEFycmF5PG51bWJlcltdPiA9IG5ldyBBcnJheShjb3VudCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIGNvbG9yc0FycltpXSA9IEJhc2VDaGFydERpcmVjdGl2ZS5kZWZhdWx0Q29sb3JzW2ldIHx8IGdldFJhbmRvbUNvbG9yKCk7XG4gIH1cbiAgcmV0dXJuIGNvbG9yc0Fycjtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBjb2xvcnMgYnkgY2hhcnQgdHlwZVxuICovXG5mdW5jdGlvbiBnZXRDb2xvcnMoY2hhcnRUeXBlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBhbnkge1xuICBpZiAoY2hhcnRUeXBlID09PSAncGllJyB8fCBjaGFydFR5cGUgPT09ICdkb3VnaG51dCcpIHtcbiAgICByZXR1cm4gZm9ybWF0UGllQ29sb3JzKGdlbmVyYXRlQ29sb3JzKGNvdW50KSk7XG4gIH1cblxuICBpZiAoY2hhcnRUeXBlID09PSAncG9sYXJBcmVhJykge1xuICAgIHJldHVybiBmb3JtYXRQb2xhckFyZWFDb2xvcnMoZ2VuZXJhdGVDb2xvcnMoY291bnQpKTtcbiAgfVxuXG4gIGlmIChjaGFydFR5cGUgPT09ICdsaW5lJyB8fCBjaGFydFR5cGUgPT09ICdyYWRhcicpIHtcbiAgICByZXR1cm4gZm9ybWF0TGluZUNvbG9yKGdlbmVyYXRlQ29sb3IoaW5kZXgpKTtcbiAgfVxuXG4gIGlmIChjaGFydFR5cGUgPT09ICdiYXInIHx8IGNoYXJ0VHlwZSA9PT0gJ2hvcml6b250YWxCYXInKSB7XG4gICAgcmV0dXJuIGZvcm1hdEJhckNvbG9yKGdlbmVyYXRlQ29sb3IoaW5kZXgpKTtcbiAgfVxuICByZXR1cm4gZ2VuZXJhdGVDb2xvcihpbmRleCk7XG59XG4iXX0=