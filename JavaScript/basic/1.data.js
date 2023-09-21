console.log('Hello World');
console.log('Hello', 'World');

// 주석을 작성하는 첫번째 방법
console.log("안녕"); //안녕을 출력

/**
 * 이렇게 작성하면
 * 여러줄을 한번에 주석처리 할 수 
 * 있습니다.
 */



/**
 * Variable 선언
 * 
 * 1) var - 사용안함
 * 2) let
 * 3) const
 */


var name = "김효주";
console.log(name);
var age = 55;
console.log(age);
var pi = 3.14;
console.log(pi);
var name = "김초롱";  // 기존에 있던 변수에 그냥 덮어버림
console.log(name);

/**
 * let은 var에서 같은 이름의 중복생성을 하지 못하게 만든 자료형이다
 * 다만 let과 var는 모두, 값을 변경하는 것은 가능하다
 */

let name2 = "김효주";
console.log(name2);
name2 = "김초롱"
console.log(name2);


/**
 * const는 상수를 표현하기 위한 자료형
 * 값을 변경할 수 없다
 */

const name3 = "김효주"
name3 = "김초롱" // 에러발생


/**
 * naming
 * 
 * 변수 이름을 지을 떄
 * 1) 일반적으로 영어를 사용하며 문자와 숫자 모두 사용할 수 있다.
 * 2) 특수문자는 언더스코어(_)와 달러($)를 사용할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다.
 * 4) 키워드를 변수명으로 사용할 수 없다.
 *      bar, let, for 등등
 */




/**
 * Naming Type
 * 
 * 1) camelCase => 대부분의 언어에서 많이 사용하며 단어의 시작마다 대문자로 구분해준다
 * 2) snake_case => 파이썬에서 주로 사용하며, 단어의 시작하다 _로 구분해준다
 * 3) PascalCase => c# 및 ms계열의 언어에서 많이 사용하며, 매단어 시작은 무조건 대문자로 한다.
 * 
 */


/**
 * 
 * Data Type
 * 
 * 여섯개의 원시타입과 한개의 오브젝트 타입이 있다
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null(널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *      function
 *      Array
 *      object 
 */


// Number 타입

const age = 55;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;  //무한대
const nInfinity = Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

// String 타입
const name = "김효주'학생'";
console.log(name);
console.log(typeof name);


/**
 * 1) newline => \n
 * 2) tab => \t
 * 3) \ => \\
 */

const str = "안녕하세요 저는 김효주입니다. \n \t나이는 60살입니다";
console.log(str);

const name = "김효주";
console.log(`안녕하세요 ${name}입니다`);


// Boolean 타입

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);


/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때 지정되는 값
 * 
 * 값에 undefined를 직접 넣어주는 것은 지양해야 함
 */

let num;
console.log(typeof num);


/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이다
 * 다만 js에서는 개발자가 명시적으로 없는 값을 초기화 할 때 null을 사용한다
 */


let init = null;
console.log(init);
console.log(typeof init);



/**
 * 
 * Symbol 타입 (최근에 생긴 것, 잘 안쓰임)
 * 
 * 유일무이한 값을 생성할 때
 * 다른 원시값들과 다르게 Symbol 함수를 호출해서 사용한다
 */

const tmp1 = 1;
const tmp2 = '1';
console.log(tmp1 == tmp2);   // 자동 형변환 되어서 true
console.log(tmp1 === tmp2);   // 자료형까지 비교해서 false

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 == symbol2);  // 고유한 값이라 false



/**
 * Object 타입
 * 
 * Map
 * 키 : 벨류 쌍으로 이루어져 있다.
 * key : value
 */

const dictionary = {
    red : "빨간색",
    orange : "주황색",
    yellow : "노란색"
}
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary.yellow);



/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입
 */

const arr1 = []; // 빈배열

const arr = ["빨간색", "주황색", "노란색", "초록색"];
console.log(arr[0]);
arr.push('이상한색');   // 배열 추가
console.log(arr.length);






