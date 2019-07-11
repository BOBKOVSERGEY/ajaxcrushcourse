// create event listener
document.getElementById('button')
  .addEventListener('click', loadUsers);

// Load github users
function loadUsers() {
  // Create XHR Object
  let xhr = new XMLHttpRequest();
  // Open - type, url/file, async
  xhr.open('GET', 'https://api.github.com/users', true);

  // ready state 3
  xhr.onprogress = function () {
    document.getElementById('loading').textContent = 'загружаю';
  };

  // ready state 4
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('loading').textContent = 'загрузил';

      let users = JSON.parse(this.responseText);

      //console.log(users);
      let output = '';

      /*output += `<ul>
                  <li>ID: ${user.id}</li>
                  <li>Name: ${user.name}</li>
                  <li>Email: ${user.email}</li>
                </ul>`;*/
      for(let i in users) {
        output += '<div>' +
          '<div class="user">' +
          '<img width="70" height="70" src="' + users[i].avatar_url + '">'+
            '<ul>' +
              '<li>ID: ' + users[i].id + '</li>'+
              '<li>Login: ' + users[i].login + '</li>'+
              '<li>Url: ' + users[i].url + '</li>'+
            '</ul>' +
          '</div>';
      }

      document.getElementById('users').innerHTML = output;
    } else if (this.status === 404) {
      document.getElementById('error').innerHTML = 'Not Found';
    }
  }

  xhr.onerror = function() {
    document.getElementById('error').innerHTML = 'Not Found';
  };

  // Sends request
  xhr.send();
}
