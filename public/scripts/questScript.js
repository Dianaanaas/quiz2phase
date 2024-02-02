const oneAnswer = document.querySelector('.oneQuest');

oneAnswer.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('buttonAnswer')) {
    const { id } = e.target.dataset;
    if (id) {
      const res = await fetch(
        '/quest/',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id,
          }),
        },
      );
    }
    console.log(id);
  }
});
