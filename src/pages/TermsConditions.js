import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TermsConditions.css";

const TermsConditions = () => {
  const navigate = useNavigate();

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="aterms-conditions">
      <div className="arectangle2" />
      <div className="aterms-conditions-child" />
      <div className="amyprofile1">Myprofile</div>
      <div className="arectangle3" />
      <div className="aterms-conditions-item" />
      <div className="aterms-conditions1">{`Terms & Conditions`}</div>
      <div className="aterms-conditions-container">
        <p className="ablank-line">
          <b>{`Terms & Conditions
`}</b>
        </p>
        <p className="ablank-line">&nbsp;</p>
        <p className="ablank-line">
          By downloading or using the app, these terms will automatically apply
          to you – you should make sure therefore that you read them carefully
          before using the app. You’re not allowed to copy, or modify the app,
          any part of the app, or our trademarks in any way. You’re not allowed
          to attempt to extract the source code of the app, and you also
          shouldn’t try to translate the app into other languages, or make
          derivative versions. The app itself, and all the trade marks,
          copyright, database rights and other intellectual property rights
          related to it, still belong to .
        </p>
        <p className="ablank-line"></p>
        <p className="ablank-line">
          is committed to ensuring that the app is as useful and efficient as
          possible. For that reason, we reserve the right to make changes to the
          app or to charge for its services, at any time and for any reason. We
          will never charge you for the app or its services without making it
          very clear to you exactly what you’re paying for.
        </p>
        <p className="ablank-line">&nbsp;</p>
        <p className="ablank-line">
          At some point, we may wish to update the app. The app is currently
          available on iOS – the requirements for system (and for any additional
          systems we decide to extend the availability of the app to) may
          change, and you’ll need to download the updates if you want to keep
          using the app. does not promise that it will always update the app so
          that it is relevant to you and/or works with the iOS version that you
          have installed on your device. However, you promise to always accept
          updates to the application when offered to you, We may also wish to
          stop providing the app, and may terminate use of it at any time
          without giving notice of termination to you. Unless we tell you
          otherwise, upon any termination, (a) the rights and licenses granted
          to you in these terms will end; (b) you must stop using the app, and
          (if needed) delete it from your device.
        </p>
        <p className="ablank-line"></p>
        <p className="ablank-line">
          <b>Changes to This Terms and Conditions</b>
        </p>
        <p className="ablank-line"></p>
        <p className="ablank-line">
          We may update our Terms and Conditions from time to time. Thus, you
          are advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Terms and Conditions on
          this page. These changes are effective immediately after they are
          posted on this page.
        </p>
        <p className="ablank-line"></p>
        <p className="ablank-line">
          <b>Contact Us</b>
        </p>
        <p className="ablank-line"></p>
        <p className="ablank-line">
          If you have any questions or suggestions about our Terms and
          Conditions, do not hesitate to contact us at +225 3658959.
        </p>
      </div>
      <div className="agaobu-container">
 
      </div>
      <img
        className="afanhui-icon3"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default TermsConditions;
