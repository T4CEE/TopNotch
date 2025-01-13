import React from "react";

const AreaSelection: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white mt-4">
      <h1 className="text-xl font-bold mb-2">Select Your Area</h1>
      <p className="text-gray-600 mb-2">
        Select your county, parish, or municipality.{" "}
        <span className="text-red-500">*</span>
      </p>
      <div className="relative">
        <select
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          defaultValue="LOS ANGELES"
        >
          <option value="ALAMEDA">ALAMEDA</option>
          <option value="ALPINE">ALPINE</option>
          <option value="AMADOR">AMADOR</option>
          <option value="BUTTE">BUTTE</option>
          <option value="CALAVERAS">CALAVERAS</option>
          <option value="COLUSA">COLUSA</option>
          <option value="CONTRA COSTA">CONTRA COSTA</option>
          <option value="DEL NORTE">DEL NORTE</option>
          <option value="EL DORADO">EL DORADO</option>
          <option value="FRESNO">FRESNO</option>
          <option value="GLENN">GLENN</option>
          <option value="HUMBOLDT">HUMBOLDT</option>
          <option value="IMPERIAL">IMPERIAL</option>
          <option value="INYO">INYO</option>
          <option value="KERN">KERN</option>
          <option value="KINGS">KINGS</option>
          <option value="LAKE">LAKE</option>
          <option value="LASSEN">LASSEN</option>
          <option value="LOS ANGELES">LOS ANGELES</option>
          <option value="MADERA">MADERA</option>
          <option value="MARIN">MARIN</option>
          <option value="MARIPOSA">MARIPOSA</option>
          <option value="MENDOCINO">MENDOCINO</option>
          <option value="MERCED">MERCED</option>
          <option value="MODOC">MODOC</option>
          <option value="MODOC">MODOC</option>
          <option value="MONO">MONO</option>
          <option value="MONTEREY">MONTEREY</option>
          <option value="NAPA">NAPA</option>
          <option value="NEVADA">NEVADA</option>
          <option value="ORANGE">ORANGE</option>
          <option value="PLACER">PLACER</option>
          <option value="PLUMAS">PLUMAS</option>
          <option value="RIVERSIDE">RIVERSIDE</option>
          <option value="SACRAMENTO">SACRAMENTO</option>
          <option value="SAN BENITO">SAN BENITO</option>
          <option value="SAN BERNARDINO">SAN BERNARDINO</option>
          <option value="SAN DIEGO">SAN DIEGO</option>
          <option value="SAN FRANCISCO">SAN FRANCISCO</option>
          <option value="SAN JAOQUIN">SAN JAOQUIN</option>
          <option value="SAN LUIS OBISPO ">SAN LUIS OBISPO </option>
          <option value="SAN MATEO ">SAN MATEO </option>
          <option value="SAN BARBARA ">SAN BARBARA </option>
          <option value="SANTA CLARA ">SANTA CLARA </option>
          <option value="SANTA CRUZ ">SANTA CRUZ </option>
          <option value="SHASTA ">SHASTA </option>
          <option value="SIERRA ">SIERRA </option>
          <option value="SISKIYOU ">SISKIYOU </option>
          <option value="SOLANO ">SOLANO </option>
          <option value="STANISLAUS ">STANISLAUS </option>
          <option value="SUTTER ">SUTTER </option>
          <option value="TEHAMA ">TEHAMA </option>
          <option value="TRINITY ">TRINITY </option>
          <option value="TULARE ">TULARE</option>
          <option value=" "> </option>
        </select>
      </div>
    </div>
  );
};

export default AreaSelection;
