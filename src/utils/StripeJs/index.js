import {loadStripe as Stripe} from '@stripe/stripe-js'

const runStripe = async (stripeId, divId, priceId) => {
  const stripe = await Stripe(stripeId);
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
export default runStripe;
