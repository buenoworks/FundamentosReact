import React from "react";
import produtos from "../../data/produtos"

import "./TabelaProdutos.css"

export default props => {
    const prod = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <table cellSpacing={0} cellPadding={0} width={{width: '100%'}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome do produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {prod}
            </tbody>
        </table>
    )
}