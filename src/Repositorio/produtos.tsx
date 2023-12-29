import { Produtos } from "../Interfaces"

export function ListaProdutos() {
    var dataAtual = new Date();
    const listaProduto: Produtos[] =
        [
            { codigo: 2, nome: "TV", valor: 20.00, data: new Date(dataAtual.setDate(-6) + dataAtual.setHours(-3)) },
            { codigo: 1, nome: "Camiseta", valor: 10.00, data: new Date(dataAtual.setDate(-6) + dataAtual.setHours(-3)) },
            { codigo: 3, nome: "Chocolate", valor: 30.00, data: new Date(dataAtual.setDate(-5) + dataAtual.setHours(-2)) },
            { codigo: 4, nome: "Feijão", valor: 40.10, data: new Date(dataAtual.setDate(-5) + dataAtual.setHours(-2)) },
            { codigo: 4, nome: "Biscoito", valor: 50.40, data: new Date(dataAtual.setDate(-5) + dataAtual.setHours(-4)) },
            { codigo: 5, nome: "Arroz", valor: 60.00, data: new Date(dataAtual.setDate(-2) + dataAtual.setHours(-5)) },
            { codigo: 6, nome: "Refrigerante", valor: 70.00, data: new Date(dataAtual.setDate(-2) + dataAtual.setHours(-4)) },
            { codigo: 6, nome: "Arroz", valor: 80.00, data: new Date(dataAtual.setDate(-2) + dataAtual.setHours(-3)) },
            { codigo: 7, nome: "Banana", valor: 90.52, data: new Date(dataAtual.setHours(-4)) },
            { codigo: 8, nome: "Doce de leite", valor: 0.0, data: new Date(dataAtual.setHours(-3)) },
            { codigo: 9, nome: "Feijão", valor: 10.00, data: new Date(dataAtual.setHours(-3)) },
            { codigo: 10, nome: "Chocolate", valor: 10.20, data: new Date(dataAtual.setHours(-2)) },
            { codigo: 9, nome: "Chocolate", valor: 10.15, data: new Date(dataAtual.setHours(-1)) },
            { codigo: 10, nome: "Cafe", valor: 9.99, data: new Date(dataAtual.setHours(-3)) }
        ]

    return listaProduto;
} 