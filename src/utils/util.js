const _ = require('lodash');

module.exports = {
  // Pergunta 1
  pergunta1(accounts) {
    return accounts.reduce((accum, current) => accum + current.balance, 0);
  },
  // Pergunta 2
  pergunta2(accounts) {
    return accounts.filter((account) => account.balance > 100).length;
  },
  // Pergunta 3
  pergunta3(accounts) {
    return accounts.filter(
      (account) => account.balance > 100 && account.agencia === 33,
    ).length;
  },
  // Pergunta 4
  pergunta4(accounts) {
    const group = _.groupBy(accounts, (account) => account.agencia);
    return Object.keys(group)
      .map((key) => ({
        agencia: key,
        value: group[key]
          .reduce((accum, current) => accum + current.balance, 0),
      })).reduce((current, next) => (current.value.balance < next.value.balance ? current : next))
      .agencia;
  },
  // Pergunta 5
  pergunta5(accounts) {
    const group = _.groupBy(accounts, (account) => account.agencia);
    return Object.keys(group)
      .map((key) => ({
        agencia: key,
        value: group[key]
          .reduce((accum, current) => accum + current.balance, 0),
      }))
      .reduce((current, next) => (current.value.balance < next.value.balance ? current : next))
      .agencia;
  },
  // Pergunta 6
  pergunta6(accounts) {
    const group = _.groupBy(accounts, (account) => account.agencia);
    return Object.keys(group)
      .map((key) => ({
        agencia: key,
        value: group[key].reduce((p, v) => (p.balance > v.balance ? p : v)),
      })).reduce((accum, current) => accum + current.value.balance, 0);
  },
  pergunta8(accounts) {
    return accounts.filter((account) => account.agencia === 47).sort((a, b) => {
      if (a.balance > b.balance) {
        return 1;
      }
      if (a.balance < b.balance) {
        return -1;
      }
      return 0;
    })[0].name;
  },
  pergunta9(accounts) {
    return accounts.filter((account) => account.agencia === 47).sort((a, b) => {
      if (a.balance > b.balance) {
        return 1;
      }
      if (a.balance < b.balance) {
        return -1;
      }
      return 0;
    }).slice(0, 3).map((account) => account.name)
      .join(', ');
  },
  pergunta10(accounts) {
    return accounts.filter((account) => account.agencia === 47).length;
  },
  pergunta11(accounts) {
    return accounts.filter((account) => account.name.includes('Maria') && account.agencia === 47).length;
  },
};
