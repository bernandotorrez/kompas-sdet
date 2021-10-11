Feature('Login')

const account = require('../account.json');

Scenario('I see Login Page', ({ I }) => {
    goToLoginPage(I);
    I.waitForElement('#email');
});

// Negative Test
Scenario('I not fill Email field and Should see Error Message in the Form', ({ I }) => {
    goToLoginPage(I);
    I.fillField('#email', '');
    I.click('#masuk');
    I.see('Email harus diisi');
});

Scenario('I fill invalid Email Format in Email field and Should see Error Message in the form', ({ I }) => {
    goToLoginPage(I);
    I.fillField('#email', 'wrong_email');
    I.click('#masuk');
    I.see('Masukkan format email yang benar dan valid.');
});

Scenario('I not fill Kata Sandi field and Should see Error Message in the form', ({ I }) => {
    goToLoginPage(I);
    I.fillField('#email', 'mail.bernand@gmail.com');
    I.fillField('#password', '');
    I.click('#masuk');
    I.see('Kata sandi harus diisi');
});

Scenario('I should cant Login when i fill wrong Credential', ({ I }) => {
    goToLoginPage(I);
    I.fillField('#email', 'wrong_email@gmail.com');
    I.fillField('#password', 'wrong_password');
    I.click('#masuk');
    I.see('Maaf, email atau kata sandi Anda salah.');
})

// Positive Test
Scenario('I should can Login when i fill Correct Credential', ({ I }) => {
    goToLoginPage(I);
    I.fillField('#email', account.username);
    I.fillField('#password', account.password);
    I.click('#masuk');
    I.waitUrlEquals('https://www.kompas.id');
})

goToLoginPage = (I) => {
    I.amOnPage('https://account.kompas.id/login');
}