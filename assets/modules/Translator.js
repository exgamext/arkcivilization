// Translator constructor
function Translator() {
  let language = navigator.language || navigator.userLanguage

  // Languages support
  if (language == 'en-US') {
    lang = enus
  }
  if (language == 'pt-BR') {
    lang = ptbr
  }
}

// Translation
$(function() { 
  Translator()
  // Initial page
  $('#initialpage_newgame').html(lang.initialpage_newgame)
  $('#initialpage_copyright').html(lang.initialpage_copyright)
})

// ---------- en-US ----------
enus = {
  // Initial page
  'initialpage_newgame': 'Comming soon',
  'initialpage_copyright': 'TTI Softwares - All rights reserved',
}

// ---------- pt-BR ----------
ptbr = {
  // Página inicial
  'initialpage_newgame': 'Em breve',
  'initialpage_copyright': 'TTI Softwares - Todos os direitos reservados',
}