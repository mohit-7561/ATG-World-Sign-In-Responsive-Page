document.addEventListener('DOMContentLoaded', function() {
  const signInBtn = document.getElementById('signInBtn');
  const loginModal = document.getElementById('loginModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const createAccountBtn = document.getElementById('createAccountBtn');
  const createAccountModal = document.getElementById('createAccountModal');
  const createAccountClose = document.querySelector('#createAccountModal .create-account-close');
  const freeText = document.getElementById('freeText');
  const headerLinks = document.getElementById('headerLinks');

  freeText.addEventListener('click', function() {
    headerLinks.classList.toggle('show-buttons');
  });

  signInBtn.addEventListener('click', function() {
    loginModal.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  createAccountBtn.addEventListener('click', function() {
    createAccountModal.style.display = 'flex';
  });

  createAccountClose.addEventListener('click', function() {
    createAccountModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === createAccountModal) {
      createAccountModal.style.display = 'none';
    }
  });
});
