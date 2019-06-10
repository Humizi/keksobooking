'use strict';

;(() => {
  const mapTemplate = document.querySelector('template').content.querySelector('.map__card');

  window.renderCard = (index) => {
    let cardElement = mapTemplate.cloneNode(true);
    const features = cardElement.querySelectorAll('.feature');
    cardElement.querySelector('.popup__title').textContent = ads[index].offer.title;
    cardElement.querySelector('.popup__text--address').textContent = ads[index].offer.address;
    cardElement.querySelector('.popup__price').textContent = ads[index].offer.price;
    cardElement.querySelector('.popup__type').textContent = ads[index].offer.type;
    cardElement.querySelector('.popup__text--capacity').textContent = `${ads[index].offer.rooms} комнат ${ads[index].offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${ads[index].offer.checkin}, выезд после ${ads[index].offer.checkout}`;
    for(const element of features){
      element.style.display = 'none';
      for(const component of ads[index].offer.features){
        if(element.classList.item(1) === `feature--${component}`){    // Т.к используется метод item, не использую это слово в for..of, а заменил синонимами
          element.style.display = 'inline-block';
        }
      }
    };
    cardElement.querySelector('.popup__description').textContent = ads[index].offer.description;
    cardElement.querySelector('.popup__avatar').src = ads[index].author.avatar;
 
    return cardElement;
  };
})();
