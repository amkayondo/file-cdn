import React, { useEffect } from "react";
import { stripeData } from "../../data";
import StripeButtonMobile from "../StripeButtonMobile";
import StripeJs from '../../utils/StripeJs'

const Index = () => {
  useEffect(() => {
    stripeData.map((strp) => StripeJs(strp.strpId, strp.btnId, strp.priceId ))
  })
  const stripeDiv = stripeData.map((x) => <div
  id={x.btnId}>
    <StripeButtonMobile
  id={x.btnId}
  btnId={x.btnId}
  btnCategory={x.btnCategory}
  btnText={x.btnText}
  />
  </div>
)
  return (
    <div className="ksdla sfsa">
      <div id="error-message"></div>
      <div className="dntbtn mbils">
        <div className="poll__Wrapper-iptlde-5 mbndjs">
        { stripeDiv  }
        </div>
      </div>
    </div>
  );
};

export default Index;
