setInterval(() => {
    const now = new Date();
  
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  
    document.querySelector('#hour').innerHTML = hours;
    document.querySelector('#min').innerHTML = minutes;
    document.querySelector('#sec').innerHTML = seconds;
    document.querySelector('#ampm').innerHTML = ampm;
}, 1000);
