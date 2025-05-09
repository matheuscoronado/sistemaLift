# 🚀 Desafio Técnico - Lift | Processo Seletivo

Este projeto foi desenvolvido como parte do processo seletivo para a empresa **Lift**. O objetivo foi consumir uma API REST fornecida pela empresa, listar os pedidos disponíveis e exibir os detalhes de um pedido selecionado, utilizando tecnologias web (HTML, CSS e JavaScript puro).

---

## ⚙️ Status do Projeto

> **Em Desenvolvimento**  
> Algumas funcionalidades estão parcialmente implementadas, como a exibição de detalhes completos dos pedidos.  
> O sistema já consegue listar pedidos e exibir a estrutura da interface, mas ajustes finais estão sendo realizados para corrigir dados indefinidos e garantir a exibição correta de todos os detalhes.

---

## 🎯 Objetivo do Projeto

- ✅ **Listar pedidos** retornados pela API.
- ⚠️ **Exibir detalhes de um pedido selecionado** (em progresso):
  - Informações do cliente (parcialmente exibidas).
  - Lista de produtos do pedido (com falhas em alguns dados).
  - Quantidade, valor unitário e valor total (valores inconsistentes em alguns casos).
- ✅ Apresentar os dados de forma organizada e responsiva.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da interface.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript (ES6+)**: Lógica de consumo da API e manipulação do DOM.

---

## 🗂️ Estrutura de Pastas

- `index.html`: Página principal da aplicação.
- `style.css`: Estilos gerais da aplicação.
- `script.js`: Código JavaScript responsável pelas requisições e lógica.
- `README.md`: Este arquivo de instruções.

---

## 🔗 API Lift

A base da API fornecida é:

`https://sistemalift1.com.br/lift_ps/api/`

### Endpoints Utilizados:

- `GET /Pedidos` → Lista todos os pedidos.
- `GET /Pedidos/{id}` → Detalhes de um pedido.
- `GET /Clientes/{id}` → Detalhes do cliente.
- `GET /ItensPedido/{pedido}` → Itens de um pedido.
- `GET /Produtos/{id}` → Detalhes de um produto.

---

## 🖥️ Como Executar o Projeto

### 🔧 Requisitos:

- Um navegador moderno (Chrome, Edge, Firefox).
- Conexão com a internet (para acessar a API da Lift).

### 📌 Passo a Passo:

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/matheuscoronado/sistemaLift
   ```

2. **Abra o arquivo `index.html` diretamente no navegador**:
   - Clique duas vezes no arquivo `index.html` ou
   - Clique com o botão direito > "Abrir com" > Navegador.

3. **Interaja com a interface**:
   - A lista de pedidos será carregada automaticamente.
   - Clique em qualquer pedido para visualizar seus detalhes.

---

## 📷 Capturas de Tela

### Lista de Pedidos
![Lista de Pedidos](image.png)

### Detalhes do Pedido
![Detalhes do Pedido](image-1.png)

A interface foi projetada para ser limpa, intuitiva e responsiva, garantindo uma boa experiência para o usuário.

---

## 📌 Diferenciais Implementados

- **Interface limpa e intuitiva**: Design simples e funcional, com foco na usabilidade.
- **Separação clara entre lista de pedidos e detalhes**: Organização visual para facilitar a navegação.
- **Consumo eficiente da API**: Utilização de `async/await` para garantir requisições assíncronas e fluídas.

---

## 📋 Melhorias Planejadas

- **Correção de dados indefinidos**: Garantir que todas as informações (cliente, produtos, valores) sejam exibidas corretamente.
- **Tratamento de erros**: Implementar mensagens de erro amigáveis para o usuário em caso de falhas na API.
- **Validação de dados**: Garantir que valores nulos ou inconsistentes sejam tratados adequadamente.
- **Otimização de requisições**: Reduzir o número de chamadas à API utilizando cache local.

---

## 🧑‍💻 Autor

**Matheus Henrique Coronado Elias**  
Estudante de Análise e Desenvolvimento de Sistemas  

- **E-mail**: [matheuscoronado48@gmail.com](mailto:matheuscoronado48@gmail.com)  
- **GitHub**: [https://github.com/matheuscoronado](https://github.com/matheuscoronado)

---

📨 **Entrega Final**  
O código está em desenvolvimento, com as funcionalidades principais estruturadas e interface implementada. Ajustes finais e tratamento de erros estão sendo realizados para garantir a exibição correta de todos os dados da API.

✅ **Obrigado pela oportunidade!**