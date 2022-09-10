function myFunction(e) {
    if (document.querySelector('#navList a.active') !== null) {
      document.querySelector('#navList a.active').classList.remove('active');
    }
    e.target.className = "active";
  }
 
         const setTheme = theme => document.documentElement.className = theme;
 
            document.getElementById('theme-select').addEventListener('change', function() {
            setTheme(this.value);
            });

        const getTheme = () => {
            const theme = localStorage.getItem('theme');
            theme && setTheme(theme);
        }
 
    getTheme();
