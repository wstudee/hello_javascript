/* Hello javascript

var i = 0;
for(i=0; i<=10; i++){
    document.write("Hello javascript!");
    document.write("<br/>");
}
*/

/* CHAPTER03. 데이터 타입과 연산자 */
/* 3.1 자바스크립트 기본 타입 */

// 숫자타입
var intNum = 10;
var floatNum = 0.1;

// 문자열 타입
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "double quote string";
var singleChar = 'a';

// 불린 타입
var boolVar = true;

// undefined 타입
var emptyVar;

// null 타입
var nullVar = null;

console.log(
    typeof intNum
    , typeof floatNum
    , typeof singleQuoteStr
    , typeof doubleQuoteStr
    , typeof singleChar
    , typeof boolVar
    , typeof emptyVar
    , typeof nullVar
);

/* 3.1.1 숫자 */
// * 자바스크립트는 모든 숫자를 실수로 처리하므로, 나눗셈 연산을 할 때 주의해야 함
var num = 5/2;

console.log(num);   // 2.5
console.log(Math.floor(num)); // 2

/* 3.1.2 문자열 */
// 문자열 생성
var str = 'test';
console.log(str[0], str[1], str[2], str[3]);  // t e s t

// 한번 정의된 문자열은 바뀌지 않음
str[0] = 'T'; // 대문자로 변경 ?
console.log(str); // test. 변경X. 읽기만 가능

/* 3.1.3 불린값 */
// true, false

/* 3.1.4 null 과 undefined */
/* 값이 비어있음
   undefined : 자바스크립트 환경 내에서 기본적으로 값이 할당되지 않은 변수.
               undefined 는 타입이자 값. (emptyVar)
   null : 개발자가 명시적으로 값이 비어있음을 나타내는 데 사용
          ** 주의 : typeof nullVar = object (null이 아님)
                   따라서, null 타입변수인지 확인할때 typeof 대신 일치연산자 === 를 사용해서 변수의 값을 직접 확인해야 함
 */
// null 타입 변수 체크
var nullVar = null;

console.log(typeof nullVar === null);  // false
console.log(nullVar === null);         // true


//-----------------------------------------------------------------

/* 3.2 자바스크립트 참조 타입(객체 타입)
   기본타입 : 숫자, 문자열, 불린, undefined, null
   객체타입 : 기본타입 제외한 모든 값. 배열, 함수, 정규표현식 등

   3.2.1 객체 생성
   3.2.1.1 Object() 생성자 함수 이용
*/
// Object() 이용해서 foo 빈 객체 생성
var foo = new Object();

// foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);    // object
console.log(foo);           // { name: 'foo', age: 30, gender: 'male' }


/* 3.2.1.2 객체 리터럴 방식 이용
   중괄호 {}를 이용해서 객체 생성 => { "프로퍼티 이름" : "프로퍼티 값" }
   아무것도 적지 않으면 빈 객체.
   프로퍼티 값이 함수일 때, 프로퍼티 메서드라고 부름
 */
// 객체 리터럴 방식으로 foo 객체 생성
var foo = {
    name : 'foo'
    , age : 30
    , gender : 'female'
};

console.log(typeof foo);    // object
console.log(foo);           // { name: 'foo', age: 30, gender: 'female' }

/* 3.2.1.3 생성자 함수 이용 */


// -----------------------------------------

/* 3.2 객체 프로퍼티 읽기/쓰기/갱신
   프로퍼티에 접근하는 방법 두가지 : 대괄호 [], 마침표 .
 */
// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name : 'foo'
    , major : 'computer science'
};

// 객체 프로퍼티 읽기
console.log(foo.name);      // foo
console.log(foo['name']);   // foo
console.log(foo.nickname);  // undefined
console.log(foo.major);     // computer science

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);     // electronics engineering
console.log(foo['major']);

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);  // 30
var name;
// 대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar';   // '-' 연산자가 있는 표현식. 대괄호 표기법만을 이용해서 접근해야 함
console.log(foo['full-name']);  // foo bar
console.log(foo.full-name);     // NaN : Not a Number. 수치 연산을 해서 정상적인 값을 얻지 못할 때
console.log(foo.full);          // undefined
console.log(name);              // undefined

/* 3.2.3 for in 문과 객체 프로퍼티 출력
   for in 문 : 객체에 포함된 모든 프로퍼티에 대해 루프 수행
 */
// 객체 리터럴을 통한 foo 객체 생성
var foo = {
  name : 'foo'
  , age : 30
  , major : 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for(prop in foo){
    console.log(prop, foo[prop]);
}
/* name foo
   age 30
   major computer science
*/

/* 3.2.4 객체 프로퍼티 삭제
   delete 연산자를 이용해 즉시 삭제
   객체의 프로퍼티를 삭제할 뿐, 객체 자체를 삭제하지는 못함
 */
// 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name : 'foo'
    , nickname : 'babo'
};

console.log(foo.nickname);  // babo
delete foo.nickname;
console.log(foo.nickname);  // undefined

delete foo;
console.log(foo.name);  // foo

console.log('----------------------');

//----------------------------------------------------------

/* 3.3 참조 타입의 특성 */
// 동일한 객체를 참조하는 두 변수 objA와 objB
var objA = {
    val : 40
}
var objB = objA;

console.log(objA.val);  // 40
console.log(objB.val);  // 40

objB.val = 50;
console.log(objA.val);  // 50
console.log(objB.val);  // 50

/* 3.3.1 객체 비교
    동등연산자(==) 사용하여 두 객체 비교할 때, 참조값을 비교함 (프로퍼티값X)
 */
var a = 100;
var b = 100;

var objA = { value : 100 };
var objB = { value : 100 };
var objC = objB;

console.log(a == b);        // true. 기본타입의 비교. 동등연산자(==) 이용해서 값을 비교
console.log(objA == objB);  // false. 같은 형태의 프로퍼티를 갖고 있지만, 참조값이 같아야 true가 됨
console.log(objB == objC);  // true

console.log('-------------');

/* 3.3.2 참조에 의한 함수 호출 방식
    기본타입 : 값에 의한 호출. call by Value
             함수의 인자로 기본타입 값을 넘길 경우, 호출된 함수의 매개변수로 복사된 값이 전달됨
             따라서, 함수 내부에서 매개변수를 이용해 값을 변경해도 실제로 호출된 변수의 값이 변경되지는 않음.
    참조타입 : 참조에 의한 호출. call by Reference
             함수의 인자로 참조타입 객체를 전달할 경우, 인자로 넘긴 객체의 참조값이 그대로 함수 내부로 전달됨.
             따라서, 함수 내부에서 참조값을 이용해 인자로 넘긴 실제 객체의 값을 변경할 수 있음.
 */
var a = 100;
var objA = { value : 100 };

function changeArg(num, obj){
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA); // 200,  { value : 200 }

console.log(a); // 100
console.log(objA);  // { value : 200 }

console.log('-------------');

/* 3.4 프로토타입
   모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있음.
   부모 객체의 프로퍼티를 자신의 것처럼 쓸 수 있음
   부모 객체 = 프로토타입 객체 = 프로토타입
 */
var foo = {
    name : 'foo'
    , age : 30
};

console.log(foo.toString());
console.dir(foo);
// foo 객체는 toString() 메서드가 없어서 에러가 발생해야 하는데?
// foo 객체의 프로토타입에 toString() 메서드가 이미 정의되어 있어서 에러없이 출력됨

// 모든 객체는 자신의 프로토타입을 가리키는 [Prototype] 라는 숨겨진 프로퍼티를 가진다. <ECMAScript>
// 객체를 생성할 때 결정된 프로토타입 객체(부모객체)를 동적으로 바꿀 수 있음.

console.log('-------------');
// ---------------------------------------------

/* 3.5 배열
    - 크기를 지정하지 않아도 됨.
    - 어떤 위치에 어느 타입의 데이터를 저장해도 에러 X

   3.5.1 배열 리터럴
    - 배열리터럴은 [대괄호] 사용 , 객체리터럴은 {중괄호}
 */
// 배열 리터럴을 통한 5개 원소를 가진 배열 생성
var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];
console.log(colorArr[0]);   // orange
console.log(colorArr[1]);   // yellow
console.log(colorArr[4]);   // red
// 객체 리터럴 : 프로퍼티이름으로 접금
// 배열 리터럴 : 배열 내 위치 인덱스값으로 접근

/* 3.5.2 배열의 요소 생성
     - 동적으로 배열 원소 추가 가능
     - 순차적으로 넣을 필요 없이 아무 인덱스 위치에나 값을 동적으로 추가 가능
 */
// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]);   // undefined

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr);
console.log(emptyArr.length); // 8

/* 3.5.3 배열의 length 프로퍼티
    - 배열 내 가장 큰 인덱스 +1
 */
var arr = [ ];
console.log(arr.length); // 0

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;
console.log(arr.length); // 101

// 배열 length 프로퍼티의 명시적 변경
var arr = [0, 1, 2];
console.log(arr.length);    // length = 3

arr.length = 5;
console.log(arr);       // [0, 1, 2, undefined, undefined]

arr.length = 2;
console.log(arr);       // [0, 1]
console.log(arr[2]);    // undefined

/* 3.5.3.1 배열 표준 메서드와 length 프로퍼티
    - push() : 인수로 넘어온 항목을 배열의 끝(=length)에 추가하는 자바스크립트 표준 메서드
 */
var arr = ['zero', 'one', 'two'];

// push()
arr.push('three');
console.log(arr);   // [ 'zero', 'one', 'two', 'three' ]

// length 값 변경 후 push
arr.length = 5;
arr.push('four');
console.log(arr);   // [ 'zero', 'one', 'two', 'three', <1 empty item>, 'four' ]

console.log('----------------------------------');
//-------------------------------------------------------

/* 3.5.4 배열과 객체 */
// colorArr 배열
var colorArr = ['orange', 'yellow', 'green'];
console.log(colorArr[0]);
console.log(colorArr[1]);
console.log(colorArr[2]);

// colorObj 객체
var colorObj = {
    '0' : 'orange'
    , '1' : 'yellow'
    , '2' : 'green'
};
console.log(colorObj[0]);
console.log(colorObj[1]);
console.log(colorObj[2]);

// typeof 연산자 비교
console.log(typeof colorArr);   // object
console.log(typeof colorObj);   // object

// length 프로퍼티
console.log(colorArr.length);   // 3
console.log(colorObj.length);   // undefined. 객체라 length 프로퍼티가 존재하지 않음

// 배열 표준 메서드
colorArr.push('red');
// colorObj.push('red');   // Uncaught TypeError: colorObj.push is not a function
// 객체에 push 메서드가 없어서 error

// 배열의 프로토타입과 객체의 프로토타입 비교
var emptyArray = [];
var emptyObj = {};

// console.log(emptyArr.__proto__); // 배열의 프로토타입 Array.prototype
// console.log(emptyObj.__proto__); // 객체의 프로토타입 Object.prototype
console.log('----------------------');

/* 3.5.5 배열의 프로퍼티 동적 생성
    - 배열도 자바스크립트의 객체
    - 객체처럼 동적으로 프로퍼티 추가 가능
 */

var arr = ['zero', 'one', 'two'];
console.log(arr.length);    // 3

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);    // 3

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length);    // 4

// 배열 객체 출력
console.dir(arr);   // [ 'zero', 'one', 'two', 'red', color: 'blue', name: 'number_array' ]

/* 3.5.6 배열의 프로퍼티 열거
    - for in 문으로 모든 프로퍼티 열거 가능
    - for 문을 사용하면 불필요한 프로퍼티 제외하고 배열의 요소만 출력
 */
for (var prop in arr){
    console.log(prop, arr[prop]);
}

for (var i = 0 ; i < arr.length ; i++) {
    console.log(i, arr[i]);
}
console.log('------------------------');

/* 3.5.7 배열 요소 삭재 */
// delete
var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);           // [ 'zero', 'one', <1 empty item>, 'three' ]
console.log(arr.length);    // 4
// delete 연산자는 해당 요소의 값을 undefined로 설정할 뿐, 원소 자체를 삭제하지 않음

/* splice(start, deleteCount, item...)
    - start : 배열에서 시작 위치
    - deleteCount : start에서 지정한 시작위치부터 삭제할 요소의 수
    - item : 삭제할 위치에 추가할 요소
 */
var arr = ['zero', 'one', 'two', 'three'];
console.log(arr);
arr.splice(2,1);
console.log(arr);   // [ 'zero', 'one', 'three' ]
console.log(arr.length);    // 3

console.log();

/* 3.5.8 Array() 생성자 함수
    - 배열은 일반적으로 배열 리터럴로 생성
 */
var foo = new Array(3); // 인자가 1개이고, 숫자 : 호출된 인자를 length로 갖는 빈 배열
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3); // 그외의 경우 : 호출된 인자를 요소로 갖는 배열
console.log(bar);
console.log(bar.length);


