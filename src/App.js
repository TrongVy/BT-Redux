
import './App.css';
import Shopping from './Component/Shopping/Shopping';
import GameXucXac from './Component/gameXucXac/GameXucXac';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GameOanTuTi from './Component/gameOanTuTi/GameOanTuTi';
import BookingTikit from './Component/bookingTikit/BookingTikit';
import Booking from './Component/TestBookingMovie/BookingTest';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Shopping />
        </Route>

        <Route path="/gamexucxac">
          <GameXucXac />
        </Route>

        <Route path="/gameoantuti">
          <GameOanTuTi />
        </Route>

        <Route path="/bookingTikit">
          <BookingTikit />
        </Route>

        <Route path="/testbooking">
          <Booking />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
