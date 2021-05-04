var photoCardContainer = document.getElementById('photo-card-container')
var photoCards = document.getElementsByClassName('photo-card')

var firstPhotoCard = photoCards[0]
var userSuppliedValue = "<img src=x onerror='alert(\"You were hacked!\")' />"
// firstPhotoCard.innerHTML = "<div>" + userSuppliedValue + "</div>"
firstPhotoCard.textContent = "<div>" + userSuppliedValue + "</div>"

/*
 * <section class="photo-card">
 *   <div class="img-container">
 *     <img class="person-photo-img" src="{photo_url}" />
 *   </div>
 *   <div class="caption">
 *     {caption}
 *   </div>
 * </section>
 */
function generatePhotoCard(photoUrl, caption) {
  var photoCardSection = document.createElement('section')
  photoCardSection.classList.add('photo-card')
  photoCardSection.classList.add('another-class')
  console.log("== photoCardSection.classList:", photoCardSection.classList)
  photoCardSection.classList.remove('another-class')

  var imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  photoCardSection.appendChild(imgContainer)

  var captionElem = document.createElement('div')
  captionElem.classList.add('caption')
  photoCardSection.appendChild(captionElem)

  captionElem.textContent = caption

  var imgElem = document.createElement('img')
  imgElem.classList.add('person-photo-img')
  imgElem.src = photoUrl
  imgContainer.appendChild(imgElem)

  console.log("== photoCardSection:", photoCardSection)

  photoCardContainer.appendChild(photoCardSection)
}

generatePhotoCard("http://placekitten.com/480/480", "Luke as a kitty")
