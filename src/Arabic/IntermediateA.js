import React from 'react';
import '../Styles/IntermediateA.css';

const IntermediateA = () => {
  return (
    <div className='page page-ar' dir='rtl' lang='ar'>
      <h1 className='page-title'>مرجع دراسة العربية للمستوى المتوسط</h1>

      <div className='ref-grid'>

        <div className='ref-card'>
          <h2>الحالات الإعرابية</h2>
          <p className='ref-subtitle'>
            تتغير أواخر الكلمات بحسب موقعها في الجملة:{' '}
            <span className='accent'>مرفوع</span>،{' '}
            <span className='accent'>منصوب</span>، و{' '}
            <span className='accent'>مجرور</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>مرفوع (الفاعل)</span>
              <span className='ref-meaning'>يقرأ الرجلُ. (مَن؟)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>منصوب (المفعول به)</span>
              <span className='ref-meaning'>أرى الرجلَ. (مَن؟)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>مجرور (بحرف جر)</span>
              <span className='ref-meaning'>أتكلم مع الرجلِ. (مع مَن؟)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>مجرور (بالإضافة)</span>
              <span className='ref-meaning'>سيارةُ الرجلِ. (لمَن؟)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>حروف الجر</span>
              <span className='ref-meaning'>في، من، إلى، على، عن، مع</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>إعراب</span>
            <span className='ref-tag'>حالات</span>
            <span className='ref-tag'>قواعد</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>ترتيب الجملة</h2>
          <p className='ref-subtitle'>
            للجملة العربية نمطان:{' '}
            <span className='accent'>فعلية</span>،{' '}
            <span className='accent'>اسمية</span>، ولـ{' '}
            <span className='accent'>الإضافة</span>{' '}
            ترتيب ثابت.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>جملة فعلية</span>
              <span className='ref-meaning'>يذهب الطالبُ إلى المدرسة.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>جملة اسمية</span>
              <span className='ref-meaning'>الطالبُ مجتهدٌ.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>الإضافة</span>
              <span className='ref-meaning'>كتابُ الطالبِ</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>الصفة بعد الموصوف</span>
              <span className='ref-meaning'>بيتٌ كبيرٌ</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>أدوات الربط (لأنّ / لكنّ)</span>
              <span className='ref-meaning'>..., لأنني متعب.</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>نحو</span>
            <span className='ref-tag'>جمل</span>
            <span className='ref-tag'>ترتيب</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>الأزمنة الأساسية</h2>
          <p className='ref-subtitle'>
            التعبير عن الماضي والحاضر والمستقبل والأمر في العربية.
          </p>

          <div className='tense-grid'>
            <div className='tense-item'>
              <span className='tense-label'>الماضي</span>
              <span className='tense-example'>كتبتُ الدرسَ.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>المضارع</span>
              <span className='tense-example'>أكتبُ الدرسَ.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>الماضي المستمر</span>
              <span className='tense-example'>كنتُ أكتبُ الدرسَ.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>المستقبل</span>
              <span className='tense-example'>سأكتبُ الدرسَ.</span>
            </div>
            <div className='tense-item'>
              <span className='tense-label'>الأمر</span>
              <span className='tense-example'>اكتبِ الدرسَ!</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>أفعال</span>
            <span className='ref-tag'>أزمنة</span>
            <span className='ref-tag'>ماضٍ ومضارع</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntermediateA;