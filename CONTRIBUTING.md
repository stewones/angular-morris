## To contribute

### Overview

1. Open an issue
2. Make a new branch with the name of your new feature
3. Add the tests for your new feature
4. Issue `gulp test` and if ok run `gulp build` before commit
5. Make your pull request

Try to make micro commits in format `feat(type): description` for easy understanding of what you are doing.

### Development

Is required that you have node and bower in your environment
clone `angular-morris-chart` repository

```sh
$ git clone https://github.com/stewones/angular-morris-chart
$ cd angular-morris-chart
```

install all dependencies
```sh
$ npm install
$ bower install
```

serves the lib and docs with live reload
```sh
#this serves docs on `http://localhost:3000` with live reload
$ gulp serve
```

serves the lib and docs on distribution mode
```sh
#same above but with minified sources for distribution
$ gulp serve:dist
```

build all to distribution
```sh
#this should generate minified src at `src/angular-morris-chart.min.js`, and docs on `dist/doc` folder.
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


#### Docs site
To update the docs is necessary to issue all commands located in `bin` folder. At this moment is only possible by windows (.bat), but if you work with linux please PR with new .sh files. 
Then PR on `gh-pages` from `.build` folder.

#### Before send your PR
Make sure that all the tests are passing OK through `gulp test`.

#### Considerations
Verify all the tasks located on gulp folder for more details.
Thanks for helping and feel free to open issues if you run into a problem or if you just have suggestions.


[Changelog](https://github.com/stewones/angular-morris-chart/releases)
