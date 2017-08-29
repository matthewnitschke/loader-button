;(function(ns){
  ns.spinnerHtml = "<div class='loader-button'><div class='bounce1 loader-button-dot'></div><div class='bounce2 loader-button-dot'></div><div class='bounce3 loader-button-dot'></div></div>";

  ns.add = function add(buttonSelector){
    var button = document.querySelector(buttonSelector);
    button.setAttribute('data-button-text', button.innerHTML);
    button.setAttribute('disabled', true);
    button.innerHTML = ns.spinnerHtml;

    return button;
  }

  ns.remove = function remove(buttonSelector){
    var button;
    if (typeof buttonSelector === "string"){
      button = document.querySelector(buttonSelector);
    } else {
      button = buttonSelector;
    }
    var btnText = button.getAttribute('data-button-text');
    button.removeAttribute('disabled');
    button.innerHTML = btnText;
  }

}(this.LoaderButton = this.LoaderButton || {}));
