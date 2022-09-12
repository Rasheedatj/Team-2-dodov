

function myFunction(e) {
    if (document.querySelector('#navList a.active') !== null) {
      document.querySelector('#navList a.active').classList.remove('active');
    }
    e.target.className = "active";
  }

//   mode
// const setTheme = theme => document.documentElement.className = theme;
// document.getElementById('theme-select').addEventListener('change', function() {
//             setTheme(this.value);
//             });
const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme)
};
document.getElementById('theme-select').addEventListener('change', function() {
  setTheme(this.value);
});


const getTheme = () => {
    const theme = localStorage.getItem('theme');
    theme && setTheme(theme);
    }

    getTheme();



