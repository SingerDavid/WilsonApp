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
        if (typeof sessionStorage.value !== "undefined") {
          obj = JSON.parse(sessionStorage.value);
        }
        return obj;
      }

      let value = getSession();
      console.log('This is the saved value', value);

      let container = document.querySelector('article');
      let ul = document.createElement('ul')
      ul.setAttribute('id', 'displayUlNew');

      let liParent = document.querySelector('#container ul');

      Object.keys(value).forEach((item, index) => {
        if (index === 0){
          console.log("executing for name creation");
          let h3 = document.createElement('h3')
          h3.setAttribute('id', 'clientNew');
          h3.innerHTML = value[item];
          container.appendChild(h3);
          let span = document.createElement('span')
          span.setAttribute('id', 'spanNew');
          span.innerHTML = '+';
          container.appendChild(span);
          console.log('This is the new name title --- ', value[item]);
          //This skips the first iteration, aka the name that we just used.
          return;
        }
        if ((value[item] === null) || (value[item] === '')){
          console.log(item, "-- Skipping item, left blank or non-applicable")
          return;
        }
        //append Ul after title creation
        container.appendChild(ul);
        let liParent = document.querySelector('#container ul');

        let liTitle = document.createElement('li')
        liTitle.classList.add('dataTitle');
        liTitle.innerHTML = item;
        liParent.appendChild(liTitle);

        let liData = document.createElement('li')
        liData.classList.add('userData');
        liData.innerHTML = value[item];
        liParent.appendChild(liData);
      });


      document.getElementById('clientOne').onclick = function(event) {
        event.preventDefault();
        let resultsOne = document.getElementById('displayUlOne');
        let spanOne = document.getElementById('spanOne');

        if (resultsOne.style.display == 'none'){
          resultsOne.style.display = 'block';
          spanOne.innerHTML = '-'
        }
        else{
          resultsOne.style.display = 'none';
          spanOne.innerHTML = '+'
        }
      }

      let displayTwo = document.getElementById('clientTwo')
      displayTwo.addEventListener('click', function(event) {
        event.preventDefault();
        let resultsTwo = document.getElementById('displayUlTwo');
        let spanTwo = document.getElementById('spanTwo');

        if (resultsTwo.style.display == 'none'){
          resultsTwo.style.display = 'block';
          spanTwo.innerHTML = '-'
        }
        else{
          resultsTwo.style.display = 'none';
          spanTwo.innerHTML = '+'
        }
      });

      document.getElementById('clientNew').onclick = function(event) {
        event.preventDefault();
        let resultsNew = document.getElementById('displayUlNew');
        let spanNew = document.getElementById('spanNew');

        if (resultsNew.style.display == 'none'){
          resultsNew.style.display = 'block';
          spanNew.innerHTML = '-'
        }
        else{
          resultsNew.style.display = 'none';
          spanNew.innerHTML = '+'
        }
      }

    }//end of fitter page execution




});
