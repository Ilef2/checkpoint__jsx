import './App.css';
import Profile from './profile/Profile';

function App() {
  const fullName= `IlefDimassi`;
  const bio= `I study the training of the full stack `;
  const profession= `Student`;
  const srcs =`fleur.webp`;
  const handleName=()=>{
    alert(fullName)
  }
  const object={ backgroundColor:"rgb(191, 191, 224);"}
  
  return (
    <div className="pf">
      <Profile fullName={fullName} bio={bio} profession={profession} alert={handleName} style={object}>{srcs}</Profile>
     
    </div>
  );
}

export default App;
