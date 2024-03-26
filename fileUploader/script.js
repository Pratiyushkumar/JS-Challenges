const form = document.querySelector('form');
const fileInput = document.querySelector('#file_upload');
const output = document.querySelector('.file_output_section');

form.addEventListener('click', () => {
  fileInput.click();
});

fileInput.onchange = (event) => {
  let result = '';
  const file = event.target.files[0];
  const fileName = file.name;

  const splitedValue = splitFileNameANDExtension(fileName);
  const fileNameWithoutExt = getFileNameWithoutExtension(splitedValue[0]);
  const fileExt = getFileExtension(splitedValue[splitedValue.length - 1]);

  if (splitedValue[0].length > 12) {
    result = `${fileNameWithoutExt}... .${fileExt}`;
  } else {
    result = `${splitedValue[0]}.${fileExt}`;
  }

  getUploadedFileName(result);
};

function splitFileNameANDExtension(fileName) {
  const splited = fileName.split('.');
  return splited;
}

function getFileNameWithoutExtension(fileName) {
  if (fileName.length > 12) {
    return fileName.substring(0, 12);
  }
  return fileName;
}

function getFileExtension(ext) {
  return ext;
}

function getUploadedFileName(fileName) {
  output.innerHTML = `
     <div class="selected">
     <i class="fas fa-file-alt"></i>
     <span>${fileName}</span>
     </div>
    `;
}
