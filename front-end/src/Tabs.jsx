export default function Tabs({ activeTab, setActiveTab }) {

  return (
    <>
      <div
        style={{
          width: "834px",
          height: "143px",
          left: "0px",
          top: "1051px",
          position: "absolute",
          background: "linear-gradient(90deg, #7ED7DD 0%, #92ADAF 100%)",
        }}
      ></div>
      <div
        style={{
          width: "259px",
          height: "143px",
          left: "0px",
          top: "1051px",
          position: "absolute",
          background: "rgba(95.61, 95.61, 95.61, 0.34)",
        }}
      ></div>
      <img
        id="map-tab"
        onClick={setActiveTab}
        style={{
          width: "112px",
          height: "104px",
          left: "66px",
          top: "1063px",
          position: "absolute",
        }}
        alt="A placeholder for map API."
        src="assets/mapicon.png"
      />
      <img
        id="list-tab"
        onClick={setActiveTab}
        style={{
          width: "89px",
          height: "87px",
          left: "372px",
          top: "1071px",
          position: "absolute",
        }}
        alt="A list icon."
        src="assets/list.png"
      />
      <img
        id="profile-tab"
        onClick={setActiveTab}
        style={{
          width: "126px",
          height: "120px",
          left: "641px",
          top: "1054px",
          position: "absolute",
        }}
        alt="A simple profile icon."
        src="assets/profile.webp"
      />
    </>
  );
}
