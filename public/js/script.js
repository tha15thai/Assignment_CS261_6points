function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key' : 'TUc8e9a774d9aa1222aca29d98ce6b48ff0ae975b29f1021699cb9ed3fb2ef65a93d1e2a39b79ae88dd56ef39239c88434'
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // แสดงชื่อผู้ใช้ที่ดึงมาจาก API
        //document.getElementById('userNameDisplay').innerText = `Name: ${data.user.name}`;
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}



function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8081/testmicroservice1-0.0.1-SNAPSHOT/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        console.log("Text return from REST API"+text);
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}