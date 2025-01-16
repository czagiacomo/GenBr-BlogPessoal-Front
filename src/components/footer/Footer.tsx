/* eslint-disable prefer-const */
import {
  Globe,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-green-palette-300 text-eme ">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Catharina Zagiacomo | Copyright {data}
          </p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <LinkedinLogo size={48} weight="regular" />
            </a>
            <a href="https://github.com/czagiacomo" target="_blank">
              <GithubLogo size={48} weight="regular" />
            </a>
            <a href="https://czagiacomo.github.io/Portfolio/" target="_blank">
              <Globe size={48} weight="regular" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
