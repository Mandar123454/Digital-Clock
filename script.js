document.addEventListener("DOMContentLoaded", () => {
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  function updateClock() {
    const now = new Date();

    let h = now.getHours();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    const m = now.getMinutes().toString().padStart(2, "0");
    const s = now.getSeconds().toString().padStart(2, "0");

    clock.textContent = `${h}:${m}:${s} ${ampm}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.textContent = now.toLocaleDateString(undefined, options);
  }

  updateClock();
  setInterval(updateClock, 1000);
});
