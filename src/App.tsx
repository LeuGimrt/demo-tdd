import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HTTPImage from "./components/HTTPImage";
import SearchSidebar from "./components/SearchSidebar";

function App() {
  const [status, setStatus] = useState<string>("100");

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <aside className='col-12 col-md-5'>
            <SearchSidebar setStatus={setStatus} />
          </aside>
          <main className='col-12 col-md-7'>
            <HTTPImage status={status} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
