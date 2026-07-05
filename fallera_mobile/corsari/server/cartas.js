// ============================================================
// LA FALLERA CALAVERA — Cartas oficiales (base + expansión 2)
// Nombres y efectos exactos según traducción oficial zombipaella.com
// ============================================================

// ── Juego BASE únicamente ─────────────────────────────────────
// Copias exactas según el juego original.
// Ingredientes: 2 copias cada uno (8 tipos × 2 = 16 ingredientes)
// → suficientes para que salgan pero sin saturar la mano inicial.
// Cartas únicas (Fallera Calavera, Batalla de Almansa, etc.): 1 copia.

const CARTAS_BASE = [

  // ══════════════════════════════════════════════════════
  // TESOROS — INGREDIENTES
  // ══════════════════════════════════════════════════════
  { id: "bajoqueta",       nombre: "Judía verde",              tipo: "boti_sagrat", icono: "🥦", efecto_texto: "¡Ingrediente! Reúne 5 para ganar.",                                                                                    efecto: null,             copias: 2 },
  { id: "caragol",         nombre: "Caracol baboso",           tipo: "boti_sagrat", icono: "🐌", efecto_texto: "¡Ingrediente! Reúne 5 para ganar.",                                                                                    efecto: null,             copias: 2 },
  { id: "carxofa",         nombre: "Alcachofa",                tipo: "boti_sagrat", icono: "🌿", efecto_texto: "¡Ingrediente! Reúne 5 para ganar.",                                                                                    efecto: null,             copias: 2 },
  { id: "conill",          nombre: "Conejo",                   tipo: "boti_sagrat", icono: "🐇", efecto_texto: "¡Ingrediente! Reúne 5 para ganar. Con el Aeropuerto fantasma en tu mostrador, vale por 2 ingredientes.",               efecto: null,             copias: 2 },
  { id: "cuixa_pollastre", nombre: "Muslo de pollo",           tipo: "boti_sagrat", icono: "🍗", efecto_texto: "¡Ingrediente! Reúne 5 para ganar.",                                                                                    efecto: null,             copias: 2 },
  { id: "garrofons",       nombre: "Habas",                    tipo: "boti_sagrat", icono: "🫘", efecto_texto: "¡Ingrediente! Reúne 5 para ganar.",                                                                                    efecto: null,             copias: 2 },
  { id: "tomaca",          nombre: "Tomate",                   tipo: "boti_sagrat", icono: "🍅", efecto_texto: "¡Ingrediente! Reúne 5 para ganar.",                                                                                    efecto: null,             copias: 2 },
  { id: "cabeça_alls",     nombre: "Cabeza de ajos",           tipo: "boti_sagrat", icono: "🧄", efecto_texto: "¡Ingrediente! En partidas de 5 jugadores vale por 2 ingredientes.",                                                    efecto: "doble_en_5j",    copias: 2 },

  // ══════════════════════════════════════════════════════
  // TESOROS — VENTA
  // ══════════════════════════════════════════════════════
  { id: "sant_calze",      nombre: "Santo cáliz de la catedral", tipo: "boti_mercat", icono: "🏺", efecto_texto: "Descártate para robar cartas: 7 menos el número de ingredientes que tengas (contando este cáliz).",                 efecto: "calze_roba",     copias: 1 },
  { id: "dolçaina",        nombre: "Dulzaina y tambor",           tipo: "boti_mercat", icono: "🎺", efecto_texto: "Descártate para robar 2 cartas. Además, haz otra jugada.",                                                          efecto: "taberna_roba2",  copias: 2 },
  { id: "taronger",        nombre: "Naranjo putrefacto",          tipo: "boti_mercat", icono: "🍊", efecto_texto: "No puedes descartar tesoros para robar cartas. A cambio, roba 1 carta al inicio de tu turno y haz otra jugada.",    efecto: "vaixell_passiu", copias: 1 },
  { id: "allioli",         nombre: "Alioli persistente",          tipo: "boti_mercat", icono: "🧅", efecto_texto: "Si no tienes ningún ingrediente en el mostrador, puedes hacer 2 jugadas por turno.",                                efecto: "cova_passiu",    copias: 1 },
  { id: "tartana_tio_pep", nombre: "La tartana del Tío Pep",     tipo: "boti_mercat", icono: "🛻", efecto_texto: "Siempre que descartes un tesoro para robar cartas, roba 1 carta adicional.",                                         efecto: "galera_passiu",  copias: 1 },
  { id: "aeroport",        nombre: "Aeropuerto fantasma",         tipo: "boti_mercat", icono: "✈️", efecto_texto: "Si tienes también el Conejo en el mostrador, el Conejo vale por 2 ingredientes.",                                   efecto: "far_passiu",     copias: 1 },

  // ══════════════════════════════════════════════════════
  // TESOROS — ESPECIALES (efectos permanentes)
  // ══════════════════════════════════════════════════════
  { id: "corbella",        nombre: "Hoz oxidada",         tipo: "boti_estrany", icono: "🗡️", efecto_texto: "+1 de Ataque en todas tus batallas mientras esté en el mostrador.",                                                       efecto: "bonus_atac",     copias: 1 },
  { id: "pocio_orxata",    nombre: "Poción de horchata",  tipo: "boti_estrany", icono: "🥛", efecto_texto: "+1 de Defensa en todas tus batallas mientras esté en el mostrador.",                                                       efecto: "bonus_defensa",  copias: 1 },
  { id: "falla_descomunal",nombre: "Falla descomunal",    tipo: "boti_estrany", icono: "🔥", efecto_texto: "Usa un turno para colocarla. Nadie puede robarte tesoros con cartas especiales. Solo una batalla ganada la destruye.",     efecto: "escudo_accio",   copias: 1 },
  { id: "muralla_morella", nombre: "Muralla de Morella",  tipo: "boti_estrany", icono: "🏰", efecto_texto: "Usa un turno para colocarla. Nadie puede atacarte ni usar cartas especiales contra tus tesoros. Solo una batalla ganada la destruye.", efecto: "escudo_total",   copias: 1 },

  // ══════════════════════════════════════════════════════
  // CARTAS DE BATALLA
  // ══════════════════════════════════════════════════════
  { id: "fallera_calavera",nombre: "La Fallera Calavera",   tipo: "combat", icono: "💀", efecto_texto: "Sin habilidad especial. A:3 / D:3.",                                                                                           atac: 3, defensa: 3, efecto: null,                copias: 1 },
  { id: "jaume_i",         nombre: "Jaime I",               tipo: "combat", icono: "👑", efecto_texto: "Sin habilidad especial. A:3 / D:2.",                                                                                           atac: 3, defensa: 2, efecto: null,                copias: 2 },
  { id: "dama_elx",        nombre: "La Dama de Elche",      tipo: "combat", icono: "🗿", efecto_texto: "Sin habilidad especial. A:2 / D:3.",                                                                                           atac: 2, defensa: 3, efecto: null,                copias: 2 },
  { id: "tombatossals",    nombre: "Tombatossals",           tipo: "combat", icono: "🗻", efecto_texto: "Sin habilidad especial. A:2 / D:2.",                                                                                           atac: 2, defensa: 2, efecto: null,                copias: 2 },
  { id: "tirant_lo_blanc", nombre: "Tirant lo Blanc",       tipo: "combat", icono: "⚔️", efecto_texto: "Sin habilidad especial. A:3 / D:1.",                                                                                           atac: 3, defensa: 1, efecto: null,                copias: 2 },
  { id: "guerrer_moixent", nombre: "Guerrero de Moixent",   tipo: "combat", icono: "🛡️", efecto_texto: "Sin habilidad especial. A:2 / D:1.",                                                                                           atac: 2, defensa: 1, efecto: null,                copias: 2 },
  { id: "capita_moro",     nombre: "Capitán moro",          tipo: "combat", icono: "🧔", efecto_texto: "Sin habilidad especial. A:1 / D:2.",                                                                                           atac: 1, defensa: 2, efecto: null,                copias: 2 },
  { id: "delica_gandia",   nombre: "La Delicada de Gandía", tipo: "combat", icono: "🌹", efecto_texto: "Sin habilidad especial. A:1 / D:3.",                                                                                           atac: 1, defensa: 3, efecto: null,                copias: 2 },
  { id: "xicona_xixona",   nombre: "Chica de Xixona",       tipo: "combat", icono: "🎭", efecto_texto: "Sin habilidad especial. A:1 / D:1.",                                                                                           atac: 1, defensa: 1, efecto: null,                copias: 2 },
  { id: "gaiata",          nombre: "Gayata de la Madalena", tipo: "combat", icono: "🔭", efecto_texto: "Sin habilidad especial. A:2 / D:1.",                                                                                           atac: 2, defensa: 1, efecto: null,                copias: 2 },
  { id: "pinta_fallera",   nombre: "Peineta de fallera",    tipo: "combat", icono: "👸", efecto_texto: "Sin habilidad especial. A:1 / D:1.",                                                                                           atac: 1, defensa: 1, efecto: null,                copias: 2 },
  { id: "espardenyes",     nombre: "Alpargatas malolientes",tipo: "combat", icono: "👟", efecto_texto: "Sin habilidad especial. A:1 / D:1.",                                                                                           atac: 1, defensa: 1, efecto: null,                copias: 2 },
  { id: "monleon",         nombre: "Monleón",               tipo: "combat", icono: "🌾", efecto_texto: "Liderazgo. Con una o más Monleonetes, tiene A:3 en vez de A:2.",                                                               atac: 2, defensa: 1, efecto: "lideratge",          copias: 1 },
  { id: "monleonetes",     nombre: "Monleonetes",           tipo: "combat", icono: "👶", efecto_texto: "Trabajo en equipo. No puede batallar sola. Junto a otra carta suma +1 de Ataque. Puedes sumar tantas como quieras.",            atac: 0, defensa: 0, efecto: "treball_equip_atac",  copias: 3 },
  { id: "muixeranga",      nombre: "Muixeranga d'Algemesí", tipo: "combat", icono: "🏗️", efecto_texto: "Trabajo en equipo. No puede batallar sola. Junto a otra carta suma +2 de Ataque o +1 de Defensa.",                            atac: 0, defensa: 0, efecto: "treball_equip_flex",  copias: 2 },
  { id: "tio_sangonera",   nombre: "El Tío Sangonera",      tipo: "combat", icono: "🐷", efecto_texto: "Empache. Tiene +1 de A y D por cada ingrediente en tu mostrador.",                                                             atac: 1, defensa: 1, efecto: "fartura",            copias: 1 },
  { id: "bellea_moc",      nombre: "La Belleza del Moco",   tipo: "combat", icono: "😤", efecto_texto: "Moco pegajoso. Si gana atacando, roba un tesoro extra además del elegido.",                                                    atac: 2, defensa: 1, efecto: "moc_enganxos",       copias: 1 },
  { id: "moma",            nombre: "La Moma",               tipo: "combat", icono: "🎭", efecto_texto: "Justa virtud. Tiene los mismos puntos de A y D que la carta del oponente.",                                                    atac: 0, defensa: 0, efecto: "justa_virtut",       copias: 1 },
  { id: "alcaldessa",      nombre: "Alcaldesa perpetua",    tipo: "combat", icono: "🎖️", efecto_texto: "Perpetuidad. Si gana la batalla, vuelve a tu mano. A:3 / D:2.",                                                               atac: 3, defensa: 2, efecto: "perpetuitat",        copias: 1 },
  { id: "batalla_almansa", nombre: "Batalla de Almansa",    tipo: "combat", icono: "⚓", efecto_texto: "Si ganas, te quedas TODOS los tesoros del rival. Si pierdes, le regalas TODOS los tuyos. Solo si tienes tesoros.",              atac: 4, defensa: 0, efecto: "batalla_lepant",     copias: 1 },
  { id: "masclet",         nombre: "Petardo",               tipo: "combat", icono: "💥", efecto_texto: "Al declarar batalla, el rival descarta 2 cartas al azar de su mano. A:2 / D:1.",                                               atac: 2, defensa: 1, efecto: "cano_descarta",      copias: 2 },
  { id: "espill",          nombre: "Espejo reluciente",     tipo: "combat", icono: "🪞", efecto_texto: "Junto a otra carta de batalla, invierte sus valores: su D pasa a ser A y su A pasa a ser D.",                                  atac: 0, defensa: 0, efecto: "espill_inverteix",   copias: 1 },
  { id: "espionatge",      nombre: "Espionaje",             tipo: "combat", icono: "🕵️", efecto_texto: "Cuando te declaren batalla, destapa las cartas del atacante. Luego defiéndete con normalidad.",                                atac: 0, defensa: 0, efecto: "espionatge",         copias: 2 },
  { id: "aigua_valencia",  nombre: "Agua de Valencia",      tipo: "combat", icono: "🍹", efecto_texto: "Al revelar cartas de batalla, resta 1 de A o D al rival. No acumulable.",                                                      atac: 0, defensa: 0, efecto: "vi_resta",           copias: 2 },

  // ══════════════════════════════════════════════════════
  // CARTAS ESPECIALES
  // ══════════════════════════════════════════════════════
  { id: "rata_penada",      nombre: "Murciélago cleptómano",  tipo: "accio", icono: "🦇", nivell: 1, efecto_texto: "Roba cualquier tesoro del mostrador del jugador que elijas.",                                                      efecto: "roba_boti",        copias: 3 },
  { id: "paella_protectora",nombre: "Paella protectora",      tipo: "accio", icono: "🥘", nivell: 2, efecto_texto: "Anula el efecto de cualquier carta especial. Puede ser anulada por otra Paella.",                                  efecto: "anula_accio",      copias: 3 },
  { id: "riua",             nombre: "La riada",               tipo: "accio", icono: "🌊", nivell: 3, efecto_texto: "Todos los jugadores pasan TODOS sus tesoros al siguiente jugador en el orden de turno.",                            efecto: "riua_total",       copias: 1 },
  { id: "pacte_dimoni",     nombre: "Pacto del demonio",      tipo: "accio", icono: "🤝", nivell: 2, efecto_texto: "Cambia todos tus tesoros por todos los de otro jugador. Solo si tienes al menos uno.",                             efecto: "pacte_canvi",      copias: 2 },
  { id: "lluna_valencia",   nombre: "Luna de Valencia",       tipo: "accio", icono: "🌕", nivell: 2, efecto_texto: "Colócala en el mostrador de un rival. Ese jugador pierde su próximo turno. Tú robas 1 carta.",                     efecto: "lluna_salta_torn", copias: 2 },
  { id: "butoni",           nombre: "El Butoni",              tipo: "accio", icono: "🤡", nivell: 2, efecto_texto: "Colócalo en el mostrador de un rival. Ese jugador no puede usar cartas especiales. Puede descartarlo usando su turno.", efecto: "nauc_bloqueja",  copias: 2 },
  { id: "repeticio",        nombre: "Repetición",             tipo: "accio", icono: "🔁", nivell: 1, efecto_texto: "Después de jugar esta carta, haz 2 jugadas seguidas.",                                                              efecto: "repeticio_torn",   copias: 3 },
  { id: "dansa_magrana",    nombre: "Danza de la Granada",    tipo: "accio", icono: "💃", nivell: 1, efecto_texto: "Invierte la dirección del turno y roba 1 carta de la baraja.",                                                      efecto: "dansa_direccio",   copias: 2 },
  { id: "vent_llebeig",     nombre: "Viento de lebeche",      tipo: "accio", icono: "💨", nivell: 2, efecto_texto: "Cambia uno de tus tesoros por un tesoro del jugador que elijas.",                                                   efecto: "vent_canvi_boti",  copias: 2 },
  { id: "nit_crema",        nombre: "Nit de la cremà",        tipo: "accio", icono: "🔥", nivell: 3, efecto_texto: "Descarta TODOS los tesoros del mostrador de un jugador.",                                                           efecto: "tramuntana_borra", copias: 1 },
  { id: "cassalla",         nombre: "Cazalla milagrosa",      tipo: "accio", icono: "✨", nivell: 2, efecto_texto: "Recupera una carta especial del cementerio y úsala inmediatamente.",                                                efecto: "rumb_recupera",    copias: 2 },
  { id: "donyet",           nombre: "Duendecillo escrutador", tipo: "accio", icono: "🧚", nivell: 1, efecto_texto: "Roba 10 cartas, elige 1 y devuelve el resto al mazo barajado.",                                                    efecto: "donyet_tria",      copias: 2 },
  { id: "bec_mig_pollastre",nombre: "El pico del medio pollo",tipo: "accio", icono: "🍗", nivell: 1, efecto_texto: "Si un jugador tiene 7 o más cartas en mano, roba 3 de ellas al azar.",                                             efecto: "pollet_roba_ma",   copias: 2 },
  { id: "jugador_petrer",   nombre: "El jugador de Petrer",   tipo: "accio", icono: "🎲", nivell: 1, efecto_texto: "Descártate de hasta 5 cartas de tu mano y roba el mismo número.",                                                  efecto: "jogador_canvi_ma", copias: 3 },
  { id: "cagallo",          nombre: "Zurullo / Mojón",        tipo: "accio", icono: "💩", nivell: 0, efecto_texto: "No hace absolutamente nada.",                                                                                       efecto: "sense_efecte",     copias: 2 },
];

// Genera el mazo completo expandiendo las copias (sin cartas de referencia)
function generarMazo() {
  const mazo = [];
  let uid = 0;
  for (const carta of CARTAS_BASE) {
    if (carta.tipo === 'referencia') continue;
    for (let i = 0; i < carta.copias; i++) {
      mazo.push({ ...carta, uid: `${carta.id}_${uid++}` });
    }
  }
  return mazo;
}

// Barajar (Fisher-Yates)
function barajar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

module.exports = { CARTAS_BASE, generarMazo, barajar };
