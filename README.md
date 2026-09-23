# Dev Insights: Mini Blog

A small React and TypeScript blog application built for the React Formative Assessment.

The project demonstrates React components, TypeScript types, Vite, CSS styling, conditional styling, component optimization, and a Higher-Order Component (HOC).

## Technologies Used

* React
* TypeScript
* Vite
* CSS
* ESLint

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

### Installation

Clone the repository and move into the project directory:

```bash
git clone <https://github.com/owen-stud123/react-dev-formative-1.git>
cd react-dev-formative-1
```

Install the project dependencies:

```bash
npm install
```

### Run the Application

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

### Build the Application

To create a production build:

```bash
npm run build
```

### Testing

The project can be checked by running the application with Vite and verifying the components and functionality in the browser.

The production build can also be checked with:

```bash
npm run build
```

## Component Design

The application uses functional components for the `Header`, `Post`, `PostList`, and `App` components.

I chose functional components because they provide a simple and readable way to build React components. They also work well with modern React features such as hooks.

The `Post` component is reusable because it receives a typed `post` object through props. This allows `PostList` to render multiple posts using the same component.

The post data is defined using a TypeScript `Post` interface to make sure each post contains the expected properties and types.

## Styling

Two styling approaches were used.

### External CSS

The main application styling is contained in:

```text
src/styles/blog.css
```

This file contains the styles for the header, navigation, post list, post cards, and featured posts.

### Inline Styling

An inline style is used on the `Dev Insights` heading in the `Header` component:

```tsx
style={{ letterSpacing: "1px" }}
```

Using both approaches demonstrates different ways of applying styles in React.

## Conditional Styling

Conditional styling is used to highlight posts written by Owen Ganza.

The `Post` component checks the post author:

```tsx
post.author === "Owen Ganza"
```

When the condition is true, the `featured-post` CSS class is added to the post.

This gives the selected post a different background and border style.

## Component Optimization

`React.memo` is used with the `Post` component:

```tsx
export default memo(Post);
```

This allows React to avoid unnecessary re-renders of the `Post` component when its props have not changed.

The posts rendered by `PostList` also use a unique `key` based on the post ID:

```tsx
<Post key={post.id} post={post} />
```

Using a unique key helps React identify individual items when rendering the list.

## Higher-Order Component

A custom Higher-Order Component called `withLogger` is located in:

```text
src/hoc/withLogger.tsx
```

The HOC wraps the `Header` component and logs messages when the component is mounted and unmounted.

The HOC is applied with:

```tsx
export default withLogger(Header, "Header");
```

This demonstrates how a Higher-Order Component can add behavior to an existing component without changing the original component's main implementation.

## Challenges and Solutions

One challenge was organizing the application into separate reusable components while keeping the code simple.

I addressed this by separating the header, individual posts, and post list into their own components. I also created a shared TypeScript `Post` interface so that the post data and component props use consistent types.

Another challenge was implementing the optimization and HOC requirements without adding unnecessary complexity. I used `React.memo` for the reusable `Post` component and created a small `withLogger` HOC for the required mount and unmount logging.

## External Libraries and Packages

The main packages used by the project are:

* React
* React DOM
* Vite
* TypeScript
* ESLint

No additional styling library or CSS-in-JS library was required.

## Reflection

This project helped me understand how React applications can be divided into smaller reusable components. I found the combination of React and TypeScript particularly useful because TypeScript makes the expected structure of data and component props clearer.

I also found the optimization and Higher-Order Component requirements useful because they introduced ways of improving component organization and behavior beyond simply rendering content. Going forward, I would like to explore more advanced React state management and ways of connecting a React application to a backend.
