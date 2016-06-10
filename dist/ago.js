
(function () {
    'use strict';

    angular.module('fs-angular-ago',['angularMoment'])
    .directive('fsAgo', function($location) {
        return {
            template: '<span am-time-ago="date"><md-tooltip>{{date | amDateFormat:\'MMMM Do YYYY, h:mm a\'}}</md-tooltip></span>',
            restrict: 'E',
            transclude: true,
            scope: {
               date: "=?fsDate"
            },

            link: function($scope, element, attrs, ctrl) {
   
            }
        };
    });
})();

