import { ButtonProps } from "@/app/interface"
import style from './buttonLink.module.css'
export default function ButtonLink({
    text,
    color,
    backgroundColor,
    onClick,
    href,
    type
}: ButtonProps & {href: string,type:Boolean}) {
  return(
    <>
        <button className={style.buttonLink} style={{color, backgroundColor}} onClick={onClick}>
            {text}
            <div className={type ? style.whiteArrow: style.arrow_color}></div>
        </button>
    </>
  )
}