import Portfolio from './Portfolio'
import '../css/App.css';
import $ from 'jquery';

function App() {

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $('.headers').css('background-position-y', -scrollTop / 8);
  });

  return (
    <div className="App">
      <Portfolio/>
    </div>
  );
}

export default App;
