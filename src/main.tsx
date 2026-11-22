import { Component, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

class Boundary extends Component<{ children: ReactNode }, { err: Error | null }> {
  state = { err: null as Error | null };
  static getDerivedStateFromError(err: Error) { return { err }; }
  render() {
    if (this.state.err) {
      return (
        <div className="page" style={{ padding: 24 }}>
          <h2>😵 Что-то пошло не так</h2>
          <p className="muted">{String(this.state.err.message)}</p>
          <button className="btn primary" onClick={() => { this.setState({ err: null }); location.hash = ''; location.reload(); }}>Перезагрузить</button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(<Boundary><App /></Boundary>);
