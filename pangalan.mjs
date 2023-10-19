import { baybayin } from "./baybay.mjs";

export function baybayinAngPangalan(pangalan) {
  pangalan = pangalan.toLowerCase()
    .replace(/tia/g, "tya")
    .replace(/sh(?=[aeiou])/g, "sy")
    .replace(/e[ei]/g, "i")
    .replace(/ie/g, "i")
    .replace(/(?<=[aeiou][^aeiou]+)ey$/, "i")
    .replace(/sh/g, "s")
    .replace(/ph/g, "p")
    .replace(/c(?=[eiy])/g, "s")
    .replace(/^x/, "s")
    .replace(/c/g, "k")
    .replace(/q/g, "k")
    .replace(/f/g, "p")
    .replace(/v/g, "b")
    .replace(/z/g, "s")
    .replace(/x/g, "ks")
    .replace(/j/g, "dy")
    .replace(/h(?![aeiou])/g, "")
    .replace(/([^aeiou])\1+/g, "$1")
    .replace(/y$/, "i")
    .replace(/w$/, "u");
  // gawin: 'e' sa huli, gaya ng sa 'Christine', pero iba pag sa 'Rose'
  return baybayin(pangalan, { payak: true });
}
