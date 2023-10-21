import { baybayinAngPangalan } from "./pangalan.mjs";
import { salin } from "./salin.mjs";

/**
 * Baybayín ang binigay na `parirala` mula sa tinukoy na `wika`.
 * 
 * Ibabalik nito ay isang Array ng mga titik-baybayin, na naka-encode sa Latin.
 *   Kunwari, ang 'ᜃ' ay 'ka', 'ᜃᜒ' ay 'ki', at 'ᜃᜓ' ay 'ku'. Hindi ginagamit ang 'e' at 'o'.
 * 
 * Halimbawa,
 *   baybayin("oo at hindi") => ["u", "u", "a", "t", "hi", "n", "di"]
 * 
 * Possibleng ibahin kung `paano` ang pagbaybay: {
 *   payak?: boolean = Kung oo, hindi gagawin ang mga sadyang salita at mga pangalan.
 *   bukodAngRa?: boolean = Kung oo, hindi pag-iisahin ang 'd' at 'r'.
 * }
 */
export function baybayin(parirala, paano = {}) {
  const mgaSalita = parirala.split(/\s+/g);
  return mgaSalita.flatMap(salita => {
    if (!salita) return [];

    if (!paano?.payak) {
      const sinadya = baybayinKungSadyangSalita(salita);
      if (sinadya) return sinadya;
      const pangalan = baybayinKungPangalan(salita);
      if (pangalan) return pangalan;
    }

    let mgaTitik = []; // mga titik-baybayin
    let itongTitik = "";

    for (let letra of salita) {
      letra = letra.toLowerCase();
      const hulingTitik = itongTitik && itongTitik.slice(-1);
      if (patinig(letra)) {
        if (letra === "e") letra = "i";
        if (letra === "o") letra = "u";

        if (itongTitik && patinig(hulingTitik)) {
          mgaTitik.push(itongTitik);
          itongTitik = "";

          if (hulingTitik !== letra) {
            if ("ie".includes(hulingTitik)) {
              itongTitik = "y";
            } else if ("ou".includes(hulingTitik)) {
              itongTitik = "w";
            }
          }
        }

        itongTitik += letra;
      } else if (katinigBakada(letra)) {
        if (itongTitik && !(hulingTitik === "n" && letra === "g")) {
          mgaTitik.push(itongTitik);
          itongTitik = "";
        }

        if (!paano?.bukodAngRa && letra === "r") {
          letra = "d";
        }

        itongTitik += letra;
      } else {
        throw new Error(salin.diWastongLetra(letra.toUpperCase()));
      }
    }
    if (itongTitik) {
      mgaTitik.push(itongTitik);
    }
    return mgaTitik;
  });
}

function patinig(letra) {
  return "aeiou".includes(letra);
}

function katinigBakada(letra) {
  return "bkdghlmnprstwy".includes(letra);
}

function baybayinKungSadyangSalita(salita) {
  if (salita === "ng") return ["na", "ng"];
  if (salita === "mga") return ["ma", "nga"];
  return null;
}

function baybayinKungPangalan(salita) {
  if (salita[0].toLowerCase() === salita[0]) return null;
  return baybayinAngPangalan(salita);
}