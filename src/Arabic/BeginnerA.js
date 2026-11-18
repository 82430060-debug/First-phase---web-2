import React from 'react';
import '../Styles/BeginnerA.css';

const BeginnerA = () => {
  return (
    <div className='page page-ar' dir='rtl' lang='ar'>
      <h1 className='page-title'>مرجع دراسة العربية للمبتدئين</h1>

      <div className='ref-grid'>

        <div className='ref-card'>
          <h2>التحيات والعبارات اليومية</h2>
          <p className='ref-subtitle'>
            عبارات أساسية للمحادثات المهذبة والتعاملات اليومية.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>مرحباً / السلام عليكم</span>
              <span className='ref-meaning'>Hello / Peace be upon you</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>كيف حالك؟</span>
              <span className='ref-meaning'>How are you?</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>شكراً جزيلاً</span>
              <span className='ref-meaning'>Thank you very much</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>عفواً</span>
              <span className='ref-meaning'>Excuse me / Sorry</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>مع السلامة</span>
              <span className='ref-meaning'>Goodbye</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>تحيات</span>
            <span className='ref-tag'>مهذب</span>
            <span className='ref-tag'>أساسيات</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>أداة التعريف والجنس</h2>
          <p className='ref-subtitle'>
            للأسماء في العربية جنسان: مذكر ومؤنث، وأداة التعريف واحدة هي{' '}
            <span className='accent'>ال</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>الرجل</span>
              <span className='ref-meaning'>the man (masculine)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>المرأة</span>
              <span className='ref-meaning'>the woman (feminine)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>الطفل</span>
              <span className='ref-meaning'>the child (masculine)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>الكتب</span>
              <span className='ref-meaning'>the books (plural)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>اسمي...</span>
              <span className='ref-meaning'>My name is...</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>ال</span>
            <span className='ref-tag'>أسماء</span>
            <span className='ref-tag'>قواعد</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>الأرقام ١–١٠</h2>
          <p className='ref-subtitle'>
            الأعداد الأساسية للعدّ والأسعار وقول الوقت.
          </p>

          <div className='num-grid'>
            <div className='num-item'>
              <span className='num-digit'>١</span>
              <span className='num-word'>واحد</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>٦</span>
              <span className='num-word'>ستة</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>٢</span>
              <span className='num-word'>اثنان</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>٧</span>
              <span className='num-word'>سبعة</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>٣</span>
              <span className='num-word'>ثلاثة</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>٨</span>
              <span className='num-word'>ثمانية</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>٤</span>
              <span className='num-word'>أربعة</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>٩</span>
              <span className='num-word'>تسعة</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>٥</span>
              <span className='num-word'>خمسة</span>
            </div>
            <div className='num-item'>
              <span className='num-digit'>١٠</span>
              <span className='num-word'>عشرة</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>أرقام</span>
            <span className='ref-tag'>عدّ</span>
            <span className='ref-tag'>مفردات</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnerA;