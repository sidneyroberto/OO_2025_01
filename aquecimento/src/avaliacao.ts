export function verificarSituacao(media: number) {
  if (media >= 7) {
    return "Aprovado";
  }

  if (media < 4) {
    return "Reprovado";
  }

  return "Recuperação";
}
