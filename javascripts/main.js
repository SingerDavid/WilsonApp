document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  function handleSubmit(event) {
      event.preventDefault();

      const data = new FormData(event.target);

      const value = Object.fromEntries(data.entries());

      console.log(data);
      console.log(value);

      const newValue = JSON.stringify(value);
      console.log(newValue);


      fetch('http://localhost:8080/fitter/index.html')
        .then(res => res.text())
        .then((responseText) => {
          const doc = new DOMParser().parseFromString(responseText, 'text/html');
          console.log(doc)
          let container = doc.querySelector('#container h2');
          let ul = document.createElement('ul')
          container.appendChild(ul);

          let liParent = doc.querySelector('#container ul');

          console.log('test value:', value);

          Object.keys(value).forEach(item => {
            let li = document.createElement('li')
            li.classList.add('userData');
            li.innerHTML = item + value[item];
            console.log(item, value[item]);
            // let name = doc.createElement('li').innerHTML = 'Name: option2' + item.clientName;
            liParent.appendChild(li);
          });

      });//end fetch response

    }

    if (document.getElementById('clientPage')){
      console.log('This is executing the client page');
      const form = document.querySelector('form');
      form.addEventListener('submit', handleSubmit);
    }

});
