import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0px;}
    }`;

    const { computer } = this.props;
    return (
      <div>
        <div className="playerGame">
          <style>{keyframe}</style>
          <div className="KBB" style={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                animation: ` randomItem${Date.now()} 0.1s`,
                transform: "rotate(270deg)",
                left: "10%",
              }}
              className="KBBimg"
              src={computer.hinhAnh}
            />
          </div>
          <div className="speech-bubble"></div>
          <img
            className="imgKBB"
            src="./img/gameOanTuXi/playerComputer.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.OanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps, null)(Computer);
