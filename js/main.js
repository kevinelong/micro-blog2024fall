const BASE_URL = "http://microbloglite.us-east-2.elasticbeanstalk.com";

// ONLY 2 - INSECURE TOKEN FREE ACTIONS

//create user - sign up
/*
curl -X 'POST' \
  'http://microbloglite.us-east-2.elasticbeanstalk.com/api/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "string",
  "fullName": "string",
  "password": "string"
}'
*/
async function signUp(username, fullName, password){
    const response = await fetch(BASE_URL + "/api/users", {
        method: "POST",
        headers: {
            'accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        // body: `{"username":"${username}","fullName":"${fullName}","password":"${password}"}`
        body: JSON.stringify({
            "username": username,
            "fullName": fullName,
            "password": password
        })
    }); //end fetch

    //TODO check for error response status codes
    
    const object = await response.json();
    console.log(object);
    return object;
}
//TEST - MUST CHANGE FIRST PARAMETER USERNAME TO SOMETHING UNIQUE EVERY TIME
signUp("dandy2", "Yankee Poodle Dandy", "bone");

//login and store username and token received


// ALL THE OTHERS NEED A TOKEN IN THE HEADER

// get secure list of message using token

// r = await fetch(url, {
//     method: "GET",
//     headers: {
//         Authorization: `Bearer ${loginData.token}`,
//     },
// })