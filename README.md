# Projeto AdonisJs - Monitoramento de Painel Solar Uniplac

Este é um projeto simples que combina o framework Laravel no backend e o Vue.js no frontend para criar um CRUD (Create, Read, Update, Delete) de endereços.

## Alterando tempo de execução

1. Abra o arquivo ``app/Tasks/GetInfoSolarPanel.ts`` no seu editor de código.

2. Localize o método schedule no arquivo. Ele deve se parecer com o seguinte.

```typescript
public static get schedule() {
  return '0 0 * * * *';
}
```

3. Altere o valor retornado no método schedule para refletir o novo horário de execução desejado. Certifique-se de seguir o formato cron fornecido.

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

Created by Thiago Sartorel on 01/09/2023.