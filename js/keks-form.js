'use strict';

;(() => {
  const map = document.querySelector('.map');
  const mainPin = map.querySelector('.map__pin--main');
  const form = document.querySelector('.notice__form');
  const address = form.querySelector('#address');
  const inputs = form.querySelectorAll('input');
  const selectors = form.querySelectorAll('select');
  const texetarea = form.querySelector('textarea');
  const submitBtn = form.querySelector('.form__submit');

  const toggleConditionElement = (element) => {
    if(map.classList.contains('map--faded')){     // При наличии оверлея блокируем все поля формы
      element.disabled = true;                     
      texetarea.disabled = true;
      submitBtn.disabled = true;
    } else {                                      
      element.disabled = false;
      texetarea.disabled = false;
      submitBtn.disabled = false;
    }
  };

  window.keksForm = {
    get elements(){
      for(let i = 0; i < inputs.length; i++){     // Ищем все импуты и селекторы и отдаём их функции
        toggleConditionElement(inputs[i]);
      }
      
      for(let i = 0; i < selectors.length; i++){
        toggleConditionElement(selectors[i]);
      }
    },
    
    get address(){
      address.value =`${mainPin.offsetTop}:${mainPin.offsetLeft}`;  // Отдаём адрес движущегося пина
    }
  };

  keksForm.address;
  keksForm.elements;
})();