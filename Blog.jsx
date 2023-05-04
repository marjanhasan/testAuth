import React, { useState } from "react";

const Blog = () => {
  return (
    <div className="my-container">
      <div className="h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Blog
      </div>
      <div className="md:px-24 text-justify">
        <div className="shadow-current w-full py-6 rounded-lg my-5 shadow-lg">
          <h2 className=" pl-6 font-bold text-base mb-3">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p className="mx-6 mb-3 h-fit shadow-current px-6 py-3 font-semibold break-words text-base rounded-lg">
            Controlled and uncontrolled components refer to how the component's
            data is managed and updated. With an uncontrolled component, the
            data is managed by the browser, which means that the component's
            data is handled by the DOM directly, rather than by React. This can
            make them simpler to implement and require less code. On the other
            hand, with a controlled component, the data is managed by React
            through state or props, which allows for more precise control over
            the component's behavior. Controlled components are typically used
            for more complex forms that require validation or other constraints,
            while uncontrolled components are often used for simple forms.
          </p>
        </div>
        <div className="shadow-current w-full py-6 rounded-lg my-5 shadow-lg">
          <h2 className=" pl-6 font-bold text-base mb-3">
            How to validate React props using PropTypes.
          </h2>
          <p className="mx-6 mb-3 h-fit shadow-current px-6 py-3 font-semibold break-words text-base rounded-lg">
            PropTypes is a library built into React that allows us to validate
            the types of props that are passed to a component. This can be
            helpful for catching errors early on and ensuring that our
            components are being used correctly. To use PropTypes, we first need
            to import it from the 'prop-types' package. Then, we can define the
            expected types for each prop in our component using the PropTypes
            library. We can specify a number of different types, including
            strings, numbers, booleans, arrays, objects, and more. To validate
            props, we simply add a 'propTypes' property to our component and
            define the expected types for each prop. If a prop is passed to the
            component that does not match the expected type, an error will be
            thrown in the console.
          </p>
        </div>
        <div className="shadow-current w-full py-6 rounded-lg my-5 shadow-lg">
          <h2 className=" pl-6 font-bold text-base mb-3">
            Tell us the difference between nodejs and express js.
          </h2>
          <p className="mx-6 mb-3 h-fit shadow-current px-6 py-3 font-semibold break-words text-base rounded-lg">
            Node.js and Express.js are both JavaScript-based technologies that
            are commonly used for web development. However, that serve different
            purposes and have distinct features. Node.js is a JavaScript runtime
            environment that allows us to run JavaScript code outside of a web
            browser. It provides a set of APIs for building network
            applications, file systems, and other system-level tasks. Node.js
            can be used to build a variety of applications, including
            server-side web applications, command-line tools, and desktop
            applications. Express.js, on the other hand, is a web application
            framework built on top of Node.js. It provides a set of features and
            tools for building web applications, such as routing, middleware,
            and template engines. Express.js is often used to build server-side
            web applications that use Node.js as the backend. In summary,
            Node.js is a JavaScript runtime environment that can be used for a
            variety of tasks, including building web applications, while
            Express.js is a web application framework built on top of Node.js
            that provides additional features and tools for building server-side
            web applications.
          </p>
        </div>
        <div className="shadow-current w-full py-6 rounded-lg my-5 shadow-lg">
          <h2 className=" pl-6 font-bold text-base mb-3">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="mx-6 mb-3 h-fit shadow-current px-6 py-3 font-semibold break-words text-base rounded-lg">
            A custom hook in React is a function that allows us to reuse
            stateful logic across multiple components. By creating a custom
            hook, we can extract the common logic from your components and reuse
            it in a more modular and reusable way. Custom hooks are a powerful
            tool for code reuse and can help to keep our code more organized and
            maintainable. Custom hooks are created by defining a function that
            uses React hooks such as useState, useEffect, useContext, and
            others. The function should return an object or an array with the
            stateful values and functions that we want to use in our component.
            There are many reasons why we might want to create a custom hook.
            For example, we might have some complex logic that is used across
            multiple components, or we might want to abstract away some common
            functionality such as handling form data or fetching data from an
            API. Custom hooks can also help to simplify our components and
            reduce the amount of boilerplate code that we need to write.
            Overall, creating a custom hook in React can help us to improve code
            reuse, maintainability, and organization, and can make our
            components more modular and easier to understand.
          </p>
        </div>
      </div>
    </div>
  );
};
// ReactDOM.render(<App />, rootElement);
export default Blog;
