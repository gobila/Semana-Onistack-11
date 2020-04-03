const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/conection')

describe('ONG', ()=>{

    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async ()=>{
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "bla",
                email: "bla@bla.com",
                whatsapp: "62982064577",
                city: "goialandia",
                uf: "GO"
            });
            
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});