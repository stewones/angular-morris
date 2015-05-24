## angular-morris-chart [![Build Status](https://travis-ci.org/stewones/angular-morris-chart.svg)](https://travis-ci.org/stewones/angular-morris-chart)
---
#### For production
- install `angular-morris-chart` by bower or npm running the following command

```shell
$ bower install angular-morris-chart --save
or
$ npm install angular-morris-chart --save
```
or download [here](https://raw.githubusercontent.com/stewones/angular-morris-chart/master/src/angular-morris-chart.min.js)

- Append the file `angular-morris-chart.min.js` to end of your body, after the `angular` lib, before your project.


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

- add `angular.morris-chart` as a module dependency of your app

```js
//adding `angular.morris-chart` as a module dependency
angular.module('my.app', [
    'angular.morris-chart'
])
```

---
### Usage
There are four directives based on `morris.js`

- `bar-chart`
- `line-chart`
- `donut-chart`
- `area-chart`

Check out [documentation](https://angular-morris-chart.stpa.co) for live examples

---
### For development
- install node and bower on your environment
- cd to development folder and clone repo
```sh
$ git clone https://github.com/stewones/angular-morris-chart
$ cd angular-morris-chart
```

- install project dependencies

```sh
$ npm install
$ bower install
```

- serve project with live reload

```sh
#this will serve on `http://localhost:3000/doc` with live reload
$ gulp serve
```

- serve project on distribution mode

```sh
#same above but with minified sources for distribution
$ gulp serve:dist
```

- build project to distribution

```sh
#this will generate minified src at `src/angular-morris-chart.min.js`, and docs on `dist/doc` folder.
$ gulp build
```

- test

```sh
#run unit tests with karma
$ gulp test
```

- automated test

```sh
#unit test with live reload
$ gulp test:auto
```

---
**Notes:**

- To contribute with this project, open an issue, fork the project, do your work, issue `gulp build` and make a PR. 

- Check the tasks located on gulp folder for more details.

Feel free to open issues if you run into a problem or if you just have suggestions. PR´s are always welcome.

---
#### [Changelog](https://github.com/stewones/angular-morris-chart/releases)

#### License
The `angular-morris-chart` is open-sourced software licensed under the [MIT](http://opensource.org/licenses/MIT) license.