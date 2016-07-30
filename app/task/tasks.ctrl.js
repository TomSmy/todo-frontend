module.exports = function taskController($window, $http, Task) {

    this.task = new Task();

    this.tasks = [{"description":"shopping","name":"John","date":new Date(),"priority":"high","status":"pending"},
        {"description":"cleaning","name":"Jack","date":new Date(),"priority":"low","status":"in progress"},
        {"description":"payment","name":"Jill","date":new Date(),"priority":"medium","status":"done"},
        {"description": "some"}
   ];

    this.tasks = Task.query(); //function() { GET: [{description:"",name:"",date:new Date(),priority:"",status:""},]})}; // ng-resource, query all entries






    this.addTask = function () {
        this.tasks.push(this.task);

        this.task.$save(function(){
            
        });
        this.task = new Task();

    };
    this.updateTask = function() {
        console.log("sime");
        // return $http.post('/updateTask', this.task);
    };

    this.removeRow=function (index) {
        console.log("remove", index);
        var deleted = this.tasks.splice(index, 1);
        console.log("remove item", deleted[0]);
        Task.remove(deleted[0]);
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

  