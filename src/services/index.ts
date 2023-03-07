export const gaEvent = (action: string, params: string) => {
  window.gtag("event", action, params);
};
