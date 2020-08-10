import {Cliente} from './Cliente.js';
import {Gerente} from './Funcionarios/Gerente.js'
import {Diretor} from './Funcionarios/Diretor.js'
import { SistemaAutenticacao } from './Funcionarios/SistemaAutenticacao.js';

const diretor = new Diretor(
    "Rodrigo Souza",
    "123.456.789-10",
    10000
);

const gerente = new Gerente(
    "Renato Almeida",
    "987.457.254-12",
    5000
);

const cliente = new Cliente(
    "Rafael risalte",
    "123.456.789-10",
    "123456"
)

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);




