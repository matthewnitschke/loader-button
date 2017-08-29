;(function(ns){
  ns.spinnerHtml = "<div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div>";

  ns.add = function add(buttonSelector){
    var button = document.querySelector(buttonSelector);
    button.setAttribute('data-button-text', button.innerHTML);
    button.setAttribute('disabled', true);
    button.innerHTML = ns.spinnerHtml;
  }

  ns.remove = function remove(buttonSelector){
    var button = document.querySelector(buttonSelector);
    var btnText = button.getAttribute('data-button-text');
    button.removeAttribute('disabled');
    button.innerHTML = btnText;
  }

}(this.LoaderButton = this.LoaderButton || {}));
