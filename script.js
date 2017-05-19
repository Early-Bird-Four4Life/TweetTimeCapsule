$(document).ready(function() {

    console.log("works");
    var counter = 140;
    $('.clock').click(function() {
        console.log("you");
        if($('select').prop('disabled') == true){
            $('select').prop('disabled', false);
        }else{
            $('select').prop('disabled', true);
        }
    });

    $('#submit').mouseenter(function() {
        console.log("enter");
        $('#submit').attr('src','twitter_profile_files/button-tp.png');
    });
    $('#submit').mouseleave(function() {
        $(this).attr('src','twitter_profile_files/button-t.png');
    });

    $('#submit').click(function(){
        console.log("submit");
    });

    angular.module('ModalModule', [])
        .controller('ModalController', function($scope) {
            $scope.myText = 'aaa';
  });

});
