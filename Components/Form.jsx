const React = require("react");
const Layout = require("./Layout");

function Form({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1 className="rega">Регистрация</h1>
      <div className="formReg">
        <form className="authForm" action="/">
          <input className='inputReg' placeholder="Введите имя" name="name" />
          <button className='buttonnReg'>Вперед</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Form;
