import React from 'react';
import styles from './ProjectComp.css'


function ProjectComp(props) {
    const handleClick = (e) => {
        if (e.target.className === styles.demoButton) {
            window.open(props.demoLink)
        }
        if (e.target.className === styles.codeButton) {
            window.open(props.codeLink)
        }
    };
    return (
        <div className={styles.wrapper}>
            <h3>{`${props.projectName}`}</h3>
            <div className={styles.About}>
                {props.about}
            </div>
            <img className={styles.image} src={props.image}/>
            <div className={styles.footer}>
                <button className={styles.demoButton} onClick={handleClick}>Demo</button>
                <button className={styles.codeButton} onClick={handleClick}>Code</button>
            </div>
        </div>
    )
}

export default ProjectComp