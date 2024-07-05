import { useSelector } from 'react-redux'

import Section from '../subComponents/SectionsLayout'

import { AboutContain } from './style'

import { RootReducer } from '../../store'

const About = () => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)

  return (
    <Section
      title="About me"
      element={
        <AboutContain colors={colorsWeb}>
          <span className="line-width" />
          <p className="first_p">
            Prazer, chamo-me Matheus e sou um desenvolvedor Front-end. Tenho 20
            anos e iniciei na programação há mais de um ano. Sou residente de
            São Paulo e atualmente trabalho como Desenvolvedor Freelancer. Minha
            jornada na programação começou com pequenos cursos no YouTube,
            incluindo o Curso em Vídeo de JavaScript, ministrado pelo Professor
            Gustavo Guanabara. Rapidamente me apaixonei por programação; quanto
            mais estudava, mais queria aprender.
          </p>
          <p>
            Decidi me aprofundar e ingressei no curso de Engenheiro Front-end da
            EBAC (Escola Britânica de Artes Criativas). Lá, aprendi desde o
            básico, como HTML, CSS e JavaScript, até frameworks avançados como
            React.js e Vue.js, além de várias outras tecnologias. Após concluir
            o curso, busquei outras áreas de interesse que pudessem agregar ao
            meu currículo. Entrei no mundo da criação de APIs e bancos de dados.
            Desenvolvi uma API contendo informações de vinhos para um projeto
            que estava desenvolvendo na época (Five Leaf Clover). Nesse
            processo, conheci o MongoDB, Express para conectar a API, conceitos
            de rotas e estrutura de APIs escaláveis. Essa breve incursão me
            forneceu muitos novos conhecimentos.
          </p>
          <p>
            Pretendo progredir ainda mais na programação e me tornar um
            Desenvolvedor FullStack, entendendo mais desse mundo para criar
            soluções e projetos mais elegantes, eficientes e simples. A
            programação reflete meu conceito de vida e minhas características.
            Ser um programador vai além de apenas criar códigos, e ao entender
            isso, tenho certeza de que me tornei um programador incrível.
          </p>
        </AboutContain>
      }
    />
  )
}

export default About
