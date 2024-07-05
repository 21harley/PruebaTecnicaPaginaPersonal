import { CardProps } from "@/app/interface"
import style from "./card.module.css"

export default function Card({ title, date, image }: CardProps) {
    return (
            <figure className={style.figure_card}>
                <img  className={style.figure_image} src={image} alt="placeholder" />
                <figcaption>
                    <h3>{title}</h3>
                    <p>{date}</p>
                </figcaption>
            </figure>
    )
}