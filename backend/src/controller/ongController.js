const generateuniqueId = require('../utils/generateUniqueId');
const connection = require('../database/conection');

module.exports = {
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id =generateuniqueId();

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    //console.log({id})
    
    return response.json({id});
    }
}