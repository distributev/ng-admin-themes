'use strict';

(function() {

  angular.module('bootswatchApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: function($http,$scope,$timeout,$location,$anchorScroll,Auth){
        $timeout(function(){
          
          $scope.authenticate = Auth.getCurrentUser().token?true:false;
           if(Auth.getCurrentUser().theme){
             if(Auth.getCurrentUser().theme!=='default'){
                $('#bootstrap_theme').attr('href','https://bootswatch.com/'+Auth.getCurrentUser().theme+'/bootstrap.min.css');
             }
              else{
                $('#bootstrap_theme').attr('href','#');
              }
          }
        },500);

        $scope.goto = function(name){
          $location.hash(name);
              $anchorScroll();
        };

        function cleanSource(html) {
          html = html.replace(/×/g, '&times;')
                   .replace(/«/g, '&laquo;')
                   .replace(/»/g, '&raquo;')
                   .replace(/←/g, '&larr;')
                   .replace(/→/g, '&rarr;');
                   
          var lines = html.split(/\n/);

          lines.shift();
          lines.splice(-1, 1);

          var indentSize = lines[0].length - lines[0].trim().length,
              re = new RegExp(' {' + indentSize + '}');

          lines = lines.map(function(line){
            if (line.match(re)) {
              line = line.substring(indentSize);
            }

            return line;
          });

          lines = lines.join('\n');

          return lines;
        }

        var $button = $('<div id=\'source-button\' class=\'btn btn-primary btn-xs\'>&lt; &gt;</div>').click(function(){
            var html = $(this).parent().html();
            html = cleanSource(html);
            $('#source-modal pre').text(html);
            $('#source-modal').modal();
        });

        $('.bs-component [data-toggle="popover"]').popover();
        $('.bs-component [data-toggle="tooltip"]').tooltip();

        $('.bs-component').hover(function(){
            $(this).append($button);
            $button.show();

        }, function(){
          $button.hide();
        });

    
      }
    });
})();
