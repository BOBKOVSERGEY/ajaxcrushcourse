// create event listener
document.getElementById('button')
  .addEventListener('click', loadText);

function loadText() {
  // Create XHR Object
  let xhr = new XMLHttpRequest();
  // Open - type, url/file, async
  xhr.open('GET', 'simple.txt', true);
  console.log('OPENED', xhr.readyState);

  // ready state 3
  xhr.onprogress = function () {
    document.getElementById('loading').textContent = 'загружаю';
    console.log('LOADING', xhr.readyState); // readyState будет равно 3
  };

  // ready state 4
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('loading').textContent = 'загрузил';
      console.log('DONE', xhr.readyState);
      document.getElementById('text').innerHTML = this.responseText;
    } else if (this.status === 404) {
      document.getElementById('text').innerHTML = 'Not Found';
    }
  }

  xhr.onerror = function() {
    console.log('Request Error');
  };

  /*xhr.onreadystatechange = function() {
    //console.log('ReadyState: ', xhr.readyState);
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('loading').textContent = 'загрузил';
      console.log(this.responseText);
    }
  };*/

  // Sends request
  xhr.send();
}

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// Ready State
/*var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState будет равно 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState будет равно 1

xhr.onprogress = function () {
  console.log('LOADING', xhr.readyState); // readyState будет равно 3
};

xhr.onload = function () {
  console.log('DONE', xhr.readyState); // readyState будет равно 4
};

xhr.send(null);*/