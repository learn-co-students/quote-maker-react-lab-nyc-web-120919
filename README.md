# Redux Put It Together

## Objectives

- Use the react-redux library and the redux library to build an application with
  multiple resources.
- Learn how to implement our final CRUD action, update.

## Overview

In this lab we will be building an application for making, updating, and deleting 
quotes. In our `App` component we will render two components: `QuoteForm` and 
`Quotes`. We will build Action Creators in `actions/quotes.js` and write our 
`quotes` reducer to handle those actions.

### Quotes Reducer

If you look in `reducers/quotes.js`, you will see that the quotes reducer has an 
initial state of:

```javascript
[]
```

But when a Quote is added it should look like this (we will be using the uuid 
node package for generating ids):

```javascript
[
  {
    id: '23423424242-42342423424242-fafdb',
    content: 'One Awesome Quote',
    author: 'Luke Ghenco'
  }
]
```

We will need to extend out the Quotes Reducer to handle removing quotes, 
upvoting quotes, and downvoting quotes as well. Check out the test specs for 
how to build these.

HINT: In order to handle upvoting and downvoting quotes, you will need to update 
the quote object in state. Think about how this would be done. When a user 
clicks the "Upvote" or "Downvote" button, you will dispatch the appropriate 
action to the reducer. Inside the reducer, instead of filtering as we would for 
a delete action, you might consider mapping — i.e., all quotes will be returned, 
but if a quote's id matches the id passed as the action's payload, the quote 
will be returned with an updated vote count.

### Quotes Actions

Create Action Creators as specified in the tests for adding, removing, upvoting 
and downvoting quotes.

### QuoteForm Component

`QuoteForm` is already set up with a textarea for a quote's content and an input 
for its author. We will be using component state to control the inputs so make 
sure to have your `QuoteForm`'s component state structured as follows: 
`{ content: '', author: '' }`. When the form is submitted, an `addQuote()` 
action will be dispatched to the reducer; `addQuote` should take a quote object 
as an argument.

### Quotes Component

The `Quotes` container component will render a list of individual `QuoteCard` 
components. It needs to be connected to the `Redux` state so that it can render 
the quotes. Also make sure to attach the remove, upvote, and downvote actions 
from the `actions/quotes.js` file to pass down as callback props to the 
`QuoteCard` component.

### QuoteCard Component

Make sure to connect the callback action props to the the Upvote, Downvote and
Delete buttons.

#### Example App

Here is an image of what the completed app will look like:

![quote app example](https://s3-us-west-2.amazonaws.com/curriculum-content/web-development/react/quote-app-image.png)
