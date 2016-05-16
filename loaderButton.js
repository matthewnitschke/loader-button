;(function(ns){
  ns.spinnerHtml = "<div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div>";

  ns.add = function add(buttonId){
    var button = document.getElementById(buttonId);
    button.setAttribute('data-button-text', button.innerHTML);
    button.innerHTML = ns.spinnerHtml;
  }

  ns.remove = function remove(buttonId){
    var button = document.getElementById(buttonId);
    var btnText = button.getAttribute('data-button-text');
    button.innerHTML = btnText;
  }

}(this.LoaderButton = this.LoaderButton || {}));
