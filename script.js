let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    alert(produto + " foi adicionado ao carrinho!");
}

function mostrarCarrinho() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
    } else {
        alert("Itens no carrinho:\n- " + carrinho.join("\n- "));
    }
}
