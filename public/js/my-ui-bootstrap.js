angular.module('my.ui.bootstrap', ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
  .directive("dropdownTextSet", function(){
    return{
      restrict : "A",
      link : function(scope, ele, attr) {

        const menuItem = document.getElementById("angular_menu_item");
        var dropdown_item = angular.element(menuItem).children();

        for(var i = 0; i<dropdown_item.length; i++) {
          dropdown_item.eq(i).bind("click", function($event){
            ele.html($event.target.innerHTML+'<span class="caret"></span>');
          });
        }

      }
    }
  });