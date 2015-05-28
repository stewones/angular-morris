rm -rf ../api.build/*
cp -rf ../api/artisan ../api.build
cp -rf ../api/app ../api.build
cp -rf ../api/bootstrap ../api.build
cp -rf ../api/public ../api.build
cp -rf ../api/Procfile ../api.build
cp -rf ../api/composer.json ../api.build
cp -rf ../api/composer.lock ../api.build
cp -rf ../api/server.php ../api.build

cd ../api.build
git add -A
git commit -am "new api build fokus"
git push --force heroku master