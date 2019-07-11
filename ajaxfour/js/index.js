// create event listener
document.getElementById('button')
  .addEventListener('click', getName);

document.getElementById('getForm')
  .addEventListener('submit', getName);

document.getElementById('postForm')
  .addEventListener('submit', postName);

function postName(e) {
  e.preventDefault();

  let name = document.getElementById('name2').value;

  // Create XHR Object
  let xhr = new XMLHttpRequest();
  // Open - type, url/file, async
  xhr.open('POST', 'process.php', true);

  //'orem=ipsum&name=binny';
  let params = "name="+name;

  //Send the proper header information along with the request
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // ready state 3
  xhr.onprogress = function () {
    document.getElementById('loading').textContent = 'загружаю';
  };

  // ready state 4
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('loading').textContent = 'загрузил';
      document.getElementById('name2').value = '';
      console.log(this.responseText);

    } else if (this.status === 404) {
      document.getElementById('error').innerHTML = 'Not Found';
    }
  }

  xhr.onerror = function() {
    document.getElementById('error').innerHTML = 'Not Found';
  };

  // Sends request
  xhr.send(params);
}

function getName(e) {
  e.preventDefault();

  let name = document.getElementById('name1').value;

  // Create XHR Object
  let xhr = new XMLHttpRequest();
  // Open - type, url/file, async
  xhr.open('GET', 'process.php?name=' + name, true);

  // ready state 3
  xhr.onprogress = function () {
    document.getElementById('loading').textContent = 'загружаю';
  };

  // ready state 4
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('loading').textContent = 'загрузил';

      console.log(this.responseText);
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
