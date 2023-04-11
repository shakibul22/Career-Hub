import React from 'react';

const BlogPage = () => {
    return (
        <div className=' text-center shadow'>
        <div className='shadow'>
            <h3>a. When should you use context API?</h3>
            <h6>The Context API in React is used to provide global state management and can be used as an alternative to passing down props through multiple levels of components. You should use Context API when you have data that needs to be accessed by multiple components in your application, but you don't want to pass the data down manually to each component as props.</h6>
        </div>
        <div>
            <h3>b. What is a custom hook?</h3>
            <h6>Custom Hooks are a feature in React that allow you to reuse logic across multiple components. Custom Hooks are simply JavaScript functions that follow the naming convention of starting with "use". Custom Hooks can encapsulate complex logic and abstract it away from the component, making it easier to reuse and test. They can also be used to share stateful logic between multiple components.</h6>
        </div>
        <div>
            <h3>c. What is useRef?</h3>
            <h6>useRef is a built-in hook in React that provides a way to keep track of a mutable value that persists across component renders. useRef returns a mutable ref object which can hold any value, similar to an instance property on a class. The ref object can be updated during the lifecycle of the component without causing a re-render. useRef is often used to store a reference to a DOM element, or to store any value that needs to persist across renders.</h6>
        </div>
        <div>
            <h3>d. What is useMemo?</h3>
            <h6>useMemo is a built-in hook in React that provides a way to memoize the result of a function. useMemo takes two arguments: a function that returns a value, and a dependency array. useMemo will recompute the memoized value only when one of the dependencies in the array changes. This can be useful when you have a function that takes a long time to compute, and you want to avoid recomputing it unnecessarily. By memoizing the function result, you can improve the performance of your application.</h6>
        </div>
     
     
    </div>
);
};

export default BlogPage;