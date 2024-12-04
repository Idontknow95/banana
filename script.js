let h =(new Date()).getHours();
if (h > 23 || h < 7) alert("Доброй ночи!");
if (h > 6 && h < 12) alert("С добрым утром!");
if (h > 11 && h < 19) alert("Добрый день!");
if (h > 18 && h < 24) alert("Добрый вечер!");

var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
