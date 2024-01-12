const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
burger.addEventListener('click', () => {
   if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
   } else {
    menu.classList.add('hidden');
   }
})

 // code for bordo amber border in menu
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('#menu a');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove the active class from all menu items
        menuItems.forEach(item => item.classList.remove('border-amber-600'));
        // Add the active class to the clicked menu item
        this.classList.add('border-amber-600');
      });
    });
  });
  

  // code for bordo color in menu
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Remove the active class from all items
        menuItems.forEach(item => {
          item.classList.remove('border-amber-600');
          item.classList.add('border-white');
        });
        
        // Add the active class to the clicked item
        this.classList.remove('border-white');
        this.classList.add('border-amber-600');
      });
    });
  });
  