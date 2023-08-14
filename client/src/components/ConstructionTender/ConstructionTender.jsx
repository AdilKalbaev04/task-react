import Tender from "../AddServ/Tender/Tender";
import React from "react";

const ConstructionTender = () => {
  return (
    <Tender
      title={"Тендер строительных бригад"}
      price={"49 000 тг"}
      img={"./tender-bg.png"}
    />
  );
};

export default ConstructionTender;
