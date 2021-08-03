import { CHON_KEO_BUA_BAO, RANDOM, ENDGAME } from "./../constants";

export const actChonKBB = (maCuoc) => {
  // tạo action chọn kéo búa bao
  return {
    type: CHON_KEO_BUA_BAO,
    maCuoc,
  };
};

export const actRandom = () => {
  // tạo action ramdom chọn kéo búa bao cho máy tính
  return {
    type: RANDOM,
  };
};

export const actEndGame = () => {
  // tạo action kết thúc và tính điểm
  return {
    type: ENDGAME,
  };
};
