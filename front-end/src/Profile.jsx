import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-title-box">
        <h1>Driver Profile</h1>
        <button>Edit</button>
      </div>
      <div className="profile-name-box">
        <label>Name:</label>
        <input type="text"></input>
      </div>
      <div className="profile-carinfolabel-box">
        <h1>Car Information</h1>
      </div>

      <div className="profile-make-box">
        <label>Make:</label>
        <input type="text"></input>
      </div>
      <div className="profile-color-box">
        <label>Color:</label>
        <input type="text"></input>
      </div>

      <div className="profile-cap-box">
        <label>Capacity:</label>
        <input type="text"></input>
      </div>
    </div>
  );
}
