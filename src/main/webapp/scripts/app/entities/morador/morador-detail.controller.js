'use strict';

angular.module('tmcApp')
    .controller('MoradorDetailController', function ($scope, $rootScope, $stateParams, entity, Morador, TelefoneMorador, Comentario) {
        $scope.morador = entity;
        $scope.load = function (id) {
            Morador.get({id: id}, function (result) {
                $scope.morador = result;
            });
        };
        $rootScope.$on('tmcApp:moradorUpdate', function (event, result) {
            $scope.morador = result;
        });
    });
