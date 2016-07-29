module.exports = function taskController($window, $http, Task) {
    this.task = {};
    this.tasks = [{"task":"shopping","name":"John","date":new Date(),"priority":"high","status":"pending"},
        {"task":"cleaning","name":"Jack","date":new Date(),"priority":"low","status":"in progress"},
        {"task":"payment","name":"Jill","date":new Date(),"priority":"medium","status":"done"},
        {"task": "some"}
   ];
    this.addTask = function () {
        this.tasks.push(this.task);
        this.task = {};

    };
    this.updateTask = function() {
        console.log("sime");
        // return $http.post('/updateTask', this.task);
    };

    this.removeRow=function (index) {
        console.log("remove", index);
        this.tasks.splice(index, 1);
    };
    
    this.move = function (origin, destination) {
        var temp = this.tasks[destination];
        this.tasks[destination] = this.tasks[origin];
        this.tasks[origin] = temp;
    };

    this.moveUp = function(index){
        this.move(index, index - 1);
    };

    this.moveDown = function(index){
        this.move(index, index + 1);

        $http.post('/storeAllTasks', this.tasks);
    };
    console.log('iiii');
    var entries = Task.query(function() {
        console.log(entries);
    });

    $window.scope=this;


};

  