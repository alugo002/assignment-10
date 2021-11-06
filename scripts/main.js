let button = document.querySelector('button');
let emu = document.querySelector('#emu');
let div = document.querySelector('div');



emu.onmouseover = () => {
   if ( emu.getAttribute('src') ===
   'images/ostrich.jpg' )
   {
        emu.setAttribute('src',
        'images/emu.jpg');
   } else {
        emu.setAttribute('src',
        'images/ostrich.jpg');
   }
};

div.style.display = 'none';

button.onclick = () => {
   if ( div.style.display === 'none')   {
        div.style.display = 'block';
   } else {
        div.style.display = 'none';
   }
};
