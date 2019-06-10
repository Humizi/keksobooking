'use strict';

;(() => {
  const map = document.querySelector('.map');
  const pinFaded = document.querySelector('.map--faded');
  const mainPin = map.querySelector('.map__pin--main');
  const form = document.querySelector('.notice__form');

  const TOP_MAP = 130;                  // Края карты, выбрал сам
  const RIGHT_MAP = 1165;
  const BOTTOM_MAP = 650;
  const LEFT_MAP = 35;

  class Coords {
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  };

  mainPin.addEventListener('mousedown', (evt) => {
    evt.preventDefault();

    let startCoords = new Coords(evt.clientX, evt.clientY);     // Запоминаем координаты при нажатии

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      const shift = new Coords(startCoords.x - moveEvt.clientX, startCoords.y - moveEvt.clientY);  // Запоминаем координаты при перетаскивании

      startCoords.x = moveEvt.clientX;                              // Меняем координаты при остановке мыши
      startCoords.y = moveEvt.clientY;

      const getCoordMainpin = (offset, shift, min, max) => {           // Передаём координаты пина и границы карты
        if(offset <= min){                                          // Чтобы пин не уходил за границы
          return offset + 1;
        } else if(offset >= max){
          return offset - 1;
        }
        return offset - shift;
      };

      mainPin.style.top = `${getCoordMainpin(mainPin.offsetTop, shift.y, TOP_MAP, BOTTOM_MAP)}px`;         // Задаём пину новые координаты в границах карты
      mainPin.style.left = `${getCoordMainpin(mainPin.offsetLeft, shift.x, LEFT_MAP, RIGHT_MAP)}px`;

      keksForm.address;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if(map.classList.contains('map--faded')){                 // При первом перетаскивании пина
        pins.create();                                          // Рендерим пины
        pins.trackingPinClicks();                               // Запускаем отслеживание кликов по пинам
        pinFaded.classList.remove('map--faded');                // Удаляем оверлей
        form.classList.remove('notice__form--disabled');        // Удаляем оверлей формы
        keksForm.elements;                                      // Активируем поля формы
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();