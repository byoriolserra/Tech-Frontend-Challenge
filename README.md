# Tech-Frontend-Challenge - Oriol Serra

# Goals/Outcomes ✨
- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently
- Link to the source code, use your favorite repository manager (GitHub, GitLab, ...)
- Link to the deployed Demo, use your favorite static site hosting platform (surge, github-pages, now, ...)
- The app should run on any computer by running npm install , npm test and have a demo online.
- We'll evaluate the exercise by looking commits and test passed.

# Pre-requisites ✅
- Don’t forget to add your spotify id and secret to config.js file in order to connect with Spotify API and remember to not upload this data to the repository

# Requirements 📖
- Fetch and display *Released This Week* songs
  - Use the API path `new-releases`
- Fetch and display *Featured Playlists*
  - Use the API path `featured-playlists`
- Fetch and display *Browse* genres
  - Use the API path `categories`
 
- Loading state/UI *(optional, current UX is already clean)*

# Think about 💡
- Taking a look at the Spotify API documentation
- Do you resolve each API request one after the other or in parallel?
- Where do you make the API requests?
- How much logic do you offload out of the UI components?

# What's Already Been Done 🏁
- UI/UX for all elements, including previews (mobile responsive)
- A Spotify request helper (https://developer.spotify.com/documentation/web-api/libraries/)

# Screenshots 🌄

![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
![screenshot-mobile](https://puu.sh/GwPLS/0bcb566d23.png)

# Theoretical Part
- **What is React JS?**

React JS is a JavaScript library that allows websites to update specific UI elements without having to re-render the whole DOM. It achieves so thanks to a virtual DOM that checks and informs about the UI differences after each state change, allowing the actual DOM to focus on only those parts that changed. It uses JSX and invites us to think about apps through a component design workflow.

- **Why should we use ReactJS?**

Due to Web 2.0, interaction with the web has become the norm; therefore, when building something whose purpose goes beyond the presentation of information, React JS provides the necessary tools to do so. Instead of relying on the slow re-rendering of the DOM, we can use Meta’s popular library.

- **What are the life stages of a component?**

A component has three main lifecycle stages: mounting, updating and unmounting. Each one of them can be handled by different methods provided by class components (such as componentDidMount or shouldComponentUpdate), or the useEffect hook in the case of functional components.

- **How does ReactJS use "keys"?**

When we have some data within an array and want to render a component for each piece of that information, we can achieve so by calling the array.map() method, which requires a unique key for every returned component.

- **Is there a difference between "container component" and "presentation component"?**

There is! In order to achieve the single-responsibility principle, a recurrent workflow we can use is to separate logic prom UI. This is achieved by encapsulating state management and business logic within the container component, and pass the resulting abstraction into the presentation component through its props. This way, each component would only have to handle one of the two purposes. 

Nowadays, Hooks seem to be an interesting alternative for decoupling logic and presentation.

- **Why are "synthetic events" used?**

I had never heard of synthetic events before the question, but I have looked into it and understand that React Synthetic Events are used to unify the browser’s native events no matter the browser.

- **What is an "arrow function"?**

An arrow function is a clean alternative to classic function expressions. Instead of using the function keyword (function(props) {}), we write an “arrow” between the props and the braces ((props) => {} ). It is more compact because it allows us to skip the props parenthesis or return keyword in certain cases. They are particularly popular when writing callback functions.

- **What is React Redux?**

React Redux is a library that provides React components the capacity to interact with the Redux store, mainly through a Provider component that should be wrapped around the App to make state globally accessible, and some Hooks like useSelector, which subscribes the component to state changes, and useDispatch.
