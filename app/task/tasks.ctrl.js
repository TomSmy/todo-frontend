module.exports = function taskController($window) {
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
    this.removeUser = function(index) {
        this.tasks.splice(index, 1);
    }

    window.removeRow=this.removeRow.bind(this)

        
};

  