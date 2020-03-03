window.onload = function () {

    function create(element){ 
      return document.createElement(element);
    }
    
    function append(parent,element){ 
     parent.appendChild(element);
    }
    
    function list(element, id){
     element.classList.add(id);
      return element;
    }
    
    function check(element){
      if (element == null) return null;
      element.parentNode.removeChild(element);
    }
    
    append(document.body, list(create("input"), 'inp'));
    append(document.body, list(create("input"), 'inp'));
    append(document.body, list(create("button"), 'button'));
    
    document.querySelector('button').innerHTML = 'Calculate';
    
    document.querySelector('button').onclick = function () {
        let firstValue = document.querySelectorAll('.inp')[0].value;;
        let secondValue = document.querySelectorAll('.inp')[1].value;
    
        let inp1Node = document.querySelectorAll('.inp')[0];
        let inp2Node = document.querySelectorAll('.inp')[1];
    
        check(document.querySelectorAll('.message-error')[0]);
        check(document.querySelectorAll('.message-error')[0]);
        check(document.querySelectorAll('.result')[0]);
    
            if (!(/^\d*(\.)*(\-)?\d*?$/.test(firstValue))) {
            append(document.body,list(create("div"), 'message-error'));
            let messageError1 = document.querySelectorAll('.message-error')[0];
            document.body.insertBefore(messageError1, inp1Node.nextSibling);
               document.querySelectorAll('.message-error')[0].innerHTML = ' Это не число ';
            }
    
            if (!(/^\d*(\.)*(\-)?\d*?$/.test(secondValue))) {
            append(document.body,list(create("div"), 'message-error'));
            let messageError2 = document.querySelectorAll('.message-error')[document.querySelectorAll('.message-error').length - 1];
            document.body.insertBefore(messageError2, inp2Node.nextSibling);
               document.querySelectorAll('.message-error')[document.querySelectorAll('.message-error').length - 1].innerHTML = ' Это не число ';
            }
            
            if(/^\d*(\.)*(\-)?\d*?$/.test(firstValue) && /^\d*(\.)*(\-)?\d*?$/.test(secondValue)){
            append(document.body, list(create('div'), 'result'));
            document.querySelectorAll('.result')[0].innerHTML = (Number(firstValue) + Number(secondValue));
            }
        }
    }