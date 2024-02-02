const React = require("react");
const Layout = require("./Layout");

function Form({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h2 className="rega">Регистрация</h2>
      <h3>{user?.name}</h3>
      <div className="formReg">
        <form className="authForm" action="/">
          <input placeholder="Введите имя" name="name" />
          <button>Вперед</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Form;
