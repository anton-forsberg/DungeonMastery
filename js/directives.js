angular.module('dungeonmastery').directive('dmSelect', dmSelectDirective);
angular.module('dungeonmastery').directive('dmInput', dmInputDirective);

function dmSelectDirective(){
    var directive = {
        restrict: 'E',
        scope: {
            label: '@',
            items: '=',
            selectedItem: '='
        },
        bindToController: true,
        controllerAs: 'vm',
        controller: dmSelectController,
        template: '<md-input-container>' +
                        '<label>{{vm.label}}</label>' +
                        '<md-select ng-model="vm.selectedItem">' +
                            '<md-option ng-repeat="item in vm.items">{{item.Name}}</md-option>' +
                        '</md-select>' +
                    '</md-input-container>'
    }
    
    function dmSelectController(){
        var vm = this;
    }
    
    return directive;
}

function dmInputDirective(){
    var directive = {
        restrict: 'E',
        scope: {
            label: '@',
            text: '='
        },
        bindToController: true,
        controllerAs: 'vm',
        controller: dmInputController,
        template: '<md-input-container>' +
                        '<label>{{vm.label}}</label>' +
                        '<input ng-model="vm.text">' +
                    '</md-input-container>'
    }
    
    function dmInputController(){
        var vm = this;
    }
    
    return directive;
}