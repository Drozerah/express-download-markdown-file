/* eslint-disable no-undef */

// Copyright (c) 2020 Thomas G. drozerah@gmail.com
// All rights reserved.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

const defaultmarkdown =
`# This is a Markdown title

> This is a bloc code

This is a paragraph

- this is a list

**This is a bold markdown**
`

document.forms[0].elements[0].value = defaultmarkdown

/**
 * Event on form submit
 */
document.forms[0].elements[2].addEventListener('click', (e) => {
  e.preventDefault()
  const markdown = document.forms[0].elements[0].value
  const fileName = document.forms[0].elements[1].value
  if (!fileName) {
    alert('Please enter a file mane!')
  } else if (!validator.isAlphanumeric(fileName)) {
    alert('File name contains only letters and numbers!')
  } else {
    download(fileName, markdown)
  }
})

/**
 * Handle file download
 *
 * @param {String} file The given string to construct the name of the file to download
 * @param {String} markdown The markdown text content to create the file content body
 * @returns The Browser dowload event
 */
function download (file, markdown) {
  markdown.replace(/\n/g, '\r\n') // retain the Line breaks
  const blob = new Blob([markdown], { type: 'text/plain' })
  const anchor = document.createElement('a')
  anchor.download = `${file.trim()}.md` // get filemane
  anchor.href = window.URL.createObjectURL(blob)
  anchor.target = '_blank'
  anchor.style.display = 'none' // just to be safe!
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}
