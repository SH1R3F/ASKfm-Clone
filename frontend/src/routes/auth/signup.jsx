import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoVk } from "react-icons/bi";

function SocialLogins() {
  return (
    <div className="mt-5 flex gap-1.5 text-xl">
      <Link
        to="/"
        className="rounded-md bg-[#5e78ac] px-8 py-2 text-white transition-colors hover:bg-[#2c3e60]"
      >
        <BiLogoFacebook />
      </Link>
      <Link
        to="/"
        className="rounded-md bg-[#4285f4] px-8 py-2 text-white transition-colors hover:bg-[#2c7af6]"
      >
        <BiLogoGoogle />
      </Link>
      <Link
        to="/"
        className="rounded-md bg-[#55acee] px-8 py-2 text-white transition-colors hover:bg-[#3da0eb]"
      >
        <BiLogoTwitter />
      </Link>
      <Link
        to="/"
        className="rounded-md bg-[#2d5a7a] px-8 py-2 text-white transition-colors hover:bg-[#23567b]"
      >
        <BiLogoVk />
      </Link>
    </div>
  );
}

export default function Signup() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <img src={Logo} alt="ASK.fm" width="112" height="33" className="mb-6" />
      <div className="rounded-lg bg-white p-6">
        <form action="#" method="POST">
          <h1 className="text-2xl">{t("Sign up")}</h1>
          <p className="mb-4 text-sm">
            {t("Already have an account?")}
            <Link to="/login" className="ms-2 text-red-500 hover:underline">
              {t("Log in")}
            </Link>
          </p>

          <div className="mb-2 flex flex-col gap-2 md:flex-row">
            <div>
              <label htmlFor="first_name">{t("First name")}</label>
              <input
                className="block w-full rounded-sm border p-2"
                type="text"
                id="first_name"
                placeholder={t("First name")}
              />
            </div>

            <div>
              <label htmlFor="last_name">{t("Last name")}</label>
              <input
                className="block w-full rounded-sm border p-2"
                type="text"
                id="last_name"
                placeholder={t("Last name")}
              />
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="email">{t("Email")}</label>
            <input
              className="block w-full rounded-sm border p-2"
              type="email"
              id="email"
              placeholder={t("Email")}
            />
          </div>

          <div className="mb-2 flex flex-col gap-2 md:flex-row">
            <div>
              <label htmlFor="password">{t("Password")}</label>
              <input
                className="block w-full rounded-sm border p-2"
                type="password"
                id="password"
                placeholder={t("Password")}
              />
            </div>

            <div>
              <label htmlFor="password_confirmation">
                {t("Password confirmation")}
              </label>
              <input
                className="block w-full rounded-sm border p-2"
                type="password"
                id="password_confirmation"
                placeholder={t("Password confirmation")}
              />
            </div>
          </div>

          <button className="mt-2 w-full rounded-lg bg-red-600 py-2 text-white">
            {t("Sign up")}
          </button>
        </form>
      </div>
      {SocialLogins()}
    </div>
  );
}
