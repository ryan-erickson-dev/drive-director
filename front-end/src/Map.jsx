export default function Map({ riders }) {
  return (
    <div
      style={{
        width: "834px",
        height: "1194px",
        position: "relative",
        background: "white",
      }}
    >
      <div
        style={{
          width: "693px",
          height: "673px",
          left: "68px",
          top: "108px",
          position: "absolute",
        }}
      >
        <div
          style={{
            width: "693px",
            height: "673px",
            left: "0px",
            top: "0px",
            position: "absolute",
            background: "#D9D9D9",
            borderRadius: "20px",
          }}
        ></div>
        <div
          style={{
            left: "181px",
            top: "329px",
            position: "absolute",
            color: "black",
            fontSize: "48px",
            fontFamily: "Inter",
            fontWeight: "162",
            wordWrap: "break-word",
          }}
        >
          This is the map
        </div>
      </div>
      <div
        style={{
          width: "597px",
          height: "156px",
          left: "113px",
          top: "857px",
          position: "absolute",
          background: "#D9D9D9",
          borderRadius: "20px",
        }}
      ></div>
      <div
        style={{
          left: "259px",
          top: "794px",
          position: "absolute",
          color: "black",
          fontSize: "48px",
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Current Rider:
      </div>
      <div
        style={{
          left: "243px",
          top: "10px",
          position: "absolute",
          color: "black",
          fontSize: "70px",
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Map View
      </div>
    </div>
  );
}
