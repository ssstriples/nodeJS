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