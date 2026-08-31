describe('Gerenciamento de perfis no github', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve poder cadastrar um novo perfil do github', () => {
        cy.get('#name').type('Felipe Sousa')
        cy.get('#username').type('felipeDEV')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Felipe Sousa')
        cy.get('#username').type('felipesousa1997')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'felipesousa1997')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('td', 'Felipe Sousa')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('td', 'QA')
            .should('be.visible')

    })

    it('Deve poder remover um perfil do github', () => {

        const profile = {
            name: 'Felipe Sousa',
            username: 'felipeDEV',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')
        
        cy.get('@trProfile')
            .find('button[title="Remover perfil"]')
            .click()

        cy.contains('table tbody', profile.username)
            .should('not.exist')

    })

    it('Deve validar o link do github', () => {

        const profile = {
            name: 'Felipe Sousa',
            username: 'felipesousa1997',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')
        
        cy.get('@trProfile')
            .find('a')
            .should('have.attr', 'href', 'https://github.com/' + profile.username)
            .and('have.attr', 'target', '_blank')

    })
})