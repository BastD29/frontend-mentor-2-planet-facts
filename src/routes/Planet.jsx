import { useParams } from "react-router-dom"
import TabPane from "../components/TabPane";
import Tabs from "../components/Tabs";
import planetsData from "../data/data.json";

export default function Planet() {

  let params = useParams();
  const getPlanet = (name) => {
    return planetsData.find((planet) => planet.name === name);
  };
  let planet = getPlanet(params.planet);
  
  return (
    <div>
      <Tabs>
        <TabPane name="Overview" key="1">
          {planet.overview.content}
        </TabPane>
        <TabPane name="Internal Structure" key="2">
          {planet.structure.content}
        </TabPane>
        <TabPane name="Surface Geology" key="3">
          {planet.geology.content}
        </TabPane>
      </Tabs>
    </div>
  )
}
