// pages/index.js
export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <a
        href="/your-pdf.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "white",
          fontSize: "24px",
          textDecoration: "none",
        }}
      >
        Open PDF
      </a>
    </div>
  );
}
