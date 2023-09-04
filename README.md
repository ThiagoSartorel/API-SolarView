# Projeto AdonisJs - Monitoramento de Painel Solar Uniplac 
<img alt="Static Badge" src="https://img.shields.io/badge/Working-green?label=Status">

Um projeto simples que busca informações dentro do solarview e salva em um banco de dados e deixa livre para consulta de serviços terceiros.

## Importante

### Criação das variáves de ambiente

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

##
Created by **Thiago Sartorel** on **01/09/2023**.
