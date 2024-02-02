const React = require('react');
// const Navbar = require("./Navbar");

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/quest.css" />
        <script defer src="/scripts/questScript.js" />
      </head>

      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
};
