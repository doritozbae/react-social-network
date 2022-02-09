import Preloader from "./Preloader";
import ProfileStatus from "./ProfileStatus"
import { updateStatus } from './redux/profileReducer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

   if (!props.profile) {
      return <Preloader /> 
   }

   return (
      <div>
          <div className="App-content_head">
          <div className="App-content_head-img"></div>
          </div>

          <div className="App-content_main">
            <img src={props.profile.photos.large} className="App-content_main-pic" alt="pic" />
            <div className="App-content_main-desc">
              <h1>{props.profile.fullName}</h1>
              <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
              <h4 className="App-content_main-desc_date">{props.profile.aboutMe} </h4>
              <h4 className="App-content_main-desc_city">City: Minsk</h4>
              <h4 className="App-content_main-desc_education">Education: kokoko</h4>
              <h4 className="App-content_main-desc_site">GitHub: 
                  <a href={`${props.profile.contacts.github}`}> GitHub </a> </h4>
            </div>
          </div>
       </div>
   )
}

export default ProfileInfo;
