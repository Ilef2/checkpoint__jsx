import React from "react";
import PropTypes from 'prop-types'; 


const Profile = ({ fullName, bio, profession ,children, alert ,style}) => {
  const objects={ color:"rgb(45, 45, 90)"}
  const objectss={ color:"rgb(45, 45, 90)"}
  const objectsss={ color:"rgb(45, 45, 90)"}
  const bouton={ color:"rgb(45, 45, 90)"}


  return (
    <div style={style} >
      <h2 className="pr" style={objects}>{fullName}</h2>
      <h2 className="pr bio" style={objectss}>{bio}</h2>
      <h2 className="pr " style={objectsss}>{profession}</h2>
      <button style={bouton} onClick={alert} > handleName</button>

      <img className="im" src={children}/>
    </div>
  );
};
Profile.propTypes={fullName:PropTypes.string,bio:PropTypes.string,profession:PropTypes.string}
Profile.defaultProps={fullName:"no person exisist",bio:"no bio", profession:"no profession"}
export default Profile;
