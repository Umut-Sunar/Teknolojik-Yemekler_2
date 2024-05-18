document.addEventListener("DOMContentLoaded", function() {


              const rootElement = document.getElementById('root');
              rootElement.style.visibility = 'visible';
          
             //Loading sayfasını dispalyini  none yapki gözükmesin
              const loader = document.querySelector('.LoadingPage');
              if (loader) {
                  loader.style.display = 'none';
              }

// ERROR PAGE İÇİN GEREKEN BİR SPİN FONKSİYONU // CODEPEN HAZIR ALINDI



  const cheese = document.querySelector('.cheese');

  let deg = 0;

  function spin() {
    setInterval(() => {
      deg++;
      if (deg >= 360) {
        deg = 0;
      } else {
        cheese.style.transform = `rotate(${deg}deg)`;
      }
    }, 50);
  }

  spin();



          });

