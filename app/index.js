require("angular");
require("angular-resource");
require("angular-ui-router");
angular.module("ToDoApp", [
    'ngResource',
    'ui.router'

])
    .config(require("./config"));