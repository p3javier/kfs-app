import React from "react";
import InfoPage from "@/features/InfoPage/InfoPage";
import Typography from "@material-ui/core/Typography";

const title = "Nuestra Historia";

const Paragraph: React.FC = ({ children }) => (
  <Typography variant="body1" align="justify" paragraph>
    {children}
  </Typography>
);
const Body = () => (
  <>
    <Paragraph>
      Medusa Events se formó en 2021 por dos jovenes cordobeses que
      identificaron la carencia que existe en cuanto a servicios online para la
      organización de eventos, especialmente los relacionados con las despedidas
      de soltero y soltera.
    </Paragraph>
    <Paragraph>
      En base a ese vacio competitivo decidimos montar una plataforma online que
      conectase a proveedores de servicios con clientes interesados en organizar
      un evento.
    </Paragraph>
    <Paragraph>
      Actualmente estamos centrados en el nicho de las despedidas pero con
      intención de expandir la plantilla y la oferta de servicios a cualquier
      tipo de eventos.
    </Paragraph>
  </>
);
const NuestraHistoria = () => (
  <>
    <InfoPage title={title}>
      <Body />
    </InfoPage>
  </>
);

export default NuestraHistoria;
