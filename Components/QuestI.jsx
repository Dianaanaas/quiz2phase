const React = require('react');
const Next = require('./Next');

function QuestI({ quest }) {
  return (

    <div className="oneQuest">
      <div>
        {quest.title}
      </div>
      <div>
        <img src={quest.image} alt="" />
      </div>
      <div className="answers">
        {quest.Answers.map((el) => <button className="buttonAnswer" type="button" data-idAnswer={el.id}>{el.name}</button>)}
      </div>
      <div className='cont1'>
      <button className="buttonNext" type="button" data-idQuest={quest.id}>Далее</button>
      </div>
      
      <div className="text" />
    </div>

  );
}
module.exports = QuestI;
