# Loader Button
An incredibly simple javascript loader button plugin

# Usage

### Html
```html
<button id='submitButton'>Submit</button>
```

### Javascript
```javascript

LoaderButton.add('#submitButton'); // Add the loader
LoaderButton.remove('#submitButton'); // Remove the loader

// OR

var bt = document.getElementById('submitButton');
LoaderButton.remove(bt);
LoaderButton.add(bt);
```
