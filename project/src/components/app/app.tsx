import MainPage from '../main-page/main-page';

type AppScreenProps = {
  filmTitle: string;
  filmJanre: string;
  filmYear: string;
}

function App({filmTitle, filmJanre, filmYear}: AppScreenProps): JSX.Element {
  return (
    <MainPage
      filmTitle = {filmTitle}
      filmJanre = {filmJanre}
      filmYear = {filmYear}
    />
  );
}

export default App;
