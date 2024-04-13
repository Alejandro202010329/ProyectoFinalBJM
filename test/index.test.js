const chai = require('chai');
const assert = chai.assert;

describe('Página web "Hola Mundo"', () => {
    it('debe mostrar el título "Hola Mundo"', () => {
        const contenido = fs.readFileSync('index.html', 'utf-8');
        assert.include(contenido, '<title>Hola Mundo</title>');
    });
});