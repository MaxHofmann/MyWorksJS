const wrraper = document.getElementById('wrraper-items');

const promise = fetch(
  'https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6'
);

promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      const cardItem = document.createElement('div');
      const img = document.createElement('img');
      const description = document.createElement('div');
      const funcLocal = () => {
        return localStorage.setItem(element.name, element.id);
      };

      wrraper.append(cardItem);
      cardItem.appendChild(img);
      cardItem.appendChild(description);
      cardItem.setAttribute('id', 'card-item');
      img.setAttribute('id', 'img-card');
      img.setAttribute('src', element.image_url);
      img.addEventListener('click', funcLocal);
      description.setAttribute('id', 'description');
      description.innerHTML = element.description;
    });
  });
