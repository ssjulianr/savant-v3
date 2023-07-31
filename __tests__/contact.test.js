// contact.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Contact from '/src/pages/Contact.jsx'; 

test('renders Contact form', () => {
  const { getByPlaceholderText, getByText } = render(<Contact />);

  // Check if form elements are rendered
  const nameInput = getByPlaceholderText('Your Name');
  const emailInput = getByPlaceholderText('E-Mail');
  const subjectInput = getByPlaceholderText('Subject');
  const messageTextarea = getByPlaceholderText('Your Message');
  const submitButton = getByText('Submit');

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(subjectInput).toBeInTheDocument();
  expect(messageTextarea).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('renders Contact form with the correct title', () => {
  const { getByText } = render(<Contact />);

  const title = getByText('Contact Us');

  expect(title).toBeInTheDocument();
});

test('renders newsletter sign-up section', () => {
  const { getByText, getByPlaceholderText } = render(<Contact />);

  const signUpText = getByText('Sign up for our newsletter!');
  const emailInput = getByPlaceholderText('Your email address');
  const signUpButton = getByText('Sign Up');

  expect(signUpText).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});

test('renders "GET IN TOUCH" heading', () => {
  const { getByText } = render(<Contact />);

  const getInTouchHeading = getByText('GET IN TOUCH');

  expect(getInTouchHeading).toBeInTheDocument();
});
