import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Tirth Shroff {year}</p>
    </footer>
  );
}

export default Footer;
