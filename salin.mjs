const tl = {
  pakilala: () => "Pansalin at panlikha ng kaligrapiyang baybayin",
  tagalogNaSalita: () => "Tagalog na salita",
  tagalogBukodAngRa: () => "Tagalog (Magkabukod na 'da' at 'ra')",
  inglesNaSalitaEksperimental: () => "Ingles na salita (eksperimental)",
  pagkapantig: () => "Pagkapantig",
  lumikha: () => "·Lumikha·",
  diWastongLetra: (letra) => `'Di tiyak ang pagbaybay sa letrang: <em>${letra}</em>`,
  paliwanagNgDiWastongLetra: (halimbawa) => `<p>Walang kasingkatumbas sa baybayin ang nasabing letra.</p><p>Pwede isulat mo muna ito sa abakadang Tagalog, parang ganito:</p><ul>${halimbawa}</ul><p>O kaya nama'y ilipat mo sa Ingles na pag-input gamit ang pamalit (⏷) sa taas:</p><blockquote><label>${salin.inglesNaSalitaEksperimental()}👉 ⏷ 👈</label></blockquote>`,
  download: () => "Nenok",
};

const en = {
  pakilala: () => "Baybayin transliterator & calligraphy generator",
  tagalogNaSalita: () => "Tagalog word",
  tagalogBukodAngRa: () => "Tagalog (Distinct 'd' and 'r')",
  inglesNaSalitaEksperimental: () => "English word (experimental)",
  pagkapantig: () => "Syllabication",
  lumikha: () => "·Generate·",
  diWastongLetra: (letra) => `Can't unambiguously convert this letter: <em>${letra}</em>`,
  paliwanagNgDiWastongLetra: (halimbawa) => `<p>There is no direct baybayin equivalent for the said letter.</p><p>You can write it first in the Tagalog alphabet (abakada), like these:</p><ul>${halimbawa}</ul><p>Or switch to English input using the toggle (⏷) above:</p><blockquote><label>${salin.inglesNaSalitaEksperimental()}👉 ⏷ 👈</label></blockquote>`,
  download: () => "Download",
};

export const salin = typeof window !== "undefined" && /\btl\b/.test(window.location.search) ? tl : en;

export function isalinAngPahina() {
  for (const elemento of document.querySelectorAll("[data-salin]")) {
    elemento.textContent = salin[elemento.dataset.salin]();
  }
}
