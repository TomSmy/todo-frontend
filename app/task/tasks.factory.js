module.exports = function ($resource) {
    return $resource("http://localhost:8086/tasks/:id", {}, {});
};

