import React from "react";
import { Outlet } from "react-router-dom";
import ServiceSearch from "./ServiceSearch";
import "./ServiceLayout.css";

const ServiceLayout = () => {
  return (
    <div className="service-layout">
      <ServiceSearch />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ServiceLayout;
