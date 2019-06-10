     ;(() => {
      const formFilters = document.querySelector('.map__filters');
      const housingType = formFilters.querySelector('#housing-type');
      const housingPrice = formFilters.querySelector('#housing-price');
      const housingRooms = formFilters.querySelector('#housing-rooms');
      const housingGuests = formFilters.querySelector('#housing-guests');


    //   formFilters.addEventListener('change', () => {
    //     let pinsAll = pins.all;
    //     let map = new Map([
    //       ['type', housingType.value],
    //       ['price', housingPrice.value],
    //       ['rooms', housingRooms.value],
    //       ['guests', housingGuests.value]
    //     ]);
    //     // debugger;
    //     ads.forEach((item, i) => {
    //       let qwer = 0;
    //       map.forEach((value, key) => {
    //         if (ads[i].offer[key] === value){
    //           console.log(`index: ${i}, key: ${key}, value: ${value}`)
    //           qwer++;
    //         }
    //       })
    //       if (qwer === 0){
    //         pinsAll[i].style.display = 'none';
    //       }    
    //     })
    //   })
    //  })();
     
      // Пока так...
      // Работает зато

      housingType.addEventListener('change', () => {
        let pinsAll = pins.all;
        for (let i = 0; i < pinsAll.length; i++) {
          if (ads[i].offer.type !== housingType.value && housingType.value !== 'any'){
            pinsAll[i].style.display = 'none';
          } else {
            pinsAll[i].style.display = 'inline-block'; 
          }
        }
        });

      housingPrice.addEventListener('change', () => {
        const highPrice = 50000;
        const lowPrice = 10000;
        let pinsAll = pins.all;
        for (let i = 0; i < pinsAll.length; i++) {
          if (housingPrice.value === 'high' && !(ads[i].offer.price >= highPrice) && housingPrice.value !== 'any'){
            pinsAll[i].style.display = 'none'; 
          } else if (housingPrice.value === 'low' && !(ads[i].offer.price < lowPrice) && housingPrice.value !== 'any'){
            pinsAll[i].style.display = 'none';
          } else if (housingPrice.value === 'middle' && !(ads[i].offer.price >= lowPrice && ads[i].offer.price < highPrice) && housingPrice.value !== 'any'){
            pinsAll[i].style.display = 'none';
          } else {
            pinsAll[i].style.display = 'inline-block';
          }
        }
        });

      housingRooms.addEventListener('change', () => {
        let pinsAll = pins.all;
        for (let i = 0; i < pinsAll.length; i++) {
          if (ads[i].offer.rooms !== +housingRooms.value && housingRooms.value !== 'any'){ // housingRooms.value - значение string, нужно перевести в number
            pinsAll[i].style.display = 'none';
          } else {
            pinsAll[i].style.display = 'inline-block' 
          }
        }
        });

      housingGuests.addEventListener('change', () => {
        let pinsAll = pins.all;
        for (let i = 0; i < pinsAll.length; i++) {
          if (ads[i].offer.guests !== +housingGuests.value && housingGuests.value !== 'any'){
            pinsAll[i].style.display = 'none';
          } else {
            pinsAll[i].style.display = 'inline-block' 
          }
        }
        });

      })();