const applePrice = 15.678;
const orangePrice = 123.965;
const strawberryPrice = 90.2345;

const maxPrice = Math.max(applePrice, orangePrice, strawberryPrice);
const minPrice = Math.min(applePrice, orangePrice, strawberryPrice);

const sumPrices = applePrice + orangePrice + strawberryPrice;

const sumPricesRounded = Math.floor(applePrice) + Math.floor(orangePrice) + Math.floor(strawberryPrice);

const sumPricesRoundedTo100 = Math.round(sumPrices / 100) * 100;

const sumIsEven = sumPricesRounded % 2 === 0 ? 'Парне' : 'непарне';

const sumRemainder = (500 - sumPrices);

const averageValue = (sumPrices / 3).toFixed(2);

const randomDiscount = (Math.random() * 100).toFixed(0);
const sumWithDiscount = (sumPrices - sumPrices * randomDiscount / 100).toFixed(2);
const profit = (sumPrices / 2 - (sumPrices - sumWithDiscount)).toFixed(2);


document.writeln(`
  Максимальна ціна: ${maxPrice} </br>
  Мінімальна ціна: ${minPrice} </br>
  Загальна вартість: ${sumPrices} </br>
  Загальна сума округлена в меншу сторону: ${sumPricesRounded} </br>
  Загальна сума округлена до сотень: ${sumPricesRoundedTo100} </br>
  Парне чи не парне число: ${sumIsEven} </br>
  Решта з 500: ${sumRemainder} </br>
  Середнє значення цін: ${averageValue} </br>
  Випадкова знижка: ${randomDiscount}% </br>
  Суму, яку потрібно сплатити: ${sumWithDiscount} </br>
  Чистий дохід: ${profit} </br>
  `);