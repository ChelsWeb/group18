document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const FavCont = document.querySelector('.FavCont');
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        FavCont.classList.toggle('active');
    });
});