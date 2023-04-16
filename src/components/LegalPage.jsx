import * as React from 'react';
import { Box } from '@mui/system';
import BodyWrapper from './BodyWrapper';



function LegalPage() {
  return (
    <BodyWrapper>
        <Box>
        <div style={{fontFamily:"Arial", 
        display:"flex",
        marginLeft:"4vw", marginRight:"4vw",
        flexDirection: "column", gap:"1rem"}}><h1>Términos y Condiciones de HeartForChange</h1>

Por favor, lea atentamente los siguientes términos y condiciones antes de utilizar la aplicación HeartForChange.

<h3>Aceptación de los Términos y Condiciones</h3>
Al utilizar la Aplicación, usted acepta y se compromete a cumplir con estos términos y condiciones ("Términos y Condiciones"). Si no está de acuerdo con estos Términos y Condiciones, por favor, no utilice la Aplicación.

<h3>Propósito de la Aplicación</h3>
HeartForChange es una aplicación que tiene como objetivo principal ayudar a las organizaciones no gubernamentales (ONG) en la gestión de sus recursos y en la coordinación de sus actividades. La Aplicación le permite a las ONG almacenar y administrar datos identificativos de sus usuarios, como nombres, direcciones y números de teléfono.

<h3>Uso de la Aplicación</h3>
La Aplicación sólo puede ser utilizada por ONGs para fines lícitos y de acuerdo con estos Términos y Condiciones. Las ONGs se comprometen a no utilizar la Aplicación para:

Enviar, recibir, cargar, descargar, utilizar o reutilizar cualquier material que sea ilegal, ofensivo, difamatorio, amenazante, abusivo, acosador, pornográfico, obsceno, vulgar o indecente.
Violar cualquier ley, reglamento o norma aplicable.
Falsificar o eliminar cualquier información de derechos de autor, marcas comerciales u otros derechos de propiedad de la Aplicación.
Realizar cualquier acción que pueda dañar o perjudicar el funcionamiento de la Aplicación, incluyendo, sin limitación, la transmisión de virus, troyanos o cualquier otro código malicioso.
Protección de datos personales
HeartForChange se compromete a proteger la privacidad de los datos personales de los usuarios almacenados en la Aplicación. Los datos identificativos se ceden directamente por las personas que acuden a la ONG, y la ONG es la única responsable de la veracidad y exactitud de los datos recogidos. HeartForChange no compartirá ni distribuirá de ninguna forma los datos personales almacenados en la Aplicación.

<h3>Propiedad intelectual</h3>
La Aplicación y su contenido, incluyendo, sin limitación, el diseño, la estructura, la selección, la coordinación, la expresión, la apariencia y la disposición de los elementos contenidos en la Aplicación, son propiedad exclusiva de HeartForChange o de sus licenciantes y están protegidos por las leyes de propiedad intelectual aplicables.

<h3>Limitación de responsabilidad</h3>
HeartForChange no se hace responsable de los daños o perjuicios, de cualquier índole, que se deriven del uso de la Aplicación o de la imposibilidad de utilizarla. HeartForChange tampoco se hace responsable de los contenidos generados por los usuarios.

<h3>Modificaciones y actualizaciones</h3>
HeartForChange se reserva el derecho de modificar o actualizar estos Términos y Condiciones en cualquier momento y sin previo aviso. Es responsabilidad de las ONGs revisar regularmente estos Términos y Condiciones para conocer cualquier cambio.

<h3>Ley aplicable y jurisdicción</h3>
Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes del país en el que se encuentra la sede de la ONG que utiliza la Aplicación, sin perjuicio de cualquier disposición en contrario establecida en la legislación aplicable. Cualquier disputa que surja en relación con estos Términos y Condiciones se resolverá mediante arbitraje en conformidad con las reglas de arbitraje del país en el que se encuentra la sede de la ONG.

<h3>Terminación</h3>
HeartForChange se reserva el derecho de cancelar, suspender o descontinuar la Aplicación en cualquier momento y sin previo aviso. Las ONGs podrán dejar de utilizar la Aplicación en cualquier momento, pero deberán seguir cumpliendo con estos Términos y Condiciones mientras la utilicen.

<h3>Acuerdo completo</h3>
Estos Términos y Condiciones constituyen el acuerdo completo entre HeartForChange y las ONGs que utilizan la Aplicación y sustituyen cualquier otro acuerdo previo o contemporáneo, oral o escrito, en relación con el uso de la Aplicación.

Si tiene alguna pregunta o comentario sobre estos Términos y Condiciones, por favor, contáctenos a través de la sección de ayuda de la Aplicación.</div>

        </Box>
      </BodyWrapper>
    );
}

export default LegalPage;
