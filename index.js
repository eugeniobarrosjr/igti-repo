const api = require('./src/services/api');
const util = require('./src/utils/util');

api.fetchAccounts().then((accounts) => {
  console.log('Resposta 1:', util.pergunta1(accounts));
  console.log('Resposta 2:', util.pergunta2(accounts));
  console.log('Resposta 3:', util.pergunta3(accounts));
  console.log('Resposta 4:', util.pergunta4(accounts));
  console.log('Resposta 5:', util.pergunta5(accounts));
  console.log('Resposta 6:', util.pergunta6(accounts));
  console.log('Resposta 8:', util.pergunta8(accounts));
  console.log('Resposta 9:', util.pergunta9(accounts));
  console.log('Resposta 10:', util.pergunta10(accounts));
  console.log('Resposta 11:', util.pergunta11(accounts));
});
