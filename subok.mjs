import { baybayin } from "./baybay.mjs";

// Karaniwan
dapat(baybayin("aso")).ay(["a", "su"]);
dapat(baybayin("pusa")).ay(["pu", "sa"]);
dapat(baybayin("araw")).ay(["a", "da", "w"]);
dapat(baybayin("elepante")).ay(["i", "li", "pa", "n", "ti"]);
dapat(baybayin("bantay")).ay(["ba", "n", "ta", "y"]);
dapat(baybayin("daan")).ay(["da", "a", "n"]);
dapat(baybayin("doon")).ay(["du", "u", "n"]);
dapat(baybayin("biik")).ay(["bi", "i", "k"]);
dapat(baybayin("kailan")).ay(["ka", "i", "la", "n"]);
dapat(baybayin("baon")).ay(["ba", "u", "n"]);
dapat(baybayin("baul")).ay(["ba", "u", "l"]);
dapat(baybayin("kain")).ay(["ka", "i", "n"]);

// Di normal na baybay
dapat(baybayin("tilapia")).ay(["ti", "la", "pi", "ya"]);
dapat(baybayin("durian")).ay(["du", "di", "ya", "n"]);

// Bigkas na iba sa baybay
dapat(baybayin("ng")).ay(["na", "ng"]);
dapat(baybayin("mga")).ay(["ma", "nga"]);

// Da at Ra
dapat(baybayin("suri")).ay(["su", "di"]);
dapat(baybayin("suri", { bukodAngRa: true })).ay(["su", "ri"]);
dapat(baybayin("durian", { bukodAngRa: true })).ay(["du", "ri", "ya", "n"]);

// Mga pangalan
dapat(baybayin("Alfonso")).ay(["a", "l", "pu", "n", "su"]);
dapat(baybayin("Angela")).ay(["a", "n", "d", "yi", "la"]);
dapat(baybayin("Ashley")).ay(["a", "s", "li"]);
dapat(baybayin("Cane")).ay(["ki", "y", "n"]);
dapat(baybayin("Cesar")).ay(["si", "sa", "d"]);
dapat(baybayin("Christine")).ay(["k", "di", "s", "ti", "n"]);
dapat(baybayin("Christopher")).ay(["k", "di", "s", "tu", "pi", "d"]);
dapat(baybayin("Dane")).ay(["di", "y", "n"]);
dapat(baybayin("Dexter")).ay(["di", "k", "s", "ti", "d"]);
dapat(baybayin("Diane")).ay(["di", "ya", "n"]);
dapat(baybayin("Frederico")).ay(["p", "di", "di", "di", "ku"]);
dapat(baybayin("Gilbert")).ay(["gi", "l", "bi", "d", "t"]);
dapat(baybayin("Ian")).ay(["i", "ya", "n"]);
dapat(baybayin("Jenny")).ay(["d", "yi", "ni"]);
dapat(baybayin("John")).ay(["d", "ya", "n"]);
dapat(baybayin("Juan")).ay(["hu", "wa", "n"]);
dapat(baybayin("Keen")).ay(["ki", "n"]);
dapat(baybayin("Kenneth")).ay(["ki", "ni", "t"]);
dapat(baybayin("Lean")).ay(["li", "ya", "n"]);
dapat(baybayin("Leshrac")).ay(["li", "s", "da", "k"]);
dapat(baybayin("Mae")).ay(["mi", "y"]);
dapat(baybayin("Maria")).ay(["ma", "di", "ya"]);
dapat(baybayin("Michael")).ay(["ma", "y", "ki", "l"]);
dapat(baybayin("Paulo")).ay(["pa", "w", "lo"]);
dapat(baybayin("Philippines")).ay(["pi", "li", "pi", "n", "s"]);
dapat(baybayin("Quinn")).ay(["ku", "wi", "n"]);
dapat(baybayin("Rogelio")).ay(["du", "hi", "li", "yu"]);
dapat(baybayin("Roger")).ay(["du", "d", "yi", "d"]);
dapat(baybayin("Rose")).ay(["du", "w", "s"]);
dapat(baybayin("Ryle")).ay(["da", "y", "l"]);
dapat(baybayin("Sharon")).ay(["s", "ya", "du", "n"]);
dapat(baybayin("Stephanie")).ay(["s", "ti", "pa", "ni"]);
dapat(baybayin("Vanessa")).ay(["ba", "ni", "sa"]);
dapat(baybayin("Xian")).ay(["si", "ya", "n"]);
dapat(baybayin("Zenny")).ay(["si", "ni"]);
dapat(baybayin("Zoey")).ay(["su", "wi"]);

// ----------------------------------------------------------------------------

function dapat(bagay) {
  return {
    ay(inaasahan) {
      dapat.bilang = (dapat.bilang ?? 0) + 1;
      const pamilang = String(dapat.bilang).padStart(3, " ") + ". ";
      if (JSON.stringify(bagay) === JSON.stringify(inaasahan)) {
        console.error(`\x1b[32m${pamilang}Tama  : ${JSON.stringify(bagay)}\x1b[0m`);
      } else {
        console.error(`\x1b[31m${pamilang}Mali  : ${JSON.stringify(bagay)}\x1b[0m`);
        console.error(`\x1b[32m     Dapat : ${JSON.stringify(inaasahan)}\x1b[0m`);
      }
    }
  }
}
