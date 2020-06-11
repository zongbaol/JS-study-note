//1. display api
function testDisplay(){
  console.log('hi');
  console.log('log','many','vars');
  console.log(['log','an','array']);
  console.log({action:'log',content:'object'})
  console.log()
}
//2.variable types
function testVarTypes(){
  console.log('1. undefined');
  let undefine;
  console.log(typeof undefine, ':', undefine);
  console.log();

  console.log('2. null');
  let empty = null;
  console.log(typeof empty, ':', empty);
  console.log();

  console.log('3. primitive types');
  let num = 10;
  console.log(typeof num, ':', num);
  let float = 10.01;
  console.log(typeof float, ':', float);
  let str = 'a string';
  console.log(typeof str, ':', str);
  let bool = true;
  console.log(typeof bool, ':', bool);
  console.log();

  console.log('4. reference types');
  let obj = {};
  console.log(typeof obj, ':', obj);
  let arr = [];
  console.log(typeof arr, ':', arr);
  console.log();
}
//3. for loop
function testFor(){
  console.log('1. Using let to iterate')
  for(let i=0;i<10;i++){}
  console.log('outside of for loop:')
  try {
    console.log('i is:',i);
  }
  catch (e) {
    console.log(e.message);
  }
  console.log()
  
  console.log('2. Using var to iterate')
  for(var i=0;i<10;i++){}
  console.log('outside of for loop:')
  try {
    console.log('i is:',i);
  }
  catch (e) {
    console.log(e.message);
  }
  console.log();

  console.log('3. for in loop');
  console.log('for in array example:');
  const tvshows = ['rick and morty','gracity falls','harley quinn'];
  for(ind in tvshows){
    console.log(ind,tvshows[ind]);
  }
  console.log('for in object example:');
  const role = {name: 'Rick', hairColor: 'Blue', invetion:'portal gun'};
  for(key in role){
    console.log(key,role[key]);
  }

}
//4. functions
function testFunc(){
  console.log('1.define function using function keyword')
  console.log('call f before def:')
  test_pure()
  function test_pure(){
    console.log('function with no param');
  }
  console.log('call f after def:')
  test_pure()
  console.log(typeof(test_pure),':',test_pure,'\n')
  
  console.log('2. define function using annoymous')
  const test_annoymous = function (){
    console.log('function with no param');
  }
  test_annoymous()
  console.log(`${typeof (test_annoymous)} : ${test_annoymous}\n`)
  
  console.log('3. test function parameters:')
  function test_param(param1,param2){
    console.log(param1,param2);
  }
  console.log(typeof(test_param),':',test_param)
  console.log('feed in correct amount:')
  test_param('1','2');
  console.log('feed in more variables:')
  test_param('1','2','3');
  console.log('feed in less variables:')
  test_param('1');
  
  console.log('4. test function extra parameters:')
  const test_extra= function(param1,...params){
    console.log(param1,params);
  }
  test_extra(1,2,3);
}
// 5. Arrays
function testArray(){
  const trashbin = ['a','b','c']
  console.log('trashbin',trashbin)
  console.log('length',trashbin.length)
  console.log('pop',trashbin.pop())
  console.log('trashbin',trashbin)
  console.log('push d at position',trashbin.push('d'))
  console.log('trashbin',trashbin)
  const [...sometrash] = trashbin
  console.log('sometrash',sometrash)
  console.log('Comapred by adr',trashbin == sometrash)
  console.log('Compared bt json',JSON.stringify(trashbin) == JSON.stringify(sometrash))
  
}
//6.Class and Object
function testClassObject() {
  // private access explanation https://crockford.com/javascript/private.html#:~:text=This%20constructor%20makes%20three%20private,inner%20functions%20of%20the%20constructor.
  console.log('1. Define class by constructor');
  const Robot = function (model) {
    //public instance variable
    this.model = model;
    //private instance variable, can be access by privileged or private method due to closure
    let battery = 0;

    //privleged method
    this.identify = function () {
      return model;
    };

    //invalid method definition
    function destruction() {
      return 'self destruction';
    }

    //private function
    charge = function () {
      battery = 100.0;
      return battery;
    };

    //public method acess private method
    this.selfCheck = function () {
      charge();
      return battery;
    };

    //define setter and getter for private variables
    Object.defineProperty(this, 'battery', {
      get: function () {
        return battery;
      },
      set: function (num) {
        battery = num;
      },
    });
  };
  const bot1 = new Robot('R2D2');
  console.log('call identify', bot1.identify());
  try {
    console.log('call destruction', bot1.destruction());
  } catch (e) {
    console.log(e.message);
  }
  try {
    console.log('call charge', bot1.charge());
  } catch (e) {
    console.log(e.message);
  }
  console.log('call selfCheck', bot1.selfCheck());
  console.log('set battery', (bot1.battery = 90));
  console.log('get battery', bot1.battery);
  console.log('access undefied attr', bot1.dakjf);
  console.log();

  console.log('2. Define class by factory');
  const islandFactory = function(name){
    let secret; //private attribute
    return {
      name: name,//public attribute
      set secret(aSecret){
        secret = aSecret;
      },
      get secret(){
        return secret;
      },
    }
  }
  const myIsland = islandFactory('Strawbery Icecream Piglet');
  console.log('access public attribute',myIsland.name)
  myIsland.secret = `I'm juju`;
  console.log('get private attribute uisng getter'.myIsland.secret)

}

// testDisplay()
// testVarTypes()
// testFor()
// testFunc()
// testArray()
testClassObject()
