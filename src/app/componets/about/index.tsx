import ButtonLink from "../buttonLink";
import style from "./about.module.css";
import Card from "./../card";
export default function About() {
    return (
        <>
        <div className={style.container__about}>
        <div className="container">
        <div className={style.container__about_text}>
            <div className={style.container_text_about}>
                <h3 className={style.text_subtitle}>My Writing</h3>
                <h1>
                Newest
                <br />
                Blog Article
                </h1>
                <div>
                <p>
                I write some of my knowledge in the blog section, most of them will be article about Design, especially <strong>User Interface Design</strong>. My article might not good enough, so feel free to contact me if you have any suggestion.
                </p>
                </div>
            </div>
            <div className={style.container__buttom}>
                <h3 className={style.text_subtitle_button}>Blog</h3>
                <ButtonLink 
                  text="View My Work"
                  color="var(--primary-color)"
                  backgroundColor="var(--tertiary-color)"
                  type={false}
                  href="#"
                  onClick={() => console.log("View My Work")}
                />
            </div>
        </div>
        </div>
        <div className="container">
        <div className={style.scroll__container__x}>
        <div className={style.container__card}>
            <Card image="https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?w=826&t=st=1720107507~exp=1720108107~hmac=0f7b41adaf1157db4f314614b3f1982340ccfa43caaa8748ff4e18d078c28f5b" 
              title="Title"
              date="Date"
            />
            <Card 
            image="https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?w=826&t=st=1720107507~exp=1720108107~hmac=0f7b41adaf1157db4f314614b3f1982340ccfa43caaa8748ff4e18d078c28f5b" 
            title="Title"
            date="Date"
            />
            <Card 
            image="https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?w=826&t=st=1720107507~exp=1720108107~hmac=0f7b41adaf1157db4f314614b3f1982340ccfa43caaa8748ff4e18d078c28f5b" 
            title="Title"
            date="Date"/>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}