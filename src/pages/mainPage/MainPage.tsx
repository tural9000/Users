import { Form } from 'react-router-dom';
import styles from './mainPage.module.scss';

function MainPage() {
  return (
    <section className={styles.main__element}>
        <div className={styles.main__info}>
            <div className={styles.main__text}>
               <h5 className={styles['text-info']}>DIGITAL WORK, AMAZING SOLUTIONS.</h5>
            </div>
            <div className={styles.main__heading}>
                <h1 className={styles['text-heading']}>WE ARE<br/>DIGITAL CREATIVE</h1>
            </div>
            <div className={styles.main__desc}>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem debitis optio similique autem ducimus sapiente in sint qui, amet consequuntur modi minus? Inventore amet nisi velit aut tempora alias. amet consectetur adipisicing elit. Ex dolorem debitis optio similique autem ducimus sapiente in sint qui, amet consequuntur modi minus? Inventore amet nisi velit aut tempora alias. amet consectetur adipisicing elit. Ex dolorem debitis optio similique autem ducimus sapiente in sint qui, amet consequuntur modi minus? Inventore amet nisi velit aut tempora alias.</p>
            </div>
            {/* <Form/> */}
        </div>
    </section>
  )
}

export default MainPage