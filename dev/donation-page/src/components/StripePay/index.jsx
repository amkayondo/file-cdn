import React, { useEffect } from "react";
import { stripeData } from "../../data";
import StripeButton from "../StripeButton";
import StripeJs from '../../utils/StripeJs'

const Index = () => {
  useEffect(() => {
    stripeData.map((strp) => StripeJs(strp.strpId, strp.btnId, strp.priceId ))
  })
  const stripeDiv = stripeData.map((x) => <div
  id={x.btnId}>
    <StripeButton
  id={x.btnId}
  btnId={x.btnId}
  btnCategory={x.btnCategory}
  btnText={x.btnText}
  />
  </div>
)
  return (
    <div className="ksdla">
      <div id="error-message"></div>
      <div className="dntbtn">
        <div className="poll__Wrapper-iptlde-5 dpBdeQ">
        { stripeDiv  }
        </div>
      </div>
    </div>
  );
};

export default Index;
