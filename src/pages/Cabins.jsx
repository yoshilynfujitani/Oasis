import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [data, setData] = useState([]);
  useEffect(function () {
    getCabins().then((data) => setData(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      {data.map((data) => (
        <div className="" key={data.id}>
          <img src={data.image} alt="" />
        </div>
      ))}
    </Row>
  );
}

export default Cabins;
