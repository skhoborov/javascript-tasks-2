'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите


/*
 Функция добавления записи в телефонную книгу.
 На вход может прийти что угодно, будьте осторожны.
 */
module.exports.add = function add(name, phone, email) {

    // Ваша невероятная магия здесь
    if(validPhone(phone) && validEmail(email)) {    //проверка валидности номера и e-mail
        var contact={              // создаем переменную contact со свойством
            name:name,
            phone:phone,
            email:email,
			search:name+';'+phone+';'+email
        }
        phoneBook.push(contact); //метод push добавляет элементы в массив (также метод unshift - в начало массива, но он медленнее)
        console.log('Контакт введен!'+ contact.name + ' ' + contact.phone + ' ' + contact.email);
    }
    else {                                    // если не прошла проверку
        console.log('Контакт введен некорректно!');
    }
	
};

function showMessage(text, phoneRecord) {
 console.log(text, phoneRecord.name, phoneRecord.phone, phoneRecord.email);
 }
 
 

function validPhone(phone) {           //функция валидации номера
    var testPhone= /^(\+?(\d{0,3})|(\d{1,2}))\s?(\(?(\d{3}\))|\d{3})[\s|-]?\d{3}[\s|-]?\d{1}[\s|-]?\d{3}$/;
    return testPhone.test(phone);     //подходит ли строка под регулярное выражение
}

function validEmail (email) {     //функция валидации email
    var testEmail= /.+@.+\..+/i;
    return testEmail.test(email);

};

/*
 Функция поиска записи в телефонную книгу.
 Поиск ведется по всем полям.
 */
module.exports.find = function find(query) {
	var x = new RegExp(query);
    for (var i = 0; i < phoneBook.length; i++) {
        if (x.test(phoneBook[i].search)) {   //Метод indexOf() возвращает индекс первого вхождения указанного значения, если не найден -1
            showMessage('Найден:', phoneBook[i])
        }
    }
    return 0;
};
/*
 Функция удаления записи в телефонной книге.
 */
module.exports.remove = function remove(query) {
	 var x = new RegExp(query);
    for (var i = 0; i < phoneBook.length; i++) {
        if (x.test(phoneBook[i].search)) {
            showMessage('Запись удалена:', phoneBook[i])
            delete phoneBook[i]
        }
    }
    return 0;
};		
/*
 Функция импорта записей из файла (задача со звёздочкой!).
  */
  
 var fs = require('fs');
	



module.exports.importFromCsv = function importFromCsv() {
	fs.readFile('./backup.csv', {encoding: 'utf-8'}, function(err, data) {
		if (err) {
			console.error(err);
			} else {
				for (var i = 0; i < data.lenght; i++) {
				module.exports.add(rec[0], rec[1], rec[2]);
				};
				console.log('Добавлены контакты', data);
				};
	});
}

	
/*
	
module.export.exportFromCsv = function exportFromCsv(csv) {
fs.writeFileSync('./test.csv');
fs.writeFileSync('./test.txt');
var data = fs.writeFileSync(csv, 'utf-8');
var t;
for (var i = 0; i < data.length; i++) {
	t = data[i].split('---');
	if (module.export.add(t[0], t[1], t [2]));
	}
	console.log('Файл сохранен');
}
*/
    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу


/*
 Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
 */
module.exports.showTable = function showTable() {
 /*   console.log('┌─────────────┬────────────────────╥──────────────────┐');
	console.log('│ Имя         │ Телефон            ║ email            │');
	console.log('├─────────────┼────────────────────╫──────────────────┤');
	console.log('├────' + + '──┼────'+ + '───────╫─────'+   +  '──────┤');
	*/

    // Ваша чёрная магия здесь

};
