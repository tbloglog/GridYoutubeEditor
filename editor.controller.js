angular.module("umbraco").controller("yb.gridyoutubeeditor", function ($scope, editorService) {

    var vm = this;
    vm.OpenEditor = openEditor;

    $scope.title = "Youtube video options";
    
    function openEditor() {

        //set custom options
        var options = {
            title: "Youtube video options",
            size: "small",
            editorData: $scope.control.value,
            view: "/App_Plugins/GridYoutubeEditor/youtubevideodetail.html",
            submit: function (value) {
                
                //pass value to model if not empty
                if (value != null && value.videourl !== '') {
                    $scope.control.value = {};
                    $scope.control.value.videourl = value.videourl;
                    $scope.control.value.allowfullscreen = value.allowfullscreen;
                }

                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };

        //open editor with custom options
        editorService.open(options);
    };

});