// pages/index.js
export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
      <div
        style={{
          height: "100vh",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          position: "relative",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <div style={{ maxWidth: "800px", marginBottom: "40px" }}>
          <p> The ML Grimoire </p>
          <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
            Foundations of AI: From First Principles to Practica
            {/* AI is the most important technology of our generation. Making it
            accessible to all — not only those with extensive educational
            backgrounds — is thus amongst the most important tasks we must
            collectively work on. The ML Grimoire is a comprehensive AI primer
            meant to equip readers with the foundational toolkit to pursue
            conversations and careers in the space. */}
          </p>
          <p>A comprehensive and concise primer on Artificial Intelligence</p>
          {/* <p style={{ fontSize: "14px", opacity: "0.8", lineHeight: "1.6" }}>
            This document was produced as a free open-access educational
            resource with insights, edits, and figures from Anthropic's Claude
            and OpenAI's o1 models. The text was authored by Seth Goldin and Teo
            Dimov, with valuable contributions from many reviewers. A massive
            thank you to Tristan Brigham, Rajat Doshi, Gashon Hussein, Katherine
            He, Linda He, Ananya Krishna, Houjun Liu, Huxley Marvit, Grace
            Gerwe, Mason Wang, Skylar Wang, and others. Any similarities to
            existing works are unintentional.
          </p> */}
        </div>
        <a
          href="/blank.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            fontSize: "20px",
            textDecoration: "underline",
            lineHeight: "1.6",
          }}
        >
          Read Here
        </a>
      </div>
    </>
  );
}
