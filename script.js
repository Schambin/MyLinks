function toggle() {
  // Pegandoo elemento HTML no index
  const html = document.documentElement
  html.classList.toggle("light") // faz todo o codigo abaixo mas em 1 linha
  // se a lista de classe HTML conter 'light'
  // if (html.classList.contains("light")) {
  //   remover a str light
  //   html.classList.remove("light");
  // } else {
  //   caso contrario adicionar a str 'light'
  //   html.classList.add("light");
  // }
}