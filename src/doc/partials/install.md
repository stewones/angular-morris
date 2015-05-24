## Install for production
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


## Usage
There are four directives based on `morris.js`

- `bar-chart`
- `line-chart`
- `donut-chart`
- `area-chart`

Check out [documentation](https://angular-morris-chart.stpa.co) for live examples

## Install for development
- install node and bower on your environment
- cd to your development folder and clone repo

```sh
$ git clone https://github.com/stpa-co/angular-morris-chart
$ cd angular-morris-chart
```

- install project dependencies

```sh
$ npm install
$ bower install
```

- serve project with live reload

```sh
$ gulp serve
```

- serve project on distribution mode

```sh
$ gulp serve:dist
```

- build project to distribution

```sh
$ gulp build
```

- test

```sh
$ gulp test
```

- automated test

```sh
$ gulp test:auto
```


**Notes:**
- running the command `gulp build` should generate minified src at `src/angular-morris-chart.min.js`, and the docs on `dist/doc` folder.

- running the command `gulp serve` should serve on `http://localhost:3000/doc` with live reload. It also should watch the changes to re-build all the things, generating minified src at `src/angular-morris-chart.min.js`, and docs on `dist/doc` folder.

- running the command `gulp serve:dist` should do the same above but with all bower dependencies minified.

- to update project src please open an issue, fork the project, do your work, run `gulp build` and make a pull-request. thx =D 

- to update docs just run `gulp build` or `./buil.sh`, and make a pull-request into `gh-pages` branch only with contents of `dist/doc` folder. I like to work with another folder only for the docs (pointing to the same remote), maybe you will also. You can use the `build.sh` script located in the root to automate the process, but check it before.

- also check the tasks located on gulp folder for more details.

Feel free to open issues if you run into a problem or if you just have suggestions. Pull Requests are always welcome.

##[Changelog](https://github.com/stewones/angular-morris-chart/releases)

## License
---------------
The `angular-morris-chart` is open-sourced software licensed under the [MIT](http://opensource.org/licenses/MIT) license.