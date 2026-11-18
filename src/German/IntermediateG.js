import React from 'react';
import '../Styles/IntermediateG.css';

const IntermediateG = () => {
  return (
    <div className='page'>
      <h1 className='page-title'>Intermediate German Study Reference</h1>

      <div className='ref-grid'>
      
        <div className='ref-card'>
          <h2>The Four Cases</h2>
          <p className='ref-subtitle'>
            Articles and pronouns change form based on their role:{' '}
            <span className='accent'>Nominativ</span>,{' '}
            <span className='accent'>Akkusativ</span>,{' '}
            <span className='accent'>Dativ</span>, and{' '}
            <span className='accent'>Genitiv</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>Nominativ (Subject)</span>
              <span className='ref-meaning'>Der Mann liest. (Who/What?)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Akkusativ (Direct Obj.)</span>
              <span className='ref-meaning'>Ich sehe den Mann. (Whom?)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Dativ (Indirect Obj.)</span>
              <span className='ref-meaning'>Ich helfe dem Mann. (To whom?)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Genitiv (Possession)</span>
              <span className='ref-meaning'>Das Auto des Mannes. (Whose?)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Dativ Prepositions</span>
              <span className='ref-meaning'>aus, bei, mit, nach, seit, von, zu</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Cases</span>
            <span className='ref-tag'>Declension</span>
            <span className='ref-tag'>B1 Grammar</span>
          </div>
        </div>

       
        <div className='ref-card'>
          <h2>Word Order Rules</h2>
          <p className='ref-subtitle'>
            German verb placement follows strict structural rules:{' '}
            <span className='accent'>V2</span>,{' '}
            <span className='accent'>TeKaMoLo</span>, and{' '}
            <span className='accent'>Verb-End</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>V2 Main Clause</span>
              <span className='ref-meaning'>Heute gehe ich ins Kino.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>TeKaMoLo Order</span>
              <span className='ref-meaning'>Time → Cause → Manner → Place</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Subordinate (weil / dass)</span>
              <span className='ref-meaning'>..., weil ich müde bin. (Verb end)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Coordinating (und / aber)</span>
              <span className='ref-meaning'>..., aber ich habe keine Zeit.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Modal Sentence Bracket</span>
              <span className='ref-meaning'>Ich muss heute Deutsch lernen.</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Syntax</span>
            <span className='ref-tag'>Conjunctions</span>
            <span className='ref-tag'>TeKaMoLo</span>
          </div>
        </div>

       
        <div className='ref-card'>
          <h2>Essential Tenses</h2>
          <p className='ref-subtitle'>
            Expressing past, present, and future actions in spoken and written German.
          </p>

          <div className='tense-grid'>
            <div className='tense-item'>
              <span className='tense-label'>Präsens (Present)</span>
              <span className='tense-example'>Ich lerne Deutsch.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>Perfekt (Spoken Past)</span>
              <span className='tense-example'>Ich habe Deutsch gelernt.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>Präteritum (Written Past)</span>
              <span className='tense-example'>Ich lernte / war / hatte.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>Plusquamperfekt (Past Perfect)</span>
              <span className='tense-example'>Ich hatte Deutsch gelernt.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>Futur I (Future)</span>
              <span className='tense-example'>Ich werde Deutsch lernen.</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Perfekt</span>
            <span className='ref-tag'>Präteritum</span>
            <span className='ref-tag'>Verbs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntermediateG;