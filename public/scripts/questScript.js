const oneQuest = document.querySelector('.cont');

const buttonNext = document.querySelector('.buttonNext');

if (oneQuest) {
  oneQuest.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('buttonAnswer')) {
      const { idanswer } = e.target.dataset;
      if (idanswer) {
        const res = await fetch(
          `/api/questions/answer/${idanswer}`,
          {
            method: 'PUT',
          },
        );
        const data = await res.json();
        if (data.message === 'ок') {
          const newText = document.querySelector('.text');
          const scoreNavbar = document.querySelector('.scoreNavbar');
          scoreNavbar.innerHTML = data.score;
          newText.innerHTML = 'Ответ верный!';
        }
        if (data.message === 'плохо') {
          const newText = document.querySelector('.text');
          const scoreNavbar = document.querySelector('.scoreNavbar');
          scoreNavbar.innerHTML = data.score;
          newText.innerHTML = 'Ответ неверный!';
        }
      }
    }
  });
}
if (buttonNext) {
  buttonNext.addEventListener('click', async (e) => {
    const { idquest } = e.target.dataset;
    if (idquest) {
      const res = await fetch(
        `/api/questions/${idquest}`,
        {
          method: 'PUT',
        },
      );

      const data = await res.json();
      console.log(data, '-------------');
      if (data.message === 'ок') {
        document.querySelector('.cont').innerHTML = data.html;
      }
    }
  });
}
