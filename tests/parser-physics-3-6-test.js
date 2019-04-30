import {ParserTest} from './parser-tests.js';
import 'mathjax3/input/tex/physics/PhysicsConfiguration.js';

class ParserPhysicsTest3_6 extends ParserTest {

  constructor() {
    super();
    this.packages = ['base', 'physics'];
  }
};

let parserTest = new ParserPhysicsTest3_6();


parserTest.runTest(
  'Operators_PV_0', '\\principalvalue{\\int f(z) \\dd{z}}',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"-tex-caligraphic"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true},{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_1', '\\pv{\\int f(z) \\dd{z}}',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"-tex-caligraphic"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true},{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_2', '\\pv{\\int f(z) \\dd{z}}a',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"-tex-caligraphic"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true},{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}]}],"isInferred":true}]}],"isInferred":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_3', '\\pv\\int f(z) \\dd{z}a',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"-tex-caligraphic"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]}],"isInferred":true}]},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true},{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_4', '\\pv(\\int f(z))',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"-tex-caligraphic"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]}],"isInferred":true}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_5', '\\pv|\\int f(z)|',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"-tex-caligraphic"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_6', '\\pv[\\int f(z)]',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"-tex-caligraphic"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]}],"isInferred":true}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_7', '\\PV{\\int f(z) \\dd{z}}',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]},{"kind":"mo","texClass":6,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","separator":true},"properties":{},"childNodes":[{"kind":"text","text":"."}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"V"}]},{"kind":"mo","texClass":6,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","separator":true},"properties":{},"childNodes":[{"kind":"text","text":"."}],"isEmbellished":true}],"isInferred":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true},{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_8', '\\PV{\\int f(z) \\dd{z}}a',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]},{"kind":"mo","texClass":6,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","separator":true},"properties":{},"childNodes":[{"kind":"text","text":"."}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"V"}]},{"kind":"mo","texClass":6,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","separator":true},"properties":{},"childNodes":[{"kind":"text","text":"."}],"isEmbellished":true}],"isInferred":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true},{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}]}],"isInferred":true}]}],"isInferred":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_PV_9', '\\PV\\int f(z) \\dd{z}a',
  {"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]},{"kind":"mo","texClass":6,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","separator":true},"properties":{},"childNodes":[{"kind":"text","text":"."}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"V"}]},{"kind":"mo","texClass":6,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","separator":true},"properties":{},"childNodes":[{"kind":"text","text":"."}],"isEmbellished":true}],"isInferred":true}]},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true},{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]}],"isInferred":true}]}
);


parserTest.printTime();