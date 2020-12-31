# Node.js Base Web Project

## 1. JavaScript

### 1.1 JavaScript란
- var로 선언( var a = 1; )
- 동적언어이므로 자료형을 선언할 필요없음
- 기본 자료형과 객체(Object) 두 가지로 나뉜다.

|기본 자료형|설명|
|:---:|:---:|
|Boolean|논리적인 요소를 나타내고, (true와 false)|
|Null|객체 값이 존재하지 않는다는 것을 의미|
|Undefined|값을 할당하지 않음|
|Number|숫자형|
|String|문자형|
|Symbol|ECMAScript6에서 추가, 유일하고 변경 불가|


### 1.2. 배열
- var a = ['안녕', 'Node.js', 55, 'Hello']
  |0|1|2|3|
  |:---:|:---:|:---:|:---:|
  |안녕|Node.js|55|Hello|
<pre>
<code>
    var a = ["hello", 22, "nodejs", 55]

    for(var i = 0; i < a.length; i++) {
        console.log(a[i])
    }
</code>
</pre>

### 1.3. 반복문
<pre>
<code>
    for (var i = 0; i < 5; i++) {
        document.write('화면에 찍어주세요')
        document.write('<'br>')
    }
    
    var i = 0;
    while(i < 10) {
        document.write('화면에 찍어주세요')
        document.write('<'br>')
        i = i + 1;
    }

    var i = 0;
    do {
        document.write('화면에 찍어주세요')
        document.write('<'br>')
        i = i + 1
    } while ( i < 5)
    
    for (var i = 2; i <= 9; i++) {
        for (var j = 1; j <= 9; j++){
            document.write(i+'X'+j+'='+(i*j))
            document.write('<'br>')
        }
    }
</code>
</pre>

### 1.4 함수
<pre>
<code>
    // 함수
    var sum = function(a, b) {
        return a+b;
    }
    var c = sum(10, 20);
    console.log(c)

    // 객체
    function Car(a, b) {
        this.name = a;      // 속성
        this.color = b;
        var move = "전진";       // 내부에서만 접근 가능한 private변수
    }
    
    var a = new Car("현대", "노란")
    console.log(a.name)
    console.log(a.color)

    var b = new Car("기아", "파란")
    console.log(b.name)
    console.log(b.color)
</code>
</pre>

### 1.5 프로토타입
<pre>
<code>
    // 객체
    function Car(a, b) {
        this.name = a;      // 속성
        this.color = b;
    }

    // 프로토타입
    Car.prototype.move = function() {
        console.log(this.name + "차이고 "+this.color+"색입니다.")
    }
    
    var a = new Car("현대", "노란")
    console.log(a.name)
    console.log(a.color)
    a.move()

    var b = new Car("기아", "파란")
    b.move()

    // 배열 사용자 정의 함수 추가
    var a = [1,2,3,4,10];
    Array.prototype.print = function() {
        for(var i=0; i < this.length; i++){
            console.log(a[i])
        }
    }
    a.print()
</code>
</pre>

### 1.6 리터럴객체
<pre>
<code>
    // 리터럴 객체 : 선언과 동시에 객체 생성됨
    var a = {
        'a' : 110,
        'b' : 'hello',
        'c' : function() {
            console.log('gg')
            console.log(this.a);
        }
    }
    console.log(a.a)
    console.log(a.b)
    a.c();

    console.log(typeof a) // object type
    Object.prototype.sum = function() {
        console.log(this.a + 20)
    }
    a.sum()
</code>
</pre>

### 1.7 조건문
<pre>
<code>
    var a = 40
    if( a < 10 ) {
        console.log('10보다 작습니다.')
    } else if (a < 20) {
        console.log('20보다 작습니다.')
    } else if (a < 30) {
        console.log('30보다 작습니다.')
    } else {
        console.log('30보다 큽니다.')
    }

    switch("blue") {
        case "blue" : 
            console.log('파란색입니다.');
            break;

        case "green" : 
            console.log('초록입니다.');
            break;

        default : 
            console.log('모든 벗어나는 조건.');
    }

    function myNum(num) {
        if(num < 10) {
            return "10보다 작습니다."
        } else {
            return "10보다 큽니다."
        }
    }
    var test = myNum(15);
    console.log(test);
</code>
</pre>

### 1.8 콜백함수 및 클로저
<pre>
<code>
    // Callback
    function test(num, callback) {
        console.log(num)
        callback()
    }

    test(1, function() {
        console.log('콜백함수가 실행됩니다.')
    })

    // 클로저 : 함수 내에서 변수를 메모리처럼 사용
    function ex_cl() {
        var num = 0;
        return function() {
            num++
            console.log(num)
        }
    }
    var test = ex_cl()
    test()  // 1
    test()  // 2
</code>
</pre>

### 1.9 프론트앤드 사용
<pre>
<code>
    // DOM(HTML TAG) Control
    var num = 1;

    // 첫 로딩되었을때 Event
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('#num').innerHTML = num;
    })

    document.querySelector('#plus').addEventListener('click', function() {
        num++;
        document.querySelector('#num').innerHTML = num;
    })
</code>
</pre>

### 1.10 jQuery
- jQuery CDN Setting
<pre>
<code>
    // DOM(HTML TAG) Control
    var num = 1;
    // jQuery
    $(document).ready(function() {
        $('#num').html(num);

        $('#plus').click(function() {
            num++;
            $('#num').html(num);
        })
    })
</code>
</pre>
- jQuery원리
<pre>
<code>
    var $ = function(selector) {
        var click = function(callback) {
            callback()
        }
        return {
            Click : click
        }
    }

    $('#abc').Click(function() {
        console.log('클릭을 만들어봤어요!')
    })
</code>
</pre>
- jQuery datepicker
- https://jqueryui.com/datepicker/
- 라이브러리
<pre>
<code>
    // jQuery Prototype
    $.fn.changeColor = function(){
        $(this).css('color', "red");
    };
    $('#abc').changeColor();
</code>
</pre>

### 1.11 ES6
- ES6 brower support check
- Class 문법
<pre>
<code>
    class Car {
        constructor(a, b) {
            this.name = a;
            this.color = b;
        }

        move() {
            console.log(this.name + "차이고 "+this.color+"색입니다.")
        }
    }
    var a = new Car("현대", "노란")
    a.move()

    var b = new Car("기아", "파란")
    b.move()
</code>
</pre>
- babel js
- 하위 brower 호환
<pre>
<code>
"use strict";

var Car = /*#__PURE__*/function () {
  function Car(a, b) {
    this.name = a;
    this.color = b;
  }

  var _proto = Car.prototype;

  _proto.move = function move() {
    console.log(this.name + "차이고 " + this.color + "색입니다.");
  };

  return Car;
}();

var a = new Car("현대", "노란");
a.move();
var b = new Car("기아", "파란");
b.move();
</code>
</pre>
- 기타 문법
<pre>
<code>
    // 상수
    const a = 10;
    // a = 20; // error

    // block단위 사용되는 변수
    let b = 1;
    if(true) {
        let b = 2;
        console.log(b)  // 2
    }
    console.log(b)  // 1

    var c = 1;
    if(true) {
        var c = 2;
        console.log(c)  // 2
    }
    console.log(c)  // 2

    const arr = 'hello';
    console.log('arr 은 ' + arr);
    console.log(`arr 은 ${arr}`);

    // arrow function : this binding할 때 편리
    var func1 = function(a, b) {
        return a + b;
    }

    const func2 = (a, b) => a + b;
    console.log(func2(1, 2))

    const [d, e, f] = [1, 2, 3]
    console.log(e);

    // 스프레드 연산자
    const arr1 = [1, 2]
    const arr2 = [3, 4, 5]
    const arr3 = [...arr1, ...arr2]
    console.log(arr3) 

    function abc(a, ...b) {
        console.log(arguments[0])
        console.log(b[0])
    }
    abc('nodejs','hello', 1)    // 인자를 가변적으로 받을 수 있다
</code>
</pre>
