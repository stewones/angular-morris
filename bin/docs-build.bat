cd ../
gulp build
rm -rfv .build/*
cp -rfv dist/doc/* .build
cp dist/doc/index.html .build/404.html
cd .build
git add -A
git commit -am "new doc build"
git push --force origin gh-pages