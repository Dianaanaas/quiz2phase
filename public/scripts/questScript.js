const oneQuest = document.querySelector('.cont');

if (oneQuest) {
  oneQuest.addEventListener('click', async (e) => {
    console.log(e.target, 'ttttt');
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
    } else if (e.target.classList.contains('buttonNext')) {
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
        }else{
          window.location.assign('/themes')
        }
      }
    }
  });
}
