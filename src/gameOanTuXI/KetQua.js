import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    const { ketQua, soBanThang, soLanChoi } = this.props;
    return (
      <div>
        <div className="display-4 text-warning ">{ketQua}</div>
        <div className="display-4 text-success ">
          Number of wins:
          <span className="text-warning pl-2">{soBanThang}</span>
        </div>
        <div className="display-4 text-success ">
          Number of times played:
          <span className="text-warning pl-2">{soLanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.OanTuXiReducer.ketQua,
    soBanThang: state.OanTuXiReducer.soBanThang,
    soLanChoi: state.OanTuXiReducer.soLanChoi,
  };
};

export default connect(mapStateToProps, null)(KetQua);
