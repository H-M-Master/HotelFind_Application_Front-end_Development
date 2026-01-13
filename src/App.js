import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ReadyToSearch from "./pages/ReadyToSearch";
import PeopleNumber from "./pages/PeopleNumber";
import AccomodationsFan from "./pages/AccomodationsFan";
import CheckDate from "./pages/CheckDate";
import WhereDoYou from "./pages/WhereDoYou";
import Settingslogout from "./pages/Settingslogout";
import FindRoomFinish from "./pages/FindRoomFinish";
import BookACar from "./pages/BookACar";
import NotificationMessageBookingP from "./pages/NotificationMessageBookingP";
import NotificationMessageVIP from "./pages/NotificationMessageVIP";
import NotificationMessageService from "./pages/NotificationMessageService";
import NotificationMessageAccount from "./pages/NotificationMessageAccount";
import NotificationMessageBooking from "./pages/NotificationMessageBooking";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import AddNewCard from "./pages/AddNewCard";
import MyProfile from "./pages/MyProfile";
import YourAssignedDriver from "./pages/YourAssignedDriver";
import CarDetailsAndPrice from "./pages/CarDetailsAndPrice";
import BookACar1 from "./pages/BookACar1";
import AccomodationsAir from "./pages/AccomodationsAir";
import ForgotPassword from "./pages/ForgotPassword";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Splash from "./pages/Splash";
import BookingDetails from "./pages/BookingDetails";
import BookingDetails1 from "./pages/BookingDetails1";
import BookingHistory from "./pages/BookingHistory";
import BookingHistory1 from "./pages/BookingHistory1";
import ChangePassword from "./pages/ChangePassword";
import Faq from "./pages/Faq";
import Notifications from "./pages/Notifications";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import HotelsList from "./pages/HotelsList";
import HopeAll from "./pages/HopeAll";

import ViewAll from "./pages/ViewAll";
import Sanfanqixian from "./pages/Sanfanqixian";
import Sanfanqixian1 from "./pages/Sanfanqixian1";
import Shenling from "./pages/Shenling";
import Shenling1 from "./pages/Shenling1";
import Xihu from "./pages/Xihu";
import Xihu1 from "./pages/Xihu1";
import Sheraton from "./pages/Sheraton";
import Sheraton1 from "./pages/Sheraton1";
import Sheraton2 from "./pages/Sheraton2";
import Sheraton3 from "./pages/Sheraton3";
import Jiudiant from "./pages/Jiudiant";
import Jiudianr from "./pages/Jiudianr";
import Jiudianw from "./pages/Jiudianw";
import Jiudianq from "./pages/Jiudianq";
import AOrderConfirm from "./pages/AOrderConfirm";
import RateTheApp from "./pages/RateTheApp";
import RatingsReviews from "./pages/RatingsReviews";
import YourOrderIsSuccessful from "./pages/YourOrderIsSuccessful";
import PaymentMethpds from "./pages/PaymentMethpds";
import HotelNearby from "./pages/HotelNearby";
import HotelPhotos from "./pages/HotelPhotos";
import HotelDetails from "./pages/HotelDetails";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/35-people-number":
        title = "";
        metaDescription = "";
        break;
      case "/31-accomodations-fan":
        title = "";
        metaDescription = "";
        break;
      case "/34-check-date":
        title = "";
        metaDescription = "";
        break;
      case "/33-where-do-you":
        title = "";
        metaDescription = "";
        break;
      case "/47-settingslogout":
        title = "";
        metaDescription = "";
        break;
      case "/1-find-room-finish":
        title = "";
        metaDescription = "";
        break;
      case "/6-book-a-car":
        title = "";
        metaDescription = "";
        break;
      case "/24-notification-message-booking-plan":
        title = "";
        metaDescription = "";
        break;
      case "/23-notification-message-vip":
        title = "";
        metaDescription = "";
        break;
      case "/22-notification-message-service":
        title = "";
        metaDescription = "";
        break;
      case "/21-notification-message-account":
        title = "";
        metaDescription = "";
        break;
      case "/20-notification-message-booking":
        title = "";
        metaDescription = "";
        break;
      case "/10-settings":
        title = "";
        metaDescription = "";
        break;
      case "/4-edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/3-add-new-card":
        title = "";
        metaDescription = "";
        break;
      case "/2-my-profile":
        title = "";
        metaDescription = "";
        break;
      case "/8-your-assigned-driver":
        title = "";
        metaDescription = "";
        break;
      case "/7-car-details-and-price":
        title = "";
        metaDescription = "";
        break;
      case "/5-book-a-car":
        title = "";
        metaDescription = "";
        break;
      case "/30-accomodations-air":
        title = "";
        metaDescription = "";
        break;
      case "/29-forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/28-signin":
        title = "";
        metaDescription = "";
        break;
      case "/27-signup":
        title = "";
        metaDescription = "";
        break;
      case "/111-ready-to-search":
        title = "";
        metaDescription = "";
        break;

        case "/17-booking-details":
          title = "";
          metaDescription = "";
          break;
          case "/19-booking-details":
            title = "";
            metaDescription = "";
            break;
            case "/16-booking-history":
              title = "";
              metaDescription = "";
              break;
              case "/18-booking-history":
                title = "";
                metaDescription = "";
                break;
                case "/15-change-password":
                  title = "";
                  metaDescription = "";
                  break;
                  case "/14-faq":
                    title = "";
                    metaDescription = "";
                    break;
                    case "/11-notifications":
                      title = "";
                      metaDescription = "";
                      break;
                      case "/12-privacy-policy":
                        title = "";
                        metaDescription = "";
                        break;
                        case "/13-terms-conditions":
        title = "";
        metaDescription = "";
        break;
        case "/50-hotels-list":
          title = "";
          metaDescription = "";
          break;
          case "/40-view-all":
            title = "";
            metaDescription = "";
            break;
            case "/90-hope-all":
            title = "";
            metaDescription = "";
            break;
            case "/52-sanfanqixian":
              title = "";
              metaDescription = "";
              break;
            case "/51-sanfanqixian":
              title = "";
              metaDescription = "";
              break;
              case "/56-shenling":
                title = "";
                metaDescription = "";
                break;
              case "/55-shenling":
                title = "";
                metaDescription = "";
                break;
                case "/54-xihu":
                  title = "";
                  metaDescription = "";
                  break;
                case "/53-xihu":
                  title = "";
                  metaDescription = "";
                  break;
                  case "/64-sheraton":
        title = "";
        metaDescription = "";
        break;
      case "/63-sheraton":
        title = "";
        metaDescription = "";
        break;
      case "/62-sheraton":
        title = "";
        metaDescription = "";
        break;
      case "/61-sheraton":
        title = "";
        metaDescription = "";
        break;
      case "/60-jiudiant":
        title = "";
        metaDescription = "";
        break;
      case "/59-jiudianr":
        title = "";
        metaDescription = "";
        break;
      case "/58-jiudianw":
        title = "";
        metaDescription = "";
        break;
      case "/57-jiudianq":
        title = "";
        metaDescription = "";
        break;



      
      case "/45a-order-confirm":
        title = "";
        metaDescription = "";
        break;
      case "/46-rate-the-app":
        title = "";
        metaDescription = "";
        break;
      case "/42-ratings-reviews":
        title = "";
        metaDescription = "";
        break;
      case "/48-your-order-is-successful":
        title = "";
        metaDescription = "";
        break;
      case "/47-payment-methpds":
        title = "";
        metaDescription = "";
        break;
      case "/44-hotel-nearby":
        title = "";
        metaDescription = "";
        break;
      case "/43-hotel-photos":
        title = "";
        metaDescription = "";
        break;
      case "/41-hotel-details":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/111-ready-to-search" element={<ReadyToSearch />} />
      <Route path="/" element={<Splash />} />

      <Route path="/35-people-number" element={<PeopleNumber />} />
      <Route path="/31-accomodations-fan" element={<AccomodationsFan />} />
      <Route path="/34-check-date" element={<CheckDate />} />
      <Route path="/33-where-do-you" element={<WhereDoYou />} />
      <Route path="/47-settingslogout" element={<Settingslogout />} />
      <Route path="/1-find-room-finish" element={<FindRoomFinish />} />
      <Route path="/6-book-a-car" element={<BookACar />} />
      <Route
        path="/24-notification-message-booking-plan"
        element={<NotificationMessageBookingP />}
      />
      <Route
        path="/23-notification-message-vip"
        element={<NotificationMessageVIP />}
      />
      <Route
        path="/22-notification-message-service"
        element={<NotificationMessageService />}
      />
      <Route
        path="/21-notification-message-account"
        element={<NotificationMessageAccount />}
      />
      <Route
        path="/20-notification-message-booking"
        element={<NotificationMessageBooking />}
      />
      <Route path="/10-settings" element={<Settings />} />
      <Route path="/4-edit-profile" element={<EditProfile />} />
      <Route path="/3-add-new-card" element={<AddNewCard />} />
      <Route path="/2-my-profile" element={<MyProfile />} />
      <Route path="/8-your-assigned-driver" element={<YourAssignedDriver />} />
      <Route path="/7-car-details-and-price" element={<CarDetailsAndPrice />} />
      <Route path="/5-book-a-car" element={<BookACar1 />} />
      <Route path="/30-accomodations-air" element={<AccomodationsAir />} />
      <Route path="/29-forgot-password" element={<ForgotPassword />} />
      <Route path="/28-signin" element={<Signin />} />
      <Route path="/27-signup" element={<Signup />} />
      <Route path="/17-booking-details" element={<BookingDetails />} />
      <Route path="/19-booking-details" element={<BookingDetails1 />} />
      <Route path="/16-booking-history" element={<BookingHistory />} />
      <Route path="/18-booking-history" element={<BookingHistory1 />} />
      <Route path="/15-change-password" element={<ChangePassword />} />
      <Route path="/14-faq" element={<Faq />} />
      <Route path="/11-notifications" element={<Notifications />} />
      <Route path="/12-privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/13-terms-conditions" element={<TermsConditions />} />
      <Route path="/50-hotels-list" element={<HotelsList />} />
      <Route path="/90-hope-all" element={<HopeAll />} />

      <Route path="/40-view-all" element={<ViewAll />} />
      <Route path="/52-sanfanqixian" element={<Sanfanqixian />} />
      <Route path="/51-sanfanqixian" element={<Sanfanqixian1 />} />
      <Route path="/56-shenling" element={<Shenling />} />
      <Route path="/55-shenling" element={<Shenling1 />} />
      <Route path="/54-xihu" element={<Xihu />} />
      <Route path="/53-xihu" element={<Xihu1 />} />
      <Route path="/64-sheraton" element={<Sheraton />} />
      <Route path="/63-sheraton" element={<Sheraton1 />} />
      <Route path="/62-sheraton" element={<Sheraton2 />} />
      <Route path="/61-sheraton" element={<Sheraton3 />} />
      <Route path="/60-jiudiant" element={<Jiudiant />} />
      <Route path="/59-jiudianr" element={<Jiudianr />} />
      <Route path="/58-jiudianw" element={<Jiudianw />} />
      <Route path="/57-jiudianq" element={<Jiudianq />} />



      <Route path="/45a-order-confirm" element={<AOrderConfirm />} />
      <Route path="/46-rate-the-app" element={<RateTheApp />} />
      <Route path="/42-ratings-reviews" element={<RatingsReviews />} />
      <Route
        path="/48-your-order-is-successful"
        element={<YourOrderIsSuccessful />}
      />
      <Route path="/47-payment-methpds" element={<PaymentMethpds />} />
      <Route path="/44-hotel-nearby" element={<HotelNearby />} />
      <Route path="/43-hotel-photos" element={<HotelPhotos />} />
      <Route path="/41-hotel-details" element={<HotelDetails />} />
    </Routes>
  );
}
export default App;
