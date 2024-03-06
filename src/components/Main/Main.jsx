import Hermione from '../../images/hermione.jpg';
import Harry from '../../images/harry.jpg';
import Ronald from '../../images/ronald.jpg';
import './Main.css';
import Draco from '../../images/draco.jpg';
import Bella from '../../images/bella.jpg';
import Severus from '../../images/severus.png';
import Perfil from '../Perfil/Perfil';
import Equipe from '../Equipe/Equipe';

const Main = () => {
    return(
        <main>
    <Equipe titulo={'Grifinória'} img1={Hermione} nome1={"Hermione"} img2={Harry} nome2={"Harry"} img3={Ronald} nome3={"Ronald"}/>
    <Equipe titulo={'Sonserina'} img1={Bella} nome1={"Bella"} img2={Draco} nome2={"Draco"} img3={Severus} nome3={"Severus"}/>
        </main>
    )
}

export default Main;