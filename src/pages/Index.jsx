import React from "react";
import "./Index.css"
function Index() {
  return (
    <>
      <header>
        <h1>Study Buddy</h1>
        <p>Your ultimate peer-to-peer learning platform</p>
      </header>
      <nav>
        <ul>
          <li>
            <a href="chat.html">Real-time Chat</a>
          </li>
          <li>
            <a href="materials.html">Study Material</a>
          </li>
          <li>
            <a href="qa.html">Q&A Portal</a>
          </li>
          <li>
            <a href="leaderboard.html">Leaderboard</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a href="signup.html">Sign Up</a>
          </li>
        </ul>
      </nav>
      <div class="container">
        <div class="section">
          <h2>Welcome to Study Buddy</h2>
          <p>
            Connect, collaborate, and compete in your studies. Click on the
            sections above to explore.
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
