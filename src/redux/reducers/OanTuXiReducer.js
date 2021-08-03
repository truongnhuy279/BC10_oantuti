import { CHON_KEO_BUA_BAO, RANDOM, ENDGAME } from "./../constants";

const stateOanTuXi = {
  listMang: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "Tôi là nhất ha ha ha ...",
  soBanThang: 0,
  soLanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png" },
};

const OanTuXiReducer = (state = stateOanTuXi, action) => {
  switch (action.type) {
    case CHON_KEO_BUA_BAO: {
      //reset listMang
      let mangDatCuoc = [...state.listMang];
      mangDatCuoc = mangDatCuoc.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.listMang = mangDatCuoc;
      return { ...state };
    }
    case RANDOM: {
      //   console.log("random", action);
      let ranDom = Math.floor(Math.random() * 3);
      let ngauNhien = state.listMang[ranDom];
      state.computer = ngauNhien;
      return { ...state };
    }

    case ENDGAME: {
      let player = state.listMang.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "hoà nhau";
          } else if (computer.ma === "bua") {
            state.ketQua = "thua sml";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Tôi là nhất ha ha ha ...";
          }
          break;
        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "hoà nhau";
          } else if (computer.ma === "bao") {
            state.ketQua = "thua sml";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Tôi là nhất ha ha ha ...";
          }
          break;
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "hoà nhau";
          } else if (computer.ma === "keo") {
            state.ketQua = "thua sml";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Tôi là nhất ha ha ha ...";
          }
          break;
        default:
          state.ketQua = "Tôi là nhất ha ha ha ...";
      }
      state.soLanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default OanTuXiReducer;
