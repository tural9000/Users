import {Link} from 'react-router-dom';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import styles from './page404.module.scss';

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link className={styles.link} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;