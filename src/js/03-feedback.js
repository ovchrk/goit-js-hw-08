import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');

formRef.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {
  evt.preventDefault();
  console.log({ email: emailRef.value, message: messageRef.value });

  evt.currentTarget.reset();
  localStorage.clear();
}

formRef.addEventListener('input', throttle(onForm, 500));

function onForm() {
  const formData = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getCurrentValuesOnForm() {
  const localStorageData = localStorage.getItem(STORAGE_KEY);
  if (localStorageData) {
    const currentData = JSON.parse(localStorageData);
    emailRef.value = currentData.email;
    messageRef.value = currentData.message;
  }
}

getCurrentValuesOnForm();
