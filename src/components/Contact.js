import React from "react";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import frame from "./frame.svg";
function Contact(props) {
  return (
    <div className="contacts-page">
      <div className="about-paws">
        <div className="header">
          <h1>
            {" "}
            About Paws <img src={frame} alt="frame" classApp="App-frame" />
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, denique detraxit ut usu, no cum purto
          elitr forensibus. Ea odio tollit nullam vis, pro ei prima idque, mel
          evertitur interesset in. Mei purto omnes efficiendi in, sonet apeirian
          ea sed. Eam sint decore maiorum ea. Te pri malorum molestiae
          pertinacia, quem nostro maiorum ex vix, eu libris nemore minimum pri.
          Justo equidem an nec, nihil aperiri deserunt ex vim. Apeirian
          scripserit vis at, vix ea aliquam alienum officiis, sea ut blandit
          omittantur. Ex malis alterum eos. Ne legimus postulant quo, sea congue
          fastidii in, nulla cetero labitur et pri. Duis scriptorem pro ei. In
          congue tempor fierent eam, ubique facilisi singulis ad pri. Et has
          laudem sententiae interesset. Ut sumo denique appellantur cum. Tota
          nemore phaedrum pri ut, vis labores similique ei. Ut iudicabit
          disputando mei, cu eos minim tincidunt. Ea melius intellegam nam, et
          oblique laoreet scaevola vix. In patrioque contentiones definitiones
          qui, pro ut integre dissentiet, harum conclusionemque mea ad. Essent
          epicuri id quo, iusto maiorum adipisci eam et. At ius gubergren
          rationibus disputando, quod putant dolorum ut has. Lorem civibus
          recteque an pri.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
