variables = {}
functions = {}


////////////////////////////////////////////////////////

variables.name = "Tomek"

functions.sayHello = function(event){
    this.name = event.target.value
}



/////////////////////
new Vue({
    el: "#app",
    data: variables,
    methods: functions
})
