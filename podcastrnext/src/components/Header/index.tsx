//import format from 'date-fns/format';
//import ptBR from 'date-fns/locale/pt-BR';

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className= "headerContainer" >
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>Qui, 8 Abril</span>
    </header>
  );
  }
// export function Header 
//   const currentDate = formatnew Date, 'EEEEEE, d MMMM', 
//       locale: ptBR,
//   ;

//   return 
//       <header className= styles.headerContainer>
//           <img src="/logo.svg" alt="Quero ser dev" />

//           <p>O melhor para você ouvir sempre.</p>

//           <span>currentDate</span>
//       </header>
//   ;
// 
