import React, { useEffect, useRef, useState } from 'react';
import qrcode from 'qrcode';

export const QRCODE_ADDON_TITLE = '二维码';
export const QRCODE_ADDON_ID = 'storybook/qrcode';
export const QRCODE_PANEL_ID = `${QRCODE_ADDON_ID}/panel`;

const QR_CODE_CANVAS_ID = '_qr_code_canvas_id';
const style = { padding: '24px' };
const descStyle = { marginTop: '12px' };

const QrCodePanel = ({ api }) => {
  
  const getQrcodeUrl = () => {
    let url = `${window.location.origin}${window.location.pathname}`;
    try {
      if(api){
        const prefix = 'iframe.html?'
        const afterfix = '&viewMode=story';
        const storyId = api.getUrlState().storyId || '';
        const params = api.getUrlState().queryParams;
        let queryParams = '';
        if(params){
          for(let key in params){
            queryParams = queryParams + `&${key}=${params[key]}`;
          }
        }
        
        url = `${url}${prefix}id=${storyId}${queryParams}${afterfix}`;
      }
    }catch(e){
      console.log('getQrcodeUrl error ==> ', e);
      return url;
    }

    return url;
  }
  const url = getQrcodeUrl();
  const qrcodeUrlRef = useRef(url);
  const canvasDomRef = useRef(null);
  const [qrcodeUrl, setQrcodeUrl] = useState();

  useEffect(() => {
    setQrcodeUrl(url);
    qrcodeUrlRef.current = url;
  }, [url]);

  useEffect(() => {
    let canvas = canvasDomRef.current;
    if(!canvas){
      canvas = document.getElementById(QR_CODE_CANVAS_ID);
      canvasDomRef.current = canvas;
    }
    
    qrcode.toCanvas(canvas, qrcodeUrlRef.current, (error) => {
      error && console.log('qrcode.toCanvas error ==> ', error);
    });
  }, [qrcodeUrl]);

  return (
    <div style={style}>
      <canvas id={QR_CODE_CANVAS_ID}></canvas>
      <div style={descStyle}>
        预览地址: <a href={qrcodeUrl} target="_blank" >{qrcodeUrl}</a>
      </div>
    </div>
  )
}

export default QrCodePanel;