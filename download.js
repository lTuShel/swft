function downloadFile() {
  // указываем URL файла, который нужно загрузить
  let fileURL = "lox.txt";
  
  // создаем новый элемент ссылки
  let link = document.createElement("a");
  link.href = fileURL;
  
  // назначаем имя файла, которое будет отображаться при загрузке
  link.download = "lox.exe";
  
  // добавляем элемент ссылки на страницу
  document.body.appendChild(link);
  
  // имитируем клик по ссылке, чтобы начать загрузку файла
  link.click();
  
  // удаляем элемент ссылки со страницы
  document.body.removeChild(link);
}