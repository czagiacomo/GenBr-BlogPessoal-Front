/* eslint-disable prefer-const */
import { Globe, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-100 text-base-content rounded p-10">
        <div className="grid grid-flow-col gap-4">
          <span className="text-lg -my-8">Acesse minhas redes sociais</span>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <LinkedinLogo size={48} weight="regular" />
            </a>
            <a href="https://github.com/czagiacomo" target="_blank">
              <GithubLogo size={48} weight="regular" />
            </a>
            <a href="https://portfolio-beta-six-46.vercel.app" target="_blank">
              <Globe size={48} weight="regular" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Catharina Zagiacomo
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
