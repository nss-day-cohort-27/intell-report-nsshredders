  const myPic = document.getElementsByClassName("pictures")[0];
  // callback is a function reference in this instance
  myPic.addEventListener("click", displayPicture);

  /**********nick black displayPicture function*************
  * Takes clicked element and gets img src, width, and imgHeight
  * and loads into a variable.
  *
  *  uses a scalar to responsively scale the image
  *
  *  Creates an image object and sets the attributes for
  *  source, width, and height.
  *
  *   appends image to document within imageDisplay div
  *************************************************************/
  function displayPicture(event) {
    // console.log(event);

    // get tagName of element clicked
    elem = event.target;
    const myEvent = event.target.tagName;
    const imgSrc = elem.src;
    const imgHeight = elem.height;
    const imgWidth = elem.width;
    let scalar = 3.5;
    // console.log(imgHeight + " " + imgWidth);
    const imgObj = document.createElement("IMG");
    imgObj.setAttribute("src", imgSrc);
    imgObj.setAttribute("width", imgHeight*scalar);
    imgObj.setAttribute("height", imgWidth*scalar);
    myDiv = document.getElementById("imageDisplay");
    /* this clears the imageDisplay div so that if another
    * picture is present, it will clear it.
    */
    myDiv.innerHTML = "";
    myDiv.appendChild(imgObj);
    // styles the border as setAttribute("border") not html5 compatible
    //myDiv.style.border = "thick solid #000";
  

  }
