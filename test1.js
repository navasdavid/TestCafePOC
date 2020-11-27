import { Selector } from 'testcafe';


fixture `Getting Started`
    .page `http://qustodio.com/`;


test('submit fake name', async t => {
    
    
    const link = Selector('a')
    .withAttribute('href', 'https://family.qustodio.com?locale=en');

    const userField = Selector('input')
    .withAttribute('name', 'email');

    const passwordField = Selector('input')
    .withAttribute('name', 'password');
      
    await t
        .click('.b-user-nav__login-btn')
        .click('#site-header > div > div.b-header__right.hidden-xs.hidden-sm > div > div.b-user-nav__section.b-user-nav__login > div > div > ul > li:nth-child(1) > a')
        .typeText(userField, 'david.navas@qustodio.com')
        .typeText(passwordField, '123456')
        .click('#login_button')
        .expect(Selector('.Header__title').innerText).eql('Your Family');
});


