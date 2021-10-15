describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const submitBtn = () => cy.get("button[id='submitBtn']");
    const termsOfService =() => cy.get('input[name=termsOfService')
    const termsOfServiceType =() => cy.get('[type=checkBox]')
    


it('sanity check to make sure tests work', () => {
   // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // strict ===
        expect({}).to.eql({}); // not strict ==
    })  
    it('the proper elements are showing', () => {
        firstNameInput().should('exist');
        termsOfService().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        submitBtn().should('exist');
        
    })


    it('can navigate to the url', () => {
        cy.url().should('include', 'localhost');
    })


    it('submit button starts out disabled', () => {
        submitBtn().should('be.disabled');
    })

    it('can type in the inputs', () => {
        firstNameInput()
            .should('have.value', '')
            .type('Love is love!')
            .should('have.value', 'Love is love!');
            lastNameInput()
            .should('have.value', '')
            .type('May be Not')
            .should('have.value', 'May be Not');
            emailInput()
            .should('have.value', '')
            .type('123@123.com')
            .should('have.value', '123@123.com');
            termsOfServiceType().check() 
    })

})