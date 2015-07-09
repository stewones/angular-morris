## angular-morris-chart [![Build Status](https://travis-ci.org/stewones/angular-morris-chart.svg)](https://travis-ci.org/stewones/angular-morris-chart)

### Installation

install `angular-morris-chart` by bower or npm running the following command
```shell
$ bower install angular-morris-chart --save
or
$ npm install angular-morris-chart --save
```

or download [here](https://raw.githubusercontent.com/stewones/angular-morris-chart/master/src/angular-morris-chart.min.js)

then append `angular-morris-chart.min.js` in to end of body, before your project, after the `angular` and the other libs.


```html
<!--using bower-->
...
...
<script src="../bower_components/angular-morris-chart/src/angular-morris-chart.min.js"></script>
...
...
</body>
</html>
```


```html
<!--using npm-->
...
...
<script src="../node_modules/angular-morris-chart/src/angular-morris-chart.min.js"></script>
...
...
</body>
</html>
```

add `angular.morris-chart` as a module dependency for your app
```js
angular.module('my.app', [
    'angular.morris-chart'
])
```

### Usage
There are four directives based on `morris.js`

- `bar-chart`
- `line-chart`
- `donut-chart`
- `area-chart`

Check out [documentation](https://angular-morris-chart.stpa.co) for live examples

### Development

- install node and bower on your environment

cd to your desired folder and clone `angular-morris-chart` repository
```sh
$ git clone https://github.com/stewones/angular-morris-chart
$ cd angular-morris-chart
```

install all project dependencies
```sh
$ npm install
$ bower install
```

serve lib/docs with live reload
```sh
#this serves docs on `http://localhost:3000` with live reload
$ gulp serve
```

serve lib/docs on distribution mode
```sh
#same above but with minified sources for distribution
$ gulp serve:dist
```

build all to distribution
```sh
#this generates minified src at `src/angular-morris-chart.min.js`, and docs on `dist/doc` folder.
$ gulp build
```

serve tests
```sh
#run unit test with karma
$ gulp test
```

serve automated tests
```sh
#unit test with live reload
$ gulp test:auto
```

---
**Notes:**

- To contribute with this awesome project, just open an issue, then fork the project and make a new branch to do your work.

- Run `gulp build` before make your PR. 

- To update docs site, just make another PR on `gh-pages` branch with only content generated in `dist/doc`. Please make sure that all tests are passing by `gulp test`. Verify all the tasks located on gulp folder for more details.

- [Changelog](https://github.com/stewones/angular-morris-chart/releases)

Feel free to open issues if you run into a problem or if you just have suggestions. PR´s are always welcome.

---
#### License
`angular-morris-chart` is open-sourced software licensed under [MIT](http://opensource.org/licenses/MIT).