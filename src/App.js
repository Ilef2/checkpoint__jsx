import ProfilePhoto from "./profile/ProfilePhoto"
import Address from "./profile/Address"
import FullName from "./profile/FullName"
import './App.css';

function App() {
  return (
    <div className="profile">
      <ProfilePhoto/>
      <Address/>
      <FullName/>
    </div>
  );
}

export default App;
