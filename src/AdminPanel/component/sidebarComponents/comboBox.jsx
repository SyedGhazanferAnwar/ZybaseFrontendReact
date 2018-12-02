import React, {Component} from 'react';
class ComboBox extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div class="sel sel--black-panther">
          <select name="select-profession" id="select-profession">
            <option value="" disabled>
              Profession
            </option>
            <option value="hacker">Hacker</option>
            <option value="gamer">Gamer</option>
            <option value="developer">Developer</option>
            <option value="programmer">Programmer</option>
            <option value="designer">Designer</option>
          </select>
        </div>

        <hr class="rule" />

        <div class="sel sel--superman">
          <select name="select-superpower" id="select-superpower">
            <option value="" disabled>
              Superpower
            </option>
            <option value="hacker">Power</option>
            <option value="gamer">Speed</option>
            <option value="developer">Acrobatics</option>
            <option value="programmer">Accuracy</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default ComboBox;
