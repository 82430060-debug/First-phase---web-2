import React from 'react';
import '../Styles/BusinessG.css';

const BusinessG = () => {
  return (
    <div className='page'>
      <h1 className='page-title'>Business German Study Reference</h1>

      <div className='ref-grid'>
       
        <div className='ref-card'>
          <h2>Professional Emails</h2>
          <p className='ref-subtitle'>
            Formal salutations, standard requests, and polite closings using{' '}
            <span className='accent'>Sie</span>-form etiquette.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>Sehr geehrte Damen und Herren,</span>
              <span className='ref-meaning'>Dear Sir or Madam,</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Vielen Dank für Ihre Rückmeldung.</span>
              <span className='ref-meaning'>Thank you for your reply.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Anbei sende ich Ihnen...</span>
              <span className='ref-meaning'>Attached I am sending you...</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Könnten Sie mir bitte mitteilen...</span>
              <span className='ref-meaning'>Could you please inform me...</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Mit freundlichen Grüßen</span>
              <span className='ref-meaning'>Kind regards / Sincerely</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Correspondence</span>
            <span className='ref-tag'>Formal</span>
            <span className='ref-tag'>Email Etiquette</span>
          </div>
        </div>

   
        <div className='ref-card'>
          <h2>Meetings & Discussions</h2>
          <p className='ref-subtitle'>
            Key expressions for scheduling, sharing opinions, and reaching{' '}
            <span className='accent'>Vereinbarungen</span> (agreements).
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>Einen Termin vereinbaren</span>
              <span className='ref-meaning'>To schedule an appointment</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Auf der Tagesordnung steht...</span>
              <span className='ref-meaning'>On the agenda is...</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Meiner Meinung nach...</span>
              <span className='ref-meaning'>In my opinion...</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Da stimme ich Ihnen völlig zu.</span>
              <span className='ref-meaning'>I completely agree with you.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Fassen wir kurz zusammen.</span>
              <span className='ref-meaning'>Let’s briefly summarize.</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Meetings</span>
            <span className='ref-tag'>Negotiation</span>
            <span className='ref-tag'>Workplace</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>Presentations</h2>
          <p className='ref-subtitle'>
            Signposting phrases to structure slides, explain data, and handle Q&A.
          </p>

          <div className='biz-stack'>
            <div className='biz-item'>
              <span className='biz-label'>Opening & Topic</span>
              <span className='biz-example'>Heute möchte ich Ihnen ... vorstellen.</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>Outlining Structure</span>
              <span className='biz-example'>Mein Vortrag gliedert sich in drei Teile.</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>Referring to Visuals</span>
              <span className='biz-example'>Wie Sie auf dieser Grafik sehen können...</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>Transitioning Points</span>
              <span className='biz-example'>Kommen wir nun zum nächsten Punkt.</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>Closing & Questions</span>
              <span className='biz-example'>Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>Presentations</span>
            <span className='ref-tag'>Public Speaking</span>
            <span className='ref-tag'>B2 Business</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessG;