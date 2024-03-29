import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/Copyright";
import { connect } from "react-redux";
import { signOut } from "../store/actions/AuthActions";
import { Helmet } from "react-helmet";

const ProvincialMinisterMessage = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <Helmet>
        <title>Provincial Minister</title>
      </Helmet>
      <Container className="mt provincial-minister">
        <div className="d-flex flex-column align-items-center pt-4">
          <img
            src="https://i.ibb.co/6gVGTBY/1.jpg"
            alt="Col (R) Muhammad Hashim"
            className="about-img"
          />
          <h1 className="text-center title mx-3 fw-bold mt-3 mb-0">
            Col (R) Muhammad Hashim
          </h1>
          <p>Provincial Minister</p>
        </div>
        <p className="lh-lg para text-justify">
          پاکستان اللہ تبارک و تعالیٰ کے فضل و کرم سے دنیا کے تمام معدنیات، موسم
          زمینی ساخت اور سب سے بڑھ کر محنتی قوم جیسے اپنے خزانوں سے مالا مال ہے۔
          پاکستان کی آبادی کا 64 فیصد حصہ 30 سال سے کم عمر نوجوانوں پر مشتمل ہے۔
          ان نوجوانوں کی اگر منظم طریقے سے صحیح رہنمائی کی جائے تو یہ اس قوم کا
          بیش قیمت اثاثہ ثابت ہو سکتے ہیں۔ اکیسویں صدی کے آغاز سے ہی فورتھ
          انڈسٹریل ریوولوشن کا بھی آغاز ہے جس میں انفارمیشن ٹیکنالوجی ایک لیڈنگ
          انڈسٹری کے طور پر ابھر کر سامنے آ ئی ہے اور زندہ قوموں کی ایک نشانی یہ
          بھی ہے کہ وہ عصر حاضر کے تقاضوں پر پورا اترے اور تیزی سے بدلتی اور
          پروان چڑھتی ٹیکنالوجی کو نہ صرف حاصل کر ے بلکہ مکمل طور پر اس سے
          مستفید بھی ہو۔ پاکستانی حکومت اور ہمارے وزیر اعظم عمران خان انفارمیشن
          ٹیکنالوجی کی اہمیت سے بخوبی آغا ہ ہیں اور اس کے فروغ کے لیے ہمہ تن
          مصروف بھی ہیں مگر انفارمیشن ٹیکنالوجی ایک بہت وسیع و عریض انڈسٹری ہے
          اور جب تک حکومت کے ساتھ ساتھ ہماری عوام بھی شامل نہ ہو اس کے ساتھ چلنا
          مشکل ہے۔آ ج مجھے یہ اعلان کرتے ہوئے انتہائی خوشی محسوس ہورہی ہے کہ{" "}
          <span className="fw-bold">
            {" "}
            ڈیجی پاکستان نیشنل سکلزڈویلپمنٹ پروگرام{" "}
          </span>{" "}
          نے قومی سطح پر ایک ذمہ داری کو بخوشی قبول کیا ہے اور اپنی قوم کے نو جو
          ا نوں کو دور جدید کی سکلز سکھا نے اور معاشرے کا کارآمد شہری بنا نے میں
          رضاکارانہ طور پر اپنے آ پ کو پیش کیا ہے۔ میری دلی دعا ہے کہ اللہ پاک
          <span className="fw-bold">
            {" "}
            (ڈیجی پاکستان قومی ہنر مند ترقیاتی اقدام){" "}
          </span>
          کے مقصد کو اللہ پاکستانی قوم کی امنگوں پر پورا اتارے اور ہماری نوجوان
          نسل کوکارآمد ٹیکنیکل سکلزسے مزین کرنے میں کامیابی عطافرمائے۔ آنے والے
          دور کی سب سے بڑی عفریت بے روز گاری ہے اور اگر ہماری نوجوان نسل نے بر
          وقت اپنے آپ کو جدید ٹیکنالوجی سے نہ جو ڑے رکھا تونہ صرف بحیثیت قوم ہم
          دنیا سے بہت پیچھے رہ جا ئیں گے بلکہ بے روزگاری کے با عث ایک دوسرے کو
          کھانا شروع کردیں گے۔
          <br />
          <span className="fw-bold">
            {" "}
            ڈیجی پاکستان قومی ہنر مند ترقیاتی اقدام{" "}
          </span>{" "}
          کا قومی سطح پر میدان میں آنا اور اپنی قوم کے معماروں کی درست سمت میں
          رہنمائی کرنا ایک بہت خوش آئند قدم ہے جس کی میں پوری طرح سے حمایت کا
          اعلان کرتا ہوں
        </p>
      </Container>
      <Copyright />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(ProvincialMinisterMessage);
