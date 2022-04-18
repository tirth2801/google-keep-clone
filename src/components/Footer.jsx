import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Tirth Shroff 2019 - {year}</p>
    </footer>
  );
}

export default Footer;
