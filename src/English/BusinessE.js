import React from 'react';
import '../Styles/BusinessE.css';

const BusinessE = () => {
  return (
    <div className='page'>
      <h1 className='page-title'>Business English Study Reference</h1>

      <div className='ref-grid'>

        <div className='ref-card'>
          <h2>Professional Emails</h2>
          <p className='ref-subtitle'>
            Formal salutations, standard requests, and polite closings using a{' '}
            <span className='accent'>formal register</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>Dear Sir or Madam,</span>
              <span className='ref-meaning'>Formal opening</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Thank you for your reply.</span>
              <span className='ref-meaning'>Acknowledging a message</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Please find attached...</span>
              <span className='ref-meaning'>Sending a file</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Could you please let me know...</span>
              <span className='ref-meaning'>Polite request</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Kind regards</span>
              <span className='ref-meaning'>Formal closing</span>
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
            <span className='accent'>agreements</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>To schedule a meeting</span>
              <span className='ref-meaning'>Setting a time</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>On the agenda is...</span>
              <span className='ref-meaning'>Introducing a topic</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>In my opinion...</span>
              <span className='ref-meaning'>Giving a view</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>I completely agree with you.</span>
              <span className='ref-meaning'>Agreeing</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>Let’s briefly summarize.</span>
              <span className='ref-meaning'>Wrapping up</span>
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
              <span className='biz-example'>Today I would like to present...</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>Outlining Structure</span>
              <span className='biz-example'>My presentation is divided into three parts.</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>Referring to Visuals</span>
              <span className='biz-example'>As you can see on this chart...</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>Transitioning Points</span>
              <span className='biz-example'>Let’s move on to the next point.</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>Closing & Questions</span>
              <span className='biz-example'>Thank you for your attention. Do you have any questions?</span>
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

export default BusinessE;