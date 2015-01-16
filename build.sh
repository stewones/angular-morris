#!/bin/bash
sudo rm -rf ./dist/*
sudo rm -rf ../angular-morris-chart-doc/*
sudo gulp build
sudo cp -rf ./dist/doc/* ../angular-morris-chart-doc