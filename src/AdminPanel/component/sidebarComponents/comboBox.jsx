import React, {Component} from 'react';
import $ from 'jquery';
class ComboBox extends Component {
  state = {};

  componentDidMount() {
    /* ===== Logic for creating fake Select Boxes ===== */
    $('.sel').each(function() {
      $(this)
        .children('select')
        .css('display', 'none');

      var $current = $(this);

      $(this)
        .find('option')
        .each(function(i) {
          if (i == 0) {
            $current.prepend(
              $('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box'),
              })
            );

            var placeholder = $(this).text();
            $current.prepend(
              $('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder,
              })
            );

            return;
          }

          $current.children('div').append(
            $('<span>', {
              class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
              text: $(this).text(),
            })
          );
        });
    });

    // Toggling the `.active` state on the `.sel`.
    $('.sel').click(function() {
      $(this).toggleClass('active');
    });

    // Toggling the `.selected` state on the options.
    $('.sel__box__options').click(function() {
      var txt = $(this).text();
      var index = $(this).index();

      $(this)
        .siblings('.sel__box__options')
        .removeClass('selected');
      $(this).addClass('selected');

      var $currentSel = $(this).closest('.sel');
      $currentSel.children('.sel__placeholder').text(txt);
      $currentSel.children('select').prop('selectedIndex', index + 1);
    });
  }
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
      </React.Fragment>
    );
  }
}

export default ComboBox;
