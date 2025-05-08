// Definindo a URL base da API
const API_BASE = "https://sistemalift1.com.br/lift_ps/api/";

// Função para fazer a requisição e retornar o conteúdo em formato JSON
async function fetchJson(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`); // Faz a requisição para a URL da API
  return await res.json();
}
