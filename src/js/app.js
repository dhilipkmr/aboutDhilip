/**
 * Created by dkvelusa on 2/11/2018.
 */
 var resume = angular.module('app',['ngRoute','controllers']);

 resume.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/material',{
        templateUrl : 'src/template/material.html',
        controller : 'LandingController'
    })
    .when('/details',{
        templateUrl : 'src/template/details.html',
        controller : 'LandingController'
    });
}]);


 window.onscroll = function(e) {
    if(!window.testDone){
        scrollFunction(e);
    }
};
function scrollFunction(e) {
        var scroll={};
        scroll.top          = window.scrollY;
        scroll.left         = window.scrollX;
        scroll.bottom       = window.innerHeight + window.scrollY;
        scroll.right        = window.innerWidth  + window.scrollX; 

        if (!window.$elt){
            window.$elt = document.getElementById("skills");
        }

        if(!window.$eltScroll){
            window.$eltScroll = {};
            $eltScroll.top       = $elt.offsetTop;
            $eltScroll.left      = $elt.offsetLeft;
            $eltScroll.bottom    = $elt.offsetTop     + $elt.offsetHeight;
            $eltScroll.right     = $elt.offsetLeft    + $elt.offsetWidth;
        }

        if(!(scroll.right    < $eltScroll.left  || 
           scroll.left     > $eltScroll.right || 
           scroll.bottom   < $eltScroll.top   || 
           scroll.top      > $eltScroll.bottom)) {
            window.testDone=true;
            var $progressBar =  document.querySelectorAll(".skillLevel");
            var percentages = document.querySelectorAll(".percent");
            $progressBar.forEach(function(node, index){
                node.style.width = "0%";
                node.ww=0;
                node.percent = parseInt(percentages[index].innerText.split("%")[0]);
                (function(node){
                    var fillBar = function(){
                        node.style.width = ++node.ww + "%";
                        if(node.ww===node.percent){
                            clearTimeout(interval);
                        }
                    }
                    var interval = setInterval(fillBar,10);
                })(node);

            });
        }
}






// $('#skillNav').mouseenter(function(e){console.log("ff")});
// if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 20) {
//         document.getElementById("navigationCtrl").style.top = "0";

//     } else {
//         document.getElementById("navigationCtrl").style.top = "-200px";
//     }