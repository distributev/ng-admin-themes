angular.module('MailMerge').factory('MergeService',['$http',
        function($http){
          var base_url='/api/merges/';
          var mergeService = {
            create:function(data){
              var url = base_url;
              return $http({
                    method:'POST',
                    url:url,
                    data:data,
                    headers:{
                        'Content-type':'application/json'
                    }
                });
            },
            getHistory:function(data){
              var url = base_url+data.code+'/history';
              return $http({
                    method:'get',
                    url:url,
                    headers:{
                        'Content-type':'application/json'
                    }
                });
            }

          };
        
      return mergeService;

}]);