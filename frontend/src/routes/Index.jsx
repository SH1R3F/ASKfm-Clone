import { useTranslation } from "react-i18next";
import Logo from "../assets/images/logo.png";
import Background from "../assets/images/background.jpg";
import { Link } from "react-router-dom";

export default function Index() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-1 flex-col items-center justify-center bg-cover text-center text-white"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <img src={Logo} alt="ASK.fm" width="112" height="33" className="mb-6" />
      <h1 className="mb-6 text-3xl font-semibold">
        {t("Ask. Chat. Repeat.")}
        <br />
        {t("Anonymously!")}
      </h1>

      <Link to="/signup" className="hover:underline">
        {t("Create a new account")}
      </Link>
      <span>
        {t("Already have an account?")}
        <Link to="/login" className="ms-2 text-red-500 hover:underline">
          {t("Log in")}
        </Link>
      </span>
    </div>
  );
}
