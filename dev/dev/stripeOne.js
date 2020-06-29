const runStripe = (stripeId, divId, priceId) => {
  const stripe = Stripe(stripeId);
  const checkoutButton = document.getElementById(divId);
  checkoutButton.addEventListener("click", () => {
    stripe
      .redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: "payment",
        successUrl: `${window.location.protocol}//delovery.org/success`,
        cancelUrl: `${window.location.protocol}//delovery.org/canceled`,
      })
      .then((result) => {
        if (result.error) {
          const displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  });
};

runStripe(
  "pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq",
  "checkout-button-sku_HVDscuGwFYhCls",
  "sku_HVDscuGwFYhCls",
);

runStripe(
  'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
  'checkout-button-sku_HVDsxxbXRqfRA8',
  'sku_HVDsxxbXRqfRA8',
);

runStripe(
  'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
  'checkout-button-sku_HVDsgbFVuaRLJo',
  'sku_HVDsgbFVuaRLJo',
);

runStripe(
  'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
  'checkout-button-sku_HVDsWxIrdcPaPD',
  'sku_HVDsWxIrdcPaPD',
);

runStripe(
  'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
  'checkout-button-sku_HVDs7rks2PPfFF',
  'sku_HVDs7rks2PPfFF',
);
