class Funcionario{
    constructor(nome, idade, cargo){
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar(){
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
  
    trabalhar(){
      console.log(`${this.nome} está trabalhando.`);
    }
  }
  
  class Gerente extends Funcionario{
    constructor(nome, idade, departamento){
      super(nome, idade, 'Gerente');
      this.departamento = departamento;
    }
  
    gerenciar(){
      console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);
    }
  }
  
  class Desenvolvedor extends Funcionario{
    constructor(nome, idade, linguagem){
      super(nome, idade, 'Desenvolvedor');
      this.linguagem = linguagem;
    }
  
    programar(){
      console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
  }
  
  const gerente1 = new Gerente('Arthur', 28, 'TI');
  const desenvolvedor1 = new Desenvolvedor('Maria', 28, 'JavaScript');
  
  gerente1.seApresentar();
  gerente1.gerenciar();
  
  desenvolvedor1.seApresentar();
  desenvolvedor1.programar();