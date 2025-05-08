// Definindo a URL base da API
const API_BASE = "https://sistemalift1.com.br/lift_ps/api/";

// Função para fazer a requisição e retornar o conteúdo em formato JSON
async function fetchJson(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`); // Faz a requisição para a URL da API
  return await res.json();
}

// Função para carregar os pedidos da API
async function carregarPedidos() {
  const pedidos = await fetchJson("Pedidos");   // Faz uma requisição para buscar todos os pedidos
  const tbody = document.getElementById("pedidos-body");

  // Para cada pedido, busca o cliente e os itens do pedido
  for (let pedido of pedidos) {
    const cliente = await fetchJson(`Clientes/${pedido.cliente}`); 
    const itens = await fetchJson(`ItensPedido/${pedido.id}`); 

    let total = 0;

    // Para cada item do pedido, calcula o valor total
    for (let item of itens) {
      const produto = await fetchJson(`Produtos/${item.id_produto}`); 

      // Calcula o valor do item (quantidade * valor unitário)
      const valorUnitario = Number(produto?.valor ?? 0); 
      const quantidade = Number(item?.quantidade ?? 0); 
      const valorItem = valorUnitario * quantidade; 
      total += valorItem; 
    }

    // Cria uma linha da tabela com as informações do pedido
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pedido.id}</td>
      <td>${cliente.nome}</td>
      <td>${pedido.data}</td>
      <td>R$ ${total.toFixed(2)}</td>
    `;
    
    // Adiciona um evento para mostrar os detalhes do pedido quando clicado
    tr.addEventListener("click", () => mostrarDetalhesPedido(pedido, cliente, itens));
    
    // Adiciona a linha à tabela de pedidos
    tbody.appendChild(tr);
  }
} 

