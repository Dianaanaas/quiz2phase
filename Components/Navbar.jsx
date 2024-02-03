const React = require('react');

function Navbar({ user }) {
  return (
    <div className="score">
      <p>
        Score:
        <p className="scoreNavbar">{user && user.score}</p>
      </p>
    </div>
  );
}

module.exports = Navbar;
