import React, { Component } from "react";
import { connect } from "react-redux";
import { actChonKBB } from "./../redux/actions";

class Player extends Component {
  render() {
    const { mangDatCuoc, datCuoc } = this.props;
    return (
      <div className="playerGame">
        <div className="KBB">
          <img
            className="KBBimg"
            src={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img className="imgKBB" src="./img/gameOanTuXi/player.png" alt="" />
        <div className="row">
          {mangDatCuoc.map((item, index) => {
            //Tạo khung khi nhấn vào sẻ có khung này
            let borDer = {};
            if (item.datCuoc) {
              borDer = { border: "3px solid  red" };
            }

            //render cac hinh keo bua bao
            return (
              <div className="col-4">
                <button
                  onClick={() => {
                    datCuoc(item.ma);
                  }}
                  style={borDer}
                  className="btnItem"
                >
                  <img src={item.hinhAnh} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { mangDatCuoc: state.OanTuXiReducer.listMang };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch(actChonKBB(maCuoc));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
