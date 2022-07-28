const licenseInfo = {
  Eclipse: {
    link: "https://opensource.org/licenses/EPL-1.0",
    badge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
    description:
      "THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE AGREEMENT. ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.",
  },
  GNU: {
    link: "https://www.gnu.org/licenses/gpl-3.0",
    badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    description:
      "Copyright © 2007 Free Software Foundation, Inc. Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.",
  },
  IBM: {
    link: "https://opensource.org/licenses/IPL-1.0",
    badge: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
    description:
      "THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE AGREEMENT. ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.",
  },
  ISC: {
    link: "https://opensource.org/licenses/ISC",
    badge: "https://img.shields.io/badge/License-ISC-blue.svg",
    description:
      "Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED AS IS AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.",
  },
  MIT: {
    link: "https://opensource.org/licenses/MIT",
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    description:
      "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
  },
  Mozilla: {
    link: "https://opensource.org/licenses/MPL-2.0",
    badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    description:
      "All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License. You must inform recipients that the Source Code Form of the Covered Software is governed by the terms of this License, and how they can obtain a copy of this License. You may not attempt to alter or restrict the recipients' rights in the Source Code Form.",
  },
  Perl: {
    link: "https://opensource.org/licenses/Artistic-2.0",
    badge: "https://img.shields.io/badge/License-Perl-0298c3.svg",
    description:
      "This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.",
  },
  SIL: {
    link: "https://opensource.org/licenses/OFL-1.1",
    badge: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg",
    description:
      "The OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license. The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives.",
  },
  Unlicense: {
    link: "http://unlicense.org/",
    badge: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    description:
      "THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
  },
  WTFPL: {
    link: "http://www.wtfpl.net/about/",
    badge: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
    description:
      " Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed.",
  },
};

function renderLicenseBadge(license) {
  let badge = licenseInfo[license].badge;
  if (license === "" || license === undefined) {
    return "";
  } else {
    return badge;
  }
}

function renderLicenseLink(license) {
  let link = licenseInfo[license].link;
  if (license === "" || license === undefined) {
    return "";
  } else {
    return link;
  }
}

function renderLicenseSection(badge, link, name, description) {
  let licenseSection = `
  ## License [![License:${name}](${badge})](${link}) 
  ${description}
  `;
  return licenseSection;
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(
    licenseBadge,
    licenseLink,
    data.license,
    licenseInfo[data.license].description
  );
  return `# ${data.title} [![License:${data.license}](${licenseBadge})](${licenseLink})
 ## Description
 ${data.description}
  ## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contribution}
## Tests
${data.test}
${licenseSection}
## Questions
If you have any questions reach me via GitHub or email:
[${data.github}](https://github.com/${data.github})
${data.email}
`;
}

module.exports = {
  generateMarkdown,
};
