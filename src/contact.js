export default function createContactPage() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  const headline = document.createElement('div');
  headline.textContent = 'Contact Us';

  const form = document.createElement('form');
  form.setAttribute('action', '');

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('placeholder', 'Your Name');
  nameInput.setAttribute('required', true);

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('placeholder', 'Your Email');

  const messageTextarea = document.createElement('textarea');
  messageTextarea.setAttribute('name', 'message');
  messageTextarea.setAttribute('id', 'message');
  messageTextarea.setAttribute('placeholder', 'Your Message');

  const submitInput = document.createElement('input');
  submitInput.setAttribute('type', 'submit');
  submitInput.setAttribute('value', 'Send Message');
  submitInput.setAttribute('id', 'submit');

  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(messageTextarea);
  form.appendChild(submitInput);

  contactDiv.appendChild(headline);
  contactDiv.appendChild(form);

  return contactDiv;
}
