'use strict';

const sidebarBtn = document.querySelector('.sidebarBtn');
const sidebar = document.querySelector('.sidebar');

sidebarBtn.onclick = () =>{
    sidebar.classList.toggle('_active');
}

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;
    if(windowWidth < 510 && sidebar) {
        sidebar.classList.add('_active');
    }
});