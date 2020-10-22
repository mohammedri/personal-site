const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/mislam/projects/mohammedri/personal-site/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mislam/projects/mohammedri/personal-site/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/mislam/projects/mohammedri/personal-site/src/pages/elements.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mislam/projects/mohammedri/personal-site/src/pages/index.js"))),
  "component---src-pages-notes-js": hot(preferDefault(require("/Users/mislam/projects/mohammedri/personal-site/src/pages/notes.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/mislam/projects/mohammedri/personal-site/src/templates/blog-post.js")))
}

