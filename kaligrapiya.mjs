import "https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/p5.js";
const P5 = window.p5;
let p5 = null;

// ⎫
function guhitTalon(x0, y0, x1, y1) {
  const haba = Math.abs(y1 - y0);
  return [
    x0, y0,
    (x0 + x1) / 2 + haba * 0.2, y0,
    x1, y1
  ];
}
// ᜑ
function guhitAlon(x0, y0, x1, y1) {
  const haba = Math.abs(x1 - x0);
  return [
    x0, y0,
    x0, y0 + haba * 0.1,
    x1, y1 - haba * 0.1,
    x1, y1
  ];
}
// ᜂ
function guhitIlog(x0, y0, x1, y1) {
  return [x0, y0, x1, y1];
}
// ω
function guhitUlap(x0, y0, x1, y1) {
  return [x0, y0, x1, y1];
}
// ∩
function guhitBundok(x0, y0, x1, y1, x2, y2) {
  return [x0, y0, x1, y1, x2, y2];
}
// ⏤
function guhitTuwid(x0, y0, x1, y1) {
  return [x0, y0, x1, y1];
}

const DUGTONG = Symbol("dugtong");
const PUTOL = Symbol("putol");

const talaguhitan = {
  "a": [
    [guhitTalon, 0.0, 0.0, 0.0, 1.0],
    [guhitAlon, DUGTONG, DUGTONG, 1.0, 0.0, PUTOL],
    [guhitTuwid, -0.2, 0.5, 0.1, 0.5, PUTOL],
  ],
  "i": [
    [guhitTuwid, 0.0, 0.0, 1.0, 0.0, PUTOL],
    [guhitUlap, 0.0, 1.0, 1.0, 1.0, PUTOL],
  ],
  "u": [
    [guhitIlog, 0.5, 0.0, 0.5, 1.0, PUTOL],
  ],
  "b": [
    [guhitBundok, 0.0, 0.6, 0.5, 0.0, 1.0, 0.6],
    [guhitUlap, DUGTONG, DUGTONG, 0.0, 0.6, PUTOL],
  ],
  "k": [
    [guhitAlon, 0.0, 0.0, 1.0, 0.0, PUTOL],
    [guhitAlon, 0.0, 1.0, 1.0, 1.0, PUTOL],
    [guhitTuwid, 0.5, 0.0, 0.5, 1.0, PUTOL],
  ],
  "d": [
    [guhitTalon, 0.0, 0.0, 0.0, 1.0],
    [guhitAlon, DUGTONG, DUGTONG, 1.0, 1.0, PUTOL],
    [guhitAlon, 0.0, 0.0, 1.0, 0.0, PUTOL],
  ],
};

const palugit = 100; // px
let lapadNgTitik = 0; // px
let tangkadNgTitik = 0; // px
let bilangNgTitik = 0;
let ikailangTitik = 0;
let pilaNgBaybay = [];
let pilaNgPunto = [];
let hulingPunto = null; // { x: px, y: px }
let diin = 0;
let dulo = null; // { x: px, y: px }
let hagibis = null; // { x: px, y: px }
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
  ikailangTitik = 0;

  pilaNgBaybay = [...baybay];
  pilaNgPunto = [];

  dulo = null;
  hagibis = { x: 0, y: 0 };

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
    if (pilaNgPunto.length === 0) {
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
        const titikX = (p5.width - lapadNgTitik) / 2;
        const titikY = (p5.height - bilangNgTitik * tangkadNgTitik) / 2 + ikailangTitik * tangkadNgTitik;

        const putol = mgaPunto.slice(-1)[0] === PUTOL;
        if (putol) mgaPunto.pop();

        const latag = mgaPunto.map(ilatag);
        if (latag[0] === DUGTONG || latag[1] === DUGTONG) {
          latag[0] = pilaNgPunto[pilaNgPunto.length - 2];
          latag[1] = pilaNgPunto[pilaNgPunto.length - 1];
          if (latag[0] === PUTOL || latag[1] === PUTOL) throw new Error("Maling pagtala ng titik: " + titik);
        }

        pilaNgPunto.push(...paraangPagguhit(...latag));

        if (putol) pilaNgPunto.push(PUTOL, PUTOL);

        function ilatag(p, i) {
          if (p === DUGTONG) return p;
          return (i % 2) === 0 ? titikX + p * lapadNgTitik : titikY + p * tangkadNgTitik;
        }
      }

      ikailangTitik++;
    }

    const punto = { x: pilaNgPunto[0], y: pilaNgPunto[1] };
    if (!hulingPunto) hulingPunto = punto;

    if (punto.x === DUGTONG || punto.y === DUGTONG) {
      pilaNgPunto = pilaNgPunto.slice(2);
    } else if (punto.x === PUTOL || punto.y === PUTOL) {
      diin = 0;
      pilaNgPunto = pilaNgPunto.slice(2);
    } else {

      if (diin <= 0) {
        p5.beginShape();
        diin = 1;
        dulo = punto;
        hagibis = { x: 0, y: 0 };
      }

      const darasig = darasigin(punto, dulo);
      hagibis.x += darasig.x;
      hagibis.y += darasig.y;
      const pagkiskis = kiskis(hagibis);
      hagibis.x *= pagkiskis;
      hagibis.y *= pagkiskis;
      dulo.x += hagibis.x;
      dulo.y += hagibis.y;
      p5.noFill();
      p5.stroke(0, 0, 0);
      p5.strokeWeight(5);
      p5.line(dulo.x - hagibis.x, dulo.y - hagibis.y, dulo.x, dulo.y);

      if (lampas(punto)) {
        hulingPunto = punto;
        pilaNgPunto = pilaNgPunto.slice(2);
      }
    }
  };
});

function darasigin(punto, dulo) {
  const layo = Math.hypot(punto.x - dulo.x, punto.y - dulo.y);
  if (layo === 0) {
    return { x: 0, y: 0 };
  }
  const tungoX = (punto.x - dulo.x) / layo;
  const tungoY = (punto.y - dulo.y) / layo;
  const darasigan = Math.sign(layo) * Math.max(2, Math.abs(layo) * 0.001);
  return {
    x: tungoX * darasigan,
    y: tungoY * darasigan,
  };
}

function kiskis(hagibis) {
  const s = 0.1;
  const bilis = Math.hypot(hagibis.x, hagibis.y);
  return bilis === 0 ? 1 : 1 / Math.log(Math.abs(bilis * s) + Math.E);
}

function lampas(punto) {
  const layo = Math.hypot(punto.x - dulo.x, punto.y - dulo.y);
  if (layo < 4) return true;

  const tungoX = (punto.x - dulo.x) / layo;
  const tungoY = (punto.y - dulo.y) / layo;

  const pagitan = Math.hypot(punto.x - hulingPunto.x, punto.y - hulingPunto.y);
  if (pagitan === 0) return true;

  const dakoX = (punto.x - hulingPunto.x) / pagitan;
  const dakoY = (punto.y - hulingPunto.y) / pagitan;

  const dot = tungoX * dakoX + tungoY * dakoY;
  return dot <= 0;
}