describe('i18n check', () => {
  it('Renders frontpage in danish initially and toggles to english', () => {
    cy.setCookie('lang', 'da');
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('lang', 'da');
      },
    });

    cy.get('button[aria-label="Toggle language"]').should('contain.text', 'DA');
    cy.get('h1#who').should('have.text', 'Hvem er jeg?');
    cy.get('h2#about').should('have.text', 'Om mig');
    cy.get('p#me').should('have.text', 'Jeg hedder Nicolai Bo Kunkel, er 25 år gammel, nyuddannet datamatiker og læser videre på 2. semester af min overbygningsprofessionsbachelor i softwareudvikling på Erhvervsakademi København.');
    cy.get('h2#background').should('have.text', 'Uddannelse & Erfaring');
    cy.get('h3#tech').should('have.text', 'Teknologier & Erfaring');
    cy.get('h2#contact').should('have.text', 'Lad os komme i kontakt');

    //English
    cy.get('button[aria-label="Toggle language"]').click();
    cy.get('button[aria-label="Toggle language"]').should('contain.text', 'EN');

    cy.get('h1#who').should('have.text', 'Who am I?');
    cy.get('h2#about').should('have.text', 'About Me');
    cy.get('p#me').should('have.text', 'My name is Nicolai Bo Kunkel, I am 25 years old, a newly graduated Computer Science student, and currently studying my top-up Bachelor\'s degree in Software Development at Copenhagen School of Design and Technology.');
    cy.get('h2#background').should('have.text', 'Education & Experience');
    cy.get('h3#tech').should('have.text', 'Technologies & Experience');
    cy.get('h2#contact').should('have.text', 'Let’s get in touch');
  });

  it('Renders project page in danish initially and toggles to english', () => {
    cy.setCookie('lang', 'da');
    cy.visit('/projects', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('lang', 'da');
      },
    });
    //cy.get('div#header1').should('have.text', 'HjemProjekter');
    //cy.get('div#header1').click();
    cy.get('h1#title').should('have.text', 'Udvalgte Projekter');
    cy.get('p#info').should('have.text', 'Denne side bruges til at dele projekter, som jeg har udvalgt for at fremvise mine færdigheder og erfaringer. Projekterne er en blanding af personlige projekter og eksamensprojekter, som både har været implementeret individuelt og i grupper.Klik på en projekt-titel for at læse mere.');

    //English
    cy.get('button[aria-label="Toggle language"]').click();
    cy.get('button[aria-label="Toggle language"]').should('contain.text', 'EN');
    cy.get('h1#title').should('have.text', 'Selected Projects');
    cy.get('p#info').should('have.text', 'This page showcases a selection of projects that highlight my skills and experience. The projects are a mix of personal and exam projects, implemented both individually and in groups.Click a project title to read more.');
  });
});

