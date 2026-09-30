// Sandeep HR Solutions - Admin 15 Minute Inactivity Logout

export function startAdminSessionTimeout(auth) {
  const TIMEOUT = 15 * 60 * 1000;
  let timer;

  const logoutForInactivity = async () => {
    try { await auth.signOut(); } catch (e) { console.error(e); }
    alert("Admin session expired after 15 minutes of inactivity. Please login again.");
    window.location.href = "admin-login.html";
  };

  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(logoutForInactivity, TIMEOUT);
  };

  ["click","keydown","touchstart","scroll","mousemove"].forEach(type => {
    window.addEventListener(type, resetTimer, { passive: true });
  });

  resetTimer();

  return () => clearTimeout(timer);
}
