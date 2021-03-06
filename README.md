# Website of Libre Objet

Built with <a href="http://jekyllrb.com/">Jekyll</a>, hosted on Github.  
Using the [this method for deployment](http://davidensinger.com/2013/04/deploying-jekyll-to-github-pages/), a must read if you plan to contribute to this website.

## How to post a new design
- You can submit by email your free/libre open source objects that you designed to the [Libre Objet’s team](mailto:hello@libreobjet.org).
- You can send us a link to your git repository where you host your project.
- You can also clone this website and add your object in the `_objects` folder and do a pull request.

We will then study your proposition carefully and let you know {if|when} we include it.
Although, to be published on this website, be sure your project matches with [our requirements](http://libreobjet.org/submit.html).

## How to copy this website
This is the method if you want to browse locally the website (without changing it), keep it on a usb key to carry it around or install it on your own server.

1. {Clone|Download} the [`master` branch](https://github.com/libreobjet/libreobjet.github.io/tree/master) of this repository.
2. Point your browser to the index.html file at the root of the directory.

## How to {modify|adapt} this website
This is the method if you want to add your objects, modify this website to your own liking, create your own curated repository of _libre_ objects.

1. Clone the [`source` branch](https://github.com/libreobjet/libreobjet.github.io/tree/source) of this repository
2. Have Jekyll and Grunt installed on your system.
3. `npm install` should install all the latest components. You might need some gems depending on the Jekyll plugin in use.
4. Modify files and folders
5. Run `grunt` to test locally.
6. Run `grunt deploy` to push the website on Github in the right branches using similar approach described by [David Ensinger](http://davidensinger.com/2013/04/deploying-jekyll-to-github-pages/).

## License
Except if stated otherwise (especially what's in the `_object` folder), all website content is under [Free Art License](http://artlibre.org/licence/lal/en).
