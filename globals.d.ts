declare global {
  interface Window {
    Stripe: (apiKey: string) => stripe.Stripe;
    webkitAudioContext: any;
  }
}

// Flag as module for TypeScript
export {};
