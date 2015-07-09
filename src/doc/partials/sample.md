## Usage [![Build Status](https://travis-ci.org/stewones/angular-morris-chart.svg)](https://travis-ci.org/stewones/angular-morris-chart)

Just add `angular.morris-chart` as a module dependency for your app and then use the directives
```js
angular.module('my.app', [
    'angular.morris-chart'
])
```


## Bar Chart
```html
<div
bar-chart 
bar-data='[
    { y: "2006", a: 100, b: 90 },
    { y: "2007", a: 75,  b: 65 },
    { y: "2008", a: 50,  b: 40 },
    { y: "2009", a: 75,  b: 65 },
    { y: "2010", a: 50,  b: 40 },
    { y: "2011", a: 75,  b: 65 },
    { y: "2012", a: 100, b: 90 }
]'
bar-x='y'
bar-y='["a", "b"]'
bar-labels='["Series A", "Series B"]'
bar-colors='["#31C0BE", "#c7254e"]'>
</div>
```


<div
bar-chart 
bar-data='[
    { y: "2006", a: 100, b: 90 },
    { y: "2007", a: 75,  b: 65 },
    { y: "2008", a: 50,  b: 40 },
    { y: "2009", a: 75,  b: 65 },
    { y: "2010", a: 50,  b: 40 },
    { y: "2011", a: 75,  b: 65 },
    { y: "2012", a: 100, b: 90 }
]'
bar-x='y'
bar-y='["a", "b"]'
bar-labels='["Series A", "Series B"]'
bar-colors='["#31C0BE", "#c7254e"]'>
</div>


## Donut Chart
```html
<div
donut-chart
donut-data='[
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales",value: 30},
    {label: "Mail-Order Sales", value: 20}
]'
donut-colors='["#31C0BE","#c7254e","#98a0d3"]'
donut-formatter='"currency"'>
</div>
```

<div
donut-chart
donut-data='[
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales",value: 30},
    {label: "Mail-Order Sales", value: 20}
]'
donut-colors='["#31C0BE","#c7254e","#98a0d3"]'
donut-formatter='"currency"'>
</div>

<p class="text-center">`donut-formatter` can either be a string for a filter name (eg. 'currency') or a reference to a scope function. [example in plunker](http://plnkr.co/edit/AsxnDG?p=preview)</p>


## Line Chart
```html
<div
line-chart
line-data='[
    { y: "2006", a: 100, b: 90 },
    { y: "2007", a: 75,  b: 65 },
    { y: "2008", a: 50,  b: 40 },
    { y: "2009", a: 75,  b: 65 },
    { y: "2010", a: 50,  b: 40 },
    { y: "2011", a: 75,  b: 65 },
    { y: "2012", a: 100, b: 90 }
]'
line-xkey='y'
line-ykeys='["a", "b"]'
line-labels='["Serie A", "Serie B"]'
line-colors='["#31C0BE", "#c7254e"]'>
</div>
```

<div
line-chart
line-data='[
    { y: "2006", a: 100, b: 90 },
    { y: "2007", a: 75,  b: 65 },
    { y: "2008", a: 50,  b: 40 },
    { y: "2009", a: 75,  b: 65 },
    { y: "2010", a: 50,  b: 40 },
    { y: "2011", a: 75,  b: 65 },
    { y: "2012", a: 100, b: 90 }
]'
line-xkey='y'
line-ykeys='["a", "b"]'
line-labels='["Serie A", "Serie B"]'
line-colors='["#31C0BE", "#c7254e"]'>
</div>

## Area Chart
```html
<div
area-chart
area-data='[
    { y: "2006", a: 100, b: 90 },
    { y: "2007", a: 75,  b: 65 },
    { y: "2008", a: 50,  b: 40 },
    { y: "2009", a: 75,  b: 65 },
    { y: "2010", a: 50,  b: 40 },
    { y: "2011", a: 75,  b: 65 },
    { y: "2012", a: 100, b: 90 }
  ]'
area-xkey='y'
area-ykeys='["a", "b"]'
area-labels='["Serie A", "Serie B"]'
line-colors='["#31C0BE", "#c7254e"]'>
</div>
```

<div
area-chart
area-data='[
    { y: "2006", a: 100, b: 90 },
    { y: "2007", a: 75,  b: 65 },
    { y: "2008", a: 50,  b: 40 },
    { y: "2009", a: 75,  b: 65 },
    { y: "2010", a: 50,  b: 40 },
    { y: "2011", a: 75,  b: 65 },
    { y: "2012", a: 100, b: 90 }
  ]'
area-xkey='y'
area-ykeys='["a", "b"]'
area-labels='["Serie A", "Serie B"]'
line-colors='["#31C0BE", "#c7254e"]'>
</div>

---
#### License
`angular-morris-chart` is open-sourced software licensed under [MIT](http://opensource.org/licenses/MIT).