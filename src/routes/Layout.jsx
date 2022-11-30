import { NavLink, Outlet } from "react-router-dom";
import planetsData from "../data/data.json";

export default function Layout() {
  return (
    <div>
      <nav style={{ 
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "30%"
      }}>
        {planetsData.map((planet) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              }
            }}
            // to={`/planet/${planet.name}`}
            to={`${planet.name}`}
            key={planet.name}
          >
            {planet.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}
