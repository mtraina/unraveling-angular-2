import {Component} from '@angular/core';

@Component({
  selector: 'long-string',
  templateUrl: 'app/long-string.template.html',
  styles: [`
    .longstring {
      display: inline-block;
      background: #e0e0e0;
      border-radius: 4px;
      margin: 4px;
      padding: 4px 8px;
      font-size: 1.5em;
    }
  `]
})
export class LongStringComponent {
  longString = 'Red Sea, Arabic Al-Baḥr Al-Aḥmar, narrow strip of '
   + 'water extending southeastward from Suez, Egypt, for about '
   + '1,200 miles (1,930 km) to the Bab el-Mandeb Strait, which ' 
   + 'connects with the Gulf of Aden and thence with the Arabian '
   + 'Sea. Geologically, the Gulfs of Suez and Aqaba (Elat) must '
   + 'be considered as the northern extension of the same structure. '
   + 'The sea separates the coasts of Egypt, Sudan, and Eritrea to '
   + 'the west from those of Saudi Arabia and Yemen to the east. Its '
   + 'maximum width is 190 miles, its greatest depth 9,974 feet '
   + '(3,040 metres), and its area approximately 174,000 square '
   + 'miles (450,000 square km). [Encyclopedia Britannica]';
  start = 0;
  end = 1000;

  toValue(input: string, defValue) {
    var value = parseInt(input);
    if (isNaN(value)) {
      return defValue;
    }
    else {
      return value;
    }
  }
}
