document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  function handleSubmit(event) {
      event.preventDefault();

      const data = new FormData(event.target);

      const value = Object.fromEntries(data.entries());

      saveSession(value);
      console.log(data);
      console.log(value);

      const newValue = JSON.stringify(value);
      console.log(newValue);

      function saveSession(obj) {
        console.log('Saving values to session');
        sessionStorage.setItem("value", JSON.stringify(obj));
        return true;
      }

      /*
      fetch('http://localhost:8080/fitter/index.html')
        .then(res => res.text())
        .then((responseText) => {
          const doc = new DOMParser().parseFromString(responseText, 'text/html');
          console.log(doc)
          let container = doc.querySelector('#container');
          let ul = document.createElement('ul')
          container.appendChild(ul);

          let liParent = doc.querySelector('#container ul');

          let test = document.createElement('li')
          test.classList.add('userData');
          test.innerHTML = 'information';
          liParent.appendChild(test);

          console.log('test value:', value);

          Object.keys(value).forEach(item => {
            let li = document.createElement('li')
            li.classList.add('userData');
            li.innerHTML = item + value[item];
            console.log(item, value[item]);
            liParent.appendChild(li);
          });
      });//end fetch response
  */

    }

    if (document.getElementById('clientPage')){
      console.log('This is executing the client page');
      const form = document.querySelector('form');
      form.addEventListener('submit', handleSubmit);
    }

    if (document.getElementById('fitter-page')){
      console.log('This is executing the fitter page');

      function getSession() {
        var obj = {};
        if (typeof sessionStorage.myObj !== "undefined") {
          obj = JSON.parse(sessionStorage.myObj);
        }
        return obj;
      }

      let value = getSession();
      console.log('This is the saved value', value);

      let container = document.querySelector('article');
      let ul = document.createElement('ul')
      container.appendChild(ul);

      let liParent = document.querySelector('#container ul');

      Object.keys(value).forEach(item => {
        let li = document.createElement('li')
        li.classList.add('userData');
        li.innerHTML = item + value[item];
        console.log(item, value[item]);
        liParent.appendChild(li);
      });
    }

});
