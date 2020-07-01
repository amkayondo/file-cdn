import React from "react";

const Index = ({ btnId, btnCategory, btnText }) => {
  return (
    <button
      data-qa="poll-option-0"
      className="poll__ItemButton-iptlde-0 fvmKtl mble"
      id={btnId}
    >
      <span className="poll__Letter-iptlde-1 fxXBlX mdble">{btnCategory}</span>
      <span className="poll__Content-iptlde-3 jJameY mbdfs">{btnText}</span>
    </button>
  );
}

export default Index;
