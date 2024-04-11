import styled from 'styled-components';

export const StyleCamera = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    width: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;
    background: #E9ECEF;
    cursor: pointer;
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
    font-weight: 600;
`

export const StyleDropzone = styled.div`
    width: 100%;
    height: 100%;

    .dzu-dropzone { /* Dropzone principal e geral - ***recebe a imagem**** */
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        z-index: 99;
        position: relative;
        transition: all .15s linear;
        border: 1px dashed #999;
        border-radius: 4px;
        background: #E9ECEF;
    }

  .dzu-dropzoneActive {
    background-color: #DEEBFF;
    border-color: #2484FF;
  }

  .dzu-dropzoneDisabled {
    opacity: 0.5;
  }

  .dzu-dropzoneDisabled *:hover {
    cursor: unset;
  }

  .dzu-input {
    display: none;
  }

  .dzu-inputLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: 'Helvetica', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #002a5d;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
  }

  .dzu-inputLabelWithFiles {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    padding: 0 14px;
    min-height: 32px;
    background-color: #E6E6E6;
    color: #2484FF;
    border: none;
    font-family: 'Helvetica', sans-serif;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
    margin-left: 3%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
  }

  .dzu-previewContainer {
    display: flex;
    margin-top: 10px;
    padding: 5px 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: inherit;
    z-index: 1;
    box-sizing: border-box;
  }

  .dzu-previewStatusContainer {
    display: flex;
    align-items: center;
    max-width: 100%;
  }

  .dzu-previewFileName {
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    border-radius: 6px;
    /* box-shadow: 7px 7px 7px 1px whitesmoke; */
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .dzu-previewImage {
    width: auto;
    height: 55px;
    width: 65px;
    border-radius: 6px;
    padding: 0;
    /* box-shadow: 7px 7px 7px 1px red; */
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .dzu-previewButton { //Botao de Excluir Pre-Visualização "X"
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    width: 14px;
    height: 14px;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.9;
    margin: 0 20px 40px 5px;
    padding: 0;
  }

  .dzu-submitButtonContainer {
    margin: 24px 0;
    z-index: 1;
  }

  .dzu-submitButton {
    padding: 0 14px;
    min-height: 32px;
    width: 120px;
    background-color: #2484FF;
    border: none;
    border-radius: 4px;
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #E6E6E6;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
  }

  .dzu-submitButton:disabled {
    background-color: #E6E6E6;
    color: #333333;
    cursor: unset;
  }`;
