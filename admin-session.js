// Sandeep HR Solutions - Admin 15 Minute Auto Logout

export function startAdminSessionTimeout(auth) {
  const TIMEOUT = 15 * 60 * 1000; // 15 minutes
  let timer;

  function resetTimer() {
    clearTimeout(timer);

    timer = setTimeout(async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.error("Logout error:", error);
      }

      alert("Admin session expired after 15 minutes of inactivity. Please login again.");
      window.location.href = "admin-login.html";
    }, TIMEOUT);
  }

  const events = [
    "click",
    "keydown",
    "touchstart",
    "scroll",
    "mousemove"
  ];

  events.forEach(event => {
    window.addEventListener(event, resetTimer, { passive: true });
  });

  // Start timer
  resetTimer();

  return function stopAdminSessionTimeout() {
    clearTimeout(timer);

    events.forEach(event => {
      window.removeEventListener(event, resetTimer);
    });
  };
}
