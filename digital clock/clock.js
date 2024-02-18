function times() {
    const date = new Date();
    const timestring = date.toLocaleTimeString();
    document.getElementById('time').textContent = timestring;
  }
  times();
  setInterval(times, 1000);