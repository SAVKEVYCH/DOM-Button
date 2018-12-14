class Button {
    constructor (height, width, parentElement) {
       var button = document.createElement('button');
       var animation = button.animate([
      	 {transform: 'translate(0)'},
       	 {transform: 'translate(0px, 5px)'},
    ], 250);
        var animat = button.animate([
      	 
    ], );
       button.addEventListener('finish', function() {
         button.style.transform = 'translate(0px, 5px)';
    });
       button.addEventListener('click', function() {
         button.style.fontSize = '30px';
         button.style.color = '#116062';
         button.style.transition = '2s'
    });
       
       button.innerHTML = 'CLICK ME';
       button.style.height = '50px';
       button.style.width = '200px';
       button.style.color = "#C41E3A"
       button.style.border = '#343d3b';
       button.style.background = '#343d3b';
       parentElement.appendChild(button);
    }
}
new Button(100, 50, document.body);

