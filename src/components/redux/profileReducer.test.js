import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
import ReactDOM from "react-dom";
import React from "react";

let state = {
  published: [
    {
      time: '6 hours ago',
      text: 'Individuals forged in the fire of service and battle.',
      likes: '87',
      comments: '20',
      shared: '13',
      id: 1,
    },
    {
      time: '6 hours ago',
      text: 'Individuals forged in the fire of service and battle.',
      likes: '87',
      comments: '20',
      shared: '13',
      id: 2,
    },
  ],
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.published.length).toBe(3);

});

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.published[0].text).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.published.length).toBe(1);
}); 