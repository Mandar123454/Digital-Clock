document.addEventListener("DOMContentLoaded", () => {
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  function pad2(n) { return n.toString().padStart(2, "0"); }

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = pad2(now.getMinutes());
    const seconds = pad2(now.getSeconds());

    let display = '';
    if (hours >= 12) {
      // 12-hour format
      const ampm = hours >= 12 ? "PM" : "AM";
      const h12 = hours % 12 || 12;
      display = `${h12}:${minutes}:${seconds} ${ampm}`;
    } else {
      // 24-hour fallback early morning (sample: show both)
      display = `${pad2(hours)}:${minutes}:${seconds} AM`;
    }
    clock.textContent = display;
    clock.setAttribute("datetime", now.toISOString());

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.textContent = now.toLocaleDateString(undefined, options);
  }

  updateClock();
  setInterval(updateClock, 1000);
});