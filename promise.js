// Promise and async await

function getUser(){
    return [
        {userName: "blame",email: "blame@gmail.com"},
        {userName: "element",email: "element@gmail.com"},

    ];
}

function findUser(username){
    const users = getUser();
    const user = users.find( (value) => value.userName === username);
    if(user===undefined) return -1;
    return user;
}

const user1 = findUser("blames");
console.log(user1);

// above code shows findUser() get called which called another function getUser()
// findUser() is dependent on getuser()
// in real life when we get data from database it will create problem
//that's why promise are introduced 

// 3 state of promise 
// 1. pending (or process)
// 2. full filled (with value) 
// 3. rejected (for a reason)

// syntax for promise 
const promise = new promise( (resolve,reject) => {
    //operation 

    if(success){
        resolve(value);
    } else {
        reject(error);
    }
});

function onFullFill(){
    console.log("operation is successful");
}

promise.then(onFullFill);