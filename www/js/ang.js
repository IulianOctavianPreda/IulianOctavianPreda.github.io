
    function changeGraph(opt){
        if(opt == 0){
            document.getElementById("sVar").textContent="152";
            document.getElementById("graph-change").src="../ui_prototypes/66S261D.png";
        }else if(opt == 1){
            document.getElementById("sVar").textContent="164";
            document.getElementById("graph-change").src="../ui_prototypes/66S273A.png";
        }else if(opt == 2){
            document.getElementById("sVar").textContent="135";
            document.getElementById("graph-change").src="../ui_prototypes/66S241A.png";
        }
        
    }


var app = angular.module('mainApp', []);
app.controller('mainCtrl', function($scope) {
    
    $scope.logoutVisible = false;
    
    $scope.loggedOut = function() {
        $scope.logoutVisible = true;
    }
    
    
    
    var openOverview = angular.element(document.querySelector(".show-overview"));
    var closeOverview = angular.element(document.querySelector(".close-overview"));
    var leftSide = angular.element(document.querySelector(".left-side-wrapper"));
    var rightSide = angular.element(document.querySelector(".right-side-wrapper"));
    
    $scope.openNav = function() {
        leftSide.addClass("script-left-class");
        openOverview.addClass("script-class");
        rightSide.addClass("script-right-class");   
    }
    
    $scope.closeNav = function() {
        leftSide.removeClass("script-left-class");
        openOverview.removeClass("script-class");
        rightSide.removeClass("script-right-class");
    }
    
});