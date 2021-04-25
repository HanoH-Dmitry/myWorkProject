document.addEventListener('DOMContentLoaded', function() { // когда весь HTML загружен

    setTimeout(function() { // таймер-планировщик
      document.getElementById('Activity_sync').click(); // вызвать клик на кнопку
    }, 2000); // через две секунды
  
  });  
  function doFunction() { // функция привязанная к клику на кнопку
    alert('I was pressed!');
  }
