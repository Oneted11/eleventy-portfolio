# learnings

## How gh pages navigation works

The navigation works as such

> `https://<githubname>.github.io/<name of repository>`

Hence when working with eleventy you will be required to enable a path prefix for all your internal links eg

```html
<link rel="stylesheet" href="/index.css" />
```

would be written as

```html
<link rel="stylesheet" href={{"/index.css" | url }}>
```

thus after prefix would be added would come out as

```html
<link rel="stylesheet" href="/<name of repository>/index.css" />
```

this is necessary since without the prefix it would look for the resource at

> `https://<githubname>.github.io/index.css`

and would not find it
more information can be found at [rockyourcode blog](https://www.rockyourcode.com/how-to-deploy-eleventy-to-github-pages-with-github-actions/)

## eleventy config

leventy config file is a file that allows you to change things when generating the static pages from your code.
It is susally written as a `.eleventy.js` in the root folder of your project.
It allows for many settings and configuartions to be done. For example path prefix that we have alluded to before at the beginning of this section

./.eleventy.js

```javascript
module.exports = function (eleventyConfig) {
  return {
    pathPrefix: "/<name of repository>",
  };
};
```

As can be seen it is a simple js module that can return many a thing. a simple example would be changing the output directory of the built files eg

```javascript
module.exports = function (eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "views",
      output: "public", //the default would be _site
    },
  };
};
```

More infomartion on what else can be put in and elenty config file can be found in the [eleventy docs](https://www.11ty.dev/docs/config/)
