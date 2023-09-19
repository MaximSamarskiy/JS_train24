console.log("Завдання: 1 ==============================");

// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція `getData` симулює отримання даних з асинхронного джерела,такого як запит до бази даних або API.
   *
   *  data - вхідні дані.
   *  timeout - час в мілісекундах, який витрачається на отримання даних,за замовчуванням 2000мс.
   */
  function getData(data, timeout = 2000) {
    // Функція повертає новий проміс
    return new Promise((resolve, reject) => {
      // За допомогою setTimeout ми симулюємо затримку timeout, яка виникає при роботі з асинхронними джерелами даних
      setTimeout(() => {
        // Якщо об'єкт не пустий, ми викликаємо resolve з data
        if (Object.keys(data).length) {
          resolve(data);
        } else {
          reject(new Error("Об'єкт пустий"));
        }
        // Якщо об'єкт пустий, ми викликаємо reject з новим об'єктом Error("Об'єкт пустий"
      }, timeout);
    });
  }
  // Ми викликаємо getData з об'єктом { name: "John", age: 30, city: "New York" } і часом очікування 2000
  let obj = { name: "John", age: 30, city: "New York" };
  let result = getData(obj, 2000);

  // Ми обробляємо дані, повернуті промісом
  result.then((obj) => {
    console.log(obj);
  });
  // У разі успіху виводимо в консоль дані
  // У разі помилки виводимо повідомлення помилки
  result.catch((error) => {
    console.log(error);
  });
  // Незалежно від того, завершилось виконання проміса успіхом чи ні виводимо в консоль "Завдання 1 завершено"
  result.finally(() => console.log("Завдання 1 завершено"));
}

// Викликаємо функцію task1
task1();
