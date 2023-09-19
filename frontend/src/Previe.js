import React from 'react'
import TemplateONE from './Pages/TamplateONE';

export default function Previe() {
  const canvasRef = useRef(null);

  const html = ReactDOMServer.renderToString(<TemplateONE data={data} />);
  html2canvas(html, { canvas: canvasRef.current }).then((canvas) => {
    const blob = new Blob([canvas.toDataURL('image/png')], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  });
  return (
    <div>
      
    </div>
  )
}
