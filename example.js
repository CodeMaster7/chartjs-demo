### Dependencies
    * `chartJS`
    * `react-chartjs-2`

HTML canvas element
MDN canvas: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
(this gets used behind the scenes)

### react - chartjs - 2
    * github: http://jerairrest.github.io/react-chartjs-2/
* npm: https://www.npmjs.com/package/react-chartjs-2
### chartJS
    * https://www.chartjs.org/

### Using chartJS in a react app
    * Run`$ npm install react-chartjs-2 chartjs`
    * Import the chart type into your component from`react-chartjs-2`, e.g.Bar, Doughnut, Line, Pie
        * Create a data object before the render return, to be passed as a data prop to your chart
            * Data object takes labels and datasets.Datasets have a lable, backgroundColor, data, hoverBackgroundColor
                * Can further customize by importing and editing`defaults` object from`react-chartjs-2`

### Github Repos from the Workshop

    * Repo with three pages, where we built a graph together: https://github.com/spcbrn/chartjs-sandbox
* Repo with custom styled charts: https://github.com/nathan-08/chartjs-demo  

