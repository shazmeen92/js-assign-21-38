//****************************chap 21-25**************************
//********************q1************************* 

// var a = prompt("Enter your first name");
// var b = prompt("Enter your last name");
// var c = a+b;

// alert("Welcome"+" "+c);

//********************q2************************* 
 
// var a = prompt("Enter your favourite mobile model");
// var b = a.length;

// alert("My favourite phone is:"+" "+a+"\nString length:"+"  "+b);

//********************q3************************* 

// var a = "Pakistani";
// var b = a.lastIndexOf("n");

// document.write("String :"+" "+a+"<br>"+"\n Index Of n :"+" "+b+"<br>");

//********************q4************************* 

// var a = "Hello World";
// var b = a.lastIndexOf("l");

// document.write("String :"+" "+a+"<br>"+"\n Last Index Of 'l' :"+" "+b+"<br>");

//********************q5************************* 

// var a = "Pakistani";
// var b = a.charAt("3");
// alert("String :"+" "+a + "<br>" + "\n Character at Index '3' :"+" "+b);

//********************q6************************* 

// var a = prompt("Enter your first name");
// var b = prompt("Enter your last name");
// var c = a+b;

// alert("Welcome"+" "+c);

//********************q7************************* 

// var a = "Hyderabad";
// var b = a.replace("Hyder","Islam");

// document.write("City:"+" "+a+"<br>"+"\nReplaced City :"+" "+b);

//********************q8************************* 

// var a = "Ali and Sami are best friends. They play cricket and football together.";

// var b = a.split("and").join("&");

// document.write(b);


//********************q9************************* 

// var a = "472";
// var b = parseInt(a);

// document.write("Value is :"+" "+a+"<br>"+"\n Type is :"+"String"+"<br>"+"\n Value is :"+" "+b+"<br>"+"\nType is :Number");


//********************q10************************* 

// var a = prompt("Enter a Value");
//alert("User input :"+" "+a+"\n Upper case letter :"+" "+a.toUpperCase());

//********************q11************************* 
//var a = prompt("Enter a value");

//alert("User Input :"+" "+ a+"\nTitle case :"+" "+ a);

//********************q12************************* 

// var num = 35.36 ; 
// var a = num.toString();
// var b = a.replace(".","");

// document.write("Number is :"+ " "+ a+"<br>"+"\nResult is :"+" "+b);


 //********************q13************************* 

//  var a = prompt("Enter a value");

//  for(var b=0; b<a.length; b++){
//      var c = a.charCodeAt(b);
//      if(c===33||c===44||c===46||c===64){
//          alert("Please enter a valid input");
//      }
//  }

//********************q14************************* 

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to our shop","Search your desire here");
//     b = b.toLowerCase();
// var i = A.indexOf(b);
// if(i==!-1){
//     alert("Your item"+" "+b+" is available at Index of"+" "+i);

// }
// else{
//     alert(b+"  is not available");
// }


// //********************q15************************* 
// var passWord = prompt("Enter your password");
// var a = 

//********************q16************************* 

// var university = "University of Karachi"; 

// var a = university.split('');

// document.write(a);

//********************q17************************* 

// var a = prompt("enter a value");
// for(var i=0; i<a.length; i++){
//     if(i===a.length-1){
//         alert("User input : "+a+"\nLast Character : "+a.charAt(i));
//     }
// }

//********************q18************************* 

// var a = "The quick brown fox jumps over the lazy dog";
//   a = a.toLowerCase();
// var check = 0;
// for(var b=0; b<=a.length; b++){
//     if(a.charAt(b)=="the"){
//      check += 1;
//      alert(check);
//     }
// }


//********************chap 26-30************************* 

//********************q1************************* 
//  var num = 4.8;
//  var rounded = Math.round(num);
//  var b = Math.ceil(num);
//  var c = Math.floor(num);

//  document.write("Rounded value :"+" "+rounded+"<br>"+"\nCeil Value :"+" "+b+"<br>"+"\nFloor Value :"+" "+c);


//********************q2************************* 

//  var num = +prompt("Enter a negative value");
//  var rounded = Math.round(num);
//  var b = Math.ceil(num);
//  var c = Math.floor(num);

//  document.write("Number:"+num+"<br>"+"Rounded value :"+" "+rounded+"<br>"+"\nCeil Value :"+" "+b+"<br>"+"\nFloor Value :"+" "+c);


//********************q3************************* 


//********************q4************************* 

// var b =  Math.ceil((Math.random()*6));
// alert ("random value is: "+" "+b);


//********************q5************************* 

// var a = Math.floor((Math.random()*2)+1);
// if(a===1){
//     alert(a+"<br>"+"\nRandom coin Value : Tail");
// }

// else if(a===2){
//     alert(a+"<br>"+"\nRandom coin Value : Head")
// }


//********************q6************************* 

// var a = 100;
// var b = Math.floor(Math.random()*100);
// alert("Random no. between 1 & 100 :"+" "+b);

//********************q7************************* 

// var a = +prompt("Enter your weight in kgs");
// var c = Math.random()*a;


// alert("The weight of the user is :"+" "+b);


//********************q8************************* 

// var a = 4;
// var b = +prompt("Enter a no. from 1-10");
// if(b===a){
//     alert("Congratulations!! you have Entered a correct Number");
// }
// else{
//     alert("Sorry better luck next time");
// }

//********************chap 31-34************************* 

//********************q1************************* 
// var today = new Date();
 //document.write(today);

//********************q2************************* 

// var a = new Date();
// var c = a.toString();
// var b = c.slice(4,8);
// alert("Current Month :"+" "+b);

//********************q3************************* 

// var c = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
// var b = new Date();
// var a = b.getDay();
// var d = c[a];
// alert("Today is"+" "+d);


//********************q4*************************
// var a = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
// var b = new Date();
// var c = b.getDay();
// if(c==0||c==6){
//     alert("Today is Fun Day :)")
// }
// else{
//     alert("Have a good Day!")
// }


//********************q5*************************

// var a = new Date();
// var b = a.getDate();
// alert(b);
// if(b<16){
//     alert("first fifteen days of the month");

// }
// else{
//     alert("last days of the month")
// }


//********************q6*************************

// var a = new Date();
// var b = a.getTime();
// var c = b/60000;
// alert("Current date "+a);
// alert("Ellapsed milliseconds since jan 1 1970 "+b);
// alert("Ellapsed minutes since jan 1 1970 "+c);

//********************q7*************************

// var a = new Date();
// var b = a.getHours();
// if(b<12){
//     alert("It's AM")
// }
// else if(b>12){
//     alert("It's PM")
// }

//********************q8*************************

// var LaterDate = new Date(2020, 11, 31, 00, 00, 00, 0);
// alert(LaterDate);

//********************q9*************************

// var a = new Date(2020,3,24);
// var b = new Date(2020,5,21);
// var c = a.getTime();
// var d = b.getTime();
// var diff = (d-c);
// var mul = (1000*60*60*24);
// var div = (diff/mul);
// alert(div+" "+"days have been passed since 1st Ramadan of 2020");


//********************q10*************************

// var a = new Date(2020,5,20);
// var b = new Date(2020,0,1);
// var c = a.getTime();
// var d = b.getTime();
// var e = c-d;
// var f = (1000*60);
// var g = (e/f);

//  alert("On reference date "+a+"<br>"+g+" seconds have been passed since start of 2020");



//********************q11*************************

// var a = new Date(2020,5,20,04,06,12);
// var b = a.getHours();
// var c = b-1;
// var d = new Date(2020,5,20,c,06,12);
// alert("Current date : "+a+"<br>"+"One hour ago it was :"+d);


//********************q12*************************

// var a = new Date(2020,5,20,04,06,12);
// var b = a.getFullYear();
// var c = b-100;
// var d = new Date(c,5,20,04,06,12);
// alert("Current date : "+a+"<br>"+"100 years ago it was :"+d);

//********************q13*************************

// var a = new Date(2020,5);
// var b = new Date(1992,5);
// var c = a.getTime();
// var d = b.getTime();
// var diff = (c-d);
// var mul = (1000*60*60*24*30*12);
// var div = (diff/mul);
// var round = Math.round(div)
// alert(round);

//********************q14*************************

//********************Chap 35-38*************************

//********************q1*************************

// function date(a){
//       a = new Date();
//       document.write(a);
// }
// date();

//********************q2*************************

// function fullname(a,b,c){
//       a = "Shazmeen";
//       b = "Sher Muhammad";
//       c = a+b;
//       alert("Hello"+" "+c);
// }
// fullname();


//********************q3*************************

// function add(a,b){
//         a = +prompt("Enter 1st number");
//         b = +prompt("Enter 2nd number");
//         return a+b;
        
// }
// var c = add();
// document.write(c);

//********************q4*************************

// function calculator(num1,opr,num2){
//     if(opr==="+"){
//     return num1+num2;
//     }
//     else if(opr==="-"){
//     return num1-num2;
//     }
//     else if(opr==="/"){
//     return num1/num2;
//     }
//     else if(opr==="*"){
//     return num1*num2;
//     }
// }

// document.write(calculator("3","+","3"));

//********************q5*************************

// function square(a){
//   var b  = a*a;
//   document.write(b);
// }
//  square(7);      

//********************q6*************************

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 7;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

//********************q9(i)*************************

// function recarea(width,height){
//     var A = (width*height);
//     return A;
// }
// var ans = recarea(5,4);
// alert(ans);


//********************q9(ii)*************************

// var width = 4;
// var height = 7;

// function recarea(){
//     var A = (width*height);
//     return A;
// }
// var B = recarea();
// alert(B);


//********************q10*************************

// var str = "madam";
// var check;
// var a;
// function palindrome(){
//     for( a>=str.legnth; a=0; a--){
//      check +=a;
//      if(check=="a"){
//      alert("true"); 
//      }
//     }
// }
// palindrome();


//********************q14(i)*************************

// function calcCircumference(radius){
//     var circum = 2*3.142*radius;
//     return circum;
// }
// var answer = calcCircumference(6);
// alert("The Circumference of Circle is" +" "+answer);

//********************q14(ii)*************************

// function calcArea(radius){
//     var area = (3.142*radius*radius);
//     return area;
// }
// var answer = calcArea(6);
// alert("The Area of Circle is" +" "+answer);



//*********************************************