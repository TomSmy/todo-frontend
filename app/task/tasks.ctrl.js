module.exports = function () {
    this.task = {};
    this.tasks = [{"task":"shopping","name":"John","date":new Date(),"priority":"high","status":"pending"},
        {"task":"cleaning","name":"Jack","date":new Date(),"priority":"low","status":"in progress"},
        {"task":"payment","name":"Jill","date":new Date(),"priority":"medium","status":"done"},
        {"task": "some"}
   ];
    this.addTask = function () {
        this.tasks.push(this.task);
        this.task = {};
    }
        
};

  