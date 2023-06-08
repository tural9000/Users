import styles from "./UserDetails.module.scss";
import { useGetUserQuery } from "../../store/api/api";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

export type MyParams = {
    id: string;
  };
const UserDetails = () => {
    const { id } = useParams<keyof MyParams>() as MyParams;
    const {data, isLoading} = useGetUserQuery(id);
    
    // console.log('test', singleUserData);
  const {name, email, age, city, gender, phone, image }:any = data ?? {};
    // if(isLoading) return <Spinner/>
  return (
    <div className={styles.userPage}>
      {isLoading? <Spinner/>:
      <div className="content">
      <div className={styles.userPage__header}>
          <div className={styles.userPage__header__background}></div>
          <div className={styles.userPage__header__widget}></div>
          <div className={styles.widget__columns}>
          <div className={styles.widget__heading}>
              <h2 style={{ display: "inline" }}>{name?.first}</h2>
              <h2 style={{ display: "inline", marginLeft: "0.7rem" }}>
              {name?.last}
              </h2>
          </div>
          <div className={styles.widget__text}>
              Lead Mobile User Experience Designer
          </div>
          </div>
      </div>
      <div className={styles.userPage__main}>
          <div className={styles.userPage__main__container}>
          <div className={styles.main__header} >
              <div className={styles.main__header__img}>
              <img src={image} alt="" />
              </div>
              <div className={styles.main__header__text}>
              <h3>Salesforce</h3>
              <p>{city}</p>
              </div>
              <div className={styles.main__header__btn} >
              {/* <Button onClick={() => setNote(prev => !prev)} 
                      style={{width: '90px'}}>{!note? 'New note': 'Save'}
              </Button> */}
              {/* <UserForm datas = {data} onComplete={() => fetchUser()}/> */}
              </div>
          </div>
          <div className={styles.note}>
              {/* {updateNote(value)} */}
          </div>
          <hr />
          <div className={styles.userInfo}>
              <div className={styles.userInfo__left}>
              <div className={styles.userInfo__left__widget}>
                  <h6 className={styles.emailHeading}>Email</h6>
                  <p className={styles.emailTxt}>{email}</p>
              </div>
              <div className={styles.userInfo__left__widget}>
                  <h6>Age</h6>
                  <p>{age}</p>
              </div>
              <div className={styles.userInfo__left__widget}>
                  <h6>Phone</h6>
                  <h5>{phone}</h5>
              </div>
              <div className={styles.userInfo__left__widget}>
                  <h6>Gender</h6>
                  <h5>{gender}</h5>
              </div>
              </div>
              <div className={styles.userInfo__left}>
              <div className={styles.userInfo__left__widget}>
                  <h6 className={styles.emailHeading}>Company site</h6>
                  <p className={styles.emailTxt}>salesforce.com</p>
              </div>
              <div className={styles.userInfo__left__widget}>
                  <h6>Fax</h6>
                  <p>376 993 9200</p>
              </div>
              <div className={styles.userInfo__left__widget}>
                  <h6>Business Day End Hour</h6>
                  <h5>23</h5>
              </div>
              <div className={styles.userInfo__left__widget}>
                  <h6>Address</h6>
                  <h5>
                  745 Travel Street, Unit 1<br />
                  San Francisco, California 97111
                  </h5>
              </div>
              </div>
          </div>
          <hr />
          <div className={styles.badges}>
              <div className={styles.badges__img01}>
              <div className={styles.badge}>
                  35 <br />
                  Badges
              </div>
              <div className={styles.view}>
                  <a>View all</a>
              </div>
              </div>
              <div className={styles.badges__img}>
              {/* <img src={react} alt="" /> */}
              <div className={styles.badges__txt}>
                  Salesforce <br /> Basics
              </div>
              </div>
              <div className={styles.badges__img}>
              {/* <img src={sale} alt="" /> */}
              <div className={styles.badges__txt}>
                  Salesforce <br /> Sales
              </div>
              </div>
              <div className={styles.badges__img}>
              {/* <img src={sharing} alt="" /> */}
              <div className={styles.badges__txt}>
                  Salesforce <br /> Sharing
              </div>
              </div>
              <div className={styles.badges__img}>
              {/* <img src={motorImg} alt="" /> */}
              <div className={styles.badges__txt}>
                  Salesforce <br /> Motors
              </div>
              </div>
          </div>
          </div>
      </div>
    </div>}
    </div>
  )
}

export default UserDetails