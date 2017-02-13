# [SVGeneration](http://svgeneration.com)



### Contributing:

```
git clone https://github.com/DDKnoll/SVGeneration
cd SVGeneration && npm install
```

To start a new graphic clone one of the existing graphics to a new folder e.g. `cp ./recipes/Diagonal-Stripes/ ./recipes/New-Graphic`.

The graphic needs a config.json and a script.js, which specifies the parameters needed to customize and render the graphic.  The script.js can be written in es6 and its only requirement is a generate function which returns a valid svg.

You may need to install sass with `gem install sass`.

To run the development server with livereload, use `npm start`. The site will be served on port http://localhost:3131/

Once you've customized your graphic, push it to a repo on your github account and submit a pull request to my repository.
