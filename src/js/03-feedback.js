import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

if (savedState.email) {
  emailInput.value = savedState.email;
}
if (savedState.message) {
  messageTextarea.value = savedState.message;
}

form.addEventListener('input', throttle(function() {
  const currentState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
}, 500));

form.addEventListener('submit', function(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  const feedbackData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(feedbackData);
  emailInput.value = '';
  messageTextarea.value = '';
});
