const EventEmitter = require("events")

const eventEmitter = new EventEmitter();

const userReg = require("./send_verification");

const userWel = require("./send_welcome");

const userRegistration = () => {
    eventEmitter.on("hello", userReg);
    eventEmitter.on("hello", userWel);

    eventEmitter.emit("hello",{name : "shivam   "});
}

userRegistration()



eventEmitter.on("name called", function () {
    console.log("listener 1")
})


eventEmitter.on("name called", function () {
    console.log("listener 2")
})

eventEmitter.emit("name called")

/*
 {
   "name called" : [
       function (){
           console.log("listener 1")
        }, 
        function (){
        console.log("listener2")
        }
   ]
 }
*/ 