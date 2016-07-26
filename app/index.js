require("angular");
require("angular-resource");
require("angular-ui-router");
angular.module("ToDoApp", [
    'ngResource',
    'ui.router'

])
    .config(require("./config"))
    .controller("TasksCtrl", require("./task/tasks.ctrl"))
    .factory("Task", require("./task/tasks.factory"));