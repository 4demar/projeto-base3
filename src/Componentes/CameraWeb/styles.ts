import styled from 'styled-components';

export const StyleContainerScan = styled.div`
    video {
        object-fit: contain;
        width: 100%;
    }

    canvas {
        width: 100%;
        position: absolute;
        left: 0;
    }


    #divContentDisplayCamera.viewport canvas,
        video {
        width: 400px;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
    }

    #divContentDisplayCamera.viewport canvas.drawingBuffer,
        video.drawingBuffer {
        width: 400px;
        height: 300px;
    }

`
