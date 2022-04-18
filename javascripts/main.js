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

      let stats = document.getElementById('yesStats');
      document.getElementById('yes').onclick = function() {
        stats.style.display = 'block';
      }
      document.getElementById('no').onclick = function() {
        stats.style.display = 'none';
      }

      let injury = document.getElementById('hasInjury');
      document.getElementById('yesInjury').onclick = function() {
        injury.style.display = 'block';
      }
      document.getElementById('noInjury').onclick = function() {
        injury.style.display = 'none';
      }
    }//end of client page function


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

      let table = document.createElement('table');
      table.setAttribute('id', 'displayTableNew');

      const counter = 1;

      if (counter === 1){
        console.log('running inside if statement');
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
          //append table after title creation
          container.appendChild(table);

          //create tr
          let tr = document.createElement('tr');
          table.appendChild(tr);

          //add th and td to tr
          let th = document.createElement('th');
          th.innerHTML = item;
          tr.appendChild(th);

          let td = document.createElement('td');
          td.innerHTML = value[item];
          tr.appendChild(td);
        });

        if ((sessionStorage.value != null) || (sessionStorage.value != '')){
          document.getElementById('clientNew').onclick = function(e) {
            e.preventDefault();
            let resultsNew = document.getElementById('displayTableNew');
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
        }
      }//end of THE IF STATEMENT
      else {
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

        if ((sessionStorage.value != null) || (sessionStorage.value != '')){
          document.getElementById('clientNew').onclick = function(e) {
            e.preventDefault();
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
        }
      }//END OF THE ELSE STATEMENT



      document.getElementById('clientOne').onclick = function(e) {
        e.preventDefault();
        let resultsOne = document.getElementById('displayUlOne');
        let spanOne = document.getElementById('spanOne');

        let resultsComputerOne = document.getElementById('displayTableOne');

        if (window.matchMedia('(min-width: 1280px)')){
          if (resultsComputerOne.style.display == 'none'){
            resultsComputerOne.style.display = 'block';
            spanOne.innerHTML = '-'
          }
          else{
            resultsComputerOne.style.display = 'none';
            spanOne.innerHTML = '+'
          }
        }//end minwidth media query
        else{
          if (resultsOne.style.display == 'none'){
            resultsOne.style.display = 'block';
            spanOne.innerHTML = '-'
          }
          else{
            resultsOne.style.display = 'none';
            spanOne.innerHTML = '+'
          }
        }
      }//end onclick function

      let displayTwo = document.getElementById('clientTwo')
      displayTwo.addEventListener('click', function(e) {
        e.preventDefault();
        let resultsTwo = document.getElementById('displayUlTwo');
        let spanTwo = document.getElementById('spanTwo');

        let resultsComputerTwo = document.getElementById('displayTableTwo');

        if (window.matchMedia('(min-width: 1000px)')){
          if (resultsComputerTwo.style.display == 'none'){
            resultsComputerTwo.style.display = 'block';
            spanTwo.innerHTML = '-'
          }
          else{
            resultsComputerTwo.style.display = 'none';
            spanTwo.innerHTML = '+'
          }
        }//end minwidth media query
        else{
          if (resultsTwo.style.display == 'none'){
            resultsTwo.style.display = 'block';
            spanTwo.innerHTML = '-'
          }
          else{
            resultsTwo.style.display = 'none';
            spanTwo.innerHTML = '+'
          }
        }
      }); //end onclick event listener

    }//end of fitter page execution




});
