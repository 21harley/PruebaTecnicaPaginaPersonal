import style from './avatarImg.module.css'
export default function AvatarImg() {
 return (
    <div className={style.container__avatar}>
       <div className={style.pretter__avatar_one}></div>
       <div className={style.pretter__avatar_two}></div>
       <div className={style.background__avatar}></div>
       <div className={style.animate__vector__one}></div>
    </div>
     )
}