/**
 * Created by dkvelusa on 2/11/2018.
 */
var resume = angular.module('app',['ngRoute','controllers']);

resume.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : 'src/template/material.html',
            controller : 'LandingController'
        })
        .when('/details',{
            templateUrl : 'src/template/details.html',
            controller : 'LandingController'
        });
}]);