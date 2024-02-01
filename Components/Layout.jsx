const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ title, children }) {
  //{title и children} - пропсы(всегда объект и это единственный способ передать в компонент какие-то данные).
  //Children - это другие компоненты, кот. б. подставляться в Layout и только 1 сущность за раз
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/products.css" /> */}
        {/* <script src="/js/script.js" /> */}
      </head>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
