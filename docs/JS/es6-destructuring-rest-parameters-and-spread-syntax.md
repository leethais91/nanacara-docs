---
title: 'ES6: Destructuring, Rest Parameters and Spread Syntax'
date: 2021-09-13
slug: es6-cheatsheet

---
## Destructuring assignment

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Object destructuring

Basic assignment

    const user = {
        id: 16,
        isVerified: true
    };
    
    const { id, isVerified } = user;

Assigning to new variable name

    const user = {
    	id: 16,
        isVerified: true
    };
    
    const { id: userID, isVerified: userIsVerified } = user;
    console.log(userID); // 16
    console.log(userIsVerified); // true

Default values

    const user = {
    	id: 16,
        isVerified: true
    };
    
    const { id = 10, age = 30 } = user;
    console.log(id); // 10
    console.log(age); // 30

### Array Destructuring

Basic variable assignment

    const arr = [1, 2, 3];
    const [first, second, third] = arr;
    console.log(first); // 1
    console.log(second); // 2
    console.log(third); // 3

Ignoring some returned values

    const arr = [1, 2, 3];
    const [first, , third] = arr;
    console.log(first); // 1
    console.log(third); // 3

## Spread Syntax

Spread syntax "expands" an array or object into its elements.

## Rest Syntax

Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.