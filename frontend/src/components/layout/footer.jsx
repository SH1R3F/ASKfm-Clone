import { useTranslation } from "react-i18next";
import { SiAskfm } from "react-icons/si";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoTwitter,
} from "react-icons/bi";

function Users() {
  return (
    <div class="w- mb-5 flex gap-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
        <img
          src="https://cuad.ask.fm/192/fa61d/5375/4b09/907f/ea74727f365c/thumb/448680.jpg"
          alt="person"
          className="aspect-square w-9 rounded-full"
        />
      ))}
    </div>
  );
}

function Menu() {
  const { t } = useTranslation();

  return (
    <ul className="mb-3 flex flex-wrap justify-center gap-4">
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("About ASKfm")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Browse by categories")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Browse by countries")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Browse by years")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Safety center")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Help")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Community guidelines")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Terms of use")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Privacy policy")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Cookies policy")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Advertising")}
        </a>
      </li>
      <li className="transition-colors hover:text-gray-500">
        <a className="whitespace-nowrap" href="/">
          {t("Professionals")}
        </a>
      </li>
    </ul>
  );
}

function Socials() {
  return (
    <ul className="flex gap-1 text-lg text-gray-500">
      <li className="transition-colors hover:text-gray-400">
        <a href="/#">
          <SiAskfm />
        </a>
      </li>
      <li className="transition-colors hover:text-gray-400">
        <a href="/#">
          <BiLogoFacebookCircle />
        </a>
      </li>
      <li className="transition-colors hover:text-gray-400">
        <a href="/#">
          <BiLogoTwitter />
        </a>
      </li>
      <li className="transition-colors hover:text-gray-400">
        <a href="/#">
          <BiLogoInstagramAlt />
        </a>
      </li>
    </ul>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer class="bg-white pt-6">
      <div className="container mx-auto flex flex-col flex-wrap items-center text-center text-xs font-medium">
        {Users()}

        {Menu()}

        <div className="mb-5 flex w-full justify-between">
          {/*Language switcher*/}
          <div>
            <span className="me-1 text-gray-500">{t("Language")}:</span>
            <a className="transition-colors hover:text-gray-500" href="/#">
              {t("English")}
            </a>
          </div>

          <div className="flex items-center gap-4">
            {Socials()}
            <span className="text-gray-500">&copy; {t("Ask.fm 2024")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
