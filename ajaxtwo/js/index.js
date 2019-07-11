// create event listener
document.getElementById('button1')
  .addEventListener('click', loadUser);
document.getElementById('button2')
  .addEventListener('click', loadUsers);
function loadUsers() {
  // Create XHR Object
  let xhr = new XMLHttpRequest();
  // Open - type, url/file, async
  xhr.open('GET', 'users.json', true);

  // ready state 3
  xhr.onprogress = function () {
    document.getElementById('loading').textContent = 'загружаю';
  };

  // ready state 4
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('loading').textContent = 'загрузил';

      let users = JSON.parse(this.responseText);

      //console.log(user.name, user.id, user.email);
      let output = '';
      /*output += `<ul>
                  <li>ID: ${user.id}</li>
                  <li>Name: ${user.name}</li>
                  <li>Email: ${user.email}</li>
                </ul>`;*/
      for(let i in users) {
        output += '<ul>' +
          '<li>ID: ' + users[i].id + '</li>'+
          '<li>Name: ' + users[i].name + '</li>'+
          '<li>Email: ' + users[i].email + '</li>'+
          '</ul>';
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

function loadUser() {
  // Create XHR Object
  let xhr = new XMLHttpRequest();
  // Open - type, url/file, async
  xhr.open('GET', 'user.json', true);

  // ready state 3
  xhr.onprogress = function () {
    document.getElementById('loading').textContent = 'загружаю';
  };

  // ready state 4
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('loading').textContent = 'загрузил';

      let user = JSON.parse(this.responseText);

      //console.log(user.name, user.id, user.email);
      let output = '';
      /*output += `<ul>
                  <li>ID: ${user.id}</li>
                  <li>Name: ${user.name}</li>
                  <li>Email: ${user.email}</li>
                </ul>`;*/
      output += '<ul>' +
                  '<li>ID: ' + user.id + '</li>'+
                  '<li>Name: ' + user.name + '</li>'+
                  '<li>Email: ' + user.email + '</li>'+
                '</ul>';


      document.getElementById('user').innerHTML = output;
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