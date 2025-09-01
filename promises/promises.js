const promiseOne = new Promise( (resolve , reject) => {
    // Do an async task 
    setTimeout(function(){
        console.log("asyn task is complete");

        resolve();

        console.log("hello");

    } , 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");

})


new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("helloooo");

        resolve()
    }, 1000)

}).then(function () {
    console.log("done");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "chai",
            email: "chai@example.com"
        })
    }, 1000);

}).then((user) => {
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ username: "Saurabh", password: "123" })
        }
        else {
            reject("Error ! Something went wrong");
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;

}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);

}).finally( () => {
    console.log("the promise is either resolved or rejected");

})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ username: "javascript", password: "123" })
        }
        else {
            reject("Error ! JS went wrong");
        }
    }, 1000)
});

async function consumePromiseFive() {

    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }

}
consumePromiseFive()


async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/Saurabhtomer')
        const data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.log(error);

    }

}
// getAllUsers();

fetch('https://api.github.com/users/Saurabhtomer')
.then( (response) => {
    return response.json();
})
.then((response) => {
    console.log(response);
    
})
.catch((error) => {
     console.log("error : " , error);
})
   
    
