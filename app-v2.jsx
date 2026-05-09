/* global React, ReactDOM */
const { useState, useEffect } = React;

const WORKS = [
  {
    n: 1,
    title: 'Idea, Character, You',
    titleIt: true,
    form: 'Short Story',
    year: '2025',
    posterClass: 'poster-1',
    posterContent: <><div className="orb"></div><div className="poster-title"><em>Idea,</em><br/>Character,<br/>You</div></>,
    body: `From nothingness come black lines, not crisscrossing, not meandering, but gently unfolding across the blank void. It is difficult to make sense of the abstractions, for there is malice radiating from the expanding hills. Perhaps it's not malice, but rather the desire to shape, to bring something, anything, into the emptiness.

Then an idea — a pulsating white orb of an idea — appears. Along with it, a disembodied voice floats through the black rows of hills, surrounding the idea, groping, clutching, molding the orb.

*I am your creator, a humble craftsman. Now, become what you are.*

The idea seems to hesitate. Is existence such a sweet experience that it's worth being hurled into the void? It can feel the nauseating disintegration, the deafening cracking of its comfortable shell. Oh, to bear the burden of being, to be pulled from the whirlpool of possibilities, to be molded into the claustrophobic certainty of existence.

*You are going to be the center of the world. Everything will be about you.*

To be the focus of this void? How absurd. No, it does not want attention, nor does it want the emptiness to be its sole companion. The idea feels itself being stuffed into another vessel, this time a humanoid figure that feels connected to that infuriating noise.

"I don't want to be something that you use to escape from mediocrity," the character gasps. The hills tighten further around its neck. It has just come into being, and now its shoulders have already been burdened by a mountain higher than the hills.

But the voice does not reply. Maybe it is gone, drawn back into the void.`,
    tags: ['a dialogue between an idea and the voice that wants to give it form', 'on absurdity, authorship, and the violence of being made']
  },
  {
    n: 2,
    title: 'Three Knocks',
    titleIt: false,
    form: 'Gothic Horror',
    year: '2025',
    posterClass: 'poster-2',
    posterContent: <><div className="knock k1">·</div><div className="knock k2">·</div><div className="knock k3">·</div><div className="door"></div><div className="poster-title">Three<br/>Knocks</div></>,
    body: `Thrice did the knock sound upon my chamber door. Thrice did I cast it aside, for my mind was too ensconced by the heavy fog of unconsciousness. I opened my eyes and lifted my gaze from the fireplace.

The clock tolled twelve. Its sonorous voice reverberated off the walls and back into my mind — and with the last stroke, the infernal knocking, at last — ceased! The room grew still, save for the crackling of the flames, but within me, a deeper unease stirred.

The parcel, at last, revealed its secret — a book, aged and worn, its leather-bound cover cracked and molded. The spine bore no title, only the faint scent of decay and ash. My hands trembled as I lifted it.

Open the book I did, against the protests of my resistant self that cowered in the corner of my mind. The text within was written in an ink that seemed to shift as my gaze traveled down its pages. The whispers grew, and the voices echoed in my skull. Relentless and cruel they were!

*Before I slipped into unconsciousness, three knocks came once more from the closed chamber door.*`,
    tags: ['after Poe — pastiche & devotion', 'a study in archaic syntax and the weight of unspeakable knowledge']
  },
  {
    n: 3,
    title: 'The Farthest Shore',
    titleIt: true,
    form: 'Poetry',
    year: '2025',
    posterClass: 'poster-3',
    posterContent: <><div className="shore"></div><div className="poster-title"><em>The<br/>Farthest<br/>Shore</em></div></>,
    body: `A swarm of angels plunged from the sky
with a craving for my blood and
a hunger for my hair.

Their wings carried white,
shining sand from the sea,
pelting my raw skin with a silky river of gems.

In their hands they held a sapphire mirror —
an emperor stared at
me from its papery depths,
stealing my smile to wear on his empty face.

Steel spines split from the barren soil,
anchoring an ivory tree
to the escaping clouds.
its glass branches,
fracturing
into pale, broken leaves,
reflecting a thousand me's to blot the sky.

He smiled with my lips and teeth and
I stumbled back
into the mirror depths,
smiling his proud, dazzling smile.`,
    tags: ['on the borrowed face, the broken mirror', 'in the lineage of Lorca and Plath']
  },
  {
    n: 4,
    title: 'When the Osmanthus Fell',
    titleIt: true,
    form: 'Creative Nonfiction',
    year: '2025',
    posterClass: 'poster-4',
    posterContent: <>
      <div className="petal" style={{top:'18%',left:'22%',transform:'rotate(20deg)'}}></div>
      <div className="petal" style={{top:'30%',right:'24%',transform:'rotate(-15deg)'}}></div>
      <div className="petal" style={{bottom:'22%',left:'30%',transform:'rotate(45deg)'}}></div>
      <div className="petal" style={{bottom:'30%',right:'20%',transform:'rotate(-30deg)'}}></div>
      <div className="poster-title"><em>When the<br/>Osmanthus<br/>Fell</em></div>
    </>,
    body: `Where I live, autumn typically arrives through storms. As if making up for the sudden entrance, this year's autumn has been uncharacteristically gentle. The murderous summer sun that hung above my neighborhood is now overthrown, and the world lets out a long sigh of relief in the cool breeze.

Summer wind is not really wind, but a ripple of heat, like air around an open oven. Autumn wind carries a gentleness that is mischievous and somehow alive, always bringing the scent of our osmanthus into my room.

The osmanthus had been there before we moved in, and it was my constant companion each autumn ever since. It was not a tall tree, but it had a subtle presence amongst the towering plane trees. After each rainy day, the osmanthus would always send its scent into my room.

But this year it doesn't.

I stood at my window from the second floor while the men worked, my palms sticky with the last fallen petals I had scooped up in a desperate attempt to preserve the osmanthus flowers that morning. The saw sounded like a preying animal, biting into the tree trunk. A hungry wolf, I said to myself with morbid fascination.

I look at the open sky, the sky devoid of osmanthus branches. A bird flies by. I smile and return to my room. There is life, and there is hope — the hope, the resolve, that the osmanthus will live inside me.`,
    tags: ['on the cutting of a tree and what comes after', 'the absurdist register made small, made domestic']
  },
];

const BOOKS = [
  { author: 'Albert Camus', title: "L'Étranger", year: 1942, star: true },
  { author: 'Albert Camus', title: 'Le Mythe de Sisyphe', year: 1942, star: true },
  { author: 'Albert Camus', title: 'La Peste', year: 1947, star: false },
  { author: 'Franz Kafka', title: 'The Trial', year: 1925, star: true },
  { author: 'Franz Kafka', title: 'The Metamorphosis', year: 1915, star: false },
  { author: 'Can Xue', title: 'Frontier', year: 2008, star: false },
  { author: 'Clarice Lispector', title: 'The Hour of the Star', year: 1977, star: true },
  { author: 'Italo Calvino', title: 'Invisible Cities', year: 1972, star: false },
  { author: 'Jorge Luis Borges', title: 'Ficciones', year: 1944, star: true },
  { author: 'Yoko Tawada', title: 'The Emissary', year: 2014, star: false },
  { author: 'Samuel Beckett', title: 'Molloy', year: 1951, star: false },
  { author: 'Marguerite Duras', title: "L'Amant", year: 1984, star: false },
  { author: 'Lu Xun', title: 'Diary of a Madman', year: 1918, star: false },
  { author: 'Fernando Pessoa', title: 'The Book of Disquiet', year: 1982, star: true },
  { author: 'Edgar Allan Poe', title: 'Tales of Mystery & Imagination', year: 1908, star: false },
  { author: 'Anne Carson', title: 'Nox', year: 2010, star: true },
];

function Reader({ work, onClose }) {
  if (!work) return null;
  return (
    <div className={'reader' + (work ? ' open' : '')} onClick={onClose}>
      <div className="reader-pane" onClick={(e) => e.stopPropagation()}>
        <button className="reader-close" onClick={onClose}>close ×</button>
        <div className="reader-meta">{work.form} · {work.year}</div>
        <h3 className={work.titleIt ? 'ital' : ''}>{work.title}</h3>
        <div className="reader-body">
          {work.body.split('\n\n').map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*([^*]+)\*/g, '<em>$1</em>') }} />
          ))}
        </div>
        <div className="reader-tags">
          {work.tags.map((t, i) => <div key={i}>— {t}</div>)}
        </div>
      </div>
    </div>
  );
}

function MusicAndFilm() {
  const [playing, setPlaying] = React.useState(false);
  const [trackIdx, setTrackIdx] = React.useState(0);
  const [bars, setBars] = React.useState(Array(28).fill(4));
  const audioCtx = React.useRef(null);
  const stopFn = React.useRef(null);
  const rafRef = React.useRef(null);

  const tracks = [
    { title: 'Saint-Germain-des-Prés', artist: 'after the chanson', mode: 'chanson' },
    { title: 'Aoba', artist: 'in the manner of Air', mode: 'ambient' },
    { title: 'Polyrhythme', artist: 'Stromae, refracted', mode: 'pulse' },
    { title: 'Quatre heures du matin', artist: 'a métro reverie', mode: 'sparse' },
    { title: 'Drum Pattern in 7/8', artist: 'kit étude', mode: 'kit' },
  ];

  const films = [
    { meta: 'Truffaut · 1959', title: 'Les Quatre Cents Coups', cls: 'film-1', poster: 'p1' },
    { meta: 'Godard · 1965', title: 'Pierrot le Fou', cls: 'film-2', poster: 'p2' },
    { meta: 'Varda · 1985', title: 'Sans toit ni loi', cls: 'film-3', poster: 'p3' },
    { meta: 'Carax · 2012', title: 'Holy Motors', cls: 'film-4', poster: 'p4' },
    { meta: 'Linklater · 1995', title: 'Before Sunrise', cls: 'film-5', poster: 'p5' },
    { meta: 'Jia Zhangke · 2015', title: 'Mountains May Depart', cls: 'film-6', poster: 'p6' },
  ];

  const Poster = ({ kind }) => {
    if (kind === 'p1') return ( // 400 Blows — boy running toward sea
      <svg className="poster" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="300" fill="#A89478"/>
        <rect y="180" width="200" height="120" fill="#5A6B6E"/>
        <rect y="220" width="200" height="80" fill="#3A4A4E"/>
        <g fill="#1A1410">
          <ellipse cx="100" cy="155" rx="6" ry="8"/>
          <rect x="96" y="160" width="8" height="22"/>
          <path d="M96 180 L92 200 L96 200 Z M104 180 L108 200 L104 200 Z" />
          <rect x="92" y="167" width="4" height="14" transform="rotate(-15 94 174)"/>
          <rect x="104" y="167" width="4" height="14" transform="rotate(20 106 174)"/>
        </g>
        <line x1="0" y1="180" x2="200" y2="180" stroke="#1A1410" strokeWidth="0.5" opacity="0.4"/>
      </svg>
    );
    if (kind === 'p2') return ( // Pierrot — blue & red
      <svg className="poster" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="300" fill="#1E3A5F"/>
        <circle cx="60" cy="100" r="55" fill="#C73E2E" opacity="0.85"/>
        <circle cx="140" cy="200" r="40" fill="#E8C77A" opacity="0.7"/>
        <rect x="20" y="240" width="160" height="2" fill="#F2E8D0"/>
        <text x="20" y="50" fontFamily="serif" fontStyle="italic" fontSize="48" fill="#F2E8D0" opacity="0.9">P</text>
        <text x="160" y="280" fontFamily="serif" fontStyle="italic" fontSize="32" fill="#F2E8D0" opacity="0.6">.</text>
      </svg>
    );
    if (kind === 'p3') return ( // Vagabond — woman walking, road
      <svg className="poster" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="300" fill="#B89866"/>
        <rect y="200" width="200" height="100" fill="#6B5028"/>
        <path d="M0 220 L200 220" stroke="#3A2A1C" strokeWidth="0.8" opacity="0.6"/>
        <path d="M40 300 L100 200 L160 300 Z" fill="#3A2A1C" opacity="0.3"/>
        <g fill="#1A1410">
          <circle cx="100" cy="180" r="5"/>
          <path d="M97 184 L95 220 L98 220 L100 195 L102 220 L105 220 L103 184 Z"/>
          <rect x="92" y="186" width="16" height="4" rx="2"/>
        </g>
        <line x1="100" y1="220" x2="100" y2="300" stroke="#1A1410" strokeWidth="0.3" strokeDasharray="4,4" opacity="0.5"/>
      </svg>
    );
    if (kind === 'p4') return ( // Holy Motors — limo at night
      <svg className="poster" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="300" fill="#0A0612"/>
        <circle cx="100" cy="80" r="48" fill="#F2E8D0" opacity="0.18"/>
        <circle cx="100" cy="80" r="28" fill="#F2E8D0" opacity="0.4"/>
        <rect x="20" y="195" width="160" height="35" rx="8" fill="#1A1410"/>
        <rect x="35" y="200" width="40" height="14" rx="2" fill="#3A2A2A" opacity="0.7"/>
        <rect x="125" y="200" width="40" height="14" rx="2" fill="#3A2A2A" opacity="0.7"/>
        <circle cx="45" cy="232" r="7" fill="#1A1410" stroke="#F2E8D0" strokeWidth="0.5"/>
        <circle cx="155" cy="232" r="7" fill="#1A1410" stroke="#F2E8D0" strokeWidth="0.5"/>
        <ellipse cx="30" cy="210" rx="3" ry="2" fill="#E8C77A" opacity="0.9"/>
        <ellipse cx="170" cy="210" rx="3" ry="2" fill="#C73E2E" opacity="0.9"/>
      </svg>
    );
    if (kind === 'p5') return ( // Before Sunrise — Vienna golden
      <svg className="poster" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bs1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#E8B86E"/>
            <stop offset="1" stopColor="#6B3A28"/>
          </linearGradient>
        </defs>
        <rect width="200" height="300" fill="url(#bs1)"/>
        <g fill="#2A1810" opacity="0.85">
          <rect x="30" y="180" width="20" height="60"/>
          <polygon points="30,180 40,160 50,180"/>
          <rect x="60" y="160" width="30" height="80"/>
          <rect x="100" y="170" width="15" height="70"/>
          <rect x="125" y="150" width="35" height="90"/>
          <polygon points="142,150 142,130 160,150"/>
          <rect x="170" y="175" width="20" height="65"/>
        </g>
        <rect y="240" width="200" height="60" fill="#2A1810"/>
        <g fill="#1A1410">
          <circle cx="92" cy="245" r="3"/>
          <rect x="90" y="248" width="4" height="20"/>
          <circle cx="108" cy="245" r="3"/>
          <rect x="106" y="248" width="4" height="20"/>
        </g>
        <line x1="40" y1="245" x2="160" y2="245" stroke="#E8B86E" strokeWidth="0.4" opacity="0.5"/>
      </svg>
    );
    if (kind === 'p6') return ( // Mountains May Depart — three eras
      <svg className="poster" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="100" fill="#C73E2E"/>
        <rect y="100" width="200" height="100" fill="#3A5068"/>
        <rect y="200" width="200" height="100" fill="#1A2030"/>
        <path d="M0 100 L60 75 L100 90 L150 70 L200 85 L200 100 Z" fill="#8B2818" opacity="0.7"/>
        <path d="M0 200 L80 170 L140 185 L200 165 L200 200 Z" fill="#1A2840" opacity="0.7"/>
        <path d="M0 300 L70 270 L130 285 L200 265 L200 300 Z" fill="#0A1018" opacity="0.7"/>
        <circle cx="160" cy="55" r="14" fill="#F2E8D0" opacity="0.85"/>
        <circle cx="40" cy="140" r="8" fill="#F2E8D0" opacity="0.5"/>
        <text x="100" y="295" textAnchor="middle" fontFamily="serif" fontSize="10" fill="#F2E8D0" opacity="0.4">1999 · 2014 · 2025</text>
      </svg>
    );
    return null;
  };

  const startAudio = (mode) => {
    if (stopFn.current) { stopFn.current(); stopFn.current = null; }
    if (!audioCtx.current) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      audioCtx.current = new Ctx();
    }
    const ctx = audioCtx.current;
    if (ctx.state === 'suspended') ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 0.4);
    master.connect(ctx.destination);

    const reverb = ctx.createDelay(1.0);
    reverb.delayTime.value = 0.28;
    const fb = ctx.createGain(); fb.gain.value = 0.32;
    reverb.connect(fb); fb.connect(reverb);
    const wet = ctx.createGain(); wet.gain.value = 0.4;
    reverb.connect(wet); wet.connect(master);

    const chordHz = mode === 'chanson' ? [220, 277.18, 329.63]
                  : mode === 'ambient' ? [261.63, 329.63, 392, 493.88]
                  : mode === 'pulse'   ? [196, 246.94, 293.66]
                  : mode === 'sparse'  ? [174.61, 220, 261.63]
                  : [110, 164.81, 220];

    const oscs = chordHz.map((f, i) => {
      const o = ctx.createOscillator();
      o.type = mode === 'kit' ? 'sawtooth' : (mode === 'pulse' ? 'square' : 'sine');
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.12 / chordHz.length;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.15 + i * 0.05;
      const lfoG = ctx.createGain();
      lfoG.gain.value = 0.04;
      lfo.connect(lfoG); lfoG.connect(g.gain);
      o.connect(g); g.connect(reverb); g.connect(master);
      o.start(); lfo.start();
      return { o, lfo, g };
    });

    let beatTimer = null;
    if (mode !== 'ambient') {
      const beatInt = mode === 'pulse' ? 250 : (mode === 'kit' ? 200 : 600);
      let step = 0;
      beatTimer = setInterval(() => {
        const now = ctx.currentTime;
        const noise = ctx.createBufferSource();
        const buf = ctx.createBuffer(1, 4096, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i/600);
        noise.buffer = buf;
        const ng = ctx.createGain();
        const accent = (mode === 'pulse' ? (step % 7 === 0) : (step % 4 === 0)) ? 0.18 : 0.06;
        ng.gain.setValueAtTime(accent, now);
        ng.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        const filt = ctx.createBiquadFilter();
        filt.type = mode === 'kit' ? 'highpass' : 'lowpass';
        filt.frequency.value = mode === 'kit' ? 800 : 2000;
        noise.connect(filt); filt.connect(ng); ng.connect(master);
        noise.start(now); noise.stop(now + 0.2);
        step++;
      }, beatInt);
    }

    const analyser = ctx.createAnalyser();
    analyser.fftSize = 64;
    master.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);
    const tick = () => {
      analyser.getByteFrequencyData(data);
      const next = Array.from({ length: 28 }, (_, i) => {
        const v = data[Math.min(i, data.length - 1)] || 0;
        return Math.max(4, (v / 255) * 28);
      });
      setBars(next);
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    stopFn.current = () => {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
      setTimeout(() => {
        oscs.forEach(({o, lfo}) => { try { o.stop(); lfo.stop(); } catch(e){} });
        if (beatTimer) clearInterval(beatTimer);
      }, 350);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setBars(Array(28).fill(4));
    };
  };

  const togglePlay = () => {
    if (playing) {
      if (stopFn.current) stopFn.current();
      setPlaying(false);
    } else {
      startAudio(tracks[trackIdx].mode);
      setPlaying(true);
    }
  };

  const selectTrack = (i) => {
    setTrackIdx(i);
    if (playing) startAudio(tracks[i].mode);
    else { startAudio(tracks[i].mode); setPlaying(true); }
  };

  const next = () => selectTrack((trackIdx + 1) % tracks.length);
  const prev = () => selectTrack((trackIdx - 1 + tracks.length) % tracks.length);

  React.useEffect(() => () => { if (stopFn.current) stopFn.current(); }, []);

  return (
    <section className="section" id="other" data-screen-label="04 Music & Film">
      <div className="section-head">
        <h2>Listening &amp; watching <span className="fr">— une autre vie</span></h2>
        <span className="count">behind the writing</span>
      </div>

      <div className="mf-grid">
        <div className="mf-col">
          <h3>Music <span className="fr">— en français</span></h3>
          <p className="lede">
            I came to French through Camus and stayed for the music. Five short études —
            improvised live in your browser — in the spirit of the chanson, the ambient,
            and the kit sessions I keep at home. Press play.
          </p>

          <div className="player">
            <div className="player-head">
              <span>Side A · études</span>
              <span className="play-state">{playing ? '● live in browser' : '○ idle'}</span>
            </div>
            <div className="player-now">{tracks[trackIdx].title}</div>
            <div className="player-artist">{tracks[trackIdx].artist}</div>

            <div className="viz">
              {bars.map((h, i) => (
                <div key={i} className="viz-bar" style={{ height: h + 'px' }}></div>
              ))}
            </div>

            <div className="player-controls">
              <button className="player-btn" onClick={prev}>← prev</button>
              <button className="player-btn primary" onClick={togglePlay}>
                {playing ? '❚❚ pause' : '▶ play'}
              </button>
              <button className="player-btn" onClick={next}>next →</button>
            </div>

            <div className="tracklist">
              {tracks.map((t, i) => (
                <div key={i} className={'track' + (i === trackIdx ? ' active' : '')} onClick={() => selectTrack(i)}>
                  <span className="t-num">{String(i+1).padStart(2,'0')}</span>
                  <span className="t-title">{t.title}</span>
                  <span className="t-artist">{t.artist}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mf-col">
          <h3>Film <span className="fr">— vu et revu</span></h3>
          <p className="lede">
            Six films I keep returning to — a small loop of New Wave, néo-réalisme, and the slow,
            attentive cinema that taught me how a sentence might end on a face instead of a period.
          </p>
          <div className="films">
            {films.map((f, i) => (
              <div key={i} className={'film ' + f.cls}>
                <Poster kind={f.poster} />
                <div className="poster-shade"></div>
                <div className="film-meta">{f.meta}</div>
                <div className="film-title">{f.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [openWork, setOpenWork] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenWork(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);  return (
    <>
      <div className="topbar">
        <span className="brand">Eason Liu</span>
        <nav>
          <a href="#about">about</a>
          <a href="#writing">writing</a>
          <a href="#reading">reading</a>
          <a href="#other">music & film</a>
          <a href="#contact">contact</a>
        </nav>
        <span className="sans">mmxxvi</span>
      </div>

      <section className="hero" id="about" data-screen-label="01 Hero">
        <div className="hero-portrait"></div>
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="ital">Eason</span>.<br/>
            A reader, a writer,<br/>and a drummer
            <span className="ital"> — in that order, on most days.</span>
          </h1>
          <p>
            I write across three languages — Mandarin, English, and the French I'm still learning — about
            the small refusals that hold a life together. I keep coming back to <strong>Camus</strong>,
            to <strong>Kafka</strong>, to writers who don't pretend the world coheres.
          </p>
          <p>
            When I'm not reading I'm usually behind a drum kit. I came to French through Camus, then stayed
            for the music — <em>Daft Punk, Air, Phoenix, M83</em>, and the older grain of <em>Brassens</em> and
            <em> Gainsbourg</em>. The polyrhythm of a Stromae verse and the cadence of a Camus sentence sit,
            for me, in the same drawer.
          </p>
          <p>
            Below are <em>four short pieces</em> — a story, a gothic pastiche, a poem, an essay about a tree
            my family cut down — and a list of the books I'm arguing with this year. Click any poster to read
            the work in full.
          </p>
          <div className="hero-meta">
            <span><b>Born</b>2008, Shanghai</span>
            <span><b>Languages</b>中 / EN / <span className="italic-fr">Français</span></span>
            <span><b>Instrument</b>drum kit, since 11</span>
            <span><b>Class of</b>2026</span>
          </div>
        </div>
      </section>

      <section className="section" id="writing" data-screen-label="02 Writing">
        <div className="section-head">
          <h2>Selected writing <span className="fr">— œuvres choisies</span></h2>
          <span className="count">04 pieces · 2025</span>
        </div>
        <div className="works-grid">
          {WORKS.map((w) => (
            <div className="work-card" key={w.n} onClick={() => setOpenWork(w)}>
              <div className={'work-poster ' + w.posterClass}>
                {w.posterContent}
              </div>
              <div className="work-meta">
                <span className="form">{w.form}</span>
                <span>{w.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="reading" data-screen-label="03 Reading">
        <div className="section-head">
          <h2>What I'm reading <span className="fr">— lectures</span></h2>
          <span className="count">★ marks rereads</span>
        </div>
        <div className="reading-list">
          {BOOKS.map((b, i) => (
            <div className={'book-row' + (b.star ? ' starred' : '')} key={i}>
              <div className="idx">{String(i+1).padStart(2,'0')}</div>
              <div>
                <span className="author">{b.author}</span>
                <span className="title"><em>{b.title}</em></span>
              </div>
              <div className="year">{b.year}</div>
            </div>
          ))}
        </div>
      </section>

      <MusicAndFilm />

      <section className="contact" id="contact" data-screen-label="05 Contact">
        <div className="contact-line">
          The page ends here, but the question doesn't.
        </div>
        <div className="contact-info">
          <div><b>Email</b><a href="mailto:Yixuan.liu_eason@outlook.com">Yixuan.liu_eason@outlook.com</a></div>
          <div><b>Located</b>Shanghai</div>
          <div><b>Class of</b>2026</div>
        </div>
      </section>

      <footer>
        <span>set in EB Garamond &amp; Inter · built by hand</span>
        <span className="italic-fr">il faut imaginer Sisyphe heureux</span>
      </footer>

      <Reader work={openWork} onClose={() => setOpenWork(null)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
