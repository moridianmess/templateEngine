# templateEngine
A lightweight promise driven template engine.

Full Documentation and examples are available at [moridiweb.com](http://moridiweb.com/templateEngine.html).

`<script src="template.js"></script>`
`templateEngine.load(template, data, target, clear).then(function( template, data ) { });`

Where the input parameter template is either a HTML template string or the URL to a template file. Data is a PlainObject, an array of objects or the URL to either an array or object. Target is a jQuery element to load the template(s) into or null. Clear is a Boolean whether to clear the target first.

Where the output parameter template is the last executed template and data is the data from the input.