describe('Message Delivery Test', () => {
  it('Sends a message from user website', () => {
      cy.visit('https://kavya72098bc3.multiscreensite.com/');
      cy.get('div[aria-label="Open Chatway Messenger"]').click();
      cy.get('.user-input').type('Hello, I need help');
      cy.get('.#dmRoot').click();
      cy.wait(2000);
      cy.contains('.agent-sent', 'Hello, I need help').should('exist');
  })


  it('Sends a message from agent side', () => {
      cy.visit('https://go.chatway.app/code');
      cy.get('input[name="username"]').type('kavyakc.1404@gmail.com');
      cy.get('input[name="password"]').type('kav1234');
      cy.get('button[type="submit"]').click();
      cy.get('.chat--list-item.is-active').click();
      cy.get('.agent-input').type('Hey, how can i help you');
      cy.get('.#dmRoot').click();
      cy.wait(2000); 
      cy.conatins('.user-sent', 'Hey, how can i help you').should('exist');
  

  });
});