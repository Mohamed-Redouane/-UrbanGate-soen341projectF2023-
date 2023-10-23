const axios = require('axios');
//https://jestjs.io/docs/configuration
//https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios
//https://jestjs.io/docs/getting-started 

test ("created user successfully: ", () => {
    return axios.post("http://localhost:3000/createUser",{name: "test", email: "testingUsingJest@email.com", password: "test", role: "renter"})
    .then((res)=> {
        expect(res.data.popup).toBe("Successfully created user");
    })
}) 

let UserID;
test ("Signed in successfully: ", () => {
    return axios.post("http://localhost:3000/signIn",{name: "test", email: "testingUsingJest@email.com", password: "test", role: "renter"})
    .then((res)=> {
        UserID = res.data.userID;
        expect(res.data.popup).toBe("User signed in successfully!");
    })
}) 

test ("Deleted user successfully", () => {
    console.log(UserID);
    return axios.get(`http://localhost:3000/deleteBroker/${UserID}`)
    .then((res) => {
        expect(res.data.popup).toBe("User deleted successfully!")
    })
})
