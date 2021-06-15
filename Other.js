<script>
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
    
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
    
    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      //var inputValue = document.getElementById("myInput").value;
      //var t = document.createTextNode(inputValue);
      //li.appendChild(t);
      //if (inputValue === '') {
      //  alert("You must write something!");
      //} else {
      //  document.getElementById("myUL").appendChild(li);
      //}
      //document.getElementById("myInput").value = "";
    
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
</script>

// №2

<script>
//Функция при нажатии ""записать""
function write() {
    var newLi = document.createElement('li');
    newLi.innerHTML = document.getElementById("inp").value;
    var inputValue = document.getElementById("inp").value;
    var iv = document.createTextNode(inputValue);
    if (inputValue === '') {
      alert("Введите Дело !");
    } else {
      document.getElementById("quest").appendChild(newLi);
    }
    document.getElementById("inp").value = "";
    document.getElementById('del').style.display = 'block';
    newLi.className = 'draggable';
  
    //Создание крестика для удаления одного дела 
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener('click', closes)
    span.appendChild(txt);
    newLi.appendChild(span);
    return;
  }
  
  //обработчик клик удаления одного дела
  closes = function() {
    this.parentNode.remove();
  }
  
  //Функция при нажатии ""Удалить Все""
  function del() {
    document.getElementById("quest").innerHTML = "";
    document.getElementById('del').style.display = 'none';
    return;
  }
  
  //События при нажатии на кнопки
  document.getElementById('btn').addEventListener('click', write);
  document.getElementById('del').addEventListener('click', del);
</script>



<script>
    // Create an append it to each list item
    var myTableApp = document.getElementsByTagName("TD");
    var i;
    for (i = 0; i < myTableApp.length; i++) {
      var span = document.createElement("SPAN");
      myTableApp[i].appendChild(span);
    }
    
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('table');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'TD') {
        ev.target.classList.toggle('checkedApp');
      }
      else if (ev.target.tagName === 'TH') {
        ev.target.classList.toggle('checkedHost');
      }
    }, false);
</script>
<script type="text/javascript">
var red = "нет", yellow = "нет";
if (red == "да") /* Если горит красный сигнал */
{
document.write("При красном сигнале стоим - дорогу переходить нельзя!");
}
else if(yellow == "да") /* Если горит жёлтый сигнал */
{
document.write("При жёлтом сигнале нужно приготовиться, но дорогу пока переходить нельзя!");
}
else /* Иначе... */
{
document.write("Зелёный сигнал - переходим дорогу.");
}
</script>

if (age < 3) {
  message = 'Здравствуй, малыш!';
} else if (age < 18) {
  message = 'Привет!';
} else if (age < 100) {
  message = 'Здравствуйте!';
} else {
  message = 'Какой необычный возраст!';
}


<script>
    // Добавить его к каждому элементу таблицы (td)
    var myTableApp = document.getElementsByTagName("TD");
    var i;
    for (i = 0; i < myTableApp.length; i++) {
      var span = document.createElement("SPAN");
      myTableApp[i].appendChild(span);
    }
    
    // Добавить символ "отмечен" при нажатии на элемент таблицы + добавить текст в textarea
    var list = document.querySelector('table');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'TD ') {
        ev.target.classList.toggle('checkedApp')
        text.value += 'curl -i -H "Accept: application/json" -X GET "https://jsonplaceholder.typicode.com/users" &';
      }
      else if (ev.target.tagName === 'TH') {
        ev.target.classList.toggle('checkedHost');
        text.value += 'curl -i -H "Accept: application/json" -X POST "https://jsonplaceholder.typicode.com/users" &'
      }
    }, false);
</script>


curl -i -H "Accept: application/json" -X GET "https://jsonplaceholder.typicode.com/users"


    // Добавляем логику по выбору хостов и компонент
    var hostApp = document.getElementById('mskIotApp01, ActivitySyncGet')
    if (ev.target.classList.toggle === 'checkedHost') {
        true
    } else if (ev.target.classList.toggle === 'checkedApp') {
        true
    } else if (target.getElementById === 'mskIotApp01') {
        true
    } else if (target.getElementById === 'ActivitySyncGet') {
        text.value += 'curl -i -H "Accept: application/json" -X GET "https://jsonplaceholder.typicode.com/users" &';
    }
	
<th rowspan="2"><input type="button" value="msk-iot-app01" name="mskIotApp01" OnClick="App01();"></th>
<td><input type="button" value="Activity_sync" name="ActivitySyncGet" OnClick="ActivitySync01();"></td>


https://dwweb.ru/page/js/events/001_onclick_v_javascript.html#paragraph_onclick_v_javascript


        <input id="elem" type="button" value="Нажми меня!">
            <script>
                elem.onclick = function() {
                    alert('Спасибо');
  };
            </script>


document.body.addEventListener('click', e => {
  if (e.target.classList.contains('classes')) alert(1);
})


  <div id="one"></div>

            <script>
                var div = document.getElementById('one');
                div.addEventListener('click', foo, false);
                
    function foo() {
                    alert('Hi!');
      div.removeEventListener('click', foo, false);
    }
  </script>


  /* Кнопка раскрывающегося списка */
.dropbtn {
    background-color: #202224e5;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* Кнопка раскрывающегося списка при наведении и фокусе */
.dropbtn:hover, .dropbtn:focus {
    background-color: #5c5e5fd8;
}

/* Контейнер <div> - необходим для размещения раскрывающегося содержимого */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Выпадающее содержимое (по умолчанию скрыто) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #cff8cb;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Ссылки внутри раскрывающегося списка */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Изменение цвета раскрывающихся ссылок при наведении курсора */
.dropdown-content a:hover {background-color: #ddd}

/* Показать раскрывающееся меню (используется JS, чтобы добавить этот класс в контейнер .dropdown-content, когда нажимаем кнопку раскрывающегося списка) */
.show {display:block;}


Old menu

body {
	background-color:#fbfbfb;
	font-family:Arial, Helvetica, sans-serif;
	color:rgba(49, 49, 49, 0.911);
}
 
.menu-wrap {
	background-color:#53bd84; 
	height:50px; 
	line-height:50px; 
	position:relative;
	width:530px;
	margin:auto;
	margin-top:80px;
}
 
.menu-wrap ul {
	list-style:none;
}
 
.menu-wrap ul li a {
 	float:left; 
	width:130px; 
	display:block; 
	text-align:center; 
	color:#FFF; 
	text-decoration:none; 
	text-transform:uppercase;
}
 
.menu-wrap ul li a:hover {
	background-color:#666;
    width:150px;
	display:block;
}
 
.menu-wrap ul li:hover ul {
	display:block;
}
 
.menu-wrap ul ul {
	display:none; 
	list-style:none; 
	position:absolute; 
	background-color:#53bd84;
	left:300px; 
	top:50px; 
	width:170px;
}
 
.menu-wrap ul ul li a {
	float:none; 
	display:block;
	padding-left:30px; 
	text-align:left; 
	width:160px;
}
 
.menu-wrap ul ul li a:hover {
	color:#fff;
}



// Тестируем вывод скрипта
        let beeCollection = document.querySelectorAll('#mskIotApp01, #ActivitySyncGet, .checkedHost, .checkedApp');
            beeCollection.forEach(item => item.addEventListener('click', function(){
                console.log("Normal")
                })
            );