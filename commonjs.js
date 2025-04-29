const userIcon = document.getElementById('user-icon');
        const sidebar = document.getElementById('sidebar');
        const menuHover = document.getElementById('menu-hover');
        const menuClick = document.getElementById('menu-click');
        const userName = document.querySelector('.user-name');
        const logout = document.getElementById('logout');
        const welcomeText = document.querySelector('#welcome-text span');

        // Debug: Confirm elements are found
        console.log('userIcon:', userIcon);
        console.log('menuHover:', menuHover);
        console.log('menuClick:', menuClick);
        console.log('userName:', userName);
        console.log('logout:', logout);
        console.log('welcomeText:', welcomeText);

        // Sidebar functionality
        sidebar.addEventListener('mouseenter', () => {
            if (!sidebar.classList.contains('open')) {
                menuHover.style.display = 'block';
                menuClick.style.display = 'none';
                userName.style.opacity = '1';
                logout.style.opacity = '1';
                sidebar.style.width = '150px';
                console.log('Hover: Showing menu-hover');
            }
        });

        sidebar.addEventListener('mouseleave', () => {
            if (!sidebar.classList.contains('open')) {
                menuHover.style.display = 'none';
                userName.style.opacity = '0';
                logout.style.opacity = '0';
                sidebar.style.width = '60px';
                console.log('Hover: Hiding menu-hover');
            }
        });

        userIcon.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            if (sidebar.classList.contains('open')) {
                menuHover.style.display = 'none';
                menuClick.style.display = 'block';
                userName.style.opacity = '1';
                logout.style.opacity = '1';
                sidebar.style.width = '250px';
                console.log('Click: Showing menu-click');
            } else {
                menuClick.style.display = 'none';
                userName.style.opacity = '0';
                logout.style.opacity = '0';
                sidebar.style.width = '60px';
                console.log('Click: Hiding menu-click');
            }
        });

        // Hover interaction for welcome text
        welcomeText.addEventListener('mouseenter', () => {
            welcomeText.classList.add('pulse');
        });