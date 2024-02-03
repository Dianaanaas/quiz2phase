const React = require('react');
const Next = require('./Next');

function QuestI({ quest }) {
  return (

    <div className="oneQuest">
      <div>
        <img className='imageQuest' src={quest.image} alt="" />
      </div>
      <div>
        {quest.title}
      </div>
      <div className="answers">
        {quest.Answers.map((el) => <button className="buttonAnswer" type="button" data-idAnswer={el.id}>{el.name}</button>)}
      </div>

      <div className="centered-container">
      <button className="buttonNext" type="button" data-idQuest={quest.id}>Далее</button>
      </div>

      <div className="text" />
    </div>

  );
}
module.exports = QuestI;
