import React from 'react';
import '../Styles/BeginnerG.css';

const BeginnerG = () => {
  return (
    <div className='page'>
      <h1 className='page-title'>Beginner German Study Reference</h1>

      <div className='ref-grid'>
        
        <div className='ref-card'>
          <h2>Greetings & Everyday Phrases</h2>
          <p className='ref-subtitle'>
            Essential expressions for polite conversations and daily interactions.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>Hallo / Guten Tag</span>
              <span className='ref-meaning'>Hello / Good day</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Wie geht es Ihnen?</span>
              <span className='ref-meaning'>How are you? (formal)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Danke schön</span>
              <span className='ref-meaning'>Thank you very much</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Entschuldigung</span>
              <span className='ref-meaning'>Excuse me / Sorry</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Auf Wiedersehen</span>
              <span className='ref-meaning'>Goodbye</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Greetings</span>
            <span className='ref-tag'>Polite</span>
            <span className='ref-tag'>A1 Basics</span>
          </div>
        </div>

      
        <div className='ref-card'>
          <h2>Definite Articles</h2>
          <p className='ref-subtitle'>
            German nouns use three grammatical genders:{' '}
            <span className='accent'>der</span>,{' '}
            <span className='accent'>die</span>, and{' '}
            <span className='accent'>das</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>der Mann</span>
              <span className='ref-meaning'>the man (masculine)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>die Frau</span>
              <span className='ref-meaning'>the woman (feminine)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>das Kind</span>
              <span className='ref-meaning'>the child (neuter)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>die Bücher</span>
              <span className='ref-meaning'>the books (plural)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Ich heiße...</span>
              <span className='ref-meaning'>My name is...</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>der / die / das</span>
            <span className='ref-tag'>Nouns</span>
            <span className='ref-tag'>Grammar</span>
          </div>
        </div>

        
        <div className='ref-card'>
          <h2>Numbers 1–10</h2>
          <p className='ref-subtitle'>
            Core cardinal numbers used for counting, prices, and telling time.
          </p>

          <div className='num-grid'>
            <div className='num-item'>
              <span className='num-digit'>1</span>
              <span className='num-word'>eins</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>6</span>
              <span className='num-word'>sechs</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>2</span>
              <span className='num-word'>zwei</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>7</span>
              <span className='num-word'>sieben</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>3</span>
              <span className='num-word'>drei</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>8</span>
              <span className='num-word'>acht</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>4</span>
              <span className='num-word'>vier</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>9</span>
              <span className='num-word'>neun</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>5</span>
              <span className='num-word'>fünf</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>10</span>
              <span className='num-word'>zehn</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Numbers</span>
            <span className='ref-tag'>Counting</span>
            <span className='ref-tag'>Vocabulary</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnerG;