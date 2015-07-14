function sum(a, b) {
return a + b;
}
var totalSum = sum(4, 6);
console.log(totalSum);
console.log(sum(8, 6));


function isEqual(c, d) {
  if(c === d){
    return true;
  } else {
    return false;
  }
}
var result = isEqual(8, 2);
console.log(result);
console.log(isEqual(6, 6));


function discountPercentage(amount, discount) {
  var totalDiscount = amount * (discount/100);
  if(totalDiscount === amount || totalDiscount === 0) {
    return "Warning!";
  } else {
    return totalDiscount;
  }
}
var total = discountPercentage(500, 10);
console.log(total);
console.log(discountPercentage(400, 10));


function stringCapitalize(str) {
  var name2 = str.split(" ");
  for(var i = 0; i < name2.length; i++) {
    name2[i] = name2[i].charAt(0).toUpperCase() + name2[i].substr(1).toLowerCase();
  }
  return name2.join(" ");
}
console.log(stringCapitalize("this is a practice form."));



function evenNumbers(num1, num2) {
  console.log(num1, num2)
  // Check to see what two numbers are being passed through
  for(var i = num1; i <= num2; i++) {
  // starting at the first parameter, ending at the second parameter, incrementing by 1
    if(i % 2 === 0) {
  // could have changed i to num2
      console.log (i);
    }
  }
}

var randomNum = (Math.random() * 100);
// make sure sytax is correct for random number
var roundedRandomNum = Math.floor(randomNum);
console.log(evenNumbers(0, roundedRandomNum));
// pass through roundednum because it is now wrapped around randomnum


function isDivisible(g, h) {
  if(g % h === 0) {
    return true;
  } else {
    return false;
  }
}
var theTotalSum = isDivisible(10, 5);
console.log(theTotalSum);


function oddNumbers(num5, num6) {
  console.log(num5, num6);
    if(num6 > 40) {
      for(var i = 40; i <= num6; i++) {
        if(i % 2 === 1) {
          console.log(i);
      }
    }
  } else {
    for(var j = num5; j <= num6; i++) {
      if(j % 2 === 1) {
        console.log(j);
     }
    }
  }
}
var randomNumber = (Math.random() * 100);
var roundRanNum = Math.floor(randomNumber);
console.log(oddNumbers(0, roundRanNum));
