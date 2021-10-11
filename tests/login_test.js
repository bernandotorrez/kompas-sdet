Feature('Login')

const email = 'mail.bernand@gmail.com';
const password = "B3rnando'";

Scenario('I see Login Page', ({ I }) => {
    goToLoginPage(I);
    I.waitForElement('#email');
});

Scenario('I not fill Email field and Should see Error Message in the Form', ({ I }) => {
    goToLoginPage(I);
    I.fillField('#email', '');
    I.click('#masuk');
    I.see('Email harus diisi');
});

Scenario('I fill invalid Email Format in Email field and Should see Error Message in the form', ({ I }) => {
    goToLoginPage(I);
    I.fillField('#email', 'wrong_email');
    I.click('#daftar');
    I.see('Masukkan format email dengan benar dan valid.');
});

Scenario('I not fill Kata Sandi field and Should see Error Message in the form', ({ I }) => {
    goToLoginPage(I);
    I.fillField('#email', 'mail.bernand@gmail.com');
    I.fillField('#password', '');
    I.click('#daftar');
    I.see('Kata sandi harus diisi');
});

goToLoginPage = (I) => {
    I.amOnPage('https://account.kompas.id/login');
}