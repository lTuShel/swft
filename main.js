function checkAccess() {
  // Очищаем предыдущее сообщение об ошибке
  document.getElementById("result_false").innerHTML = "";

  // Получаем значения полей ввода
  var username = document.getElementsByName("username")[0].value;
  var accesskey = document.getElementsByName("accesskey")[0].value;

  // Загружаем файл с ключами
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'access.txt', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Получаем содержимое файла
      var accessList = xhr.responseText.split('\n');
      // Ищем соответствие имени пользователя и ключа
      for (var i = 0; i < accessList.length; i++) {
        var access = accessList[i].split(':');
        if (access[0].trim() === username && access[1].trim() === accesskey) {
        // Проходим авторизацию и переходим на страницу приветствия
        document.getElementById("result_true").innerHTML = ('Добро пожаловать, ' + username + '!');
        window.location.href = 'index2.html';
        return;
      }
    }
      // Если не найдено соответствие имени пользователя и ключа,
      // показываем сообщение об ошибке
      document.getElementById("result_false").innerHTML = "Неправильный ключ!";
    }
  };
  xhr.send();
}