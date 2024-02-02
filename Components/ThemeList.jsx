const React = require("react");
const Layout = require("./Layout");

function ThemeList({ thems, title, user }) {
  
  return (
    <Layout title={title}>
      <h1 className='header'>Добро пожаловать в игру, {user.name}</h1>
      <h2 className='header'>выбери тему</h2>
      <div className='themeContainer'>
        {thems.map((theme) => (
          <div key={theme.name}>
            <h2 className ='themeName'>{theme.name}</h2>
            <a href={`/theme/${theme.id}/quest`}>
            <img className = 'themeCover' src ={theme.img} alt={theme.name}/>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = ThemeList;
