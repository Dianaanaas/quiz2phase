const React = require('react');

function Navbar({ user }) {
  console.log(user, '0000000');
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
