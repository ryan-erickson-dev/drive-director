export default function List() {
  return (
    <div style={{ width: "834px", height: "1194px", position: "relative", background: "white" }}>
      <div style={{ width: "834px", height: "143px", left: "0px", top: "1051px", position: "absolute", background: "linear-gradient(90deg, #7ED7DD 0%, #92ADAF 100%)" }}></div>
      <div style={{ width: "259px", height: "143px", left: "287px", top: "1054px", position: "absolute", background: "rgba(95.61, 95.61, 95.61, 0.34)" }}></div>
      <img
        style={{ width: "112px", height: "104px", left: "66px", top: "1063px", position: "absolute" }}
        src="./mapicon.png"
        alt="Map Icon"
      />
      <img
        style={{ width: "89px", height: "87px", left: "372px", top: "1071px", position: "absolute" }}
        src="./list.png"
        alt="List Icon"
      />
      <img
        style={{ width: "126px", height: "120px", left: "641px", top: "1054px", position: "absolute" }}
        src="./profile.webp"
        alt="Profile"
      />
      <div style={{ width: "701px", height: "820px", left: "66px", top: "96px", position: "absolute" }}>
        <div style={{ width: "701px", height: "123px", left: "0px", top: "0px", position: "absolute", background: "#D9D9D9", borderRadius: "20px" }}></div>
        <div style={{ width: "701px", height: "123px", left: "0px", top: "697px", position: "absolute", background: "#D9D9D9", borderRadius: "20px" }}></div>
        <div style={{ width: "701px", height: "123px", left: "0px", top: "175px", position: "absolute", background: "#D9D9D9", borderRadius: "20px" }}></div>
        <div style={{ width: "701px", height: "123px", left: "0px", top: "350px", position: "absolute", background: "#D9D9D9", borderRadius: "20px" }}></div>
        <div style={{ width: "701px", height: "123px", left: "0px", top: "525px", position: "absolute", background: "#D9D9D9", borderRadius: "20px" }}></div>
      </div>
      <div style={{ left: "153px", top: "9px", position: "absolute", color: "black", fontSize: "70px", fontFamily: "Inter", fontWeight: "700", wordWrap: "break-word" }}>
        Current Queue
      </div>
      <div style={{ width: "138px", height: "88px", left: "40px", top: "939px", position: "absolute" }}>
        <div style={{ width: "138px", height: "88px", position: "absolute", background: "linear-gradient(90deg, #7ED7DD 0%, #92ADAF 100%)", borderRadius: "20px" }}></div>
        <div style={{ width: "92px", height: "52px", left: "23px", top: "18px", position: "absolute", color: "black", fontSize: "45px", fontFamily: "Inter", fontWeight: "700", wordWrap: "break-word" }}>
          Add
        </div>
      </div>
      <div style={{ width: "221px", height: "88px", left: "569px", top: "941px", position: "absolute" }}>
        <div style={{ width: "221px", height: "88px", position: "absolute", background: "linear-gradient(90deg, #7ED7DD 0%, #92ADAF 100%)", borderRadius: "20px" }}></div>
        <div style={{ width: "181px", height: "52px", left: "24px", top: "18px", position: "absolute", color: "black", fontSize: "45px", fontFamily: "Inter", fontWeight: "700", wordWrap: "break-word" }}>
          Remove
        </div>
      </div>
    </div>
  );
}
