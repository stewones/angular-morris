## angular-morris-chart [![Build Status](https://travis-ci.org/stewones/angular-morris-chart.svg)](https://travis-ci.org/stewones/angular-morris-chart)
A module with directives to easy use of [morris](http://morrisjs.github.io/morris.js/) with angular 

## Installation
Install `angular-morris-chart` through

#### Bower
```
$ bower install angular-morris-chart --save
```

#### Npm
```
$ npm install angular-morris-chart --save
```

#### Download
[From master branch](https://raw.githubusercontent.com/stewones/angular-morris-chart/master/src/angular-morris-chart.min.js)

#### CDN
Minified version:
[https://cdnjs.cloudflare.com/ajax/libs/angular-morris-chart/1.2.0/angular-morris-chart.min.js](https://cdnjs.cloudflare.com/ajax/libs/angular-morris-chart/1.2.0/angular-morris-chart.min.js)

Full version:
[https://cdnjs.cloudflare.com/ajax/libs/angular-morris-chart/1.2.0/angular-morris-chart.js](https://cdnjs.cloudflare.com/ajax/libs/angular-morris-chart/1.2.0/angular-morris-chart.js)

<br />

## Add morris.js and its dependencies
jQuery & Raphaël to your page

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
```
## Add our module
```
<script src="//cdnjs.cloudflare.com/ajax/libs/angular-morris-chart/1.2.0/angular-morris-chart.min.js"></script>
```

## Inject dependency
Make sure you injected `angular.morris-chart` into your angular app

```js
angular.module('my.app', [
    'angular.morris-chart'
])
```


## Usage
There are four directives based on `morris.js`

- `bar-chart`
- `line-chart`
- `donut-chart`
- `area-chart`

[Working fiddle](https://jsfiddle.net/stewones/n6aaLckb/) sample

Checkout [our documentation](https://angular-morris-chart.stpa.co) for others examples


---
**Notes:**

- To contribute just read [this file](https://github.com/stewones/angular-morris-chart/blob/master/CONTRIBUTING.md) before
- Verify the changes in [changelog](https://github.com/stewones/angular-morris-chart/releases)
- Look [Morris documentation](http://morrisjs.github.io/morris.js/) to check api


## Contributors

[<img alt="stewones" src="https://avatars.githubusercontent.com/u/719763?v=3&s=117" width="117">](https://github.com/stewones) |[<img alt="venkatramachandran" src="https://avatars.githubusercontent.com/u/4744258?v=3&s=117" width="117">](https://github.com/venkatramachandran) |[<img alt="rolaveric" src="https://avatars.githubusercontent.com/u/960670?v=3&s=117" width="117">](https://github.com/rolaveric) |
:---: |:---: |:---: |
[stewones](https://github.com/stewones) |[venkatramachandran](https://github.com/venkatramachandran) |[rolaveric](https://github.com/rolaveric) |

## License
`angular-morris-chart` is open-sourced software licensed under [MIT](http://opensource.org/licenses/MIT), maintained by [@stewones](https://github.com/stewones). Feel free to open an issue or make a PR.