'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let num = 1;
    let arr = ['a'];
    let str = 'yes';
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    var array = [num, arr, obj, str, func, bool];
    for (let i = 0; i < array.length; i++) {
      if ( array[i] === 'yes' ) {
        expect(validator.isString(array[i])).toBeTruthy();
      } else if (array[i] !== 'yes') {
        expect(validator.isString(array[i])).toBeFalsy();
      }  
    }
  });


  it('numbers', () => {
    let num = 1;
    expect(validator.isNumber(num)).toBeTruthy();
  });


  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isArray(arr)).toBeTruthy();
  });


  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isObject(obj)).toBeTruthy();
  });


  it('booleans', () => {
    let bool = false;
    expect(validator.isBooleans(bool)).toBeTruthy();
  });


  it('functions', () => {
    let func = () => {};
    expect(validator.isfunctions(func)).toBeTruthy();
  });


});

describe('validator module performs complex validations', () => {

  let object = {
    Company : 'Capcom',
    heros : { DMC : 'Dante' , RE : 'Leon' },
    gamesNum : 2 ,
    bigCompany : true ,
    games : [ 'Devil May Cry ', 'Resident Evil' ], 
  };


  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validator.isString(object.top10 ? object.top10:false)).toBeFalsy();
  });


  it('validates the proper types of object properties', () => {
    // i.e. Company.name must be a string, etc.
    expect(validator.isNumber(object.gamesNum)).toBeTruthy();
  });


  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(validator.isArray(object.games)).toBeTruthy();
  });


  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(validator.isBooleans(object.bigCompany)).toBeTruthy();
  });


  // TODO: Cover so, so many more cases
  it('validates an object containing a value', () =>{
    expect(validator.isObject(object.heros)).toBeTruthy(); 
  });

});

