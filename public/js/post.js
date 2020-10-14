// Copyright (c) 2020 Thomas G. drozerah@gmail.com
// All rights reserved.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

const defaultText = 
`# This is a Markdown title

> This is a bloc code

This is a paragraph

- this is a list

**This is a bold text**
`

document.forms[0].elements[0].value = defaultText


/**
 * add event on form submit 
 */
document.forms[0].elements[2].addEventListener('click', (e) => {
  e.preventDefault()
  download()
})

/**
 * Handle file download 
 */
function download(){
  const fileName = document.forms[0].elements[1].value
  if(!fileName){
    alert('Please enter a file mane!') // !DEBUG
  } else if (!validator.isAlphanumeric(fileName)) {
    alert('File name contains only letters and numbers!')
  } else {
    let text = document.forms[0].elements[0].value
    text = text.replace(/\n/g, "\r\n") // retain the Line breaks
    const blob = new Blob([text], { type: "text/plain"})
    const anchor = document.createElement("a")
    anchor.download =  `${fileName.trim()}.md` // get filemane
    anchor.href = window.URL.createObjectURL(blob)
    anchor.target ="_blank"
    anchor.style.display = "none" // just to be safe!
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }
}

