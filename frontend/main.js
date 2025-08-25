let token = '';
const apiUrl = 'http:///localhost:5000/api';

async function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const res = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    alert((await res.json()).message || (await res.json()).error);
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const res = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) {
        token = data.token;
        document.getElementById('auth').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
        loadMessages();
    } else alert(data.error);
}

async function loadMessages() {
    const res = await fetch(`${apiUrl}/messages`);
    const messages = await res.json();
    const container = document.getElementById('messages');
    container.innerHTML = messages.map(m => `<p><b>${m.sender}:</b> ${m.text}</p>`).join('');
}

async function sendMessage() {
    const text = document.getElementById('text').value;
    const username = document.getElementById('username').value;
    await fetch(`${apiUrl}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: username, text })
    });
    document.getElementById('text').value = '';
    loadMessages();
}
