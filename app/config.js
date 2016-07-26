module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("tasks", {
            url: '/',
            templateUrl:'task/tasks.html',
            controller: "TasksCtrl",
            controllerAs:"ctrl"
        })
}

