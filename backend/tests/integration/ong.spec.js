const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe ('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    } );

    it('Criando uma ong', async () => {
        const response = await request(app).post('/ongs').send({
            name: "testr",
            email: "teste@teste.cpm.br",
            whatsapp: "63988887777",
            city: "Palmas",
            uf: "TO"
        }); 
        
       expect(reponse.body).toHaveProperty('id');
       expect(reponse.body.id).toHaveLength(8);
    });
});