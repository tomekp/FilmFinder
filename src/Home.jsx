import LinkButton from "./LinkButton";
// @ts-ignore
import picture from "./assets/tech-daily-PGuCnUzsRSM-unsplash.jpg";
export function Home() {
  return (
    <>
      <section className="section_landing_page">
        <div className="section_landing_page--photo">
          <img src={picture} className="page_pic"></img>
        </div>
        <div className="section_landing_page--welcome">
          <p className="slp_welcome--quote paragraph">
            Welcome to the world of film!
          </p>
        </div>
        <div className="lp_buttons_container basic_buttons">
          <LinkButton to="/start" className="lp_button--start basic_button">
            Let's go!
          </LinkButton>
          <LinkButton to="/aboutus" className="lp_button--about basic_button">
            About us
          </LinkButton>
        </div>
      </section>
    </>
  );
}
