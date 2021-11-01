# Zeetl

An ETL for ZEE. Run in it Docker or import it as a Node libary.

## Requirements

-   Postgres
-   Node 16.x or Docker

## Run in Docker

The ETL can be started with Docker. Its config is set exclusively via environment variables. The following table dictates options and requirements.

| Environment Variable |              Description               |  Default  | Required |
| :------------------: | :------------------------------------: | :-------: | :------: |
|  STAKING_PROGRAM_ID  | The address of the ZEE staking program |     -     |   true   |
|      SOLANA_URL      |       URL of the Solana RPC API        |     -     |   true   |
|  POSTGRES_PASSWORD   |           Postgres password            |     -     |   true   |
|    POSTGRES_USER     |             Postgres user              |   admin   |  false   |
|    POSTGRES_HOST     |             Postgres host              | localhost |  false   |
|    POSTGRES_PORT     |             Postgres port              |   5432    |  false   |
|  POSTGRES_DATABASE   |           Postgres database            |  zee-etl  |  false   |
|  SOLANA_RATE_LIMIT   |  Min time between API requests in ms   |    250    |  false   |
|       LOG_LVL        |             The log level              |   info    |  false   |
|      LOG_SILENT      |           Set logs to silent           |   false   |  false   |

The easiest way to pass environment variables is to create a `.env` file containing your configuration. Here is an example:

```
POSTGRES_PASSWORD=dummy
SOLANA_URL=https://api.devnet.solana.com
SOLANA_RATE_LIMIT=250
STAKING_PROGRAM_ID=7vo1tfi7A7DfLi5viwb1eNwv9WUuphV2QS3TNv1nPUo5
```

Next, migrate the database schema.

```bash
// Insert the correct version.
docker run --rm --network host --env-file .env ormembaar/zeetl:VERSION bin/migrate
```

Finally, start the ETL.

```bash
// Again, insert the version
docker run -d --network host --env-file .env --name=zeetl ormembaar/zeetl:VERSION
```

## Import as library

The ETL can also be used as a library.

```typescript
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const etl = new ETL({
    connection,
    postgresURL: 'postgres://...',
    stakeProgramId: '7vo1tfi7A7DfLi5viwb1eNwv9WUuphV2QS3TNv1nPUo5',
    rateLimit: 250
});
etl.on('error', (err) => log.error('ETL error', err));
etl.start();
```

Then you can query the database directly via the Prisma client embedded in the ETL.

```typescript
const foo = await etl.client.stakeInitInstruction.findFirst();
console.log(foo);
/*
{
  id: 1,
  signatureId: 4,
  payer: 'FuGYQLy3jPhdUvRiAMtz71TdXwSdEVuV8xHq2XDPBAE6',
  staker: '5hWFiih4FNjGBJghozv1ZYBh4nEXyTNoCHSJgW1gg2Nj',
  stakerFund: 'BvQM3N9fw7bodh7eAjEvrmBeGkazi9wbQKHgMyEQpPGK',
  stakerBeneficiary: 'AKdjvmGqwbPQg3AtZeEzZ7fPHuDjRnXAWbznU2YzfHmt',
  communityAccount: 'ALismzdo2CZk96rAq9VMwCfRcHzhfCaA8JmjiJvc4UC',
  stakeAccount: 'BqRvpXgiT7svyn9Y83Ss6gqKkBcTECgLg7AtqnXFcFbX',
  zeeTokenMint: 'E3iGfQ6AdPLT2Q39JMNKnC78hEvoNTgqCmt7dydSAzpc'
}
*/
```

See the [Prisma docs](https://www.prisma.io/docs/concepts/components/prisma-client) for help using the client. The client is generated from `prisma/schema.prisma`, which should be used for reference.
