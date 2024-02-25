document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebarToggle');

    toggleButton?.addEventListener('click', () => {
        sidebar?.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle functionality
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebarToggle');

    toggleButton?.addEventListener('click', () => {
        sidebar?.classList.toggle('active');
    });

    // Show popups if needed on DOMContentLoaded
    showPopupsIfNeeded();
});

function hideTosBanner() {
    document.getElementById('tosBanner').style.display = 'none';
    // Adjust the bottom position of the cookie consent popup when TOS banner is hidden
    document.getElementById('cookieConsentPopup').style.bottom = '0px';
}

function acceptCookies() {
    document.cookie = "cookiesAccepted=true; path=/; max-age=86400*365"; // Adjust max-age as necessary
    document.getElementById('cookieConsentPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none'; // Hide overlay
}



function showPopupsIfNeeded() {
    if (!document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted'))) {
        document.getElementById('cookieConsentPopup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block'; // Show overlay
    }
}


let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}




document.querySelector('.get-started').addEventListener('click', function() {
    // Replace with actual logic, e.g., opening a sign-up modal
    console.log('Get Started Clicked');
});
