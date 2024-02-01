const React = require('react');
const Layout = require('./Layout');

function Quest({ title, quest }) {
  // console.log(quests);
  return (
    <Layout title={title}>
      <div className='oneQuest'>
        <div>
          {quest.title}
        </div>
        <div className='answers'>
      {quest.Answers.map((el) => <button className='buttonAnswer' type='button' data-id={el.id}>{el.name}</button>)}
        </div>
        <button>Далее</button>
      </div>
    </Layout>
  );
}
module.exports = Quest;
