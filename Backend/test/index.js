//sample test
//Para rodar os testes, use: npm test
//PS: Os testes não estão completos e alguns podem conter erros.

// veja mais infos em:
//https://mochajs.org/
//https://www.chaijs.com/
//https://www.chaijs.com/plugins/chai-json-schema/
//https://developer.mozilla.org/pt-PT/docs/Web/HTTP/Status (http codes)



import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiJson from 'chai-json-schema';
import { get } from 'http';
import { PORT } from '../src/app.js';

var app = `http://localhost:${PORT}`

console.log(app)

chai.use(chaiHttp);
chai.use(chaiJson);

const expect = chai.expect;


//Define o minimo de campos que o usuário deve ter. Geralmente deve ser colocado em um arquivo separado
const userSchema = {
    title: "Schema do Usuario, define como é o usuario, linha 24 do teste",
    type: "object",
    required: ['id','nome', 'email', 'idade'],
    properties: {
        id: {
            type: 'string'
        },
        nome: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        idade: {
            type: 'number',
            minimum: 18
        }
    }
}

//Inicio dos testes

//este teste é simplesmente pra enteder a usar o mocha/chai
describe('Um simples conjunto de testes', function () {
    it('deveria retornar -1 quando o valor não esta presente', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
});

//testes da aplicação
describe('Testes da aplicaçao',  () => {
    it('o servidor esta online', function (done) {
        chai.request(app)
        .get('/')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
        });
    });

    it('deveria ser uma lista vazia de usuarios', function (done) {
        chai.request(app)
        .get('/users/empty')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.rows).to.eql([]);
        done();
        });
    });

    it('deveria criar o usuario raupp', function (done) {
        chai.request(app)
        .post('/signup')
        .send({nome: "raupp", email: "jose.raupp@devoz.com.br", idade: 35})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
        });
    });

    it('deveria retornar mensagem de erro ao criar o usuario raupp por ja existir usuário', function (done) {
        chai.request(app)
        .post('/signup')
        .send({nome: "raupp", email: "jose.raupp@devoz.com.br", idade: 35})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(409);
            expect(res.body.error).to.be.equal("Este email ja está cadastrado")
            done();
        });
    });
    
    it('deveria impedir de criar o usuario Donnald por causa da idade', function (done) {
        chai.request(app)
        .post('/signup')
        .send({nome: "Donnald", email: "duck@devoz.com.br", idade: 10})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(403);
            expect(res.body.error).to.be.equal("Necessário ter no mínimo 18 anos para se cadastrar")
            done();
        });
    });

    it('o usuario naoExiste não existe no sistema', function (done) {
        chai.request(app)
        .get('/user/naoExiste')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res.body.error).to.be.equal('User not found'); //possivelmente forma errada de verificar a mensagem de erro
            expect(res).to.have.status(404);
            done();
        });
    });

    it('o usuario raupp existe e é valido', function (done) {
        chai.request(app)
        .get('/user/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(userSchema);
            done();
        });
    });

    it('as informações do usuário mudaram', function (done) {
        // O teste deve sempre retornar exatamente os dados de 'newNome','newEmail' e 'newIdade'

        const newNome = 'Maria'
        const newEmail = 'Maria20@devoz.com.br'
        const newIdade = 25
        
        chai.request(app)
        .put('/update')
        .send({id: 'dc797a55-cc99-4439-b2f4-d2a025a6b673' ,nome: newNome, email: newEmail, idade: newIdade})
        .end(function (err, res){
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.nome).to.be.equal(newNome)
            expect(res.body.email).to.be.equal(newEmail)
            expect(res.body.idade).to.be.equal(newIdade)
            done();
        })
    });

    it('deveria excluir o usuario raupp', function (done) {
        chai.request(app)
        .delete('/del/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(userSchema);
            done();
        });
    });

    it('o usuario raupp não deve existir mais no sistema', function (done) {
        chai.request(app)
        .get('/user/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
        });
    });

    it('deveria ser uma lista com pelomenos 5 usuarios', function (done) {
        chai.request(app)
        .get('/users/all')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.total).to.be.at.least(5);
        done();
        });
    });
})