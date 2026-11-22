import { useEffect, useState } from 'react';
import type { Gender, Word } from '../data/types';
import { speak } from '../lib/speech';

export function AudioBtn({ text, auto, big, label }: { text: string; auto?: boolean; big?: boolean; label?: string }) {
  const [slow, setSlow] = useState(false);
  const [playing, setPlaying] = useState(false);
  const play = (s = slow) => {
    setPlaying(true);
    speak(text, { rate: s ? 0.6 : 1, onEnd: () => setPlaying(false) });
  };
  useEffect(() => {
    if (auto) { const t = setTimeout(() => play(false), 250); return () => clearTimeout(t); }
  }, [text]); // eslint-disable-line
  return (
    <span className="audio-group">
      <button type="button" className={'audio-btn' + (big ? ' big' : '') + (playing ? ' playing' : '')} onClick={() => { play(false); setSlow(false); }} title="Прослушать">
        🔊{label ? <span className="audio-label">{label}</span> : null}
      </button>
      <button type="button" className={'audio-btn slow' + (big ? ' big' : '')} onClick={() => { setSlow(true); play(true); }} title="Медленно">🐢</button>
    </span>
  );
}

export const genderColor = (g?: Gender) => (g === 'der' ? 'var(--der)' : g === 'die' ? 'var(--die)' : g === 'das' ? 'var(--das)' : 'inherit');

export function WordView({ w, size = 1 }: { w: Word; size?: number }) {
  return (
    <span style={{ fontSize: `${size}em` }}>
      {w.g && <span style={{ color: genderColor(w.g), fontWeight: 700 }}>{w.g} </span>}
      <span>{w.de}</span>
    </span>
  );
}

/** Очень простой markdown: **жирный**, `код`, переносы строк */
export function Md({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') ? <b key={i}>{p.slice(2, -2)}</b> : p.startsWith('`') ? <code key={i}>{p.slice(1, -1)}</code> : <span key={i}>{p}</span>,
      )}
    </>
  );
}

export function MdBlock({ text }: { text: string }) {
  return (
    <div className="md">
      {text.split('\n').map((l, i) => {
        const t = l.trim();
        if (!t) return <div key={i} style={{ height: 6 }} />;
        if (/^#{1,3}\s/.test(t)) return <h4 key={i}><Md text={t.replace(/^#+\s/, '')} /></h4>;
        if (/^[-*•]\s/.test(t)) return <div key={i} className="li">• <Md text={t.replace(/^[-*•]\s/, '')} /></div>;
        return <p key={i}><Md text={t} /></p>;
      })}
    </div>
  );
}

export function UmlautBar({ onChar }: { onChar: (c: string) => void }) {
  return (
    <div className="umlauts">
      {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map((c) => (
        <button key={c} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => onChar(c)}>{c}</button>
      ))}
    </div>
  );
}

export function Spinner({ text }: { text?: string }) {
  return <div className="spinner-wrap"><div className="spinner" />{text && <span>{text}</span>}</div>;
}
