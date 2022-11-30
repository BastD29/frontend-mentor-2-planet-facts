import { Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Planet from "./routes/Planet";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route
          index
          element={
            <main>
              <p>Select a planet</p>
            </main>
          }
        />
        {/* <Route path="planet/:planet" element={<Planet />} /> */}
        <Route path=":planet" element={<Planet />} />
      </Route>
      <Route
        path="*"
        element={
          <main>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}
