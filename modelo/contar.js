function contar() {
  let inicio = getElementById("txtstart");
  let fim = getElementById("txtend");
  let passo = getElementById("txtjmp");
  let res = document.getElementById('res');
  if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.length == 0) {
    window.alert("[ERRO] Não deixe campos vazios!");
  } else {
    res.innerHTML = 'Contando...';
    let i = Number(inicio.value);
    let f = Number(inicio.value);
    let p = Number(passo.value);

    for (let c = i; c <= f; c += p) {
      res.innerHTML += `${c}`;
    }
  }



}
