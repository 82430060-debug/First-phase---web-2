import React from 'react';
import '../Styles/IntermediateE.css';

const IntermediateE = () => {
  return (
    <div className='page'>
      <h1 className='page-title'>Intermediate English Study Reference</h1>

      <div className='ref-grid'>

        <div className='ref-card'>
          <h2>Pronoun Cases</h2>
          <p className='ref-subtitle'>
            English only changes form in pronouns, based on their role:{' '}
            <span className='accent'>Subject</span>,{' '}
            <span className='accent'>Object</span>, and{' '}
            <span className='accent'>Possessive</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>Subject</span>
              <span className='ref-meaning'>He reads. (Who?)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Object</span>
              <span className='ref-meaning'>I see him. (Whom?)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Possessive Adjective</span>
              <span className='ref-meaning'>This is his car. (Whose?)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Possessive Pronoun</span>
              <span className='ref-meaning'>The car is his.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Prepositions + Object</span>
              <span className='ref-meaning'>with her, to them, for us</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Cases</span>
            <span className='ref-tag'>Pronouns</span>
            <span className='ref-tag'>B1 Grammar</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>Word Order Rules</h2>
          <p className='ref-subtitle'>
            English sentence structure follows fixed patterns:{' '}
            <span className='accent'>SVO</span>,{' '}
            <span className='accent'>Manner–Place–Time</span>, and{' '}
            <span className='accent'>Clauses</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>SVO Main Clause</span>
              <span className='ref-meaning'>She reads a book.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Manner → Place → Time</span>
              <span className='ref-meaning'>He ran quickly to school today.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Subordinate (because / that)</span>
              <span className='ref-meaning'>..., because I am tired.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Coordinating (and / but)</span>
              <span className='ref-meaning'>..., but I have no time.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Question Inversion</span>
              <span className='ref-meaning'>Do you speak English?</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Syntax</span>
            <span className='ref-tag'>Conjunctions</span>
            <span className='ref-tag'>Word Order</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>Essential Tenses</h2>
          <p className='ref-subtitle'>
            Expressing past, present, and future actions in spoken and written English.
          </p>

          <div className='tense-grid'>
            <div className='tense-item'>
              <span className='tense-label'>Present Simple</span>
              <span className='tense-example'>I learn English.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>Present Perfect</span>
              <span className='tense-example'>I have learned English.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>Past Simple</span>
              <span className='tense-example'>I learned English.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>Past Perfect</span>
              <span className='tense-example'>I had learned English.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>Future Simple</span>
              <span className='tense-example'>I will learn English.</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Present Perfect</span>
            <span className='ref-tag'>Past Simple</span>
            <span className='ref-tag'>Verbs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntermediateE;