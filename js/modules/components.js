/** Main */
const Desktop = document 

/**  Área de trabalho */
export const main = Desktop.getElementById('desk') 

/**  Tela de bloqueio */
export const screenBlock = Desktop.getElementById('bloqueio') 

/** Container principal - Tela de bloqueio */
export const screenBlockContainer = Desktop.getElementById('bloqueio-container') 

/** Imagem de fundo - Tela de bloqueio */
export const screenBlockBackground = Desktop.getElementById('bloqueio-background') 

/** Camada de recepção - Tela de bloqueio */
export const screenBlockBootLayer = Desktop.getElementById('bloqueio-layer-1') 

/** Camada de conta do usuário - Tela de bloqueio */
export const screenBlockPasswordLayer = Desktop.getElementById('bloqueio-layer-2') 

/** Barra de tarefas */
export const desktopFooter = Desktop.getElementById('taskbar') 


export { Desktop as default }