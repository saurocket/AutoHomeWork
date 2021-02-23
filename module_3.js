//1-41
const apartment ={
  imgUrl: 'https://via.placeholder.com/640x480',
  descr:  'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top']
};
//2-41
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com' 
  }
};
//3-41
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;

  // 4-41

  const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Генри',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com',
    },
  };
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[2];
  //5-41
  const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  const aptRating = apartment['rating'];
  const aptDescr = apartment['descr'];
  const aptPrice = apartment['price'];
  const aptTags = apartment['tags'];
//6-41
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Генри Сибола';
apartment.tags.push('trusted');
//7-41
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: 'Ямайка',
  city: 'Кингстон'
}
//8-41
const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];
const product = {
name, price, image,tags
};
//9-41
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
 [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam'
};
//10-41
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (const key in apartment){
  keys.push(key),
  values.push(apartment[key])
}
// 11/41

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
  if (apartment.hasOwnProperty(key)){
    keys.push(key);
    values.push(apartment[key]);
  }
}
//12-41
function countProps(object) {
 return Object.keys(object).length;
}
//13-41
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
for (const key of keys){
values.push(apartment[key])
}
//14-41
function countProps(object) {
 return Object.keys(object).length
}
//15-41
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
const values = Object.values(apartment);
//16-41
function countTotalSalary(salaries) {
  let totalSalary = 0;
let sallArr = Object.values(salaries);
sallArr.map(i => {
  totalSalary +=i;
})
  return totalSalary;
}
//17-41
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
for (let key of colors){
hexColors.push(key.hex);
rgbColors.push(key.rgb);
}
//18-41
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let price = null
  for (let key of products){
    if (key.name === productName){
      price = key.price
    }
  }
 return price;
}
//19-41
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let arr = [];
  for (let i in products){
      if (products[i][propName]){
        arr.push(products[i][propName])
      }else{
        return arr;
      } 
  }
  return arr;
}
//20-41
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let arr = 0
  for (let i in products){
    console.log(products[i])
      if (products[i].name === productName){
        arr =  products[i].price * products[i].quantity 
      }
  }
  return arr;
}
//21-41
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday, today, tomorrow}  = highTemperatures
const meanTemperature = (yesterday + today + tomorrow) / 3;

//22-41
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday, today, tomorrow, 
icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures
const meanTemperature = (yesterday + today + tomorrow) / 3;

//23-41
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday:highYesterday,today:highToday,tomorrow:highTomorrow, 
  icon:highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//24-41
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

//25-41
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
const {today: {
  low: lowToday,
  high: highToday,
  icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
},   tomorrow: {
  low: lowTomorrow,
  high: highTomorrow,
  icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
}
} = forecast
//26-41
function calculateMeanTemperature(forecast) {
  const {today:{low: todayLow,high:todayHigh},tomorrow:{low: tomorrowLow,high:tomorrowHigh} } = forecast
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
//27-41
const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
//28-41
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

//29-41
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
const finalSettings = {...defaultSettings, ...overrideSettings};
 
//30-41
function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
return {completed,category,priority,...data}
}
//31-41
function add(...args) {
  let summ = 0;
  let arr = Object.values(args);
  for (let i = 0; i < arr.length; i++){
    summ += arr[i]
  }
  return summ;
}
//32-41
function addOverNum(num,...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > num){
      total += arg;
    }
  }
  return total;
}
//33-41
function findMatches(arr, ...props) {
  const matches = []; // Не изменяй эту строку

for (let value of props){
   if (arr.includes(value)){
     matches.push(value)
   }
}
  return matches;
}
//34-41
const bookShelf = {
    // Пиши код ниже этой строки
    books: ['Последнее королевство', 'Страж снов'],
    getBooks() {
      return 'Возвращаем все книги';
    },
    addBook(bookName) {
      return `Добавляем книгу ${bookName}`;
    },
    removeBook(bookName){
        return `Удаляем книгу ${bookName}`
    },
    updateBook(oldName, newName){
        return `Обновляем книгу ${oldName} на ${newName}`
    }
    // Пиши код выше этой строки
  };
  
//35-41
const bookShelf = {
    books: ['Последнее королевство', 'Мгла', 'Страж снов'],
    updateBook(oldName, newName) {
      // Пиши код ниже этой строки
      let index = this.books.indexOf(oldName);
      console.log(index);
      this.books.splice(index, 1, newName);

    },
  };
//36-41
  const atTheOldToad = {  
  };
  atTheOldToad.potions = [];

  //37-41
  const atTheOldToad = {
    // Пиши код ниже этой строки
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    getPotions(){
    return this.potions
    }
        // Пиши код выше этой строки
  };
  //38-41
  const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    addPotion(potionName) {
     this.potions.push(potionName);
    },
  };
  //39-41
  const atTheOldToad = {
    potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
    removePotion(potionName) {
      // Пиши код ниже этой строки
      let index = this.potions.indexOf(potionName);
      this.potions.splice(index,1);
      // Пиши код выше этой строки
    },
  };
  
//40-41
const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    updatePotionName(oldName, newName) {
      // Пиши код ниже этой строки
        let index = this.potions.indexOf(oldName);
        this.potions.splice(index, 1, newName);
      // Пиши код выше этой строки
    },
  };
//41-41
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {

    this.potions.map(u => {
      if (u.name ===potionName.name){
        return `Зелье ${potionName} уже есть в инвентаре!`;
      }
    })
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++){
      let tempName = this.potions[i].name
   
      if (tempName === potionName){
          this.potions.splice(i,1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i++){
      if (this.potions[i].name === oldName){
        this.potions[i].name = newName;
      }
    }
  },
};
