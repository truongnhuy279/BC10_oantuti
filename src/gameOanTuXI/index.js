import React, { Component } from "react";
import "./index.css";
import KetQua from "./KetQua";
import Player from "./Player";
import Computer from "./PlayerCPU";
import { connect } from "react-redux";
import { actRandom, actEndGame } from "./../redux/actions";

class GameOanTuXi extends Component {
  render() {
    const { playGame } = this.props;
    return (
      <div className="gameOTX ">
        <h3 className="text-center text-danger">Game Oan Tu Xi</h3>
        <div className="row text-center mt-5">
          <div className="col-3">
            <Player />
          </div>
          <div className="col-6">
            <KetQua />
            <button
              onClick={() => {
                playGame();
              }}
              className="btn btn-success m-2"
            >
              Play game
            </button>
          </div>
          <div className="col-3">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      //khai báo hàm lặp đi lặp lại
      let randomComputerIteam = setInterval(() => {
        dispatch(actRandom());
        count++;
        if (count >= 10) {
          // dừng hàm setInterval khi count = 100
          clearInterval(randomComputerIteam);

          dispatch(actEndGame());
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(GameOanTuXi);
