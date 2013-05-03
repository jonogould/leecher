Leecher
=======

by Jono Gould ([TravelGround](http://github.com/TravelGround)), @jonogould

Downloads files using HTTP.get.

Adapted from [hacksparrow](http://www.hacksparrow.com/using-node-js-to-download-files.html)


## Installation

First, you need to install [node](http://nodejs.org). Then you can continue!

This script runs in terminal.

To get this tool running, you need the following dependencies, available off npm:

- [async](https://github.com/caolan/async)
- [shelljs](http://shelljs.org)
- [underscorejs](http://underscorejs.org)

To install this dependency (the easy way), run the following command from the ``` leecher ``` root dir:

``` $ npm install ```

Or place the dependencies there manually but adding them to a ``` node_modules ``` folder

Or add them individually by calling:

``` $ npm install underscore ```, etc

Lastly make the script executable using ```chmod +x leecher.js```


## Usage

How do you use ``` leecher ```, I hear you asking? Well:

Add it to your ```node_modules``` folder and include it into your script using ```var leecher = require('leecher').leecher;```.


## Examples

Check out the [wiki](https://github.com/TravelGround/leecher/wiki) for some examples on what this tool could be used for, check it out and add your own!

### Now go play, use it to create useful stuff!