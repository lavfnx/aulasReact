import Hermione from '../../images/hermione.jpg';
/*import Harry from '../../images/harry.jpg';
import Ronald from '../../images/ronald.jpg';
import Draco from '../../images/draco.jpg';
import Bella from '../../images/bella.jpg';*/
import './Descricao.css';

const Descricao = () => {

return (
 <>

<h1>Hermione Jean Granger</h1>
 <div className='descricaoEimg'>

 <div className='divimg'>
 <img src={Hermione} className='img'></img>
 </div>
 
 <div className='descricao'>
 <p>Hermione Jean Granger é uma personagem fictícia na série Harry Potter de J. K. Rowling. Aparece pela primeira vez em Harry Potter e a Pedra Filosofal, como uma nova estudante em direção a Hogwarts. Depois de Harry e Ron
     a salvarem de um troll de montanha no wc feminino, torna-se a melhor amiga deles e costuma usar seu raciocínio rápido, lembrança rápida e conhecimento enciclopédico para ajudar em situações terríveis.
     A personagem foi imensamente popular. A versão de Hermione interpretada por Emma Watson durante os oito filmes de Harry Potter, foi eleita a melhor personagem feminina de cinema de todos os tempos em uma pesquisa 
     realizada por profissionais de Hollywood pela The Hollywood Reporter em 2016.
 </p>
 </div>
 
</div>
 </>

)
}

export default Descricao;
