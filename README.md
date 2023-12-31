# API em AdonisJs - Monitoramento de paineis solares
**Solar View**

<img alt="Static Badge" src="https://img.shields.io/badge/Working-green?label=Status">

Um projeto simples que automatiza a coleta de informações do SolarView e as armazena em um banco de dados acessível para consulta por serviços terceiros. Este projeto visa simplificar a obtenção e o compartilhamento de dados. Facilitando automações e monitoramento dos equipamentos.

## Importante

### Criação das variáveis de ambiente

1. **Crie um arquivo `.env`**: Siga o exemplo do `.env.example`.

2. **Obter o TOKEN de acesso**:
  - Acesse a página do my.solarview: https://my.solarview.com.br/login
  - Na página de login, abra as **Ferramentas de Desenvolvedor** do seu navegador (normalmente pressionando F12 ou clicando com o botão direito e selecionando **"Inspecionar"**).
  - Na aba **"Network"** das Ferramentas de Desenvolvedor, certifique-se de que a opção "Preserve log" (ou **"Preserve log upon navigation"** dependendo do navegador) esteja ativada.
  - Insira seu nome de usuário e senha e clique em **"Login"**.
  -  Após o login, você verá várias solicitações na aba **"Network"**. Procure a solicitação que corresponde a `https://api-v2.solarview.com.br/api/auth/login` e clique nela.
  -  Na seção **"Headers"** (cabeçalhos) da solicitação, você encontrará um cabeçalho com o valor do **TOKEN**. Será semelhante a isso:
  
  ```
  {
    email: "seu@email.com"
    password: "suaSenha"
    token: "03ADU..."
 }
  ```
  - Copie o `token`, e adicione-o ao campo `TOKEN` em seu arquivo `.env`.

### Criando um Banco de Dados SQLite (se você pretende usar o SQLite)

1. Navegue até a **raiz** do seu projeto.

2. Dentro da raiz do projeto, **crie** uma pasta chamada `tmp` se ela ainda não existir.

3. Agora, dentro da pasta `tmp`, **crie** um arquivo chamado `db.sqlite3`.

### Iniciando ambiente

1. Instale as dependências:
```bash
npm install
```

2. Execute as migrações:
```bash
node ace migration:run
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Seu servidor estará disponível em [http://localhost:3333](http://localhost:3333).

### Alterando tempo de execução

1. Abra o arquivo ``app/Tasks/GetInfoSolarPanel.ts`` no seu editor de código.

2. Localize o método schedule no arquivo. Ele deve se parecer com o seguinte.

```typescript
public static get schedule() {
  return '0 0 * * * *'; // Sempre que os segundos e minutos forem 0, ou seja a cada hora
}
```

3. Altere o valor retornado no método `schedule` para refletir o novo horário de execução desejado. Certifique-se de seguir o formato cron fornecido.

Estrutura
```
*    *    *    *    *    *
-    -    -    -    -    -
¦    ¦    ¦    ¦    ¦    ¦
¦    ¦    ¦    ¦    ¦    + day of week (0 - 7) (0 or 7 is Sun)
¦    ¦    ¦    ¦    +----- month (1 - 12)
¦    ¦    ¦    +---------- day of month (1 - 31)
¦    ¦    +--------------- hour (0 - 23)
¦    +-------------------- minute (0 - 59)
+------------------------- second (0 - 59, OPTIONAL)
```

## Rotas

Retorna **todas** a informações armazenadas:
<pre><strong>GET </strong><span>/all</span></pre>

Retorna apenas o **último** registro:
<pre><strong>GET </strong><span>/last</span></pre>

Retorna apenas registros dos **dia**:
<pre><strong>GET </strong><span>/today</span></pre>

##
Created by **Thiago Sartorel** on **01/09/2023**.
