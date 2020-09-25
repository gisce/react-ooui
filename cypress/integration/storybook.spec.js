
describe('Storybook', {
  baseUrl: 'http://localhost:6006/',
}, () => {
  it('button is clickable', () => {
    cy.visit('/?path=/docs/components-atoms-button--default');
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      const doc = $iframe.contents();
      iget(doc, "#story--components-atoms-button--default > button").click();
      //iget(doc, "#root > div > div:nth-child(2) > div > a").should('have.text', "Show Info");
    });
  });
});

function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}
