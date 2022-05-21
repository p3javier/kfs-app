import React from "react";
import InfoPage from "@/features/InfoPage/InfoPage";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core";
const title = "Política de privacidad de Medusa Events";

const Paragraph: React.FC = ({ children }) => (
  <Typography variant="body1" align="justify" paragraph>
    {children}
  </Typography>
);
const Body = () => (
  <>
    <Paragraph>
      Esta Política de privacidad describe cómo se recopila, utiliza y comparte
      su información personal cuando visita o hace una compra en medusa.events
      (denominado en lo sucesivo el “Sitio”).
    </Paragraph>
    <Typography variant="h5">INFORMACIÓN PERSONAL QUE RECOPILAMOS</Typography>
    <Paragraph>
      Cuando visita el Sitio, recopilamos automáticamente cierta información
      sobre su dispositivo, incluida información sobre su navegador web,
      dirección IP, zona horaria y algunas de las cookies que están instaladas
      en su dispositivo. Además, a medida que navega por el Sitio, recopilamos
      información sobre las páginas web individuales o los productos que ve, las
      páginas web o los términos de búsqueda que lo remitieron al Sitio e
      información sobre cómo interactúa usted con el Sitio. Nos referimos a esta
      información recopilada automáticamente como “Información del dispositivo”.
    </Paragraph>
    <Paragraph>
      Recopilamos Información del dispositivo mediante el uso de las siguientes
      tecnologías:
    </Paragraph>
    <List>
      <ListItem>
        <ListItemText>
          - Los “Archivos de registro” rastrean las acciones que ocurren en el
          Sitio y recopilan datos, incluyendo su dirección IP, tipo de
          navegador, proveedor de servicio de Internet, páginas de
          referencia/salida y marcas de fecha/horario.
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          - Las “balizas web”, las “etiquetas” y los “píxeles” son archivos
          electrónicos utilizados para registrar información sobre cómo navega
          usted por el Sitio.
        </ListItemText>
      </ListItem>
    </List>
  </>
);
const PoliticasDePrivacidad = () => (
  <>
    <InfoPage title={title}>
      <Body />
    </InfoPage>
  </>
);

export default PoliticasDePrivacidad;
