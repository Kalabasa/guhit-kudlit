const tl = {
  pakilala: () => "Pansalin at panlikha ng kaligrapiyang baybayin",
  tagalogNaSalita: () => "Tagalog na salita",
  pagkakabasa: () => "Pagkakabasa",
  diWastongLetra: (letra) => `'Di kayang gawin itong letra/simbolo: ${letra}. Maaaring gamitin lamang ay ang abakadang Pilipino.`
};

const en = {
  pakilala: () => "Baybayin transliterator & calligraphy generator",
  tagalogNaSalita: () => "Tagalog word",
  pagkakabasa: () => "Interpretation",
  diWastongLetra: (letra) => `Can't convert this letter/symbol: ${letra}. You may only use the Pilipino alphabet (abakada).`
};

export const salin = typeof window !== "undefined" && /\btl\b/.test(window.location.hash) ? tl : en;

export function isalinAngPahina() {
  for (const elemento of document.querySelectorAll("[data-salin]")) {
    elemento.textContent = salin[elemento.dataset.salin]();
  }
}
