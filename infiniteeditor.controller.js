(function () {
    "use strict";

    function InfiniteEditorController($scope) {

        if ($scope.model.editorData != undefined) {
            //passing values to model
            $scope.model.videourl = $scope.model.editorData.videourl;
            $scope.model.allowfullscreen = $scope.model.editorData.allowfullscreen;
        }

        var vm = this;

        vm.submit = submit;
        vm.close = close;

        function submit() {
            if ($scope.model.submit) {
                $scope.model.submit($scope.model);
            }
        }

        function close() {
            if ($scope.model.close) {
                $scope.model.close();
            }
        }

    }

    angular.module("umbraco").controller("yb.gridyoutubeinfiniteeditor", InfiniteEditorController);
})();