// pages/index.js
export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <div
        style={{
          height: "100vh",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <a
          href="/blank.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            fontSize: "20px",
            textDecoration: "underline",
            //fontFamily: "Cursive, fantasy",
          }}
        >
          See the Magic
        </a>
      </div>
    </>
  );
}
