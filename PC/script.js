function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const isShown = dropdown.classList.contains('show');
    
    if (isShown) {
        dropdown.classList.remove('show');
        setTimeout(() => {
            if (!dropdown.classList.contains('show')) {
                dropdown.style.display = 'none';
            }
        }, 300);
    } else {
        dropdown.style.display = 'block';
        setTimeout(() => {
            dropdown.classList.add('show');
        }, 10);
    }
}

function toggleTheme() {
    const themeSwitch = document.querySelector('.theme-switch');
    themeSwitch.classList.add('clicked'); // Add class for animation
    document.body.classList.toggle('night-theme');
    setTimeout(() => {
        themeSwitch.classList.remove('clicked'); // Remove after animation
    }, 500); // Matches animation duration
}

document.addEventListener('click', function(event) {
    const containers = document.querySelectorAll('.container');
    const dropdowns = document.querySelectorAll('.dropdown');
    const buttons = document.querySelectorAll('.download-btn');
    
    dropdowns.forEach(dropdown => {
        const isInsideContainer = Array.from(containers).some(container => container.contains(event.target));
        const isButton = Array.from(buttons).includes(event.target);
        
        if (!isInsideContainer && !isButton) {
            dropdown.classList.remove('show');
            setTimeout(() => {
                if (!dropdown.classList.contains('show')) {
                    dropdown.style.display = 'none';
                }
            }, 300);
        }
    });
});