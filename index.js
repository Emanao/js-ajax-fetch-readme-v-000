//349de2b308c13e8752b4c05de6da131a7b1da002
const app = "I don't do much.";
const token = '349de2b308c13e8752b4c05de6da131a7b1da002'
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));