export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  } else {
    console.warn("Facebook Pixel aún no está cargado.");
  }
};
