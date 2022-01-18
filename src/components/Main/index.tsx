import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/Nextjs-logo.png"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>Boilerplate</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/nextjs-cover.jpg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
