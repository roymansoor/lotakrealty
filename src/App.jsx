
import LotakLogo from '/public/assets/LotakLogo.png'
import './App.css'


function App() {

  const logoStyle = {
    width: '50%',  // Set the width to be twice the original size
    height: 'auto', // Maintain the aspect ratio
  };

  return (
    <>
      <div>
        
      <img src={LotakLogo} className="logo" alt="Lotak Realty Logo" style={logoStyle} />
      
      </div>
      <h1>Lotak Realty</h1>
      <div className="card">
   
        <p>
          Coming Soon
        </p>
      </div>
      
    </>
  )
}

export default App
