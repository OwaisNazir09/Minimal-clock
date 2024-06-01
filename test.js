setInterval(() => {
    const now = new Date();
  
    const hours = now.getHours();;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    document.querySelector('#hour').innerHTML = hours;
    document.querySelector('#min').innerHTML = minutes;
    document.querySelector('#sec').innerHTML = seconds;
  }, 1000);
  
  
  