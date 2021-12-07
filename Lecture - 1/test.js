function shivam() {
    console.log("it is working from another function outside page.");
    
};

function second() {
    console.log("this is second function from another page.")
}


let third = {
    name: "shivam",
    age: 27,
    city: "sasaram"
}

let fourth = {
    hobby : "football"
}



  module.exports = { shivam, second,third,fourth}




