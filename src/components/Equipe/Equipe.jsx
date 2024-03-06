import Hermione from '../../images/hermione.jpg';
import Harry from '../../images/harry.jpg';
import Ronald from '../../images/ronald.jpg';
import Draco from '../../images/draco.jpg';
import Bella from '../../images/bella.jpg';
import Severus from '../../images/severus.png';
import Perfil from '../Perfil/Perfil';


const Equipe = (props) => {
    return (
<>
   <h1 className='t-center'>{props.titulo}</h1>
        <div className='perfis'>
            <Perfil img={props.img1} titulo={props.nome1}/>
            <Perfil img={props.img2} titulo={props.nome2}/>
            <Perfil img={props.img3} titulo={props.nome3}/>
        </div>
</>
    )
}

export default Equipe;