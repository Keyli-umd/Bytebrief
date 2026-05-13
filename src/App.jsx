import React, { useState, useEffect } from 'react';
import { Zap, Share2, ExternalLink, Clock, RefreshCw } from 'lucide-react';
import './App.css';

const MOCK_NEWS = [
  { id: 1, title: "React 19: Lo que viene en el nuevo compilador", tag: "Frontend", readTime: "5 min" },
  { id: 2, title: "ESP32 vs Arduino: ¿Cuál elegir para tu próximo proyecto IoT?", tag: "Hardware", readTime: "8 min" },
  { id: 3, title: "7 Extensiones de VS Code que todo Junior debe tener", tag: "Herramientas", readTime: "4 min" },
  { id: 4, title: "Guía definitiva: De JavaScript plano a React Native", tag: "Mobile", readTime: "12 min" },
];

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulación de una llamada a API
  useEffect(() => {
    const timer = setTimeout(() => {
      setNews(MOCK_NEWS);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">
          <Zap size={24} fill="#f59e0b" color="#f59e0b" />
          <span>ByteBrief</span>
        </div>
        <button className="refresh-btn" onClick={() => window.location.reload()}>
          <RefreshCw size={20} />
        </button>
      </header>

      <main className="feed">
        <p className="subtitle">Tu dosis diaria de tecnología</p>
        
        {loading ? (
          <div className="skeleton-container">
            {[1, 2, 3].map(i => <div key={i} className="skeleton-card"></div>)}
          </div>
        ) : (
          news.map(item => (
            <div key={item.id} className="news-card">
              <span className="badge">{item.tag}</span>
              <h3>{item.title}</h3>
              <div className="card-footer">
                <div className="meta">
                  <Clock size={14} />
                  <span>{item.readTime}</span>
                </div>
                <div className="actions">
                  <Share2 size={18} />
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default App;