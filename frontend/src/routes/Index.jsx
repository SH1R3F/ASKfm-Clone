import { useTranslation } from "react-i18next";
import Logo from "../assets/images/logo.png";
import Background from "../assets/images/background.jpg";

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

      <a className="hover:underline" href="/#">
        {t("Create a new account")}
      </a>
      <span>
        {t("Already have an account?")}
        <a className="ms-2 text-red-500 hover:underline" href="/#">
          {t("Log in")}
        </a>
      </span>
    </div>
  );
}
