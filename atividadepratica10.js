// Definição da classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

// Definição da classe Gerente, que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento ${this.departamento}.`;
    }
}

// Definição da classe Desenvolvedor, que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Criando instâncias de Gerente e Desenvolvedor
const gerente = new Gerente("Maria", 40, "Gerente", "TI");
const desenvolvedor = new Desenvolvedor("João", 30, "Desenvolvedor", "JavaScript");

// Chamando métodos dos funcionários
console.log(gerente.seApresentar());
console.log(gerente.trabalhar());
console.log(gerente.gerenciar());

console.log(desenvolvedor.seApresentar());
console.log(desenvolvedor.trabalhar());
console.log(desenvolvedor.programar());
