const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('Gerando uma chave', () => {
        const id = generateUniqueId();

        expect('id').toHaveLength('id');
    });
});