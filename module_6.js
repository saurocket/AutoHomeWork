//1-44
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
orderedItems.forEach(value => {
  totalPrice +=value;
})
  return totalPrice;
}
//2-44
function filterArray(numbers, value) {
  const filteredNumbers = [];
numbers.forEach(number => {
  if (number > value){
    filteredNumbers.push(number)
  }
})
  return filteredNumbers;
}
//3-44
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
firstArray.forEach(item => {
  if (secondArray.includes(item)){
    commonElements.push(item);
  }
});
  return commonElements;

}
//4-44
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//5-44
const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

//6-44
// Пиши код ниже этой строки
const calculateTotalPrice=(orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item
  });
  return totalPrice;
}
// Пиши код выше этой строки
//7-44
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}
//8-44
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
}
//9-44
function changeEven(numbers, value) {
  const pureNumber = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      pureNumber.push(numbers[i] + value);
    }
    else{
      pureNumber.push(numbers[i]);
    }
  }
  return pureNumber
}
//10-44
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(item => item.length);
//11-44
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const titles = books.map(item => item.title);
//12-44
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика']
  }
];
// Пиши код ниже этой строки

const genres = books.flatMap(item => item.genres);
//13-44
// Пиши код ниже этой строки
const getUserNames = users => {
  const name = users.map(item => item.name)
return name;
};
// Пиши код выше этой строки
//14-44

const getUserEmails = users => {
  const name = users.map(item => item.email)
  return name;
};

//15-44
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(i => i%2===0);
const oddNumbers = numbers.filter(i => i%2!==0);
//16-44
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap( i  => i.genres);
const uniqueGenres = allGenres.filter((item, index, arr) => {
 return arr.indexOf(item) === index
});

console.log(allGenres);
console.log(uniqueGenres);

//17-44
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter(u => u.rating >= MIN_RATING);
const booksByAuthor = books.filter(u => u.author ===AUTHOR)

//18-44
// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
  let userForFilter = users.filter (u => u.eyeColor === color);
 return userForFilter
 };
 // Пиши код выше этой строки
 //19-44
 const getUsersWithAge = (users, minAge, maxAge) => {
  let usersAge = users.filter (u => u.age > minAge && u.age <maxAge)
 return usersAge
 };

//20-44
// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  return users.filter(u => u.friends.includes(friendName));
};
// Пиши код выше этой строки
//21-44
// Пиши код ниже этой строки
const getFriends = (users) => {
  let arr = users.flatMap(u => u.friends);
  return arr.filter((item, index, arr) => arr.indexOf(item) === index) ;

};
// Пиши код выше этой строки
//22-44
const getActiveUsers = (users) => {
  return users.filter(u => u.isActive)
};
//23-44


// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  return users.filter(u => !u.isActive)
};
// Пиши код выше этой строки
//24-44
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find(u => u.title === BOOK_TITLE);
const bookByAuthor = books.find(u => u.author === AUTHOR);
//25-44
// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  return users.find(u => u.email === email)
};
// Пиши код выше этой строки
//26-44
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(u => u%2===0);
const eachElementInFirstIsOdd = firstArray.every(u => u%2!==0);

const eachElementInSecondIsEven = secondArray.every(u => u%2===0);
const eachElementInSecondIsOdd = secondArray.every(u => u%2!==0);

const eachElementInThirdIsEven = thirdArray.every(u => u%2===0);
const eachElementInThirdIsOdd = thirdArray.every(u => u%2!==0);

//27-44
const isEveryUserActive = (users) => {
  return users.every(u => u.isActive) 
};
//28-44
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(u => u%2===0);
const anyElementInFirstIsOdd = firstArray.some(u => u%2!==0);

const anyElementInSecondIsEven = secondArray.some(u => u%2===0);
const anyElementInSecondIsOdd = secondArray.some(u => u%2!==0);

const anyElementInThirdIsEven = thirdArray.some(u => u%2===0);
const anyElementInThirdIsOdd = thirdArray.some(u => u%2!==0);
//29-44
const isAnyUserActive = users => {
  return users.some(u => u.isActive)
};
//30-44
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((prev, value) => prev+value);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;
//31-44
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame =players.reduce(((total, time) => total+time.playtime/time.gamesPlayed),0)
//32-44
// Пиши код ниже этой строки
const calculateTotalBalance = users => {
   
  return users.reduce(((prev, cash)=> prev+cash.balance),0)
};
// Пиши код выше этой строки
//33-44
// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  return users.reduce(((total, friend) => total + friend.friends.length),0)
};
// Пиши код выше этой строки
//34-44
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();
//35-44



const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);;

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);;
//36-44
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт'
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
//37/44
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a,b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a,b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a,b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a,b) => b.rating - a.rating);
//38-44
// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  return users.sort((a,b) => a.balance - b.balance);
};
// Пиши код выше этой строки
//39-44
// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
  return [...users].sort((a,b) => b.friends.length - a.friends.length  )
};
// Пиши код выше этой строки
//40-44
// Пиши код ниже этой строки
const sortByName = users => {
  return [...users].sort((a,b) => a.name.localeCompare(b.name))
};
// Пиши код выше этой строки
//41-44