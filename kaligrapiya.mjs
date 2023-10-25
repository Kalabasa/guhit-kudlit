import "https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/p5.js";
const P5 = window.p5;
let p5 = null;

// ⎫
function guhitTalon(x0, y0, x1, y1, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.5) + hx, y0,
    timpla(x0, x1, 0.75), timpla(y0, y1, 0.75),
    x1, y1
  ];
}
// ᜑ
function guhitAlon(x0, y0, x1, y1, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.15), y0 + hy,
    timpla(x0, x1, 0.85), y1 - hy,
    x1, y1
  ];
}
// ᜂ
function guhitIlog(x0, y0, x1, y1, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.05) + hx * 0.8, timpla(y0, y1, 0.05),
    timpla(x0, x1, 0.25) + hx, timpla(y0, y1, 0.25),
    timpla(x0, x1, 0.4) + hx * 0.4, timpla(y0, y1, 0.4),
    timpla(x0, x1, 0.6) + hx * 0.8, timpla(y0, y1, 0.6),
    timpla(x0, x1, 0.8) + hx * 0.6, timpla(y0, y1, 0.8),
    x1, y1
  ];
}
// ω
function guhitUlap(x0, y0, x1, y1, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.25), timpla(y0, y1, 0.25) + hy,
    timpla(x0, x1, 0.5), timpla(y0, y1, 0.5),
    timpla(x0, x1, 0.75), timpla(y0, y1, 0.75) + hy,
    x1, y1
  ];
}
// ∩
function guhitBundok(x0, y0, x1, y1, x2, y2, hx, hy) {
  return [x0, y0, x1, y1, x2, y2];
}
// ⏤
function guhitTuwid(x0, y0, x1, y1, hx, hy) {
  return [x0, y0, x1, y1];
}

function timpla(a, b, t) {
  return a + (b - a) * t;
}

const DUGTONG = Symbol("dugtong");
const PUTOL = Symbol("putol");

const guhitDa = [
  [guhitTalon, 0.0, 0.0, 0.0, 0.7, 0.1, 0.0],
  [guhitAlon, DUGTONG, DUGTONG, 1.0, 0.8, 0.0, 0.1, PUTOL],
  [guhitAlon, 0.15, 0.1, 1.0, 0.2, 0.0, 0.1, PUTOL],
];
const guhitYa = [
  [guhitTalon, 0.0, 0.0, 0.1, 0.8, 0.1, 0.0],
  [guhitAlon, DUGTONG, DUGTONG, 1.0, 0.4, 0.0, 0.05, PUTOL],
];

const talaguhitan = {
  "a": [
    ...guhitYa,
    [guhitTuwid, 0.0, 0.4, 0.2, 0.4, 0.0, 0.0, PUTOL],
  ],
  "i": [
    [guhitAlon, 0.0, 0.2, 1.0, 0.2, 0.0, 0.1, PUTOL],
    [guhitUlap, 0.0, 0.6, 1.0, 0.6, 0.0, 0.2, PUTOL],
  ],
  "u": [
    [guhitIlog, 0.3, 0.0, 0.3, 1.0, 0.4, 0.0, PUTOL],
  ],
  "b": [
    [guhitBundok, 0.0, 0.8, 0.5, 0.2, 1.0, 0.8, 0.0, 0.0],
    [guhitUlap, DUGTONG, DUGTONG, 0.0, 0.8, 0.0, 0.2, PUTOL],
  ],
  "k": [
    [guhitAlon, 0.0, 0.2, 1.0, 0.2, 0.0, 0.1, PUTOL],
    [guhitAlon, 0.0, 0.8, 1.0, 0.8, 0.0, 0.1, PUTOL],
    [guhitTuwid, 0.5, 0.2, 0.5, 0.8, 0.0, 0.0, PUTOL],
  ],
  "d": guhitDa,
  "g": [
    [guhitIlog, 0.0, 0.0, 0.0, 1.0, 0.4, 0.0, PUTOL],
    [guhitTalon, 0.3, 0.3, 1.0, 0.8, 0.2, 0.0, PUTOL],
  ],
  "h": [
    [guhitAlon, 0.0, 0.5, 1.0, 0.5, 0.0, 0.2, PUTOL],
  ],
  "l": [
    [guhitAlon, 0.0, 0.2, 1.0, 0.2, 0.0, 0.1, PUTOL],
    [guhitIlog, 0.5, 0.2, 0.5, 1.0, 0.15, 0.0, PUTOL],
  ],
  "m": [
    ...guhitYa,
    [guhitTuwid, 0.2, 0.5, 0.6, 0.5, 0.0, 0.0, PUTOL],
  ],
  "n": [
    [guhitBundok, 0.0, 0.8, 0.5, 0.2, 1.0, 0.8, 0.0, 0.0, PUTOL],
    [guhitIlog, 0.5, 0.2, 0.5, 1.0, 0.15, 0.0, PUTOL],
  ],
  "ng": [
    [guhitTalon, 0.0, 0.2, 0.0, 0.8, 0.4, 0.0, PUTOL],
    [guhitUlap, 0.4, 0.5, 1.0, 0.5, 0.0, 0.1, PUTOL],
  ],
  "p": [
    ...guhitYa,
    [guhitTuwid, 0.6, 0.6, 1.0, 0.6, 0.0, 0.0, PUTOL],
  ],
  "r": [
    ...guhitDa,
    [guhitTuwid, 0.5, 0.0, 0.5, 1.0, 0.0, 0.0, PUTOL],
  ],
  "s": [
    [guhitTalon, 0.0, 0.2, 0.0, 0.8, 0.1, 0.0],
    [guhitAlon, DUGTONG, DUGTONG, 0.8, 0.2, 0.0, 0.05],
    [guhitIlog, DUGTONG, DUGTONG, 0.8, 1.0, 0.2, 0.0, PUTOL],
  ],
  "t": [
    [guhitAlon, 0.0, 0.6, 1.0, 0.4, 0.0, 0.1, PUTOL],
    [guhitTuwid, 0.5, 0.55, 0.1, 1.0, 0.0, 0.0, PUTOL],
  ],
  "y": guhitYa,
};

const palugit = 100; // px
const bilangNgBakod = 20;
let malapit = 0; // px
let lapadNgGuhit = 0; // px
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
let bakod = null; // px[bilangNgBakod]
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
  lapadNgGuhit = tangkadNgTitik / 4;
  malapit = tangkadNgTitik / 20;

  pilaNgBaybay = [...baybay];
  pilaNgPunto = [];
  hulingPunto = null;

  diin = 0;
  dulo = null;
  hagibis = { x: 0, y: 0 };

  bakod = Array(bilangNgBakod).fill(0);

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
    if (diin === 0 && pilaNgPunto.length === 0) {
      if (pilaNgBaybay.length === 0) {
        taposNa();
        p5.noLoop();
        return;
      }

      const titik = pilaNgBaybay.shift();
      const mgaGuhit = talaguhitan[titik.replace(/(?<!^)[aiu]/, "")];

      if (!mgaGuhit) throw new Error("Kulang ang talaguhitan para sa titik: " + titik);

      for (const guhit of mgaGuhit) {
        const [paraangPagguhit, ...mgaPunto] = guhit;
        const titikX = (p5.width - lapadNgTitik) / 2;
        const titikY = (p5.height - bilangNgTitik * tangkadNgTitik) / 2 + ikailangTitik * tangkadNgTitik;

        const putol = mgaPunto.slice(-1)[0] === PUTOL;
        if (putol) mgaPunto.pop();

        const latag =
          mgaPunto.slice(0, -2)
            .map((p, i) => ilatag(titikX, titikY, p, i))
            .concat(
              mgaPunto.slice(-2)
                .map((p, i) => ilatag(0, 0, p, i))
            );
        if (latag[0] === DUGTONG || latag[1] === DUGTONG) {
          latag[0] = pilaNgPunto[pilaNgPunto.length - 2];
          latag[1] = pilaNgPunto[pilaNgPunto.length - 1];
          if (latag[0] === PUTOL || latag[1] === PUTOL) throw new Error("Maling pagtala ng titik: " + titik);
        }

        pilaNgPunto.push(...paraangPagguhit(...latag));

        if (putol) pilaNgPunto.push(PUTOL, PUTOL);

        function ilatag(x, y, p, i) {
          if (p === DUGTONG) return p;
          return (i % 2) === 0 ? x + p * lapadNgTitik : y + p * tangkadNgTitik;
        }
      }

      ikailangTitik++;
    }

    const punto = { x: pilaNgPunto[0], y: pilaNgPunto[1] };
    if (!hulingPunto) hulingPunto = punto;

    const paputol = punto.x === PUTOL || punto.y === PUTOL;
    if (paputol) {
      punto.x = dulo.x + hagibis.x;
      punto.y = dulo.y + hagibis.y;
      let talsik = 0.8;
      if (pilaNgPunto.length <= 2) {
        if (pilaNgBaybay.length === 0) {
          talsik = 1.1;
        } else {
          talsik = 1.0;
        }
      }
      hagibis.x = hagibis.x * talsik - malapit * 0.1 * Math.max(0, talsik - 1);
      hagibis.y = hagibis.y * talsik - malapit * 0.05 * Math.max(0, talsik - 1);
    }

    if (punto.x === DUGTONG || punto.y === DUGTONG) {
      pilaNgPunto = pilaNgPunto.slice(2);
    } else {
      if (diin <= 0) {
        p5.beginShape();
        diin = 0.001;
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
      diin =
        paputol
          ? Math.max(0, Math.min(diin - malapit / 400, 1) * 0.998)
          : Math.max(1e-6, timpla(diin, tangkangDiin(), 0.1));
      p5.noFill();
      p5.stroke(0, 0, 0);
      p5.strokeWeight(lapadNgGuhit * diin);
      p5.line(dulo.x - hagibis.x, dulo.y - hagibis.y, dulo.x, dulo.y);

      bakuran(dulo.x, dulo.y + lapadNgGuhit / 2);

      if (paputol ? diin < 1e-6 : lampas(punto)) {
        hulingPunto = punto;
        pilaNgPunto = pilaNgPunto.slice(2);
        if (paputol) {
          diin = 0;
        }
      }
    }
  };
});

function darasigin(punto, dulo) {
  const layo = Math.hypot(punto.x - dulo.x, punto.y - dulo.y);
  if (layo === 0) return { x: 0, y: 0 };
  const tungoX = (punto.x - dulo.x) / layo;
  const tungoY = (punto.y - dulo.y) / layo;

  const bilis = Math.hypot(hagibis.x, hagibis.y);
  const bilisX = bilis === 0 ? 0 : hagibis.x / bilis;
  const bilisY = bilis === 0 ? 0 : hagibis.y / bilis;

  const darasigan =
    (1.2 / malapit)
    + (Math.log1p(layo / malapit) * 0.3)
    * Math.max(0, sigmoyd(dot(tungoX, tungoY, bilisX, bilisY) * 6 - 2));
  return {
    x: tungoX * darasigan,
    y: tungoY * darasigan,
  };
}

function kiskis(hagibis) {
  const k = 0.97;
  const s = 0.3;
  const bilis = Math.hypot(hagibis.x, hagibis.y) / malapit;
  return bilis === 0 ? k : k / Math.log(Math.abs(bilis * s) + Math.E);
}

function tangkangDiin() {
  const bilis = Math.hypot(hagibis.x, hagibis.y) / malapit;
  return Math.min(1, 2 * Math.pow(0.06 / (0.01 + bilis), 0.5));
}

function lampas(punto) {
  const laktaw = 2;
  const laktawX = dulo.x + hagibis.x * laktaw;
  const laktawY = dulo.y + hagibis.y * laktaw;

  const layo = Math.hypot(punto.x - laktawX, punto.y - laktawY);
  if (layo <= malapit) return true;

  const tungoX = (punto.x - laktawX) / layo;
  const tungoY = (punto.y - laktawY) / layo;

  const pagitan = Math.hypot(punto.x - hulingPunto.x, punto.y - hulingPunto.y);
  if (pagitan === 0) return true;

  const dakoX = (punto.x - hulingPunto.x) / pagitan;
  const dakoY = (punto.y - hulingPunto.y) / pagitan;

  return dot(tungoX, tungoY, dakoX, dakoY) <= 0;
}

function bakuran(x, y) {
  const a = Math.floor(saanSaBakod(x));
  bakod[a] = Math.max(bakod[a], y);
}

function bakodSa(x) {
  const saan = saanSaBakod(x);
  return timpla(bakod[Math.floor(saan)], bakod[Math.ceil(saan)], saan - Math.floor(saan));
}

function saanSaBakod(x) {
  return Math.max(0, Math.max(bilangNgBakod - 1, (x - (p5.width - lapadNgTitik) / 2) * (bilangNgBakod - 1))) / lapadNgTitik;
}

function dot(a, b, x, y) {
  return a * x + b * y;
}

function sigmoyd(x) {
  return 1 / (1 + Math.pow(Math.E, -x));
}
