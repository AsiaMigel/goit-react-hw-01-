import css from "./Profile.module.css"
const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <>
      <div className={css.userCard}>
        <img src={image} alt="User avatar" className={css.photo} />
        <div className={css.userProfile}>
          <p className={css.userName}>{name}</p>
          <p className={css.userData}>@{tag}</p>
          <p className={css.userData}>{location}</p>
        </div>

        <ul className={css.userStats}>
          <li className={css.userStatsList}>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className={css.userStatsList}>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className={css.userStatsList}>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Profile
