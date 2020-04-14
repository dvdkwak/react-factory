import React from 'react';
import './index.css';


/**
 * This class will render a working clock which can give the time Hours:Minutes:Seconds
 * The clock has the following props:
 * @props {digits} can be "single" or "double", by default "double"
 * @props {seperator} this is by default ":"
 */
export default class DigitalClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: '00',
      minutes: '00',
      seconds: '00'
    }
  }

  /**
   * This will happe every tick (1 second)
   * It will overwrite the state to get the accurate time
   */
  tick() {
    let time = new Date();
    this.setState({
      hours: this.getHours(time),
      minutes: this.getMinutes(time),
      seconds: this.getSeconds(time)
    });
  }

  /**
   * This will give the correct hours based on the props.digits
   * @param {Date} time 
   * @return {Mixin} 
   */
  getHours(time) {
    let hours = '00';
    if(this.props.digits == "double" || !this.props.digits) {
      if(time.getHours() < 10) {
        hours = '0' + String(time.getHours());
      } else {
        hours = time.getHours();
      }
    } else
    if(this.props.digits == "single") {
      hours = time.getHours();
    }
    return hours;
  }

  /**
   * This will give the correct minutes based on the props.digits
   * @param {Date} time 
   * @return {Mixin}
   */
  getMinutes(time) {
    let minutes = '00';
    if(this.props.digits == "double" || !this.props.digits) {
      if(time.getMinutes() < 10) {
        minutes = '0' + String(time.getMinutes());
      } else {
        minutes = time.getMinutes();
      }
    } else
    if(this.props.digits == "single") {
      minutes = time.getMinutes();
    }
    return minutes;
  }

  /**
   * This will give the correct seconds based on the props.digits
   * @param {Date} time 
   * @return {Mixin}
   */
  getSeconds(time) {
    let seconds = '00';
    if(this.props.digits == "double" || !this.props.digits) {
      if(time.getSeconds() < 10) {
        seconds = '0' + String(time.getSeconds());
      } else {
        seconds = time.getSeconds();
      }
    } else
    if(this.props.digits == "single") {
      seconds = time.getSeconds();
    }
    return seconds;
  }

  /**
   * When mounting this component starting the timer and initilizing the time by calling this.tick()
   */
  componentDidMount() {
    this.tick();
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  /**
   * When unmounting unsetting the interval (this.timerID)
   */
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  /**
   * Rendering the component using JSX
   */
  render() {
    return(
      <div class="DigitalClock">
        <p>
<span id="hours">{this.state.hours}</span>
  <span class="seperator" id="hours-seperator">{this.props.seperator || ":"}</span>
<span id="minutes">{this.state.minutes}</span>
  <span class="seperator" id="minutes-seperator">{this.props.seperator || ":"}</span>
<span id="seconds">{this.state.seconds}</span>
        </p>
      </div>
    );
  }

}