const stripeMeta = (strpId, btnId, btnCategory, btnText, priceId) => ({
  strpId,
  btnId,
  btnCategory,
  btnText,
  priceId
});

export const VideoSrc =
  "https://res.cloudinary.com/dsdkssc5e/video/upload/v1593023516/Donation_video_copy_kzarti.mp4";

export const stripeData = [
  stripeMeta(
    "pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq",
    "checkout-button-sku_HVDscuGwFYhCls", 
  "A", "$5 for 🤜🤛",
  "sku_HVDscuGwFYhCls",
  ),
  stripeMeta(
    'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
    "checkout-button-sku_HVDsxxbXRqfRA8",
    "B", "$10 for ✊",
    'sku_HVDsxxbXRqfRA8',
    ),
  stripeMeta(
    'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
    "checkout-button-sku_HVDsgbFVuaRLJo", 
    "C", "$20 for 🙏",
    'sku_HVDsgbFVuaRLJo',
    ),
  stripeMeta(
    'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
    "checkout-button-sku_HVDsWxIrdcPaPD", 
    "D", "$50 for 👏",
    'sku_HVDsWxIrdcPaPD',
    ),
  stripeMeta(
    'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
    "checkout-button-sku_HVDs7rks2PPfFF", 
    "E", "$100 for 🙌",
    'sku_HVDs7rks2PPfFF',
    ),
  stripeMeta(
    'pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq',
    "checkout-button-sku_HVKFOGMOPERMOlrmor", 
    "F", "Other amount",
    null,)
];
