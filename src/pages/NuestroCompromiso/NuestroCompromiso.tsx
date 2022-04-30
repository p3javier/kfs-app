import React from "react";
import InfoPage from "@/features/InfoPage/InfoPage";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core";
const title = "Nuestro compromiso";
const body = `En Medusa Events queremos establecer relaciones solidas y duraderas con nuestros partners para así poder ofrecer el mejor servicio a nuestro clientes. \n 
Para ello nuestros pilares son:
 1. Comunicación transparente con nuestros partner.
 `;

const Paragraph: React.FC = ({ children }) => (
  <Typography variant="body1" align="justify" paragraph>
    {children}
  </Typography>
);
const Body = () => (
  <>
    <Paragraph>
      En Medusa Events queremos establecer relaciones solidas y duraderas con
      nuestros partners para así poder ofrecer el mejor servicio a nuestro
      clientes y de esa forma incrementar tanto nuestro volumen de negocio como
      el de nuestros partners.
    </Paragraph>
    <Paragraph>Para ello nuestros pilares son:</Paragraph>
    <List>
      <ListItem>
        <ListItemText>
          1. Comunicación transparente con nuestros partners.
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>2. Compromiso de colaboración.</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          3. Mejora constante del servicio ofrecido tanto a nuestros partners
          como a clientes mediante la obtención de feedback.
        </ListItemText>
      </ListItem>
    </List>
    <Paragraph>
      En Medusa Events estamos comprometidos con ofrecer el mejor servicio a
      nuestros partners. Por ello ofrecemos canales de comunicación exclusivos
      con el staff de Medusa disponibles todos los días de la semana.
    </Paragraph>
  </>
);
const NuestroCompromiso = () => (
  <>
    <InfoPage title={title}>
      <Body />
    </InfoPage>
  </>
);

export default NuestroCompromiso;
