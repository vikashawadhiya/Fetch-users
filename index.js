document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);
function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => displayUsers(data.data))
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsers(users) {
    const userDisplay = document.getElementById('userDisplay');
    userDisplay.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = 'User Avatar';
        avatar.classList.add('user-avatar');
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');

        const name = document.createElement('p');
        name.textContent = `Name: ${user.first_name} ${user.last_name}`;

       
        const email = document.createElement('p');
    
        email.textContent = `Email: ${user.email}`;

        userInfo.appendChild(name);
        userInfo.appendChild(email);

        userCard.appendChild(avatar);
        userCard.appendChild(userInfo);

        userDisplay.appendChild(userCard);
    });
}
