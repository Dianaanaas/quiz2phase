const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ title, children,user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/regStyle.css" />
        <link rel="stylesheet" href="/css/quest.css" />
        <link rel="stylesheet" href="/css/theme.css" />
          <script defer src="/scripts/questScript.js" />
            <script defer src="/scripts/auth.js" />

      </head>
      <body>
        <Navbar user={user}/>
        {children}
      </body>
    </html>
  );
};
