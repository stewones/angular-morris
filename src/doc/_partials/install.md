## Install for production
-------------------------
- install `angular-morris-chart` by bower or npm running the following command

```shell
$ bower install angular-morris-chart --save
```

```shell
$ npm install angular-morris-chart --save
```

- **Note:** if you are asked about `Unable to find a suitable version for angular` answer `angular#1.3.x which is required by angular-morris-chart`.
- **Note:** if you are issued about `github.com connection timed out` just run `git config --global url.https://.insteadOf git://` in terminal.

- include the file `angular-morris-chart.min.js` on your body. If do you use bower it should be located at `bower_components/angular-morris-chart/src`, else if do you use npm it should be located at `node_modules/angular-morris-chart/src`, otherwise just include the file [`angular-morris-chart.min.js`](https://raw.githubusercontent.com/stpa-co/angular-morris-chart/master/src/angular-morris-chart.min.js) to your project.

*example using bower*
```html
<script src="../bower_components/angular-morris-chart/src/angular-morris-chart.min.js"></script>
```

*example using npm*
```html
<script src="../node_modules/angular-morris-chart/src/angular-morris-chart.min.js"></script>
```

- add `stpa.morris` as a module dependency to your app

```js
angular.module('my.app', [
    'stpa.morris'
])
```


## Usage
--------

There are four directives based on `morris.js`

- `bar-chart`
- `line-chart`
- `donut-chart`
- `area-chart`

Check out [documentation](https://angular-morris-chart.stpa.co) for live examples

## Install for development
--------------------------
- install node and bower on your environment
- cd to your development folder and clone repo

```sh
$ git clone https://github.com/stpa-co/angular-morris-chart
$ cd angular-morris-chart
```

- install module dependencies

```sh
$ npm install
$ bower install
```

- **Note:** if you are issued about `github.com connection timed out` just run `git config --global url.https://.insteadOf git://` in terminal.

- serve project and do the work

```sh
$ gulp serve #Note: maybe you should have to use `sudo`
```

- serve project on distribution mode

```sh
$ gulp serve:dist #Note: maybe you should have to use `sudo`
```

- build project to distribution

```sh
$ gulp build #Note: maybe you should have to use `sudo`
```

**Note:** running the command `gulp build` should generate minified src at `src/angular-morris-chart.min.js`, and the docs on `dist/doc` folder.

**Note:** running the command `gulp serve` should serve on `http://localhost:3000/doc` with live reload. It also should watch the changes to re-build all the things, generating minified src at `src/angular-morris-chart.min.js`, and docs on `dist/doc` folder.

**Note:** running the command `gulp serve:dist` should do the same above but with all bower dependencies minified.

**Note:** to update project src please open an issue, fork the project, do your work, run `gulp build` and make a pull-request. thx =D 

**Note:** to update docs just run `gulp build` or `./buil.sh`, and make a pull-request into `gh-pages` branch only with contents of `dist/doc` folder. I like to work with another folder only for the docs (pointing to the same remote), maybe you will also. You can use the `build.sh` script located in the root to automate the process, but check it before.

**Note** Also check the tasks located on gulp folder for more details.

Feel free to open issues if you run into a problem or if you just have suggestions. Pull Requests are always welcome.

## Changelog
------------
- 1.0.0
    - launched `angular-morris-chart` for easy creation of `morris.js` charts.

## License
---------------
The `angular-morris-chart` is open-sourced software licensed under the [MIT](http://opensource.org/licenses/MIT) license. Crafted by [@stewones](https://twitter.com/stewones)