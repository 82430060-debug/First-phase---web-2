import React from 'react';
import '../Styles/BusinessA.css';

const BusinessA = () => {
  return (
    <div className='page page-ar' dir='rtl' lang='ar'>
      <h1 className='page-title'>مرجع دراسة العربية لقطاع الأعمال</h1>

      <div className='ref-grid'>

        <div className='ref-card'>
          <h2>المراسلات المهنية</h2>
          <p className='ref-subtitle'>
            تحيات رسمية وطلبات معتادة وخواتيم مهذبة بآداب مخاطبة الجمع{' '}
            <span className='accent'>أنتم</span> للاحترام.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>تحية طيبة وبعد،</span>
              <span className='ref-meaning'>Greetings (formal opening)</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>شكراً لردكم.</span>
              <span className='ref-meaning'>Thank you for your reply.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>مرفق طيه...</span>
              <span className='ref-meaning'>Attached herewith...</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>هل يمكنكم إفادتي بـ...</span>
              <span className='ref-meaning'>Could you please inform me...</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>وتفضلوا بقبول فائق الاحترام</span>
              <span className='ref-meaning'>Kind regards / Sincerely</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>مراسلات</span>
            <span className='ref-tag'>رسمي</span>
            <span className='ref-tag'>آداب البريد</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>الاجتماعات والنقاشات</h2>
          <p className='ref-subtitle'>
            عبارات أساسية لتحديد المواعيد وإبداء الرأي والتوصل إلى{' '}
            <span className='accent'>اتفاقات</span>.
          </p>

          <div className='ref-list'>
            <div className='ref-row'>
              <span className='ref-term'>تحديد موعد</span>
              <span className='ref-meaning'>To schedule an appointment</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>جدول الأعمال يتضمن...</span>
              <span className='ref-meaning'>The agenda includes...</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>في رأيي...</span>
              <span className='ref-meaning'>In my opinion...</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>أتفق معكم تماماً.</span>
              <span className='ref-meaning'>I completely agree with you.</span>
            </div>
            <div className='ref-row'>
              <span className='ref-term'>دعونا نلخص باختصار.</span>
              <span className='ref-meaning'>Let’s briefly summarize.</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>اجتماعات</span>
            <span className='ref-tag'>تفاوض</span>
            <span className='ref-tag'>بيئة العمل</span>
          </div>
        </div>

        <div className='ref-card'>
          <h2>العروض التقديمية</h2>
          <p className='ref-subtitle'>
            عبارات تنظيمية لترتيب الشرائح وشرح البيانات والتعامل مع الأسئلة.
          </p>

          <div className='biz-stack'>
            <div className='biz-item'>
              <span className='biz-label'>الافتتاح والموضوع</span>
              <span className='biz-example'>اليوم أودّ أن أعرض عليكم...</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>عرض الهيكل</span>
              <span className='biz-example'>ينقسم عرضي إلى ثلاثة أجزاء.</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>الإشارة إلى الرسوم</span>
              <span className='biz-example'>كما ترون في هذا الرسم البياني...</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>الانتقال بين النقاط</span>
              <span className='biz-example'>لننتقل الآن إلى النقطة التالية.</span>
            </div>
            <div className='biz-item'>
              <span className='biz-label'>الختام والأسئلة</span>
              <span className='biz-example'>شكراً لحسن استماعكم. هل لديكم أسئلة؟</span>
            </div>
          </div>

          <div className='ref-tags'>
            <span className='ref-tag'>عروض تقديمية</span>
            <span className='ref-tag'>الخطابة</span>
            <span className='ref-tag'>أعمال</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessA;