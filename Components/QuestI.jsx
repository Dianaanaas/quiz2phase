const React = require('react');

function QuestI({ quest }) {
  return (

    <div className="oneQuest">
      <div>
        {quest.title}
      </div>
      <div className="answers">
        {quest.Answers.map((el) => <button className="buttonAnswer" type="button" data-idAnswer={el.id}>{el.name}</button>)}
      </div>
      <button className="buttonNext" type="button" data-idQuest={quest.id}>Далее</button>
      <div className="text" />
    </div>

  );
}
module.exports = QuestI;
