const React = require("react");
const Layout = require("./Layout");

function Form({ title }) {
  return (
    <Layout title={title}>
      <h2>Регистрация</h2>
      <div>
        <form method="POST" action="/themes">
          {" "}
          <input name="password" />
          <button>Вперед</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Form;
