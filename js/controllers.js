(function(angular){
    angular.module('dungeonmastery').controller('sheetController', sheetController);
    angular.module('dungeonmastery').controller('campaignController', campaignController);
    angular.module('dungeonmastery').controller('campaignsController', campaignsController);
    angular.module('dungeonmastery').controller('loginController', loginController);
    
    sheetController.$inject = [];
    campaignController.$inject = [];
    campaignsController.$inject = [];
    loginController.$inject = [];
    
    function sheetController(){
        var vm = this;
        
        vm.Skills = [{
            Name: 'Strength', 
            IsMajor: true,
            Order: 0
        }, {
            Name: 'Athletics',
            Order: 1
        }, {
            Name: 'Animal Handling'
        }];
        
        vm.SkillFunctions = {
            Strength: function(){
                return 2;
            },
            Athletics: function(){
                return 1;
            }
        }
    }
    
    function campaignController(){
        var vm = this;
    }
    
    function campaignsController(){
        var vm = this;
    }
    
    function loginController(){
        var vm = this;
    }
})(window.angular)