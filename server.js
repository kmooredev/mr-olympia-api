const express = require('express');
const app = express();
const PORT = 8000;

const winners = {
  'larry scott': {
    yearsWon: [1965, 1966],
    birthPlace: 'Blackfoot, Idaho, USA',
    height: '5ft, 7in',
    weight: '205lbs'
  },
  'sergio oliva': {
    yearsWon: [1967, 1968, 1969],
    birthPlace: 'Pinar del Rio, Cuba',
    height: '5ft, 10in',
    weight: '225lbs'
  },
  'arnold schwarzenegger': {
    yearsWon: [1970, 1971, 1972, 1973, 1974, 1975, 1980],
    birthPlace: 'Thal, Styria, Republic of Austria',
    height: '6ft, 2in',
    weight: '235lbs'
  },
  'franco columbu': {
    yearsWon: [1976, 1981],
    birthPlace: 'Ollolai, Sardinia, Kingdom of Italy',
    height: '5ft, 5in',
    weight: '185lbs'
  },
  'frank zane': {
    yearsWon: [1977, 1978, 1979],
    birthPlace: 'Kingston, Pennsylvania, USA',
    height: '5ft, 9in',
    weight: '200lbs'
  },
  'chris dickerson': {
    yearsWon: [1982],
    birthPlace: 'Montgomery, Alabama, USA',
    height: '5ft, 6in',
    weight: '190lbs'
  },
  'samir bannout': {
    yearsWon: [1983],
    birthPlace: 'Beirut, Lebanon',
    height: '5ft, 7in',
    weight: '205lbs'
  },
  'lee haney': {
    yearsWon: [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991],
    birthPlace: 'Spartanburg, South Carolina, USA',
    height: '5ft, 11in',
    weight: '255lbs'
  },
  'dorian yates': {
    yearsWon: [1992, 1993, 1994, 1995, 1996, 1997],
    birthPlace: 'Solihull, Warwickshire, England',
    height: '5ft, 9in',
    weight: '260lbs'
  },
  'ronnie coleman': {
    yearsWon: [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    birthPlace: 'Monroe, Louisiana, USA',
    height: '5ft, 11in',
    weight: '300lbs'
  },
  'jay cutler': {
    yearsWon: [2006, 2007, 2009, 2010],
    birthPlace: 'Worcester, Massachusetts, USA',
    height: '5ft, 10in',
    weight: '260lbs'
  },
  'dexter jackson': {
    yearsWon: [2008],
    birthPlace: 'Jacksonville, Florida, USA',
    height: '5ft, 6in',
    weight: '215lbs'
  },
  'phil heath': {
    yearsWon: [2011, 2012, 2013, 2014, 2015, 2016, 2017],
    birthPlace: 'Seattle, Washington, USA',
    height: '5ft, 9in',
    weight: '240lbs'
  },
  'shawn rhoden': {
    yearsWon: [2018],
    birthPlace: 'Kingston, Jamaica',
    height: '5ft, 10in',
    weight: '245lbs'
  },
  'brandon curry': {
    yearsWon: [2019],
    birthPlace: 'Nashville, Tennessee, USA',
    height: '5ft, 8in',
    weight: '255lbs'
  },
  'mamdouh elssbiay': {
    yearsWon: [2020, 2021],
    birthPlace: 'Al-Sebea, Egypt',
    height: '5ft, 9in',
    weight: '295lbs'
  },
  'hadi choopan': {
    yearsWon: [2022],
    birthPlace: 'Abnow, Beyza County, Fars Province, Iran',
    height: '5ft, 7in',
    weight: '220lbs'
  },
  'unknown': {
    yearsWon: 'unknown',
    birthPlace: 'unknown',
    height: 'unknown',
    weight: 'unknown'
  }
}

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (req, res)=>{
  const winnerName = req.params.name.toLowerCase();
  if (winners[winnerName]){
    res.json(winners[winnerName]);
  } else {
    res.json(winners['unknown']);
  }
})

app.listen(process.env.PORT || PORT, (req, res)=>{
  console.log(`The server is now running on ${PORT}`);
})