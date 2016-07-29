require("angular");
require("angular-resource");
require("angular-ui-router");
require("angular-xeditable");
require("angular-resource");
angular.module("ToDoApp", [
    'ngResource',
    'ui.router',
    'xeditable'

])
    .config(require("./config"))
    .controller("TasksCtrl", require("./task/tasks.ctrl"))
    .factory("Task", require("./task/tasks.factory"))
    .controller('ResourceController',function($scope, Entry) {
        var entries = Entry.query(function() {
            console.log(entries);
    });
});
