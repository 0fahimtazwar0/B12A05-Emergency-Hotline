# Questions & Answers

### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
#### Answer:
1. **getElementById** returns a single element or null if the id doesn't exit
2. **getElementsByClassName** returns an array like object called HTMLCollection, if the class doesn't exist it will return an empty array
3. **querySelector** selects objects like css, it will return the first element matching description, if it doesn't find any element as desciption it will return null
4. **querySelectorAll** works similarly as **querySelector** but it will return all the elements with matching description in an array like object named Nodelist. if it doesn't find anything it will return an empty array similar to **getElementsByClassName**

---
### 2. How do you **create and insert a new element into the DOM**?

#### Answer:
- Declaring a variable with **createElement("div")**\
```let newDiv = document.createElement("div")```

- Changing the **innerHTML**\
  ```newDiv.innerHTML = `<p>hello guys</p>` ```

- Inserting the div into the DOM
  ```
  let containerDiv = document.getElementById('container-div')
  containerDiv.appendChild(newDiv)
  ```
---
 ### 3. What is **Event Bubbling** and how does it work?

 #### Answer:
**Event Bubbling** is when you click something in html such as a div, the div will register the click and if the parent div of the clicked div also have an event listener it will also register the click, if the parent div of the current parent div also have an event listener it will also register click and it will go on like this untill there is no event listener in the parent div.

To stop **Event Bubbling** we can use **stopPropagation()**

---
 ### 4. What is **Event Delegation** in JavaScript? Why is it useful?

 #### Answer:
 When we have many event listener in a single div, it becomes very memory consuming so instead we only give the parent div a event listener. it locates the element clicked inside it and returns. this way we can have many event listener and save memory consumption. this whole process is called **Event Delegation**. it is useful for making faster websites
 
---
 ### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

 #### Answer:
- **preventDefault()** is used to stop a website from reloading while form submitting, it is really useful while development of the website.
  
  ```
  document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault()})
  ```
  
- **stopPropagation()** is used to stop a website from **Event Bubbling** as above explained.
  
  ```
  document.getElementById('child-div').addEventListener('click', function (e) {
    e.stopPropagation()})
  ```

