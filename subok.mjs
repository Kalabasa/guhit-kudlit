import { baybayin } from "./baybay.mjs";

// Karaniwan
dapat(baybayin("aso")).ay(["a", "su"]);
dapat(baybayin("pusa")).ay(["pu", "sa"]);
dapat(baybayin("araw")).ay(["a", "da", "w"]);
dapat(baybayin("elepante")).ay(["i", "li", "pa", "n", "ti"]);
dapat(baybayin("bantay")).ay(["ba", "n", "ta", "y"]);

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
dapat(baybayin("Cesar")).ay(["si", "sa", "d"]);
dapat(baybayin("Christine")).ay(["k", "di", "s", "ti", "n"]);
dapat(baybayin("Christopher")).ay(["k", "di", "s", "tu", "pi", "d"]);
dapat(baybayin("Dexter")).ay(["di", "k", "s", "ti", "d"]);
dapat(baybayin("Gilbert")).ay(["gi", "l", "bi", "d", "t"]);
dapat(baybayin("Jenny")).ay(["d", "yi", "ni"]);
dapat(baybayin("John")).ay(["d", "ya", "n"]);
dapat(baybayin("Juan")).ay(["hu", "wa", "n"]);
dapat(baybayin("Leshrac")).ay(["li", "s", "da", "k"]);
dapat(baybayin("Maria")).ay(["ma", "di", "ya"]);
dapat(baybayin("Michael")).ay(["ma", "y", "ki", "l"]);
dapat(baybayin("Quinn")).ay(["ku", "wi", "n"]);
dapat(baybayin("Rogelio")).ay(["du", "hi", "li", "yu"]);
dapat(baybayin("Roger")).ay(["du", "d", "yi", "d"]);
dapat(baybayin("Sharon")).ay(["s", "ya", "du", "n"]);
dapat(baybayin("Stephanie")).ay(["s", "ti", "pa", "ni"]);
dapat(baybayin("Vanessa")).ay(["ba", "ni", "sa"]);
dapat(baybayin("Xian")).ay(["si", "ya", "n"]);
dapat(baybayin("Zenny")).ay(["si", "ni"]);

// ----------------------------------------------------------------------------

function dapat(bagay) {
  dapat.bilang = (dapat.bilang ?? 0) + 1;
  return {
    ay(inaasahan) {
      const pambilang = String(dapat.bilang).padStart(3, " ") + ". ";
      if (JSON.stringify(bagay) === JSON.stringify(inaasahan)) {
        console.error(`\x1b[32m${pambilang}Tama  : ${JSON.stringify(bagay)}\x1b[0m`);
      } else {
        console.error(`\x1b[31m${pambilang}Mali  : ${JSON.stringify(bagay)}\x1b[0m`);
        console.error(`\x1b[32m     Dapat : ${JSON.stringify(inaasahan)}\x1b[0m`);
      }
    }
  }
}
