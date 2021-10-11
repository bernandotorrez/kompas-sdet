Feature('Register');

Scenario('I See Register Page', ({ I }) => {
    I.amOnPage('https://account.kompas.id/register');
    I.waitForElement('#firstName')
});

// Negative Test
// Scenario('I not fill Nama Depan field and Should see Error Message in the form', ({ I }) => {
//     goToRegisterPage(I);
//     I.fillField('#firstName', '');
//     I.click('#daftar');
//     I.see('Nama depan harus diisi.');
// });

// Scenario('I not fill Email field and Should see Error Message in the form', ({ I }) => {
//     goToRegisterPage(I);
//     I.fillField('#firstName', 'Bernand');
//     I.fillField('#email', '');
//     I.click('#daftar');
//     I.see('Email harus diisi.');
// });

// Scenario('I fill invalid Email Format in Email field and Should see Error Message in the form', ({ I }) => {
//     goToRegisterPage(I);
//     I.fillField('#firstName', 'Bernand');
//     I.fillField('#email', 'wrong_email');
//     I.click('#daftar');
//     I.see('Masukkan format email dengan benar dan valid.');
// });

// Scenario('I not fill Kata Sandi field and Should see Error Message in the form', ({ I }) => {
//     goToRegisterPage(I);
//     I.fillField('#firstName', 'Bernand');
//     I.fillField('#email', 'mail.bernand@gmail.com');
//     I.fillField('#password', '');
//     I.click('#daftar');
//     I.see('Kata sandi harus diisi');
// });

// Scenario('I fill weak Kata Sandi field and Should see Error Message in the form', ({ I }) => {
//     goToRegisterPage(I);
//     I.fillField('#firstName', 'Bernand');
//     I.fillField('#email', 'mail.bernand@gmail.com');
//     I.fillField('#password', 'abc');
//     I.click('#daftar');
//     I.see('Kata sandi lemah. Diwajibkan menggunakan minimal 6 karakter dengan kombinasi huruf dan angka.');
// });

// Scenario('I not solve ReCAPTCHA and Should see Error Message in the form', ({ I }) => {
//     goToRegisterPage(I);
//     I.fillField('#firstName', 'Bernand');
//     I.fillField('#email', 'mail.bernand@gmail.com');
//     I.fillField('#password', "B3rnando'");
//     I.click('#daftar');
//     I.see('reCAPTCHA harus dicentang.');
// });

// Scenario('I not fill all field and Should see error Message in the form', ({ I }) => {
//     goToRegisterPage(I);

//     I.click('#daftar');
//     I.see('diisi');
// });

// Positive Test
Scenario('Should Success Registered', async ({ I }) => {
    goToRegisterPage(I);
    I.fillField('#firstName', 'Bernand');
    I.fillField('#email', 'mail.bernand@gmail.com');
    I.fillField('#password', "B3rnando'");
    I.scrollPageToBottom()
    //I.waitForElement('.rc-anchor-content .rc-inline-block .rc-anchor-center-container .rc-anchor-center-item rc-anchor-checkbox-holder', 60*5)
    I.click('#daftar');
});

goToRegisterPage = (I) => {
    I.amOnPage('https://account.kompas.id/register');
};