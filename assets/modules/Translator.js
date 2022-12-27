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

// Auto translation
$(function() { 
  Translator()

  let keys = [
    'initialpage_newgame', 
    'initialpage_copyright',
    'cap1_title',
    'cap1_desc1',
    'cap1_start',
  ]

  keys.forEach(function(key){
    $(`#${key}`).html(lang[key])
  })
})

// ---------- en-US ----------
enus = {
  // Initial page
  'initialpage_newgame': `Start adventure`,
  'initialpage_copyright': `TTI Softwares - All rights reserved`,

  // Capítulo 1
  'cap1_title': `Welcome to ARK Civilization`,
  'cap1_desc1': `This game will bring you a progress of evolution and combat based on an evolution of several centuries. Will you evolve from your character, your house, village, or maybe an entire kingdom? Several adventures await you in this story, are you ready to continue?`,
  'cap1_start': `I'm ready!`
}

// ---------- pt-BR ----------
ptbr = {
  // Página inicial
  'initialpage_newgame': `Começar aventura`,
  'initialpage_copyright': `TTI Softwares - Todos os direitos reservados`,

  // Capítulo 1
  'cap1_title': `Seja bem vindo(a) a ARK Civilization`,
  'cap1_desc1': `Este jogo vai trazer a você um progresso de evolução e combate baseado em uma evolução de varios séculos. Você vai evoluir desde seu personagem, sua casa, vila, ou quem sabe todo um reino? Varias aventuras lhe aguardam nessa história, você está pronto(a) para continuar?`,
  'cap1_start': `Estou pronto(a)!`
}