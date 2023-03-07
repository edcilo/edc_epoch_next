declare global {
  interface Window {
    gtag: any;
  }
}

export const gaEvent = (action: string, params: string) => {
  window.gtag("event", action, params);
};
