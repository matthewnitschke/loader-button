;(function(ns){
  ns.spinnerHtml = "<div class='loader-button'><div class='bounce1 loader-button-dot'></div><div class='bounce2 loader-button-dot'></div><div class='bounce3 loader-button-dot'></div></div>";

  function getButtonElement(selector){
    if (typeof selector === "string"){
      return document.querySelector(selector);
    } else {
      return selector;
    }
  }

  ns.add = function add(buttonSelector){
    var button = getButtonElement(buttonSelector);
    button.setAttribute('data-button-text', button.innerHTML);
    button.setAttribute('disabled', true);
    button.innerHTML = ns.spinnerHtml;

    return button;
  }

  ns.remove = function remove(buttonSelector){
    var button = getButtonElement(buttonSelector);
    var btnText = button.getAttribute('data-button-text');
    button.removeAttribute('disabled');
    button.innerHTML = btnText;
  }

}(this.LoaderButton = this.LoaderButton || {}));
