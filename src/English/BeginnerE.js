import React from 'react';
import '../Styles/BeginnerE.css';

const BeginnerE = () => {
  return (
    <div className='page'>
      <h1 className='page-title'>Beginner English Study Reference</h1>

      <div className='ref-grid'>

        <div className='ref-card'>
          <h2>Greetings & Everyday Phrases</h2>
          <p className='ref-subtitle'>
            Essential expressions for polite conversations and daily interactions.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>Hello / Good morning</span>
              <span className='ref-meaning'>Greeting (any time / AM)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>How are you?</span>
              <span className='ref-meaning'>Asking about wellbeing</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Thank you very much</span>
              <span className='ref-meaning'>Showing gratitude</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Excuse me</span>
              <span className='ref-meaning'>Getting attention / Sorry</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Goodbye</span>
              <span className='ref-meaning'>Parting phrase</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Greetings</span>
            <span className='ref-tag'>Polite</span>
            <span className='ref-tag'>A1 Basics</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>Articles</h2>
          <p className='ref-subtitle'>
            English uses three articles:{' '}
            <span className='accent'>a</span>,{' '}
            <span className='accent'>an</span>, and{' '}
            <span className='accent'>the</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>a book</span>
              <span className='ref-meaning'>one item (consonant sound)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>an apple</span>
              <span className='ref-meaning'>one item (vowel sound)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>the sun</span>
              <span className='ref-meaning'>a specific, known thing</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>the books</span>
              <span className='ref-meaning'>specific items (plural)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>My name is...</span>
              <span className='ref-meaning'>Introducing yourself</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>a / an / the</span>
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
              <span className='num-word'>one</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>6</span>
              <span className='num-word'>six</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>2</span>
              <span className='num-word'>two</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>7</span>
              <span className='num-word'>seven</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>3</span>
              <span className='num-word'>three</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>8</span>
              <span className='num-word'>eight</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>4</span>
              <span className='num-word'>four</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>9</span>
              <span className='num-word'>nine</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>5</span>
              <span className='num-word'>five</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>10</span>
              <span className='num-word'>ten</span>
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

export default BeginnerE;