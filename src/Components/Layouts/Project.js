import styles from "../Layouts/Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.individualProject}>
      <div className={`${styles.img}`}>
        <img src={`${props.img}`} alt={props.title}></img>
      </div>
      <div className={styles.heading}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.icons}>
          <a href={props.gitHub} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          {props.link && (
            <a href={props.link} target="_blank" rel="noreferrer">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.desc}>{props.desc}</p>
        <div className={styles.tagConatiner}>
          {props.tags.map((tag) => (
            <p className={styles.tag}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
