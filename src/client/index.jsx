var React = require("react/addons");
var Hello = require("./components/hello.jsx");
var pkg = require("../../package.json");
var Reflux = require("reflux");
var App = require("./app.jsx");

window.LiveReloadOptions = { host: "localhost" };
require('livereload-js');

React.render(
<App />,
	document.body
);
