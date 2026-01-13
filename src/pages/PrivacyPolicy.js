import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const onFanhuiIconClick = useCallback(() => {
    navigate("/10-settings");
  }, [navigate]);

  return (
    <div className="aprivacy-policy">
      <div className="arectangle4" />
      <div className="aprivacy-policy-child" />
      <div className="arectangle5" />
      <div className="aprivacy-policy-item" />
      <div className="aprivacy-policy1">Privacy Policy</div>
      <div className="aprivacy-policy-built-container">
        <p className="abuilt-the-find">
          <b>Privacy Policy</b>
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          built the Find hotel app as a Commercial app. This SERVICE is provided
          by and is intended for use as is.
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          This page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service.
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          If you choose to use our Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that we collect is used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at Find hotel unless
          otherwise defined in this Privacy Policy.
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          <b>Information Collection and Use</b>
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information. The
          information that we request will be retained by us and used as
          described in this privacy policy.
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          The app does use third party services that may collect information
          used to identify you.
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          Link to privacy policy of third party service providers used by the
          app
        </p>
        <p className="abuilt-the-find">
          <span></span>
          <b></b>
        </p>
        <p className="abuilt-the-find">
          <b>Log Data</b>
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </p>
        <p className="abuilt-the-find"></p>
        <p className="abuilt-the-find">
          <b>Cookies</b>
        </p>
        <p className="abuilt-the-find">
          <b></b>
        </p>
        <p className="abuilt-the-find">{`Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These `}</p>
      </div>
      <div className="agroup-div">
       
      </div>
      <img
        className="afanhui-icon4"
        alt=""
        src="/fanhui.png"
        onClick={onFanhuiIconClick}
      />
    </div>
  );
};

export default PrivacyPolicy;
