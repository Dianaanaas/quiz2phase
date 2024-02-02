const React = require('react');
const Layout = require('./Layout');
const QuestI = require('./QuestI');

function Quest({ title, quest ,user}) {
  return (
    <Layout title={title} user={user}>
      <div className="cont">
        <QuestI quest={quest} />
      </div>
    </Layout>
  );
}
module.exports = Quest;
