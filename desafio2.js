/* Pedir um numero ao usuario */
let num = parseInt(prompt("Digite um número"));

/*Fazer a contagem até 99 */
for (i = num; i <= 99; i++) 
{
  /*Fazer a validação dos multiplos de 3 e aparecer super */
  /*ENCONTREI O BUG QUE ESTA DANDO DURANTE A ENTREVISTA, AO INVERTER E VALIDAR OS MULTIPLOS JUNTOS AO INVÉS DE SEPARADO*/
  if (i % 3 === 0 && i % 5 === 0) 
  {
    console.log(i + " SuperGeeks");
  } else if (i % 3 === 0) 
  {
    console.log(i + " Super");
  } else if (i % 5 === 0) 
  {
    console.log(i + " Geeks");
  } else {
    console.log(i);
  }
}
