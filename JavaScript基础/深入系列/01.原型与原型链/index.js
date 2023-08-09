//  我们先使用构造函数创建一个对象
function Person() {
}

const person = new Person();
//  然后我们给这个对象添加一个属性
person.name = 'Kevin';
//  我们来看看 Person.prototype 和 person 的关系

console.log(person.name); // Kevin


//  构造函数的 prototype 属性
//  每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype，比如

function Person() {
}

Person.prototype.name = 'Kevin';

const person1 = new Person();
const person2 = new Person();

console.log(person1.name); // Kevin
console.log(person2.name); // Kevin



/* 

  函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是上面那个例子中的 person1 和 person2 的原型。

  那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

  Person.prototype 就是 person1 和 person2 的原型，那 person1 和 person2 又是什么呢？其实 person1 和 person2 是 Person 的实例，我们可以用 instanceof 方法来判断，如下：
  person1 instanceof Person // true
  person2 instanceof Person // true

  __proto__ ：
  这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。

*/
function Person() {
}
const person = new Person();

console.log(person.__proto__ === Person.prototype); // true

// constructor:
// 每个原型都有一个 constructor 属性指向关联的构造函数。

// 为了验证这一点，我们可以尝试。

function Person() {

}

console.log(Person === Person.prototype.constructor); // true

// 综上我们可以得出：

function Person() { }

const person = new Person();

console.log(person.__proto__ === Person.prototype);
console.log(Person.prototype.constructor === Person);

// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype);


// 实例与原型

// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就会去找原型的原型，一直找到最顶层为止。

// 举个例子：
function Person() {

}

Person.prototype.name = 'Kevin';

const person = new Person();

person.name = 'Daisy';
console.log(object.name); // Daisy  

delete person.name;

console.log(person.name); // Kevin

/* 
  上面代码中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。
  但是当我们删除了 person 的name属性时，读取person.name ，从 person 对象中找不到name属性就会从 person 的原型也就是 person.__proto__ ，也就是 Person.prototype 中查找，幸运的是我们找到了 name 属性，结果为 Kevin。


  但是万一还没找到呢？原型的原型又是什么呢？
*/

// 原型的原型
// 在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：

const obj = new Object();
obj.name = 'Kevin';
console.log(obj.name); // Kevin

/* 
  其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，不难理解为什么 Object.prototype 是原型链的终点了。
    结论：
*/

console.log(Object.prototype.__proto__ === null); // true

// 然而 null 究竟代表了什么呢？

/* 
  引用 阮一峰老师的 《undefined与null的区别》 中的一段话：
    - null表示"没有对象"，即该处不应该有值。
  所以 Object.prototype.__proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。
  所以查找属性的时候 查到 Object.prototype 就可以停止查找了。
*/

