'use strict';

;(() => {
  const URL = 'https://js.dump.academy/keksobooking/data';

  window.load = (onSuccess, onError) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', () => {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', () => {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', URL);
    xhr.send();
  };
})();

(() => {
  const URL = 'https://js.dump.academy/keksobooking';

  window.upload = (data, onSuccess) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', ()=> {
      onSuccess(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();