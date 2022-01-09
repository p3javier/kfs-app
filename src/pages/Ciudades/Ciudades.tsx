import React, { useEffect, useState } from "react";
import CityCard from "../../features/CityCard/CityCard";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import * as data from "@/assets/data/ciudades.json";
import { ICiudad } from "@/typescript/ICiudad";
import { v1 as uuidv1 } from "uuid";

const Ciudades = () => {
  const [spacing, setSpacing] = useState<GridSpacing>(2);
  const [ciudades, setCiudades] = useState<ICiudad[]>([]);

  useEffect(() => {
    setCiudades(data.ciudades);
  }, [ciudades]);
  return (
    <Grid container spacing={spacing}>
      {ciudades.map((ciudad) => {
        return (
          <CityCard
            ciudad={ciudad.ciudad}
            descripcion={ciudad.descripcion}
            imagen={ciudad.imagen}
            ficha={ciudad.ficha}
            key={uuidv1()}
          />
        );
      })}
    </Grid>
  );
};

export { Ciudades };
