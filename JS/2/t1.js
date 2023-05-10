let drop = document.querySelector('.i')
let holder = document.querySelector('.holder')

let fileName = ""
let fileSize = 0


drop.addEventListener('input', function(e) {
    fileName = e.target.files[0].name
    fileSize = Number(e.target.files[0].size)

    // decrease the file name
    if (fileName.length >= 15) {
        let splitName = fileName.split('.')
        fileName = splitName[0].substring(0, 16) + "... ." + splitName[1];
    }

    // size of the file
    fileSize = (fileSize / 1000)
    if (fileSize < 1024) {
        fileSize = fileSize + " KB";
    } else {
        fileSize = Math.floor(fileSize / 1000)
        fileSize = fileSize + " MB";
    }

    // make the list
    let file = document.createElement('div')
    file.className = "upload"

    let iconFile = document.createElement('i')
    iconFile.className = "bi bi-file-earmark-text-fill upload-icon"
    file.appendChild(iconFile)

    let upName = document.createElement('p')
    upName.className = "upload-name"
    upName.textContent = fileName
    file.appendChild(upName)

    let upTag = document.createElement('p')
    upTag.className = "tag"
    upTag.textContent = ".uploaded"
    file.appendChild(upTag)

    let upSize = document.createElement('p')
    upSize.className = "upload-size"
    upSize.textContent = fileSize
    file.appendChild(upSize)

    let iconcheck = document.createElement('i')
    iconcheck.className = "bi bi-check upload-check"
    file.appendChild(iconcheck)

    holder.appendChild(file)
})