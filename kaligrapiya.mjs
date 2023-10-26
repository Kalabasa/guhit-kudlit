import "https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/p5.js";
const P5 = window.p5;
let p5 = null;

// ⎫
function guhitTalon(x0, y0, x1, y1, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.25) + hx, y0,
    timpla(x0, x1, 0.5) + hx, timpla(y0, y1, 0.5),
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
    timpla(x0, x1, 0.4) + hx * 0.5, timpla(y0, y1, 0.4),
    timpla(x0, x1, 0.6) + hx * 0.8, timpla(y0, y1, 0.6),
    timpla(x0, x1, 0.8) + hx * 0.8, timpla(y0, y1, 0.8),
    x1, y1
  ];
}
// ω
function guhitUlap(x0, y0, x1, y1, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.1), timpla(y0, y1, 0.1) + hy * 0.8,
    timpla(x0, x1, 0.3), timpla(y0, y1, 0.3) + hy,
    timpla(x0, x1, 0.4), timpla(y0, y1, 0.4) + hy * 0.4,
    timpla(x0, x1, 0.6), timpla(y0, y1, 0.6) + hy,
    timpla(x0, x1, 0.9), timpla(y0, y1, 0.9) + hy,
    x1, y1
  ];
}
// ∩
function guhitBundok(x0, y0, x1, y1, x2, y2, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.5) - hx, timpla(y0, y1, 0.5) - hy,
    x1, y1,
    timpla(x1, x2, 0.5) + hx, timpla(y1, y2, 0.5) - hy,
    x2, y2
  ];
}
// ⏤
function guhitTuwid(x0, y0, x1, y1, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.5) + hx, timpla(y0, y1, 0.5) + hy,
    x1, y1
  ];
}
// dulong parte ng ᜏ
function guhitSaWa(x0, y0, x1, y1, hx, hy) {
  return [
    x0, y0,
    timpla(x0, x1, 0.05) + hx, timpla(y0, y1, 0.05),
    timpla(x0, x1, 0.57) + hx, timpla(y0, y1, 0.75),
    x1, y1
  ];
}

function timpla(a, b, t) {
  return a + (b - a) * t;
}

const DUGTONG = Symbol("dugtong");
const PUTOL = Symbol("putol");

const guhitDa = [
  [guhitTalon, 0.0, 0.0, 0.1, 0.7, 0.1, 0.0],
  [guhitAlon, DUGTONG, DUGTONG, 1.0, 0.8, 0.0, 0.12, PUTOL],
  [guhitAlon, 0.15, 0.1, 1.0, 0.2, 0.0, 0.12, PUTOL],
];
const guhitYa = [
  [guhitTalon, 0.0, 0.0, 0.2, 0.8, 0.1, 0.0],
  [guhitAlon, DUGTONG, DUGTONG, 1.0, 0.4, 0.0, 0.05, PUTOL],
];

const talaguhitan = {
  "a": [
    ...guhitYa,
    [guhitTuwid, 0.0, 0.4, 0.15, 0.4, 0.05, -0.05, PUTOL],
  ],
  "i": [
    [guhitAlon, 0.0, 0.2, 1.0, 0.2, 0.0, 0.1, PUTOL],
    [guhitUlap, 0.0, 0.5, 1.0, 0.5, 0.0, 0.2, PUTOL],
  ],
  "u": [
    [guhitIlog, 0.3, 0.0, 0.3, 1.0, 0.4, 0.0, PUTOL],
  ],
  "b": [
    [guhitBundok, 0.0, 0.8, 0.5, 0.2, 1.0, 0.8, 0.1, 0.1],
    [guhitUlap, DUGTONG, DUGTONG, 0.0, 0.8, 0.2, 0.2, PUTOL],
  ],
  "k": [
    [guhitAlon, 0.0, 0.2, 1.0, 0.2, 0.0, 0.1, PUTOL],
    [guhitAlon, 0.0, 0.8, 1.0, 0.8, 0.0, 0.1, PUTOL],
    [guhitTuwid, 0.52, 0.2, 0.54, 0.8, -0.02, -0.1, PUTOL],
  ],
  "d": guhitDa,
  "g": [
    [guhitIlog, 0.0, 0.1, 0.0, 0.9, 0.3, 0.0, PUTOL],
    [guhitTalon, 0.4, 0.3, 1.0, 0.8, 0.2, 0.0, PUTOL],
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
    [guhitTuwid, 0.2, 0.5, 0.6, 0.5, 0.05, -0.05, PUTOL],
  ],
  "n": [
    [guhitBundok, 0.0, 0.8, 0.5, 0.2, 1.0, 0.8, 0.1, 0.1, PUTOL],
    [guhitIlog, 0.5, 0.2, 0.5, 1.0, 0.15, 0.0, PUTOL],
  ],
  "ng": [
    [guhitTalon, 0.0, 0.2, 0.2, 1.0, 0.2, 0.0, PUTOL],
    [guhitUlap, 0.4, 0.5, 1.0, 0.5, 0.0, 0.15, PUTOL],
  ],
  "p": [
    ...guhitYa,
    [guhitTuwid, 0.65, 0.7, 1.0, 0.65, -0.1, -0.05, PUTOL],
  ],
  "r": [
    ...guhitDa,
    [guhitTuwid, 0.5, 0.0, 0.5, 1.0, 0.0, 0.0, PUTOL],
  ],
  "s": [
    [guhitTalon, 0.0, 0.2, 0.1, 0.8, 0.1, 0.0],
    [guhitAlon, DUGTONG, DUGTONG, 0.7, 0.3, 0.0, 0.05],
    [guhitIlog, DUGTONG, DUGTONG, 0.7, 1.0, 0.3, 0.0, PUTOL],
  ],
  "t": [
    [guhitAlon, 0.0, 0.6, 1.0, 0.4, 0.0, 0.1, PUTOL],
    [guhitTuwid, 0.6, 0.5, 0.25, 1.0, -0.05, -0.05, PUTOL],
  ],
  "w": [
    [guhitTalon, 0.0, 0.0, 0.2, 0.8, 0.1, 0.0],
    [guhitSaWa, DUGTONG, DUGTONG, 0.6, 0.0, 0.4, 0.0, PUTOL],
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
  p5.background(0xff);

  const tangkad = p5.height - palugit * 2;
  bilangNgTitik = baybay.length;
  tangkadNgTitik = Math.min(tangkad / bilangNgTitik, p5.height / 3);
  tangkadNgTitik *= 0.7; // palugit para sa mga kudlit
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
    p5.disableFriendlyErrors = true;
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

      const titikX = (p5.width - lapadNgTitik) / 2;

      for (const guhit of mgaGuhit) {
        const [paraangPagguhit, ...mgaPunto] = guhit;

        const titikY = (p5.height - bilangNgTitik * tangkadNgTitik) / 2 + ikailangTitik * tangkadNgTitik;

        const putol = mgaPunto.slice(-1)[0] === PUTOL;
        if (putol) mgaPunto.pop();

        let latag =
          mgaPunto.slice(0, -2)
            .map((p, i) => ilatag(titikX, titikY, p, i))
            .concat(
              // huling dalawang punto ay para sa hilis
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

      kudlitan(titik);
      ihanay(pilaNgPunto, titikX, titikX + lapadNgTitik);

      ikailangTitik++;
    }

    const punto = { x: pilaNgPunto[0], y: pilaNgPunto[1] };
    if (!hulingPunto) hulingPunto = punto;

    const paputol = punto.x === PUTOL || punto.y === PUTOL;
    if (paputol) {
      punto.x = dulo.x + hagibis.x;
      punto.y = dulo.y + hagibis.y;
      let talsik = 0.85;
      talsik += 0.05 / Math.max(1, pilaNgPunto.length - 3);
      if (pilaNgBaybay.length === 0) {
        talsik += 2.5 / (20 + Math.max(0, pilaNgPunto.length - 2));
      }
      const anggulo = Math.atan2(hagibis.y, hagibis.x);
      const liko = Math.PI / 2;
      const lakasNgLiko = 0.4;
      const likoX = Math.cos(anggulo + liko) * malapit * lakasNgLiko;
      const likoY = Math.sin(anggulo + liko) * malapit * lakasNgLiko;
      const tulakX = likoX * Math.max(0, talsik - 1);
      const tulakY = likoY * Math.max(0, talsik - 1);;
      hagibis.x = hagibis.x * talsik + tulakX;
      hagibis.y = hagibis.y * talsik + tulakY
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
          ? Math.max(0, Math.min(1, diin - malapit * 0.001 - Math.max(0, 0.6 - diin) * 0.1))
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

function ihanay(mgaPunto, kaliwaX, kananX) {
  let usogKaliwaY = 0;
  let usogKananY = 0;

  for (const p of sundin(mgaPunto, lapadNgGuhit * 0.5)) {
    const bakod = bakodSa(p.x);
    const y = p.y - lapadNgGuhit;
    if (y < bakod) {
      const hilis = Math.max(0, Math.min(1, (p.x - kaliwaX) / (kananX - kaliwaX)));
      usogKaliwaY = Math.max(usogKaliwaY, (bakod - y) * Math.min(1, (1 - hilis) * 2));
      usogKananY = Math.max(usogKananY, (bakod - y) * Math.min(1, hilis * 2));
    }
  }

  usogKaliwaY = Math.max(usogKaliwaY, usogKananY - tangkadNgTitik * 0.1);
  usogKananY = Math.max(usogKananY, usogKaliwaY - tangkadNgTitik * 0.1);
  console.log(usogKaliwaY, usogKananY);

  for (let i = 0; i < mgaPunto.length; i += 2) {
    const x = mgaPunto[i];
    const y = mgaPunto[i + 1];
    if (x === PUTOL || y === PUTOL) continue;
    mgaPunto[i + 1] += timpla(usogKaliwaY, usogKananY, 0.5);
  }
}

function kudlitan(titik) {
  const katinig = titik.match(/[^aiu]/)?.[0];
  if (!katinig) return;

  const patinig = titik.match(/[aiu]/)?.[0];
  if (patinig === "a") return;

  let kananX = -Infinity;
  let kaliwaX = Infinity;
  let ilalimY = -Infinity;
  let ibabawY = Infinity;
  for (let i = 0; i < pilaNgPunto.length; i += 2) {
    const x = pilaNgPunto[i];
    const y = pilaNgPunto[i + 1];
    if (x === PUTOL || y === PUTOL) continue;
    if (x > kananX) kananX = x;
    if (x < kaliwaX) kaliwaX = x;
    if (y < ibabawY) ibabawY = y;
    if (y > ilalimY) ilalimY = y;
  }

  const hakbang = lapadNgGuhit * 0.2;

  if (patinig === "i") {
    const kudlitX = kaliwaX + lapadNgTitik * 0.4;

    let sabit = null;
    let antasNgSabit = Infinity;
    for (const p of sundin(pilaNgPunto, hakbang)) {
      if (Math.abs(p.x - kudlitX) > lapadNgGuhit * 0.75) continue;
      const antasNito = Math.abs(p.x - kudlitX) + (p.y - ilalimY);
      if (antasNito < antasNgSabit) {
        sabit = { x: p.x, y: p.y };
        antasNgSabit = antasNito;
      }
    }

    const kudlitY = Math.min(timpla(ibabawY, ilalimY, 0.2), sabit.y - lapadNgGuhit);

    pilaNgPunto.push(
      ...guhitTuwid(
        kudlitX - lapadNgTitik * 0.04, kudlitY,
        kudlitX + lapadNgTitik * 0.04, kudlitY - tangkadNgTitik * 0.05,
        lapadNgTitik * 0.03, tangkadNgTitik * 0.03
      ),
      PUTOL, PUTOL
    );
  } else if (patinig === "u") {
    const kudlitX = kananX - lapadNgTitik * 0.15;

    let sabit = null;
    let antasNgSabit = Infinity;
    for (const p of sundin(pilaNgPunto, hakbang)) {
      if (Math.abs(p.x - kudlitX) > lapadNgGuhit * 0.75) continue;
      const antasNito = Math.abs(p.x - kudlitX) + (ibabawY - p.y) * 2;
      if (antasNito < antasNgSabit) {
        sabit = { x: p.x, y: p.y };
        antasNgSabit = antasNito;
      }
    }

    const kudlitY = Math.max(timpla(ibabawY, ilalimY, 0.8), sabit.y + lapadNgGuhit);

    pilaNgPunto.push(
      ...guhitTuwid(
        kudlitX - lapadNgTitik * 0.04, kudlitY + tangkadNgTitik * 0.05,
        kudlitX + lapadNgTitik * 0.04, kudlitY,
        -lapadNgTitik * 0.02, -tangkadNgTitik * 0.02
      ),
      PUTOL, PUTOL
    );
  } else if (!patinig) { // pamudpod
    let sabit = null;
    let antasNgSabit = Infinity;
    for (const p of sundin(pilaNgPunto, hakbang)) {
      if (Math.abs(p.x - kananX) > lapadNgTitik * 0.25) continue;
      const antasNito = (kananX - p.x) + (ilalimY - p.y) * 2;
      if (antasNito < antasNgSabit) {
        sabit = { x: p.x, y: p.y };
        antasNgSabit = antasNito;
      }
    }

    const kudlitX = Math.max(timpla(kaliwaX, kananX, 0.9), sabit.x);
    const kudlitY = Math.max(timpla(ibabawY, ilalimY, 0.7), sabit.y);

    pilaNgPunto.push(
      ...guhitTuwid(
        kudlitX + lapadNgTitik * 0.3, kudlitY - tangkadNgTitik * 0.05,
        kudlitX, kudlitY + tangkadNgTitik * 0.25,
        lapadNgTitik * 0.1, tangkadNgTitik * 0.1
      ),
      PUTOL, PUTOL
    );
  }
}

function* sundin(mgaPunto, hakbang) {
  let dulo = null;
  let pila = [...mgaPunto];
  while (pila.length > 0) {
    const punto = { x: pila[0], y: pila[1] };

    if (punto.x === PUTOL || punto.y === PUTOL) {
      dulo = null;
      pila = pila.slice(2);
      continue;
    }

    if (!dulo) dulo = { x: punto.x, y: punto.y };

    yield dulo;

    const layoX = punto.x - dulo.x;
    const layoY = punto.y - dulo.y;
    const layo = Math.hypot(layoX, layoY);

    if (layo < hakbang / 2) {
      pila = pila.slice(2);
      continue;
    }

    dulo.x += hakbang * layoX / layo;
    dulo.y += hakbang * layoY / layo;
  }
}

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


  const nginig = malapit * 0.01 / (1 + darasigan * 4);
  const nginigX = p5.randomGaussian(0, nginig);
  const nginigY = p5.randomGaussian(0, nginig);

  return {
    x: tungoX * darasigan + nginigX,
    y: tungoY * darasigan + nginigY,
  };
}

function kiskis(hagibis) {
  const k = 0.96;
  const s = 0.3;
  const bilis = Math.hypot(hagibis.x, hagibis.y) / malapit;
  return bilis === 0 ? k : k / Math.log(Math.abs(bilis * s) + Math.E);
}

function tangkangDiin() {
  const bilis = Math.hypot(hagibis.x, hagibis.y) / malapit;
  return Math.min(1, 1.8 * Math.pow(0.06 / (0.01 + bilis), 0.5));
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
