'use strict';

window.load((data) => {

  window.ads = [];
  ads = data;

  const mapTemplatePin = document.querySelector('template').content.querySelector('.map__pin');
  const mapPins = document.querySelector('.map__pins');
  const map = document.querySelector('.map');
  const filterContainer = document.querySelector('.map__filters-container');

  const renderPin = (adItem) => {
    let pinElement = mapTemplatePin.cloneNode(true);
    const PIN_HEIGHT = mapTemplatePin.querySelector('img').height;  //40 - высота иконки

    pinElement.style.left = `${adItem.location.x}px`;
    pinElement.style.top = `${adItem.location.y - PIN_HEIGHT}px`;   // Отнимаем высоту иконки для более точного расположения пина
    pinElement.querySelector('img').src = adItem.author.avatar;
    pinElement.querySelector('img').alt = adItem.offer.title;
  
    return pinElement;
  };

  window.pins = {
    create(){
      let fragment = document.createDocumentFragment();

      for(const item of ads){
        fragment.appendChild(renderPin(item));
      };
      mapPins.appendChild(fragment);
    },
    
    get all(){
      return mapPins.querySelectorAll('.map__pin:not(:first-of-type)');
    },

    trackingPinClicks(){
      const pinInfo = (pinIndex, index) => {
        pinIndex.addEventListener('click', () => {
          const card = document.querySelector('.map__card'); 
  
          if(card !== null) card.remove();
          map.insertBefore(renderCard(index), filterContainer);
        });
      };
        
      let pinsAll = Array.from(pins.all);
  
      pinsAll.forEach(function(item, index){
        pinInfo(item, index);
      });
    }
  };
});