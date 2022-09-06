fetch('/posts')
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element) => {
      // eslint-disable-next-line no-undef
      generateCards(element);
    });
  })
  .catch((err) => console.log({ err }));
