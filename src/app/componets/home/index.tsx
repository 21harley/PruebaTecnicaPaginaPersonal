import ButtonLink from "../buttonLink";
import AvatarImg from "./avatarImg";
import style from "./home.module.css";
export default function Home() {
    return (
        <div className={style.home}>
            <AvatarImg />
            <div className={style.container_text_home}>
                <h1 className={style.title__home}>
                I’am Dedek <strong>Julian, UI Designer</strong>
                </h1>
                <p>
                Also a lifetime learner who love clean and minimalist User Interface design.
                </p>
            </div>
            <div className={style.container_button}>
            <ButtonLink
                text="View My Work"
                color="#fff"
                backgroundColor="var(--primary-color)"
                type={true}
                href="#"
                onClick={() => console.log("View My Work")}
            />
            </div>
        </div>
    );
}