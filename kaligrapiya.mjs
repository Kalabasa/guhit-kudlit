import "https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/p5.js";
const P5 = window.p5;
let p5 = null;

// ⎫
function guhitTalon(x0, y0, x1, y1) {
}
// ᜑ
function guhitAlon(x0, y0, x1, y1) {
}
// ᜂ
function guhitIlog(x0, y0, x1, y1) {
}
// ω
function guhitUlap(x0, y0, x1, y1) {
}
// ∩
function guhitBundok(x0, y0, x1, y1, x2, y2) {
}
// ⏤
function guhitTuwid(x0, y0, x1, y1) {
}

const talaguhitan = {
  "a": [
    [guhitTalon, 0.0, 0.0, 0.0, 1.0],
    [guhitAlon, null, null, 1.0, 0.0],
    [guhitTuwid, -0.2, 0.5, 0.1, 0.5],
  ],
  "i": [
    [guhitTuwid, 0.0, 0.0, 1.0, 0.0],
    [guhitUlap, 0.0, 1.0, 1.0, 1.0],
  ],
  "u": [
    [guhitIlog, 0.5, 0.0, 0.5, 1.0],
  ],
  "b": [
    [guhitBundok, 0.0, 0.6, 0.5, 0.0, 1.0, 0.6],
    [guhitUlap, null, null, 0.0, 0.6],
  ],
  "k": [
    [guhitAlon, 0.0, 0.0, 1.0, 0.0],
    [guhitAlon, 0.0, 1.0, 1.0, 1.0],
    [guhitTuwid, 0.5, 0.0, 0.5, 1.0],
  ],
  "d": [
    [guhitTalon, 0.0, 0.0, 0.0, 1.0],
    [guhitAlon, null, null, 1.0, 1.0],
    [guhitAlon, 0.0, 0.0, 1.0, 0.0],
  ],
};

const palugit = 100; // px
let lapadNgTitik = 0; // px
let tangkadNgTitik = 0; // px
let bilangNgTitik = 0;
let pilaNgGuhit = [];
let pilaNgBaybay = [];
let ikailangTitik = 0;
let dulo = null; // { x: px, y: px }
let taposNa = () => { };

/**
 * Iguhit ang binigay na `baybay` sa kambas.
 * 
 * Ang baybay ay isang Array ng mga titik-baybayin, naka-encode sa Latin.
 *   Halimbawa, baybay = ["ku", "la", "y"]
 */
export function iguhitAngKaligrapiya(baybay) {
  console.log(baybay);
  p5.background(0xff);

  const tangkad = p5.height - palugit * 2;
  bilangNgTitik = baybay.length;
  tangkadNgTitik = Math.min(tangkad / bilangNgTitik, p5.height / 5);
  lapadNgTitik = tangkadNgTitik * 1.2;

  pilaNgBaybay = [...baybay];
  pilaNgGuhit = [];

  ikailangTitik = 0;
  dulo = { x: 0, y: 0 };

  const pangako = new Promise(resolve => void (taposNa = resolve));
  p5.loop();
  return pangako;
}

new P5((bago) => {
  p5 = bago;

  p5.setup = () => {
    const kambas = document.getElementById("kambas");
    p5.createCanvas(kambas.width, kambas.height, kambas);
    p5.noLoop();
  };

  p5.draw = () => {
    if (pilaNgGuhit.length === 0) {
      if (pilaNgBaybay.length === 0) {
        taposNa();
        p5.noLoop();
        return;
      }

      const titik = pilaNgBaybay.shift();
      const mgaGuhit = talaguhitan[titik[0]];

      if (!mgaGuhit) throw new Error("Kulang ang talaguhitan para sa titik: " + titik);

      for (const guhit of mgaGuhit) {
        const [paraangPagguhit, ...mgaPunto] = guhit;
        const x = (p5.width - lapadNgTitik) / 2;
        const y = (p5.height - bilangNgTitik * tangkadNgTitik) / 2 + ikailangTitik * tangkadNgTitik;
        pilaNgGuhit.push([
          paraangPagguhit,
          mgaPunto[0] === null ? null : x + mgaPunto[0] * lapadNgTitik,
          mgaPunto[1] === null ? null : y + mgaPunto[1] * tangkadNgTitik,
          ...mgaPunto.slice(2).map((p, i) =>
            (i % 2) === 0 ? x + p * lapadNgTitik : y + p * tangkadNgTitik
          )
        ]);
      }

      ikailangTitik++;
    }

    const guhit = pilaNgGuhit[0];
    console.log(guhit[0]);
    let [, ...mgaPunto] = guhit;
    if (mgaPunto[0] === null) mgaPunto[0] = dulo.x;
    if (mgaPunto[1] === null) mgaPunto[1] = dulo.y;

    p5.noFill();
    p5.stroke(0, 0, 0);
    p5.strokeWeight(5);
    p5.beginShape();
    for (let i = 0; i < mgaPunto.length; i += 2) {
      dulo.x = mgaPunto[i];
      dulo.y = mgaPunto[i + 1];
      p5.vertex(dulo.x, dulo.y);
      console.log(dulo);
    }
    p5.endShape();

    if (true) pilaNgGuhit.shift();
  };
});
