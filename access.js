console.log("== document:", document)
console.log("== document.body:", document.body)
console.log("== document.body.childNodes:", document.body.childNodes)

var header = document.body.childNodes[1]
console.log("== header:", header)
console.log("== header.parentNode:", header.parentNode)
console.log("== header.nextSibling.nextSibling:", header.nextSibling.nextSibling)
console.log("== header.previousSibling:", header.previousSibling)

var photoCardContainer = document.getElementById('photo-card-container')
console.log("== photoCardContainer:", photoCardContainer)

var photoCards = document.getElementsByClassName('photo-card')
console.log("== photoCards:", photoCards)
for (var i = 0; i < photoCards.length; i++) {
  console.log("  -- photoCards[" + i + "]:", photoCards[i])
}

var secondPhotoCard = photoCards[1]
console.log("== secondPhotoCard:", secondPhotoCard)

var photoCards2 = photoCardContainer.getElementsByClassName('photo-card')
console.log("== photoCards2:", photoCards2)

var images = document.getElementsByTagName('img')
console.log("== images:", images)
